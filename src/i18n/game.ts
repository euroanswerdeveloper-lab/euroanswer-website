// Jocul „Handled or Helped?” de pe Home — texte EN / DE / RU.
// Fiecare scenariu: mesajul clientului în limba lui originală (`original`), traducerea în limba
// vizitatorului și trei răspunsuri: best = „Helped”, ok = „Handled”, bad = „Lost”.
import type { Lang } from './ui';

type Scenario = {
  code: string; // limba clientului (afișată ca etichetă)
  name: string; // numele clientului
  avatar: string; // icoana clientului (din public/game/icons/)
  channelIcon: string;
  sectorIcon: string;
  original: string;
  channel: Record<Lang, string>;
  sector: Record<Lang, string>;
  translation: Record<Lang, string>;
  best: Record<Lang, string>;
  ok: Record<Lang, string>;
  bad: Record<Lang, string>;
};

export const scenarios: Scenario[] = [
  {
    code: 'DE', name: 'Lena, Berlin', avatar: 'worried', channelIcon: 'email', sectorIcon: 'package',
    original: 'Meine Bestellung ist seit 10 Tagen nicht angekommen. Ich brauche das Geschenk bis Freitag!',
    channel: { en: 'Email', de: 'E-Mail', ru: 'Email' },
    sector: { en: 'E-commerce', de: 'E-Commerce', ru: 'Электронная коммерция' },
    translation: {
      en: 'My order hasn’t arrived in 10 days. I need the gift by Friday!',
      de: 'Meine Bestellung ist seit 10 Tagen nicht angekommen. Ich brauche das Geschenk bis Freitag!',
      ru: 'Мой заказ не пришёл уже 10 дней. Мне нужен подарок к пятнице!',
    },
    best: {
      en: 'I’m sorry — I checked and your parcel is stuck at the depot. I’ve booked free express delivery for Thursday and emailed you the tracking link.',
      de: 'Das tut mir leid — Ihr Paket hängt im Depot fest. Ich habe eine kostenlose Expresszustellung für Donnerstag gebucht und Ihnen den Tracking-Link gemailt.',
      ru: 'Мне очень жаль — посылка застряла на складе. Я оформил(а) бесплатную экспресс-доставку на четверг и отправил(а) вам ссылку для отслеживания.',
    },
    ok: {
      en: 'Thank you for contacting us. Delivery times may vary. Please allow 5–7 more working days.',
      de: 'Vielen Dank für Ihre Nachricht. Lieferzeiten können variieren. Bitte warten Sie noch 5–7 Werktage.',
      ru: 'Спасибо за обращение. Сроки доставки могут меняться. Пожалуйста, подождите ещё 5–7 рабочих дней.',
    },
    bad: {
      en: 'Please contact the courier company directly.',
      de: 'Bitte wenden Sie sich direkt an den Paketdienst.',
      ru: 'Пожалуйста, обратитесь напрямую в курьерскую службу.',
    },
  },
  {
    code: 'IT', name: 'Marco, Milano', avatar: 'anxious', channelIcon: 'chat', sectorIcon: 'card',
    original: 'Non riesco ad accedere all’app e devo pagare l’affitto oggi!',
    channel: { en: 'Live chat', de: 'Live-Chat', ru: 'Онлайн-чат' },
    sector: { en: 'Banking', de: 'Banken', ru: 'Банк' },
    translation: {
      en: 'I can’t log in to the app and I have to pay my rent today!',
      de: 'Ich komme nicht in die App und muss heute die Miete bezahlen!',
      ru: 'Не могу войти в приложение, а мне сегодня нужно оплатить аренду!',
    },
    best: {
      en: 'Let’s fix it right now: I’ve sent a secure reset link to your phone, and I’ll stay in the chat until your payment goes through.',
      de: 'Das lösen wir sofort: Ich habe Ihnen einen sicheren Reset-Link aufs Handy geschickt und bleibe im Chat, bis Ihre Zahlung durch ist.',
      ru: 'Давайте решим это прямо сейчас: я отправил(а) защищённую ссылку для сброса на ваш телефон и останусь в чате, пока платёж не пройдёт.',
    },
    ok: {
      en: 'Please reinstall the app and try again later.',
      de: 'Bitte installieren Sie die App neu und versuchen Sie es später noch einmal.',
      ru: 'Пожалуйста, переустановите приложение и попробуйте позже.',
    },
    bad: {
      en: 'For security reasons we can’t help via chat. Please visit a branch.',
      de: 'Aus Sicherheitsgründen können wir im Chat nicht helfen. Bitte besuchen Sie eine Filiale.',
      ru: 'По соображениям безопасности мы не можем помочь в чате. Пожалуйста, обратитесь в отделение.',
    },
  },
  {
    code: 'FR', name: 'Claire, Lyon', avatar: 'weary', channelIcon: 'phone', sectorIcon: 'plane',
    original: 'Mon vol a été annulé et je suis bloquée à l’aéroport avec deux enfants.',
    channel: { en: 'Phone', de: 'Telefon', ru: 'Телефон' },
    sector: { en: 'Travel', de: 'Reisen', ru: 'Путешествия' },
    translation: {
      en: 'My flight was cancelled and I’m stuck at the airport with two kids.',
      de: 'Mein Flug wurde gestrichen und ich sitze mit zwei Kindern am Flughafen fest.',
      ru: 'Мой рейс отменили, и я застряла в аэропорту с двумя детьми.',
    },
    best: {
      en: 'I’m so sorry. I’ve rebooked you on the 18:40 flight with seats together and added meal vouchers for all three of you — they’re on your phone now.',
      de: 'Das tut mir sehr leid. Ich habe Sie auf den Flug um 18:40 Uhr mit Sitzplätzen nebeneinander umgebucht und Essensgutscheine für Sie alle drei hinzugefügt — sie sind schon auf Ihrem Handy.',
      ru: 'Мне очень жаль. Я пересадил(а) вас на рейс в 18:40 с местами рядом и добавил(а) талоны на питание для всех троих — они уже у вас в телефоне.',
    },
    ok: {
      en: 'You can request a refund using the form on our website within 30 days.',
      de: 'Sie können innerhalb von 30 Tagen über das Formular auf unserer Website eine Erstattung beantragen.',
      ru: 'Вы можете запросить возврат через форму на нашем сайте в течение 30 дней.',
    },
    bad: {
      en: 'Cancellations are decided by the airline, not by us.',
      de: 'Über Annullierungen entscheidet die Fluggesellschaft, nicht wir.',
      ru: 'Решения об отмене принимает авиакомпания, а не мы.',
    },
  },
  {
    code: 'RO', name: 'Andrei, Cluj', avatar: 'pouting', channelIcon: 'mobile', sectorIcon: 'gamepad',
    original: 'Am plătit un pachet în joc și nu l-am primit. Super dezamăgit 😡',
    channel: { en: 'Social media', de: 'Social Media', ru: 'Соцсети' },
    sector: { en: 'Gaming', de: 'Gaming', ru: 'Гейминг' },
    translation: {
      en: 'I paid for an in-game bundle and never got it. Super disappointed 😡',
      de: 'Ich habe ein In-Game-Paket bezahlt und es nie bekommen. Total enttäuscht 😡',
      ru: 'Я оплатил игровой набор и так его и не получил. Очень разочарован 😡',
    },
    best: {
      en: 'That’s frustrating — sorry! I found your payment, added the bundle to your account plus a small bonus for the trouble. Can you check now?',
      de: 'Das ist ärgerlich — sorry! Ich habe Ihre Zahlung gefunden, das Paket gutgeschrieben und einen kleinen Bonus obendrauf gelegt. Können Sie kurz nachsehen?',
      ru: 'Понимаю, как это неприятно — извините! Я нашёл(а) ваш платёж, зачислил(а) набор и добавил(а) небольшой бонус за неудобства. Проверите?',
    },
    ok: {
      en: 'We have forwarded your request to the relevant department. Ticket #48213.',
      de: 'Wir haben Ihre Anfrage an die zuständige Abteilung weitergeleitet. Ticket #48213.',
      ru: 'Мы передали ваш запрос в соответствующий отдел. Тикет #48213.',
    },
    bad: {
      en: 'In-game purchases are non-refundable according to our Terms.',
      de: 'In-Game-Käufe sind laut unseren AGB nicht erstattungsfähig.',
      ru: 'Согласно нашим условиям, внутриигровые покупки не возвращаются.',
    },
  },
  {
    code: 'ES', name: 'Javier, Madrid', avatar: 'raised-eyebrow', channelIcon: 'email', sectorIcon: 'money',
    original: 'Nuestra factura de este mes es el doble de lo normal. ¿Qué ha pasado?',
    channel: { en: 'Email', de: 'E-Mail', ru: 'Email' },
    sector: { en: 'B2B software', de: 'B2B-Software', ru: 'B2B-софт' },
    translation: {
      en: 'Our invoice this month is double the usual amount. What happened?',
      de: 'Unsere Rechnung ist diesen Monat doppelt so hoch wie sonst. Was ist passiert?',
      ru: 'Наш счёт в этом месяце вдвое больше обычного. Что случилось?',
    },
    best: {
      en: 'Good catch — a duplicate licence was billed by mistake. I’ve issued a credit note for the difference and set an alert so it can’t happen again.',
      de: 'Gut aufgepasst — eine Lizenz wurde versehentlich doppelt berechnet. Ich habe eine Gutschrift über die Differenz erstellt und eine Warnung eingerichtet, damit das nicht wieder passiert.',
      ru: 'Хорошо, что вы заметили: лицензию по ошибке выставили дважды. Я оформил(а) кредит-ноту на разницу и настроил(а) оповещение, чтобы это не повторилось.',
    },
    ok: {
      en: 'Invoices are generated automatically by our billing system.',
      de: 'Rechnungen werden automatisch von unserem Abrechnungssystem erstellt.',
      ru: 'Счета формируются автоматически нашей биллинговой системой.',
    },
    bad: {
      en: 'Please pay the invoice first — disputes are reviewed after payment.',
      de: 'Bitte zahlen Sie zuerst die Rechnung — Einwände prüfen wir nach Zahlungseingang.',
      ru: 'Сначала оплатите счёт — спорные вопросы рассматриваются после оплаты.',
    },
  },
];

