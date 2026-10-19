// Setări pentru formularul de contact (folosite atât în pagină, cât și pe server)

// Cheia publică Cloudflare Turnstile (anti-spam). Valoarea de mai jos este cheia de TEST oficială
// (trece mereu) — se înlocuiește cu cheia reală din Cloudflare Dashboard → Turnstile la lansare.
export const TURNSTILE_SITE_KEY = '1x00000000000000000000AA';

// Portalul de recrutare — unde sunt trimiși cei care aleg „job openings”
export const CAREERS_URL = 'https://euroanswer.mingle.ro/en/apply';

export const LIMITS = { text: 400, message: 2000 };

export const HEAR_ABOUT = ['Google Search', 'AI Search Engine', 'Social Media'];

// Domenii de email personale — răspundem doar la adrese de business (regula de pe site-ul vechi)
export const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'ymail.com', 'outlook.com', 'hotmail.com',
  'hotmail.co.uk', 'live.com', 'msn.com', 'icloud.com', 'me.com', 'aol.com', 'proton.me', 'protonmail.com',
  'gmx.com', 'gmx.de', 'web.de', 'mail.com', 'yandex.com', 'yandex.ru', 'mail.ru', 'zoho.com',
];

export const isFreeEmail = (email: string) =>
  FREE_EMAIL_DOMAINS.includes(email.split('@').pop()?.toLowerCase().trim() ?? '');
