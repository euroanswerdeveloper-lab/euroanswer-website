// Texte comune (meniu, footer) pe limbi. Paginile în DE/RU care nu există încă trimit către varianta în engleză.
export type Lang = 'en' | 'de' | 'ru';

export const homeUrl: Record<Lang, string> = {
  en: '/',
  de: '/de/business-process-outsourcing/',
  ru: '/ru/компания-bpo/',
};

export const ui = {
  en: {
    home: 'Home', about: 'About us', services: 'Services', insights: 'Insights', blog: 'Blog', join: 'Join the team', contact: 'Contact', menu: 'Menu',
    contactUrl: '/contact/',
    serviceItems: [
      { href: '/customer-service-outsourcing/', label: 'Customer Service Outsourcing', note: 'CX, multilingual support, technical help desk' },
      { href: '/staffing-services/', label: 'Staffing Services', note: 'Recruitment, payroll, outstaffing' },
    ],
    footerAbout: 'Boutique BPO company delivering multilingual customer operations and staffing solutions from EU & Non-EU hubs.',
    footerCountries: 'Romania · North Macedonia · Uzbekistan',
    toTop: 'Scroll to top',
    qualityPolicy: 'Quality Policy', privacyPolicy: 'Data Protection & Privacy Policy',
    footerServices: 'Services', industries: 'Industries', company: 'Company', getInTouch: 'Get in touch',
    rights: 'All rights reserved.', cookies: 'Cookies', disclaimer: 'Disclaimer',
  },
  de: {
    home: 'Startseite', about: 'Über uns', services: 'Leistungen', insights: 'Insights', blog: 'Blog', join: 'Karriere', contact: 'Kontakt', menu: 'Menü',
    contactUrl: '/de/kontakt/',
    serviceItems: [
      { href: '/de/kundensupport-auf-hochstem-niveau-mit-euroanswer-an-ihrer-seite/', label: 'Kundenservice-Outsourcing', note: 'CX, mehrsprachiger Support, technischer Helpdesk' },
      { href: '/staffing-services/', label: 'Personaldienstleistungen', note: 'Recruiting, Lohnabrechnung, Outstaffing (EN)' },
    ],
    footerAbout: 'Boutique-BPO-Unternehmen für mehrsprachige Kundenservice- und Personallösungen aus Standorten in der EU und außerhalb.',
    footerCountries: 'Rumänien · Nordmazedonien · Usbekistan',
    toTop: 'Nach oben',
    qualityPolicy: 'Qualitätspolitik (EN)', privacyPolicy: 'Datenschutzerklärung (EN)',
    footerServices: 'Leistungen', industries: 'Branchen', company: 'Unternehmen', getInTouch: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.', cookies: 'Cookies', disclaimer: 'Haftungsausschluss',
  },
  ru: {
    home: 'Главная', about: 'О нас', services: 'Услуги', insights: 'Insights', blog: 'Блог', join: 'Карьера', contact: 'Контакты', menu: 'Меню',
    contactUrl: '/contact/',
    serviceItems: [
      { href: '/ru/обслуживание-клиентов/', label: 'Аутсорсинг клиентской поддержки', note: 'CX, многоязычная поддержка, техническая поддержка' },
      { href: '/staffing-services/', label: 'Кадровые услуги', note: 'Подбор персонала, расчёт зарплаты, аутстаффинг (EN)' },
    ],
    footerAbout: 'Бутиковая BPO-компания: многоязычная клиентская поддержка и кадровые решения из центров в ЕС и за его пределами.',
    footerCountries: 'Румыния · Северная Македония · Узбекистан',
    toTop: 'Наверх',
    qualityPolicy: 'Политика качества (EN)', privacyPolicy: 'Политика конфиденциальности (EN)',
    footerServices: 'Услуги', industries: 'Отрасли', company: 'Компания', getInTouch: 'Связаться с нами',
    rights: 'Все права защищены.', cookies: 'Cookies', disclaimer: 'Отказ от ответственности',
  },
} satisfies Record<Lang, unknown>;
