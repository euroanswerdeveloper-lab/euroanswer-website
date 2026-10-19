// Primește formularul de contact, îl validează, verifică anti-spam (Turnstile) și trimite emailul (Resend).
// Variabile de mediu (Cloudflare → Workers → Settings → Variables, sau .dev.vars local):
//   TURNSTILE_SECRET_KEY  — cheia secretă Turnstile
//   RESEND_API_KEY        — cheia API Resend (fără ea, local, mesajul doar se afișează în consolă)
//   CONTACT_TO            — unde ajung mesajele (implicit sales@euroanswer.co.uk)
//   CONTACT_FROM          — expeditorul, de pe un domeniu verificat în Resend
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { LIMITS, HEAR_ABOUT, isFreeEmail } from '../../data/contact';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s.\-\/]{6,30}$/;

type Env = { TURNSTILE_SECRET_KEY?: string; RESEND_API_KEY?: string; CONTACT_TO?: string; CONTACT_FROM?: string };

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const POST: APIRoute = async ({ request }) => {
  const vars = env as unknown as Env;
  const form = await request.formData();
  const get = (k: string) => String(form.get(k) ?? '').trim();

  // Câmp ascuns „capcană” — boții îl completează, oamenii nu îl văd
  if (get('website')) return json({ ok: true });

  const data = {
    firstName: get('firstName'),
    lastName: get('lastName'),
    email: get('email'),
    phone: get('phone'),
    company: get('company'),
    hearAbout: get('hearAbout'),
    hearAboutOther: get('hearAboutOther'),
    message: get('message'),
    marketing: get('marketing') === '1',
    consent: get('consent') === '1',
  };

  // Aceleași reguli ca în formular (verificate și pe server)
  const errors: Record<string, string> = {};
  for (const k of ['firstName', 'lastName', 'company'] as const) {
    if (!data[k]) errors[k] = 'This field is required.';
    else if (data[k].length > LIMITS.text) errors[k] = `Maximum ${LIMITS.text} characters.`;
  }
  if (!EMAIL_RE.test(data.email) || data.email.length > LIMITS.text) errors.email = 'Please enter a valid email address.';
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = 'Please enter a valid phone number.';
  if (data.hearAbout && !HEAR_ABOUT.includes(data.hearAbout)) errors.hearAbout = 'Invalid option.';
  if (data.hearAboutOther.length > LIMITS.text) errors.hearAboutOther = `Maximum ${LIMITS.text} characters.`;
  if (data.message.length > LIMITS.message) errors.message = `Maximum ${LIMITS.message} characters.`;
  if (!data.consent) errors.consent = 'Please accept the processing of your personal data.';
  if (Object.keys(errors).length) return json({ ok: false, errors }, 422);

  // Verificare anti-spam Turnstile
  const secret = vars.TURNSTILE_SECRET_KEY ?? (import.meta.env.DEV ? '1x0000000000000000000000000000000AA' : '');
  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret,
      response: get('cf-turnstile-response'),
      remoteip: request.headers.get('cf-connecting-ip') ?? '',
    }),
  }).then((r) => r.json() as Promise<{ success: boolean }>).catch(() => ({ success: false }));
  if (!verify.success) return json({ ok: false, error: 'Spam check failed. Please refresh the page and try again.' }, 400);

  const personal = isFreeEmail(data.email);
  const rows: [string, string][] = [
    ['Name', `${data.firstName} ${data.lastName}`],
    ['Email', data.email + (personal ? ' (personal email address)' : '')],
    ['Phone', data.phone || '—'],
    ['Company', data.company],
    ['Heard about us', [data.hearAbout, data.hearAboutOther].filter(Boolean).join(' — ') || '—'],
    ['Marketing consent', data.marketing ? 'Yes' : 'No'],
    ['Data processing & EEA transfer consent', 'Yes'],
  ];
  const html = `<h2>New enquiry from euroanswer.co.uk</h2>
<table cellpadding="6">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escape(v)}</td></tr>`).join('')}</table>
<h3>Message</h3><p>${escape(data.message || '—').replace(/\n/g, '<br>')}</p>`;
  const subject = `${personal ? '[Personal email] ' : ''}Website enquiry — ${data.company}`;

  if (!vars.RESEND_API_KEY) {
    if (import.meta.env.DEV) {
      console.log('\n[contact] Email nu e configurat (RESEND_API_KEY lipsește). Mesaj primit:\n', subject, rows);
      return json({ ok: true, dev: true });
    }
    return json({ ok: false, error: 'The form is temporarily unavailable. Please email us at office@euroanswer.co.uk.' }, 500);
  }

  const sent = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${vars.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: vars.CONTACT_FROM ?? 'Euroanswer Website <website@euroanswer.co.uk>',
      to: (vars.CONTACT_TO ?? 'sales@euroanswer.co.uk').split(',').map((s) => s.trim()),
      reply_to: data.email,
      subject,
      html,
    }),
  });
  if (!sent.ok) return json({ ok: false, error: 'We could not send your message. Please email us at office@euroanswer.co.uk.' }, 502);

  return json({ ok: true });
};
