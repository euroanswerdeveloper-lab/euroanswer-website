<?php
/**
 * Formularul de contact Euroanswer — primește datele din /contact/, le validează,
 * verifică anti-spam (Cloudflare Turnstile), trimite emailul și salvează cererea într-un CSV privat.
 *
 * ▸ CONFIGURARE (modifică doar valorile de mai jos):
 */
const CONTACT_TO   = 'sales@euroanswer.co.uk';                 // unde ajung mesajele (mai multe: separate prin virgulă)
const CONTACT_FROM = 'website@testamentulporcului.ro';         // expeditor — o adresă de pe domeniul site-ului (creată în cPanel)
const TURNSTILE_SECRET = '1x0000000000000000000000000000000AA'; // cheia secretă Turnstile; cea de acum e cheia de TEST (trece mereu)
// Cererile se salvează și într-un CSV, în afara folderului public (nu poate fi deschis din browser).
// Lasă '' ca să dezactivezi salvarea.
const LEADS_CSV = __DIR__ . '/../../euroanswer-leads/leads.csv';

/* ─────────────────────────────────────────────────────────────────────────── */

header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

$get = fn(string $k): string => trim((string)($_POST[$k] ?? ''));

// Câmp ascuns „capcană” — boții îl completează, oamenii nu îl văd
if ($get('website') !== '') {
    respond(200, ['ok' => true]);
}

const LIMIT_TEXT = 400;
const LIMIT_MESSAGE = 2000;
const HEAR_ABOUT = ['Google Search', 'AI Search Engine', 'Social Media'];
const FREE_EMAIL_DOMAINS = [
    'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'ymail.com', 'outlook.com', 'hotmail.com',
    'hotmail.co.uk', 'live.com', 'msn.com', 'icloud.com', 'me.com', 'aol.com', 'proton.me', 'protonmail.com',
    'gmx.com', 'gmx.de', 'web.de', 'mail.com', 'yandex.com', 'yandex.ru', 'mail.ru', 'zoho.com',
];

$data = [
    'firstName'      => $get('firstName'),
    'lastName'       => $get('lastName'),
    'email'          => $get('email'),
    'phone'          => $get('phone'),
    'company'        => $get('company'),
    'hearAbout'      => $get('hearAbout'),
    'hearAboutOther' => $get('hearAboutOther'),
    'message'        => $get('message'),
    'marketing'      => $get('marketing') === '1',
    'consent'        => $get('consent') === '1',
];

// Aceleași reguli ca în formular (verificate și pe server)
$len = fn(string $s): int => function_exists('mb_strlen') ? mb_strlen($s) : strlen($s);
$errors = [];
foreach (['firstName', 'lastName', 'company'] as $k) {
    if ($data[$k] === '') $errors[$k] = 'This field is required.';
    elseif ($len($data[$k]) > LIMIT_TEXT) $errors[$k] = 'Maximum ' . LIMIT_TEXT . ' characters.';
}
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL) || $len($data['email']) > LIMIT_TEXT) {
    $errors['email'] = 'Please enter a valid email address.';
}
if ($data['phone'] !== '' && !preg_match('/^[+()\d\s.\-\/]{6,30}$/', $data['phone'])) {
    $errors['phone'] = 'Please enter a valid phone number.';
}
if ($data['hearAbout'] !== '' && !in_array($data['hearAbout'], HEAR_ABOUT, true)) $errors['hearAbout'] = 'Invalid option.';
if ($len($data['hearAboutOther']) > LIMIT_TEXT) $errors['hearAboutOther'] = 'Maximum ' . LIMIT_TEXT . ' characters.';
if ($len($data['message']) > LIMIT_MESSAGE) $errors['message'] = 'Maximum ' . LIMIT_MESSAGE . ' characters.';
if (!$data['consent']) $errors['consent'] = 'Please accept the processing of your personal data.';
if ($errors) respond(422, ['ok' => false, 'errors' => $errors]);

