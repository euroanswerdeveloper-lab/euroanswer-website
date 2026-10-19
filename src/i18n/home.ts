// Textele paginii Home în EN / DE / RU. Structura e identică pentru toate limbile —
// pentru a modifica un text, schimbă-l în limba respectivă. Linkurile către pagini care
// nu există încă în DE/RU trimit la varianta în engleză.
import type { Lang } from './ui';

const centresBase = [
  { city: { en: 'Skopje', de: 'Skopje', ru: 'Скопье' }, color: '#cf2e2e', agents: 69, languages: 16 },
  { city: { en: 'Bucharest', de: 'Bukarest', ru: 'Бухарест' }, color: '#ff6900', agents: 95, languages: 6 },
  { city: { en: 'Galati', de: 'Galați', ru: 'Галац' }, color: '#0693e3', agents: 19, languages: 3 },
];

const centreLanguages = {
  en: [
    'English, Macedonian, Albanian, German, Italian, French, Spanish, Bulgarian, Slovak, Polish, Czech, Serbian, Russian, Dutch, Turkish, Arabic',
    'English, Romanian, German, Greek, Hungarian, Finnish',
    'English, Romanian, Italian',
  ],
  de: [
    'Englisch, Mazedonisch, Albanisch, Deutsch, Italienisch, Französisch, Spanisch, Bulgarisch, Slowakisch, Polnisch, Tschechisch, Serbisch, Russisch, Niederländisch, Türkisch, Arabisch',
    'Englisch, Rumänisch, Deutsch, Griechisch, Ungarisch, Finnisch',
    'Englisch, Rumänisch, Italienisch',
  ],
  ru: [
    'английский, македонский, албанский, немецкий, итальянский, французский, испанский, болгарский, словацкий, польский, чешский, сербский, русский, нидерландский, турецкий, арабский',
    'английский, румынский, немецкий, греческий, венгерский, финский',
    'английский, румынский, итальянский',
  ],
};

