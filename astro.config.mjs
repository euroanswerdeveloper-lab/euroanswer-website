// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domeniul pentru care se face build-ul (URL-uri canonice, sitemap, hreflang).
// Implicit: domeniul de producție. Pentru o versiune de test: SITE_URL=https://... npm run build
const site = process.env.SITE_URL ?? 'https://www.euroanswer.co.uk';

// https://astro.build/config
export default defineConfig({
  site,

  // păstrăm URL-urile identice cu WordPress (/contact/)
  trailingSlash: 'always',

  // Site 100% static — rulează pe orice hosting (Apache/cPanel, Cloudflare, Netlify…).
  // Formularul de contact folosește public/api/contact.php.
  output: 'static',

  integrations: [sitemap()],
});