// Verificare anti-spam Turnstile
$verifyBody = http_build_query([
    'secret'   => TURNSTILE_SECRET,
    'response' => $get('cf-turnstile-response'),
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
]);
$verifyRaw = false;
if (function_exists('curl_init')) {
    $ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
    curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => $verifyBody, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 10]);
    $verifyRaw = curl_exec($ch);
    curl_close($ch);
} else {
    $verifyRaw = @file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, stream_context_create([
        'http' => ['method' => 'POST', 'header' => "Content-Type: application/x-www-form-urlencoded\r\n", 'content' => $verifyBody, 'timeout' => 10],
    ]));
}
$verify = $verifyRaw ? json_decode($verifyRaw, true) : null;
if (empty($verify['success'])) {
    respond(400, ['ok' => false, 'error' => 'Spam check failed. Please refresh the page and try again.']);
}

$domain = strtolower(substr(strrchr($data['email'], '@') ?: '', 1));
$personal = in_array($domain, FREE_EMAIL_DOMAINS, true);
$hear = implode(' — ', array_filter([$data['hearAbout'], $data['hearAboutOther']])) ?: '—';

// Salvare în CSV privat (dacă e activă)
if (LEADS_CSV !== '') {
    $dir = dirname(LEADS_CSV);
    if (!is_dir($dir)) @mkdir($dir, 0750, true);
    // Siguranță suplimentară: dacă folderul ajunge într-un loc public, Apache refuză accesul
    if (is_dir($dir) && !file_exists($dir . '/.htaccess')) @file_put_contents($dir . '/.htaccess', "Require all denied\nDeny from all\n");
    if (is_dir($dir) && is_writable($dir)) {
        $isNew = !file_exists(LEADS_CSV);
        if ($fh = @fopen(LEADS_CSV, 'a')) {
            flock($fh, LOCK_EX);
            if ($isNew) {
                fwrite($fh, "\xEF\xBB\xBF"); // BOM, ca Excel să afișeze corect diacriticele
                fputcsv($fh, ['Date', 'First name', 'Last name', 'Email', 'Personal email', 'Phone', 'Company', 'Heard about us', 'Marketing consent', 'Message']);
            }
            // Protecție la deschiderea în Excel: valorile care încep cu = + - @ sunt prefixate
            $safe = fn(string $v): string => preg_match('/^[=+\-@]/', $v) ? "'" . $v : $v;
            fputcsv($fh, array_map($safe, [
                date('Y-m-d H:i:s'), $data['firstName'], $data['lastName'], $data['email'], $personal ? 'yes' : 'no',
                $data['phone'], $data['company'], $hear, $data['marketing'] ? 'yes' : 'no', $data['message'],
            ]));
            flock($fh, LOCK_UN);
            fclose($fh);
        }
    }
}

// Emailul către echipă
$e = fn(string $s): string => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
$rows = [
    'Name'                                   => $data['firstName'] . ' ' . $data['lastName'],
    'Email'                                  => $data['email'] . ($personal ? ' (personal email address)' : ''),
    'Phone'                                  => $data['phone'] ?: '—',
    'Company'                                => $data['company'],
    'Heard about us'                         => $hear,
    'Marketing consent'                      => $data['marketing'] ? 'Yes' : 'No',
    'Data processing & EEA transfer consent' => 'Yes',
];
$html = '<h2>New enquiry from the website</h2><table cellpadding="6">';
foreach ($rows as $k => $v) $html .= '<tr><td><b>' . $e($k) . '</b></td><td>' . $e($v) . '</td></tr>';
$html .= '</table><h3>Message</h3><p>' . nl2br($e($data['message'] ?: '—')) . '</p>';

$subject = ($personal ? '[Personal email] ' : '') . 'Website enquiry — ' . $data['company'];
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$replyTo = str_replace(["\r", "\n"], '', $data['email']);
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Euroanswer Website <' . CONTACT_FROM . '>',
    'Reply-To: ' . $replyTo,
    'X-Mailer: PHP/' . PHP_VERSION,
]);

$sent = @mail(CONTACT_TO, $encodedSubject, $html, $headers, '-f' . CONTACT_FROM);
if (!$sent) {
    respond(502, ['ok' => false, 'error' => 'We could not send your message. Please email us at office@euroanswer.co.uk.']);
}

respond(200, ['ok' => true]);
