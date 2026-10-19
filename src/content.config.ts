import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const common = {
  title: z.string(),
  intro: z.string().optional(), // dacă există, pagina primește banner-ul cu titlu + intro
  eyebrow: z.string().optional(), // textul mic de deasupra titlului din banner
  cta: z.object({ label: z.string(), href: z.string() }).optional(), // butonul din banner
  layout: z.enum(['legal', 'industry']).optional(), // „legal” = politici cu cuprins lateral; „industry” = pagină de industrie
  updated: z.string().optional(), // data ultimei actualizări, afișată sub titlu (pagini legale)
  seoTitle: z.string().optional(),
  description: z.string().optional(),
  lang: z.enum(['en', 'de', 'ru']),
  path: z.string(), // URL-ul paginii, identic cu cel din WordPress
  image: z.string().optional(),
  wpId: z.number().optional(),
};

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    ...common,
    // Câmpuri pentru paginile de industrie (layout: industry)
    industry: z.string().optional(), // numele scurt al industriei, ex. „Banking”
    icon: z.string().optional(), // icoana din public/game/icons/, fără .svg
    kpis: z.array(z.object({ value: z.string(), label: z.string() })).optional(), // indicatori contractuali
    volumes: z.array(z.object({ value: z.string(), label: z.string() })).optional(), // volume de interacțiuni
    facts: z.array(z.object({ label: z.string(), value: z.string() })).optional(), // „At a glance”
    testimonial: z.object({ quote: z.string(), author: z.string().optional(), role: z.string().optional(), company: z.string().optional() }).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    ...common,
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    // Opționale — pentru studii de caz / Insights:
    summary: z.string().optional(), // o frază scurtă sub titlu
    results: z.array(z.object({ value: z.string(), label: z.string() })).optional(), // cifrele cheie, afișate ca un card
    facts: z.array(z.object({ label: z.string(), value: z.string() })).optional(), // „At a glance”: client, canale, tehnologie…
    showImage: z.boolean().default(true), // false = imaginea e folosită doar la distribuire, nu în pagină
  }),
});

export const collections = { pages, blog };