export const gameText = {
  en: {
    eyebrow: 'Play · 60 seconds', title: 'Handled or helped?',
    intro: 'Be a Euroanswer agent for a minute. Five customers from five countries, five channels. Pick the reply you’d send — before the customer gives up.',
    rules: ['5 customer messages in their own language', 'AI translation, just like our agents get', '20 seconds per customer — speed earns bonus points'],
    press: 'Press start', best: 'Best', streak: 'Streak', patience: 'Customer patience', newRecord: 'New record!', level: 'Level',
    start: 'Start shift', round: 'Customer', of: 'of', translated: 'AI translation', pick: 'Choose your reply:',
    timeLeft: 'seconds left', next: 'Next customer →', finish: 'See my results →',
    verdict: { best: 'Helped ✓', ok: 'Handled', bad: 'Lost ✕', timeout: 'Too slow ✕' },
    explain: {
      best: 'You owned the problem and solved it in one contact. That’s how loyalty is built.',
      ok: 'Polite — but the customer still has the problem and will have to contact you again.',
      bad: 'The customer feels dismissed. They’re probably looking at your competitors right now.',
      timeout: 'The customer waited too long and left. Response time matters.',
    },
    score: 'Score', csat: 'Customer satisfaction (CSAT)', helped: 'customers truly helped',
    titles: ['Let’s train together', 'Promising trainee', 'Senior agent', 'CX champion'],
    resultText: 'Our agents make these calls 24/7 — in 20+ languages, for global brands. Imagine what they could do for your customers.',
    cta: 'Talk to us', again: 'Play again',
  },
  de: {
    eyebrow: 'Spielen · 60 Sekunden', title: 'Abgewickelt oder geholfen?',
    intro: 'Seien Sie eine Minute lang Euroanswer-Agent. Fünf Kunden aus fünf Ländern, fünf Kanäle. Wählen Sie die Antwort, die Sie senden würden — bevor der Kunde aufgibt.',
    rules: ['5 Kundennachrichten in ihrer eigenen Sprache', 'KI-Übersetzung, wie bei unseren Agents', '20 Sekunden pro Kunde — Tempo bringt Bonuspunkte'],
    press: 'Start drücken', best: 'Rekord', streak: 'Serie', patience: 'Geduld des Kunden', newRecord: 'Neuer Rekord!', level: 'Level',
    start: 'Schicht starten', round: 'Kunde', of: 'von', translated: 'KI-Übersetzung', pick: 'Wählen Sie Ihre Antwort:',
    timeLeft: 'Sekunden übrig', next: 'Nächster Kunde →', finish: 'Ergebnis ansehen →',
    verdict: { best: 'Geholfen ✓', ok: 'Abgewickelt', bad: 'Verloren ✕', timeout: 'Zu langsam ✕' },
    explain: {
      best: 'Sie haben das Problem übernommen und mit einem Kontakt gelöst. So entsteht Kundenbindung.',
      ok: 'Höflich — aber der Kunde hat das Problem immer noch und muss sich erneut melden.',
      bad: 'Der Kunde fühlt sich abgewimmelt. Wahrscheinlich schaut er sich gerade bei der Konkurrenz um.',
      timeout: 'Der Kunde hat zu lange gewartet und ist gegangen. Reaktionszeit zählt.',
    },
    score: 'Punkte', csat: 'Kundenzufriedenheit (CSAT)', helped: 'Kunden wirklich geholfen',
    titles: ['Wir trainieren gemeinsam', 'Vielversprechender Trainee', 'Senior Agent', 'CX-Champion'],
    resultText: 'Unsere Agents treffen diese Entscheidungen rund um die Uhr — in über 20 Sprachen, für globale Marken. Stellen Sie sich vor, was sie für Ihre Kunden tun könnten.',
    cta: 'Sprechen Sie mit uns', again: 'Nochmal spielen',
  },
  ru: {
    eyebrow: 'Игра · 60 секунд', title: 'Обработать или помочь?',
    intro: 'Побудьте оператором Euroanswer одну минуту. Пять клиентов из пяти стран, пять каналов. Выберите ответ, который вы бы отправили, — пока клиент не ушёл.',
    rules: ['5 сообщений клиентов на их родном языке', 'ИИ-перевод — как у наших операторов', '20 секунд на клиента — за скорость начисляются бонусы'],
    press: 'Нажмите старт', best: 'Рекорд', streak: 'Серия', patience: 'Терпение клиента', newRecord: 'Новый рекорд!', level: 'Уровень',
    start: 'Начать смену', round: 'Клиент', of: 'из', translated: 'ИИ-перевод', pick: 'Выберите ответ:',
    timeLeft: 'сек. осталось', next: 'Следующий клиент →', finish: 'Мои результаты →',
    verdict: { best: 'Помог ✓', ok: 'Обработал', bad: 'Потерян ✕', timeout: 'Слишком медленно ✕' },
    explain: {
      best: 'Вы взяли проблему на себя и решили её за одно обращение. Так и создаётся лояльность.',
      ok: 'Вежливо — но проблема клиента не решена, и ему придётся обратиться снова.',
      bad: 'Клиент чувствует, что от него отмахнулись. Скорее всего, он уже смотрит на конкурентов.',
      timeout: 'Клиент ждал слишком долго и ушёл. Скорость ответа важна.',
    },
    score: 'Очки', csat: 'Удовлетворённость клиентов (CSAT)', helped: 'клиентам действительно помогли',
    titles: ['Потренируемся вместе', 'Перспективный стажёр', 'Старший оператор', 'Чемпион CX'],
    resultText: 'Наши операторы принимают такие решения 24/7 — на 20+ языках, для глобальных брендов. Представьте, что они могут сделать для ваших клиентов.',
    cta: 'Связаться с нами', again: 'Сыграть ещё раз',
  },
} satisfies Record<Lang, unknown>;