export const homeText = {
  en: {
    meta: {
      title: 'Multilingual BPO Company in Europe | Euroanswer',
      description: 'Euroanswer is a boutique BPO company delivering multilingual BPO services in 20+ languages from Romania and North Macedonia. ISO 9001 & 27001 certified, since 2004.',
    },
    hero: {
      eyebrow: 'Boutique BPO company · since 2004',
      h1: 'Multilingual BPO Company in Europe',
      tagline: 'Customer Operations, Handled with Care.',
      lead: 'We combine human connection, multilingual expertise and smart technology to deliver exceptional customer experiences for global brands.',
      cta1: 'Discuss your needs', cta2: 'Explore our BPO services', cta3: 'Play our 60s GAME', imgAlt: 'Euroanswer customer experience orbit — omnichannel BPO services',
    },
    summary: '<strong>Euroanswer is a boutique BPO company</strong> founded in 2004 and headquartered in Bucharest, Romania. From delivery centres in <strong>Bucharest, Galati and Skopje</strong>, we provide BPO services — <a href="/customer-service-outsourcing/">customer service outsourcing</a>, technical support and <a href="/staffing-services/">staffing services</a> — in <strong>20+ languages</strong> for clients in 40 countries. We are <strong>ISO 9001 and ISO/IEC 27001 certified</strong>.',
    about: {
      eyebrow: 'About Euroanswer',
      title: 'More Than Outsourcing.<br /><strong>A Better Customer Experience.</strong>',
      p1: 'At <strong>Euroanswer</strong>, we believe <strong>great customer experiences</strong> are built on understanding, consistency, and <strong>genuine human connection</strong>. As a <strong>boutique BPO partner</strong>, we combine personalised service, multilingual expertise, and intelligent technology to help businesses deliver meaningful interactions at every touchpoint.',
      p2: '<strong>From customer service and technical support to dedicated staffing</strong>, we become an extension of your team — protecting your brand, strengthening customer relationships, and turning everyday interactions into lasting value. <a href="/about-us/">Meet our team →</a>',
    },
    pillars: [
      { label: '1. Approach', title: 'Personalised by design', text: 'Solutions shaped around your business, your customers, and your brand.' },
      { label: '2. People', title: 'Human connection, at scale', text: 'Skilled multilingual teams delivering thoughtful, consistent support.' },
      { label: '3. Performance', title: 'Quality that builds trust', text: 'Intelligent processes focused on service quality and lasting partnerships.' },
    ],
    stats: [
      { value: '20+', label: 'Years of experience' },
      { value: '20+', label: 'Languages' },
      { value: '40', label: 'Countries supported' },
      { value: '3', label: 'Delivery hubs', note: 'EU & Non-EU' },
    ],
    services: {
      eyebrow: 'What we do', title: 'Our BPO Services',
      manifesto: 'Somewhere along the way, the outsourcing industry convinced itself that cheaper was better. We never bought that. Twenty years of running customer operations across cultures, languages and time zones has taught us one thing above everything else: people can tell when they’re being handled, and when they’re being helped. <strong>That gap — between handling and helping — is where brands are won and lost.</strong>',
      cards: [
        { title: 'Customer Service Outsourcing', tag: 'CX, Multilingual & Technical Support', text: 'Exceptional 24/7 omnichannel customer care in over 20 languages — from first contact and complaints management to technical help desk and back office.', href: '/customer-service-outsourcing/', cta: 'Customer service' },
        { title: 'Staffing Services', tag: 'Talent Sourcing & Outstaffing', text: 'Scale your team on demand with dedicated, fully trained specialists — we handle recruitment, payroll and compliance while you keep control of the work.', href: '/staffing-services/', cta: 'Explore staffing' },
      ],
    },
    industries: {
      eyebrow: 'Industries & results', title: 'BPO services for your industry',
      intro: 'Long-term partnerships with global brands — measured in years, languages and resolved interactions.',
      more: 'Learn more →',
      items: [
        { name: 'Technology', href: '/technology/', result: '15+ years of partnership · 10+ countries · 10,000 tickets per month' },
        { name: 'Banking', href: '/banking-outsourcing-services/', result: '15+ years of partnership · 92,486 tickets and 39,654 inbound calls per year' },
        { name: 'Personal Advertising', href: '/outsourcing-advertising/', result: '24/7 English support for the USA & Canada · 35,000 tickets per month' },
        { name: 'Education', href: '/education/', result: '8 countries · 3 languages · 3,800 phone and email interactions per month' },
        { name: 'Digital Printing', href: '/digital-printing-outsourcing/', result: '2 countries · 4,300 tickets per month' },
        { name: 'Booking & Travel', href: '/customer-support-for-booking-industry/', result: '2,500 calls per month for a booking platform' },
        { name: 'Gaming', href: '/gaming/', result: 'Multilingual player support across 4 countries' },
        { name: 'Financial Services', href: '/financial/', result: '3-year strategic partnership with a retail banking client' },
      ],
    },
    nearshore: {
      eyebrow: 'Nearshore outsourcing', title: 'Why choose a nearshore BPO company in Eastern Europe?',
      intro: 'Romania and North Macedonia have become leading nearshore BPO destinations for European and North American brands. Here is what that means for your customers. <a href="/outsource-technical-support-for-western-quality-at-eastern-costs/">Read more on our blog →</a>',
      items: [
        { title: 'Close to your customers', text: 'Our hubs share or neighbour Central European time zones and are a short flight from Western Europe — easy to visit, easy to align with.' },
        { title: 'Real language depth', text: 'Native and fluent agents in 20+ languages, including German, French, Italian, Nordic and Balkan languages — not just English.' },
        { title: 'Western quality, Eastern costs', text: 'Highly educated multilingual talent at a lower cost than in-house teams in Western Europe or the UK.' },
        { title: 'EU-grade data protection', text: 'GDPR-compliant operations and ISO/IEC 27001-certified information security for your customer data.' },
      ],
    },
    centres: {
      eyebrow: 'Our delivery centres', title: 'Three hubs, 20+ languages',
      intro: 'We provide customer experience through hubs of operational excellence and diverse cultural proficiency. Our dialogue is corporate to corporate, yet our service attests to individuals with distinct needs.',
      agents: 'agents', languages: 'languages',
    },
    compliance: {
      eyebrow: 'Compliance & quality standards', title: 'ISO 9001 & ISO/IEC 27001 certified',
      text: 'Euroanswer holds <strong>ISO 9001</strong> (quality management) and <strong>ISO/IEC 27001</strong> (information security) certifications from a leading certification company accredited by <a href="https://www.iasonline.org/about-ias/" target="_blank" rel="noopener">IAS</a>, which holds signatory status in multilateral recognition arrangements of the <strong>International Accreditation Forum</strong> (<a href="https://iaf.nu/en/home/" target="_blank" rel="noopener">IAF</a>) and the <strong>Asia Pacific Accreditation Cooperation</strong> (<a href="https://www.apac-accreditation.org/" target="_blank" rel="noopener">APAC</a>). All operations are GDPR-compliant.',
      imgAlt: 'IAS, IAF and APAC accreditation marks for Euroanswer ISO certification',
    },
    tech: {
      eyebrow: 'New technology',
      title: 'We blend AI-powered technology with human empathy to deliver seamless, high-quality customer experience and scalable support for global brands.',
      cta: 'Explore our AI tech', href: '/customer-service-outsourcing/#ai-augmented-support', imgAlt: 'Euroanswer team using AI-assisted customer support tools',
    },
    testimonials: { eyebrow: 'What our clients say', title: 'Trusted by global brands', prev: 'Previous testimonial', next: 'Next testimonial', goTo: 'Go to testimonial' },
    faq: {
      eyebrow: 'FAQ', title: 'BPO company FAQ',
      items: [
        { q: 'What is a BPO company?', a: 'A BPO (business process outsourcing) company runs business processes on behalf of other organisations — most often customer service, technical support, back-office tasks and staffing. Euroanswer is a boutique BPO company specialising in multilingual customer operations.' },
        { q: 'What BPO services does Euroanswer offer?', a: 'Two main service lines: customer service outsourcing (omnichannel customer support, customer experience, technical help desk and back office) and staffing services (recruitment, HR administration, payroll and outstaffing / staff leasing).' },
        { q: 'Where are your delivery centres?', a: 'Euroanswer is headquartered in Bucharest, Romania, with delivery centres in Bucharest and Galati (Romania) and Skopje (North Macedonia), serving clients in 40 countries.' },
        { q: 'Which languages do you support?', a: 'More than 20 languages, including English, German, French, Italian, Spanish, Dutch, Romanian, Greek, Hungarian, Finnish, Polish, Czech, Slovak, Bulgarian, Macedonian, Albanian, Serbian, Russian, Turkish and Arabic.' },
        { q: 'Why choose a nearshore BPO company in Eastern Europe?', a: 'Eastern Europe combines multilingual, highly educated talent with lower costs than Western Europe, close time zones, short travel distances and EU data protection standards such as GDPR.' },
        { q: 'Is my customer data secure?', a: 'Yes. Euroanswer is ISO 9001 and ISO/IEC 27001 certified, operates in line with GDPR, and defines data protection responsibilities clearly in every agreement.' },
        { q: 'How does Euroanswer use AI in customer service?', a: 'We combine AI tools — agent-assist copilots, instant translation and sentiment analysis — with human agents, so simple tasks are handled faster while complex, emotional cases always get a skilled person.' },
        { q: 'How do we start working together?', a: 'Contact us with your scope, channels, languages and volumes. We prepare a personalised proposal and a transition plan, and can start with a pilot team before scaling.' },
      ],
    },
    cta: { title: 'Ready to give your customers better service?', text: 'Tell us about your operation and we’ll build a personalised proposal.', button: 'Discuss your needs' },
    links: { contact: '/contact/', services: '/services/' },
  },

  de: {
    meta: {
      title: 'Mehrsprachiges BPO-Unternehmen in Europa | Euroanswer',
      description: 'Euroanswer ist ein Boutique-BPO-Unternehmen mit mehrsprachigen BPO-Dienstleistungen in über 20 Sprachen aus Rumänien und Nordmazedonien. ISO 9001 & 27001 zertifiziert, seit 2004.',
    },
    hero: {
      eyebrow: 'Boutique-BPO-Unternehmen · seit 2004',
      h1: 'Mehrsprachiges BPO-Unternehmen in Europa',
      tagline: 'Kundenservice mit Sorgfalt.',
      lead: 'Wir verbinden menschliche Nähe, mehrsprachige Expertise und smarte Technologie zu herausragenden Kundenerlebnissen für globale Marken.',
      cta1: 'Anfrage besprechen', cta2: 'Unsere BPO-Leistungen', cta3: 'Unser 60-Sekunden-SPIEL', imgAlt: 'Euroanswer Customer-Experience-Orbit — Omnichannel-BPO-Dienstleistungen',
    },
    summary: '<strong>Euroanswer ist ein Boutique-BPO-Unternehmen</strong>, gegründet 2004 mit Hauptsitz in Bukarest, Rumänien. Von unseren Standorten in <strong>Bukarest, Galați und Skopje</strong> aus erbringen wir BPO-Dienstleistungen — <a href="/de/kundensupport-auf-hochstem-niveau-mit-euroanswer-an-ihrer-seite/">Kundenservice-Outsourcing</a>, technischen Support und <a href="/staffing-services/">Personaldienstleistungen</a> — in <strong>über 20 Sprachen</strong> für Kunden in 40 Ländern. Wir sind <strong>nach ISO 9001 und ISO/IEC 27001 zertifiziert</strong>.',
    about: {
      eyebrow: 'Über Euroanswer',
      title: 'Mehr als Outsourcing.<br /><strong>Ein besseres Kundenerlebnis.</strong>',
      p1: 'Bei <strong>Euroanswer</strong> sind wir überzeugt: <strong>Großartige Kundenerlebnisse</strong> entstehen durch Verständnis, Beständigkeit und <strong>echte menschliche Verbindung</strong>. Als <strong>Boutique-BPO-Partner</strong> kombinieren wir persönlichen Service, mehrsprachige Expertise und intelligente Technologie, damit Unternehmen an jedem Kontaktpunkt wertvolle Interaktionen bieten.',
      p2: '<strong>Vom Kundenservice und technischen Support bis hin zu dediziertem Personal</strong> werden wir zur Erweiterung Ihres Teams — wir schützen Ihre Marke, stärken Kundenbeziehungen und machen aus alltäglichen Interaktionen nachhaltigen Mehrwert. <a href="/about-us/">Unser Team kennenlernen (EN) →</a>',
    },
    pillars: [
      { label: '1. Ansatz', title: 'Individuell gestaltet', text: 'Lösungen, die auf Ihr Unternehmen, Ihre Kunden und Ihre Marke zugeschnitten sind.' },
      { label: '2. Menschen', title: 'Menschliche Nähe, skalierbar', text: 'Qualifizierte mehrsprachige Teams für durchdachten, beständigen Support.' },
      { label: '3. Leistung', title: 'Qualität, die Vertrauen schafft', text: 'Intelligente Prozesse mit Fokus auf Servicequalität und langfristige Partnerschaften.' },
    ],
    stats: [
      { value: '20+', label: 'Jahre Erfahrung' },
      { value: '20+', label: 'Sprachen' },
      { value: '40', label: 'Länder betreut' },
      { value: '3', label: 'Standorte', note: 'EU & Nicht-EU' },
    ],
    services: {
      eyebrow: 'Was wir tun', title: 'Unsere BPO-Dienstleistungen',
      manifesto: 'Irgendwann hat sich die Outsourcing-Branche eingeredet, billiger sei besser. Wir haben das nie geglaubt. Zwanzig Jahre Kundenservice über Kulturen, Sprachen und Zeitzonen hinweg haben uns vor allem eines gelehrt: Menschen spüren, ob sie nur abgewickelt werden oder ob ihnen wirklich geholfen wird. <strong>Genau in dieser Lücke — zwischen Abwickeln und Helfen — werden Marken gewonnen oder verloren.</strong>',
      cards: [
        { title: 'Kundenservice-Outsourcing', tag: 'CX, mehrsprachiger & technischer Support', text: 'Herausragender Omnichannel-Kundenservice rund um die Uhr in über 20 Sprachen — vom Erstkontakt und Beschwerdemanagement bis zum technischen Helpdesk und Backoffice.', href: '/de/kundensupport-auf-hochstem-niveau-mit-euroanswer-an-ihrer-seite/', cta: 'Kundenservice' },
        { title: 'Personaldienstleistungen', tag: 'Talent Sourcing & Outstaffing', text: 'Skalieren Sie Ihr Team nach Bedarf mit dedizierten, voll geschulten Fachkräften — wir übernehmen Recruiting, Lohnabrechnung und Compliance, Sie behalten die Steuerung.', href: '/staffing-services/', cta: 'Mehr erfahren (EN)' },
      ],
    },
    industries: {
      eyebrow: 'Branchen & Ergebnisse', title: 'BPO-Dienstleistungen für Ihre Branche',
      intro: 'Langfristige Partnerschaften mit globalen Marken — gemessen in Jahren, Sprachen und gelösten Anfragen.',
      more: 'Mehr erfahren (EN) →',
      items: [
        { name: 'Technologie', href: '/technology/', result: '15+ Jahre Partnerschaft · 10+ Länder · 10.000 Tickets pro Monat' },
        { name: 'Banken', href: '/banking-outsourcing-services/', result: '15+ Jahre Partnerschaft · 92.486 Tickets und 39.654 eingehende Anrufe pro Jahr' },
        { name: 'Online-Anzeigen', href: '/outsourcing-advertising/', result: 'Englischer 24/7-Support für USA & Kanada · 35.000 Tickets pro Monat' },
        { name: 'Bildung', href: '/education/', result: '8 Länder · 3 Sprachen · 3.800 Telefon- und E-Mail-Kontakte pro Monat' },
        { name: 'Digitaldruck', href: '/digital-printing-outsourcing/', result: '2 Länder · 4.300 Tickets pro Monat' },
        { name: 'Buchung & Reisen', href: '/customer-support-for-booking-industry/', result: '2.500 Anrufe pro Monat für eine Buchungsplattform' },
        { name: 'Gaming', href: '/gaming/', result: 'Mehrsprachiger Spieler-Support in 4 Ländern' },
        { name: 'Finanzdienstleistungen', href: '/financial/', result: '3-jährige strategische Partnerschaft mit einer Retail-Bank' },
      ],
    },
    nearshore: {
      eyebrow: 'Nearshore-Outsourcing', title: 'Warum ein Nearshore-BPO-Unternehmen in Osteuropa?',
      intro: 'Rumänien und Nordmazedonien zählen zu den führenden Nearshore-BPO-Standorten für europäische und nordamerikanische Marken. Das bedeutet es für Ihre Kunden. <a href="/outsource-technical-support-for-western-quality-at-eastern-costs/">Mehr in unserem Blog (EN) →</a>',
      items: [
        { title: 'Nah an Ihren Kunden', text: 'Unsere Standorte liegen in mitteleuropäischen oder angrenzenden Zeitzonen und nur einen kurzen Flug von Westeuropa entfernt — leicht zu besuchen, leicht abzustimmen.' },
        { title: 'Echte Sprachtiefe', text: 'Muttersprachliche und fließend sprechende Agents in über 20 Sprachen, darunter Deutsch, Französisch, Italienisch, nordische und Balkansprachen — nicht nur Englisch.' },
        { title: 'Westliche Qualität, östliche Kosten', text: 'Hochqualifizierte mehrsprachige Fachkräfte zu geringeren Kosten als interne Teams in Westeuropa oder Großbritannien.' },
        { title: 'Datenschutz nach EU-Standard', text: 'DSGVO-konforme Prozesse und nach ISO/IEC 27001 zertifizierte Informationssicherheit für Ihre Kundendaten.' },
      ],
    },
    centres: {
      eyebrow: 'Unsere Standorte', title: 'Drei Standorte, über 20 Sprachen',
      intro: 'Wir gestalten Kundenerlebnisse aus Standorten mit operativer Exzellenz und vielfältiger kultureller Kompetenz. Unser Dialog ist B2B — unser Service gilt Menschen mit individuellen Bedürfnissen.',
      agents: 'Agents', languages: 'Sprachen',
    },
    compliance: {
      eyebrow: 'Compliance & Qualitätsstandards', title: 'Zertifiziert nach ISO 9001 & ISO/IEC 27001',
      text: 'Euroanswer ist nach <strong>ISO 9001</strong> (Qualitätsmanagement) und <strong>ISO/IEC 27001</strong> (Informationssicherheit) zertifiziert — durch eine führende Zertifizierungsstelle, akkreditiert von <a href="https://www.iasonline.org/about-ias/" target="_blank" rel="noopener">IAS</a>, Unterzeichner multilateraler Anerkennungsabkommen des <strong>International Accreditation Forum</strong> (<a href="https://iaf.nu/en/home/" target="_blank" rel="noopener">IAF</a>) und der <strong>Asia Pacific Accreditation Cooperation</strong> (<a href="https://www.apac-accreditation.org/" target="_blank" rel="noopener">APAC</a>). Alle Prozesse sind DSGVO-konform.',
      imgAlt: 'IAS-, IAF- und APAC-Akkreditierungszeichen für die ISO-Zertifizierung von Euroanswer',
    },
    tech: {
      eyebrow: 'Neue Technologie',
      title: 'Wir verbinden KI-gestützte Technologie mit menschlicher Empathie — für nahtlose, hochwertige Kundenerlebnisse und skalierbaren Support für globale Marken.',
      cta: 'Unsere KI-Technologie (EN)', href: '/customer-service-outsourcing/#ai-augmented-support', imgAlt: 'Euroanswer-Team mit KI-gestützten Kundenservice-Tools',
    },
    testimonials: { eyebrow: 'Das sagen unsere Kunden', title: 'Das Vertrauen globaler Marken', prev: 'Vorheriges Kundenzitat', next: 'Nächstes Kundenzitat', goTo: 'Zu Kundenzitat' },
    faq: {
      eyebrow: 'FAQ', title: 'Häufige Fragen zum BPO-Unternehmen',
      items: [
        { q: 'Was ist ein BPO-Unternehmen?', a: 'Ein BPO-Unternehmen (Business Process Outsourcing) übernimmt Geschäftsprozesse im Auftrag anderer Organisationen — meist Kundenservice, technischen Support, Backoffice-Aufgaben und Personaldienstleistungen. Euroanswer ist ein Boutique-BPO-Unternehmen, spezialisiert auf mehrsprachigen Kundenservice.' },
        { q: 'Welche BPO-Dienstleistungen bietet Euroanswer an?', a: 'Zwei Hauptbereiche: Kundenservice-Outsourcing (Omnichannel-Kundensupport, Customer Experience, technischer Helpdesk und Backoffice) und Personaldienstleistungen (Recruiting, HR-Administration, Lohnabrechnung und Outstaffing / Arbeitnehmerüberlassung).' },
        { q: 'Wo befinden sich Ihre Standorte?', a: 'Euroanswer hat seinen Hauptsitz in Bukarest, Rumänien, mit Standorten in Bukarest und Galați (Rumänien) sowie Skopje (Nordmazedonien) und betreut Kunden in 40 Ländern.' },
        { q: 'Welche Sprachen unterstützen Sie?', a: 'Über 20 Sprachen, darunter Englisch, Deutsch, Französisch, Italienisch, Spanisch, Niederländisch, Rumänisch, Griechisch, Ungarisch, Finnisch, Polnisch, Tschechisch, Slowakisch, Bulgarisch, Mazedonisch, Albanisch, Serbisch, Russisch, Türkisch und Arabisch.' },
        { q: 'Warum ein Nearshore-BPO-Unternehmen in Osteuropa?', a: 'Osteuropa verbindet mehrsprachige, hochqualifizierte Fachkräfte mit geringeren Kosten als in Westeuropa, nahen Zeitzonen, kurzen Reisewegen und EU-Datenschutzstandards wie der DSGVO.' },
        { q: 'Sind meine Kundendaten sicher?', a: 'Ja. Euroanswer ist nach ISO 9001 und ISO/IEC 27001 zertifiziert, arbeitet DSGVO-konform und regelt die Verantwortlichkeiten für den Datenschutz in jedem Vertrag klar.' },
        { q: 'Wie setzt Euroanswer KI im Kundenservice ein?', a: 'Wir kombinieren KI-Tools — Agent-Assist-Copiloten, Sofortübersetzung und Sentiment-Analyse — mit menschlichen Agents: Einfache Anliegen werden schneller gelöst, komplexe und emotionale Fälle bearbeitet immer ein qualifizierter Mensch.' },
        { q: 'Wie beginnen wir eine Zusammenarbeit?', a: 'Kontaktieren Sie uns mit Umfang, Kanälen, Sprachen und Volumen. Wir erstellen ein individuelles Angebot und einen Transitionsplan und können mit einem Pilotteam starten, bevor wir skalieren.' },
      ],
    },
    cta: { title: 'Bereit für besseren Kundenservice?', text: 'Erzählen Sie uns von Ihrem Betrieb — wir erstellen Ihnen ein individuelles Angebot.', button: 'Anfrage besprechen' },
    links: { contact: '/de/kontakt/', services: '/de/services-2/' },
  },

  ru: {
    meta: {
      title: 'Многоязычная BPO-компания в Европе | Euroanswer',
      description: 'Euroanswer — бутиковая BPO-компания: многоязычные BPO-услуги на 20+ языках из Румынии и Северной Македонии. Сертификаты ISO 9001 и 27001, с 2004 года.',
    },
    hero: {
      eyebrow: 'Бутиковая BPO-компания · с 2004 года',
      h1: 'Многоязычная BPO-компания в Европе',
      tagline: 'Клиентский сервис с заботой.',
      lead: 'Мы объединяем человеческое участие, многоязычную экспертизу и умные технологии, чтобы создавать исключительный клиентский опыт для глобальных брендов.',
      cta1: 'Обсудить задачу', cta2: 'Наши BPO-услуги', cta3: 'Сыграть в ИГРУ (60 сек)', imgAlt: 'Euroanswer — омниканальные BPO-услуги и клиентский опыт',
    },
    summary: '<strong>Euroanswer — бутиковая BPO-компания</strong>, основанная в 2004 году, с головным офисом в Бухаресте (Румыния). Из центров обслуживания в <strong>Бухаресте, Галаце и Скопье</strong> мы предоставляем BPO-услуги — <a href="/ru/обслуживание-клиентов/">аутсорсинг клиентской поддержки</a>, техническую поддержку и <a href="/staffing-services/">кадровые услуги</a> — на <strong>20+ языках</strong> для клиентов из 40 стран. Компания <strong>сертифицирована по ISO 9001 и ISO/IEC 27001</strong>.',
    about: {
      eyebrow: 'О компании Euroanswer',
      title: 'Больше, чем аутсорсинг.<br /><strong>Лучший клиентский опыт.</strong>',
      p1: 'В <strong>Euroanswer</strong> мы уверены: <strong>отличный клиентский опыт</strong> строится на понимании, стабильности и <strong>искреннем человеческом участии</strong>. Как <strong>бутиковый BPO-партнёр</strong>, мы сочетаем персональный подход, многоязычную экспертизу и интеллектуальные технологии, помогая компаниям выстраивать ценное взаимодействие в каждой точке контакта.',
      p2: '<strong>От клиентской и технической поддержки до выделенного персонала</strong> — мы становимся продолжением вашей команды: защищаем ваш бренд, укрепляем отношения с клиентами и превращаем повседневные обращения в долгосрочную ценность. <a href="/about-us/">Познакомиться с командой (EN) →</a>',
    },
    pillars: [
      { label: '1. Подход', title: 'Индивидуальные решения', text: 'Решения, созданные под ваш бизнес, ваших клиентов и ваш бренд.' },
      { label: '2. Люди', title: 'Человеческое участие в масштабе', text: 'Квалифицированные многоязычные команды обеспечивают внимательную и стабильную поддержку.' },
      { label: '3. Результат', title: 'Качество, которое вызывает доверие', text: 'Интеллектуальные процессы, нацеленные на качество сервиса и долгосрочное партнёрство.' },
    ],
    stats: [
      { value: '20+', label: 'Лет опыта' },
      { value: '20+', label: 'Языков' },
      { value: '40', label: 'Стран' },
      { value: '3', label: 'Центра обслуживания', note: 'ЕС и не-ЕС' },
    ],
    services: {
      eyebrow: 'Что мы делаем', title: 'Наши BPO-услуги',
      manifesto: 'Когда-то индустрия аутсорсинга убедила себя, что дешевле — значит лучше. Мы никогда в это не верили. Двадцать лет работы с клиентами в разных культурах, языках и часовых поясах научили нас главному: люди всегда чувствуют, когда их просто «обрабатывают», а когда им действительно помогают. <strong>Именно в этом разрыве — между «обработать» и «помочь» — бренды выигрывают или проигрывают.</strong>',
      cards: [
        { title: 'Аутсорсинг клиентской поддержки', tag: 'CX, многоязычная и техническая поддержка', text: 'Омниканальное обслуживание клиентов 24/7 более чем на 20 языках — от первого обращения и работы с жалобами до технической поддержки и бэк-офиса.', href: '/ru/обслуживание-клиентов/', cta: 'Клиентская поддержка' },
        { title: 'Кадровые услуги', tag: 'Подбор персонала и аутстаффинг', text: 'Масштабируйте команду по мере необходимости с выделенными, полностью обученными специалистами — мы берём на себя подбор, расчёт зарплаты и соблюдение законодательства, а управление работой остаётся за вами.', href: '/staffing-services/', cta: 'Подробнее (EN)' },
      ],
    },
    industries: {
      eyebrow: 'Отрасли и результаты', title: 'BPO-услуги для вашей отрасли',
      intro: 'Долгосрочное партнёрство с глобальными брендами — в годах, языках и решённых обращениях.',
      more: 'Подробнее (EN) →',
      items: [
        { name: 'Технологии', href: '/technology/', result: '15+ лет партнёрства · 10+ стран · 10 000 тикетов в месяц' },
        { name: 'Банковский сектор', href: '/banking-outsourcing-services/', result: '15+ лет партнёрства · 92 486 тикетов и 39 654 входящих звонка в год' },
        { name: 'Онлайн-объявления', href: '/outsourcing-advertising/', result: 'Поддержка 24/7 на английском для США и Канады · 35 000 тикетов в месяц' },
        { name: 'Образование', href: '/education/', result: '8 стран · 3 языка · 3 800 обращений по телефону и email в месяц' },
        { name: 'Цифровая печать', href: '/digital-printing-outsourcing/', result: '2 страны · 4 300 тикетов в месяц' },
        { name: 'Бронирование и путешествия', href: '/customer-support-for-booking-industry/', result: '2 500 звонков в месяц для платформы бронирования' },
        { name: 'Гейминг', href: '/gaming/', result: 'Многоязычная поддержка игроков в 4 странах' },
        { name: 'Финансовые услуги', href: '/financial/', result: '3 года стратегического партнёрства с розничным банком' },
      ],
    },
    nearshore: {
      eyebrow: 'Нишоринг', title: 'Почему стоит выбрать BPO-компанию в Восточной Европе?',
      intro: 'Румыния и Северная Македония стали ведущими нишорными BPO-направлениями для европейских и североамериканских брендов. Вот что это значит для ваших клиентов. <a href="/outsource-technical-support-for-western-quality-at-eastern-costs/">Подробнее в нашем блоге (EN) →</a>',
      items: [
        { title: 'Рядом с вашими клиентами', text: 'Наши центры находятся в центральноевропейском или соседнем часовом поясе, в коротком перелёте от Западной Европы — легко приехать, легко синхронизироваться.' },
        { title: 'Настоящая языковая глубина', text: 'Носители и свободно говорящие специалисты на 20+ языках, включая немецкий, французский, итальянский, скандинавские и балканские языки — не только английский.' },
        { title: 'Западное качество, восточные затраты', text: 'Высокообразованные многоязычные специалисты дешевле собственных команд в Западной Европе или Великобритании.' },
        { title: 'Защита данных по стандартам ЕС', text: 'Процессы в соответствии с GDPR и информационная безопасность, сертифицированная по ISO/IEC 27001.' },
      ],
    },
    centres: {
      eyebrow: 'Наши центры обслуживания', title: 'Три центра, 20+ языков',
      intro: 'Мы создаём клиентский опыт в центрах операционного совершенства с широкой культурной компетенцией. Наш диалог — B2B, но наш сервис обращён к людям с их индивидуальными потребностями.',
      agents: 'операторов', languages: 'языков',
    },
    compliance: {
      eyebrow: 'Стандарты качества и соответствия', title: 'Сертификаты ISO 9001 и ISO/IEC 27001',
      text: 'Euroanswer имеет сертификаты <strong>ISO 9001</strong> (менеджмент качества) и <strong>ISO/IEC 27001</strong> (информационная безопасность), выданные ведущим органом по сертификации, аккредитованным <a href="https://www.iasonline.org/about-ias/" target="_blank" rel="noopener">IAS</a> — участником многосторонних соглашений о признании <strong>International Accreditation Forum</strong> (<a href="https://iaf.nu/en/home/" target="_blank" rel="noopener">IAF</a>) и <strong>Asia Pacific Accreditation Cooperation</strong> (<a href="https://www.apac-accreditation.org/" target="_blank" rel="noopener">APAC</a>). Все процессы соответствуют GDPR.',
      imgAlt: 'Знаки аккредитации IAS, IAF и APAC для сертификации ISO компании Euroanswer',
    },
    tech: {
      eyebrow: 'Новые технологии',
      title: 'Мы сочетаем технологии на основе ИИ с человеческой эмпатией, обеспечивая безупречный клиентский опыт и масштабируемую поддержку для глобальных брендов.',
      cta: 'Наши ИИ-технологии (EN)', href: '/customer-service-outsourcing/#ai-augmented-support', imgAlt: 'Команда Euroanswer использует инструменты поддержки на основе ИИ',
    },
    testimonials: { eyebrow: 'Отзывы клиентов', title: 'Нам доверяют глобальные бренды', prev: 'Предыдущий отзыв', next: 'Следующий отзыв', goTo: 'Перейти к отзыву' },
    faq: {
      eyebrow: 'FAQ', title: 'Частые вопросы о BPO-компании',
      items: [
        { q: 'Что такое BPO-компания?', a: 'BPO-компания (business process outsourcing) выполняет бизнес-процессы по поручению других организаций — чаще всего клиентскую и техническую поддержку, задачи бэк-офиса и кадровые услуги. Euroanswer — бутиковая BPO-компания, специализирующаяся на многоязычном клиентском сервисе.' },
        { q: 'Какие BPO-услуги предлагает Euroanswer?', a: 'Два основных направления: аутсорсинг клиентской поддержки (омниканальная поддержка, клиентский опыт, техническая поддержка и бэк-офис) и кадровые услуги (подбор персонала, HR-администрирование, расчёт зарплаты и аутстаффинг / лизинг персонала).' },
        { q: 'Где находятся ваши центры обслуживания?', a: 'Головной офис Euroanswer находится в Бухаресте (Румыния); центры обслуживания — в Бухаресте и Галаце (Румыния) и в Скопье (Северная Македония). Мы обслуживаем клиентов из 40 стран.' },
        { q: 'Какие языки вы поддерживаете?', a: 'Более 20 языков, включая английский, немецкий, французский, итальянский, испанский, нидерландский, румынский, греческий, венгерский, финский, польский, чешский, словацкий, болгарский, македонский, албанский, сербский, русский, турецкий и арабский.' },
        { q: 'Почему стоит выбрать BPO-компанию в Восточной Европе?', a: 'Восточная Европа сочетает многоязычных высококвалифицированных специалистов с более низкими затратами, чем в Западной Европе, близкие часовые пояса, короткие перелёты и европейские стандарты защиты данных, такие как GDPR.' },
        { q: 'Защищены ли данные моих клиентов?', a: 'Да. Euroanswer сертифицирована по ISO 9001 и ISO/IEC 27001, работает в соответствии с GDPR и чётко определяет обязанности по защите данных в каждом договоре.' },
        { q: 'Как Euroanswer использует ИИ в клиентском сервисе?', a: 'Мы сочетаем инструменты ИИ — ассистентов для операторов, мгновенный перевод и анализ тональности — с работой живых специалистов: простые запросы решаются быстрее, а сложные и эмоциональные случаи всегда ведёт опытный человек.' },
        { q: 'Как начать сотрудничество?', a: 'Свяжитесь с нами и расскажите об объёме задач, каналах, языках и нагрузке. Мы подготовим индивидуальное предложение и план перехода и можем начать с пилотной команды перед масштабированием.' },
      ],
    },
    cta: { title: 'Готовы улучшить сервис для ваших клиентов?', text: 'Расскажите о ваших задачах — мы подготовим индивидуальное предложение.', button: 'Обсудить задачу' },
    links: { contact: '/contact/', services: '/services/' },
  },
} as const;

export const centres = (lang: Lang) =>
  centresBase.map((c, i) => ({ city: c.city[lang], color: c.color, agents: c.agents, languages: c.languages, list: centreLanguages[lang][i] }));
