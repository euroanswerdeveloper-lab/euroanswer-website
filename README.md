# Euroanswer — website

Site-ul [euroanswer.co.uk](https://www.euroanswer.co.uk), migrat din WordPress în [Astro](https://astro.build) (site static + formular PHP).
Versiune de test: [testamentulporcului.ro](https://testamentulporcului.ro) (neindexată).

## Pornire locală

```powershell
npm install
npm run dev        # http://localhost:4321
```

## Unde se editează conținutul

| Ce | Unde |
|---|---|
| Pagini (servicii, industrii, legal…) | `src/content/pages/<limbă>/*.md` |
| Articole Blog / Insights | `src/content/blog/<limbă>/*.md` (Insights = `categories: ["Insight"]`) |
| Home (EN / DE / RU) | `src/i18n/home.ts` |
| Meniu și footer | `src/i18n/ui.ts`, `src/layouts/Base.astro` |
| Jocul de pe Home | `src/i18n/game.ts` |
| Testimoniale, echipă, istoric | `src/data/*.ts` |
| Formular de contact | `src/pages/contact.astro` + `public/api/contact.php` |
| Redirecturi | `public/.htaccess` |

Fiecare fișier `.md` are câmpul `path` (URL-ul paginii, identic cu cel din vechiul WordPress).

## Deploy (gazduire.ro / cPanel)

Vezi [DEPLOY.md](DEPLOY.md). Pe scurt, cu `npm run dev` oprit:

```powershell
powershell -File scripts/build-deploy.ps1 -SiteUrl https://testamentulporcului.ro -NoIndex   # test
powershell -File scripts/build-deploy.ps1                                                     # producție
```

Arhiva ZIP rezultată se dezarhivează în `public_html`.
