# Deploy pe gazduire.ro (cPanel / Apache)

Site-ul este 100% static. Formularul de contact folosește `public/api/contact.php`.

## 1. Build

```powershell
# Versiune de TEST (alt domeniu, neindexată de Google):
$env:SITE_URL = 'https://testamentulporcului.ro'; $env:PUBLIC_NOINDEX = 'true'; npm run build

# Versiune de PRODUCȚIE (euroanswer.co.uk, indexată):
Remove-Item Env:SITE_URL, Env:PUBLIC_NOINDEX -ErrorAction SilentlyContinue; npm run build
```

Oprește întâi `npm run dev`, apoi:

```powershell
node scripts/prune-unused-uploads.mjs   # scoate din dist/ imaginile nefolosite (~54 MB)
node scripts/check-urls.mjs             # verifică URL-urile vechi
```

## 2. Arhiva ZIP

Arhiva trebuie să aibă căi cu `/` și nume UTF-8 (paginile în rusă au foldere cu litere chirilice).
`Compress-Archive` din Windows PowerShell 5 NU e potrivit. Folosește comanda din istoricul proiectului
sau 7-Zip: *Add to archive → ZIP → Parameters: `cu=on`*.

## 3. Încărcare în cPanel

1. **Backup** la site-ul existent (cPanel → Backup / sau arhivează `public_html`).
2. Golește `public_html` (sau mută vechiul conținut într-un folder `old-wordpress` în afara lui).
3. File Manager → `public_html` → **Upload** arhiva → click dreapta → **Extract**.
4. Verifică faptul că `.htaccess` există (File Manager → Settings → *Show Hidden Files*).
5. SSL activ (cPanel → SSL/TLS Status → AutoSSL). PHP 7.4+ (recomandat 8.2).

## 4. Configurare formular — `public_html/api/contact.php`

| Constantă | Ce pui |
|---|---|
| `CONTACT_TO` | adresa care primește cererile |
| `CONTACT_FROM` | o adresă de pe domeniul site-ului, creată în cPanel → Email Accounts |
| `TURNSTILE_SECRET` | cheia secretă din Cloudflare Dashboard → Turnstile (gratuit) |

Cheia publică Turnstile se schimbă în `src/data/contact.ts` (`TURNSTILE_SITE_KEY`) și necesită un build nou.
Cât timp rămân cheile de test, anti-spam-ul trece mereu.

Cererile se salvează și în `~/euroanswer-leads/leads.csv` (în afara `public_html`, se deschide în Excel).
```
