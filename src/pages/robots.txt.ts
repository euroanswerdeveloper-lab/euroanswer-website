// robots.txt generat la build: în producție permite motoarele de căutare și asistenții AI;
// într-o versiune de test (PUBLIC_NOINDEX=true) blochează indexarea.
import type { APIRoute } from 'astro';

const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'Bytespider', 'Amazonbot', 'meta-externalagent'];

// Versiune de test: Googlebot și Bing au voie să deschidă paginile DOAR ca să vadă „noindex”
// (meta + antet X-Robots-Tag din .htaccess) și să le scoată din index. Cu „Disallow: /” nu l-ar vedea
// și ar putea indexa adresele fără conținut. Crawlerele AI și restul roboților sunt blocați complet.
const STAGING = [
  '# Versiune de TEST — paginile au noindex (meta + antet X-Robots-Tag) și nu apar în Google.',
  '# Motoarele de căutare au voie să citească paginile doar ca să vadă eticheta noindex.',
  'User-agent: Googlebot',
  'User-agent: Bingbot',
  'Allow: /',
  '',
  ...AI_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Disallow: /', '']),
  'User-agent: *',
  'Disallow: /',
  '',
].join('\n');

export const GET: APIRoute = ({ site }) => {
  const noindex = import.meta.env.PUBLIC_NOINDEX === 'true';
  const body = noindex
    ? STAGING
    : [
        '# Euroanswer — acces permis pentru motoarele de căutare și asistenții AI',
        'User-agent: *',
        'Allow: /',
        '',
        '# Crawlere AI (permise explicit, ca Euroanswer să poată fi citat în răspunsuri AI)',
        ...AI_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
        `Sitemap: ${new URL('/sitemap-index.xml', site)}`,
        '',
      ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
