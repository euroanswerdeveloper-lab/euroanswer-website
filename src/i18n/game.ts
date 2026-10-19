// Jocul „Handled or Helped?” de pe Home — texte EN / DE / RU.
// Fiecare scenariu: mesajul clientului în limba lui originală (`original`), traducerea în limba
// vizitatorului și patru răspunsuri de lungimi apropiate, toate politicoase:
//   best = „Helped” (rezolvă corect) · ok = „Handled” (politicos, dar problema rămâne)
//   bad  = „Lost” (respinge clientul)   · trap = capcană (sună generos, dar e neautorizat sau nesigur)
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
  trap: Record<Lang, string>;
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
      en: 'Sorry for the wait. Tracking shows your parcel is stuck at the depot, so I’ve booked a free express re-delivery for Thursday and sent you the link.',
      de: 'Entschuldigen Sie die Wartezeit. Laut Tracking hängt Ihr Paket im Depot fest — ich habe eine kostenlose Expresszustellung für Donnerstag gebucht und Ihnen den Link geschickt.',
      ru: 'Простите за ожидание. По трекингу посылка застряла на складе — я оформил(а) бесплатную экспресс-доставку на четверг и отправил(а) вам ссылку.',
    },
    ok: {
      en: 'Sorry for the delay! Deliveries can take up to 14 days in busy periods. I’ve added a note to your order and will email you as soon as it moves.',
      de: 'Entschuldigung für die Verzögerung! In Stoßzeiten kann die Lieferung bis zu 14 Tage dauern. Ich habe eine Notiz hinterlegt und melde mich, sobald sich etwas tut.',
      ru: 'Извините за задержку! В пиковые периоды доставка занимает до 14 дней. Я добавил(а) пометку к заказу и напишу вам, как только он сдвинется.',
    },
    bad: {
      en: 'I understand your frustration. The parcel is now with the courier, so they’re best placed to help — here is their customer service number.',
      de: 'Ich verstehe Ihren Ärger. Das Paket liegt jetzt beim Paketdienst, der Ihnen am besten helfen kann — hier ist dessen Kundenservice-Nummer.',
      ru: 'Понимаю ваше раздражение. Посылка сейчас у курьерской службы, они лучше всего помогут — вот номер их поддержки.',
    },
    trap: {
      en: 'No problem — I’ll ship a second parcel by express today and refund the first one too, so you’re covered whatever happens.',
      de: 'Kein Problem — ich schicke heute ein zweites Paket per Express und erstatte das erste auch, dann sind Sie auf jeden Fall abgesichert.',
      ru: 'Без проблем — я сегодня отправлю вторую посылку экспрессом и верну деньги за первую, так что вы застрахованы в любом случае.',
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
      en: 'Let’s get you in now. I’ve verified your identity and sent a secure reset link by SMS — I’ll stay in the chat until your rent payment goes through.',
      de: 'Lassen Sie uns das jetzt lösen. Ich habe Ihre Identität geprüft und einen sicheren Reset-Link per SMS geschickt — ich bleibe im Chat, bis die Miete bezahlt ist.',
      ru: 'Давайте решим это сейчас. Я подтвердил(а) вашу личность и отправил(а) защищённую ссылку для сброса по SMS — останусь в чате, пока платёж не пройдёт.',
    },
    ok: {
      en: 'Sorry about that! Please reset your password from the login screen. If it still doesn’t work, our team can help you again tomorrow morning.',
      de: 'Das tut mir leid! Bitte setzen Sie Ihr Passwort über den Login-Bildschirm zurück. Klappt es nicht, hilft Ihnen unser Team morgen früh weiter.',
      ru: 'Сожалею! Пожалуйста, сбросьте пароль на экране входа. Если не получится, наша команда поможет вам завтра утром.',
    },
    bad: {
      en: 'For your security we can’t discuss account access in chat. Please visit your nearest branch with ID during opening hours.',
      de: 'Aus Sicherheitsgründen können wir den Kontozugang nicht im Chat besprechen. Bitte besuchen Sie mit Ausweis eine Filiale während der Öffnungszeiten.',
      ru: 'В целях безопасности мы не обсуждаем доступ к счёту в чате. Пожалуйста, обратитесь в отделение с документом в часы работы.',
    },
    trap: {
      en: 'No problem — just send me your card number and PIN here in the chat, and I’ll make the rent payment for you right away.',
      de: 'Kein Problem — schicken Sie mir einfach Kartennummer und PIN hier im Chat, dann überweise ich die Miete sofort für Sie.',
      ru: 'Без проблем — просто пришлите мне номер карты и PIN прямо в чат, и я сразу оплачу аренду за вас.',
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
      en: 'I’m so sorry. I’ve rebooked all three of you on tonight’s 18:40 flight with seats together, and added meal vouchers to your app.',
      de: 'Das tut mir sehr leid. Ich habe Sie alle drei auf den Flug heute um 18:40 Uhr mit Plätzen nebeneinander umgebucht und Essensgutscheine in Ihre App gelegt.',
      ru: 'Мне очень жаль. Я пересадил(а) всех троих на сегодняшний рейс в 18:40 с местами рядом и добавил(а) талоны на питание в ваше приложение.',
    },
    ok: {
      en: 'I’m sorry to hear that. You’re entitled to a refund or a free rebooking — I’ve emailed you the form so you can choose what suits you best.',
      de: 'Das tut mir leid. Sie haben Anspruch auf Erstattung oder kostenlose Umbuchung — ich habe Ihnen das Formular gemailt, damit Sie wählen können.',
      ru: 'Мне жаль это слышать. Вы имеете право на возврат или бесплатную перебронь — я отправил(а) вам форму по email, чтобы вы выбрали.',
    },
    bad: {
      en: 'Cancellations are decided by the airline for operational reasons. Please follow the departures board for the latest updates.',
      de: 'Annullierungen entscheidet die Fluggesellschaft aus betrieblichen Gründen. Bitte verfolgen Sie die Abflugtafel für aktuelle Informationen.',
      ru: 'Решения об отмене принимает авиакомпания по операционным причинам. Пожалуйста, следите за табло вылетов.',
    },
    trap: {
      en: 'Don’t worry — book any hotel and flight you like tonight and we’ll reimburse everything in full, no questions asked.',
      de: 'Keine Sorge — buchen Sie heute Abend ein beliebiges Hotel und einen Flug, wir erstatten alles in voller Höhe, ohne Fragen.',
      ru: 'Не волнуйтесь — бронируйте сегодня любой отель и рейс, мы полностью всё компенсируем без вопросов.',
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
      en: 'Sorry, that’s frustrating! I found your payment, added the bundle to your account and included a small bonus for the trouble. Can you check now?',
      de: 'Sorry, das ist ärgerlich! Ich habe Ihre Zahlung gefunden, das Paket gutgeschrieben und einen kleinen Bonus dazugelegt. Können Sie kurz nachsehen?',
      ru: 'Извините, это неприятно! Я нашёл(а) ваш платёж, зачислил(а) набор и добавил(а) небольшой бонус за неудобства. Проверите?',
    },
    ok: {
      en: 'Thanks for reporting this. I’ve opened ticket #48213 with our payments team — missing bundles are usually added within 72 hours.',
      de: 'Danke für den Hinweis. Ich habe Ticket #48213 bei unserem Zahlungsteam eröffnet — fehlende Pakete werden meist innerhalb von 72 Stunden gutgeschrieben.',
      ru: 'Спасибо, что сообщили. Я открыл(а) тикет #48213 в платёжном отделе — недостающие наборы обычно зачисляются в течение 72 часов.',
    },
    bad: {
      en: 'Under our terms, in-game purchases are final. If you believe there was an error, please contact your app store directly.',
      de: 'Laut unseren AGB sind In-Game-Käufe endgültig. Wenn Sie einen Fehler vermuten, wenden Sie sich bitte direkt an Ihren App Store.',
      ru: 'По нашим условиям внутриигровые покупки окончательны. Если считаете, что произошла ошибка, обратитесь напрямую в магазин приложений.',
    },
    trap: {
      en: 'Happy to fix it — just send me your account login and password in a private message and I’ll log in as you to check.',
      de: 'Gern behebe ich das — schicken Sie mir einfach Login und Passwort per Privatnachricht, dann melde ich mich als Sie an und prüfe es.',
      ru: 'С радостью исправлю — просто пришлите мне логин и пароль в личные сообщения, я зайду под вашим аккаунтом и проверю.',
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
      de: 'Gut aufgepasst — eine Lizenz wurde versehentlich doppelt berechnet. Ich habe eine Gutschrift über die Differenz erstellt und eine Warnung eingerichtet.',
      ru: 'Хорошо, что заметили: лицензию по ошибке выставили дважды. Я оформил(а) кредит-ноту на разницу и настроил(а) оповещение, чтобы это не повторилось.',
    },
    ok: {
      en: 'Thanks for flagging it. I’ve forwarded your invoice to our billing team, who will review it and get back to you within 5 working days.',
      de: 'Danke für den Hinweis. Ich habe Ihre Rechnung an unser Abrechnungsteam weitergeleitet, das sie prüft und sich innerhalb von 5 Werktagen meldet.',
      ru: 'Спасибо, что сообщили. Я передал(а) счёт в отдел биллинга — они проверят его и ответят в течение 5 рабочих дней.',
    },
    bad: {
      en: 'Invoices are generated automatically from your plan, so the amount should be correct. Please pay by the due date to avoid late fees.',
      de: 'Rechnungen werden automatisch aus Ihrem Tarif erstellt, der Betrag sollte also stimmen. Bitte zahlen Sie fristgerecht, um Gebühren zu vermeiden.',
      ru: 'Счета формируются автоматически по вашему тарифу, так что сумма должна быть верной. Оплатите вовремя, чтобы избежать пени.',
    },
    trap: {
      en: 'Just ignore this invoice entirely — I’ll cancel it in the system now and you won’t need to pay anything this month.',
      de: 'Ignorieren Sie diese Rechnung einfach — ich storniere sie jetzt im System, und Sie müssen diesen Monat gar nichts zahlen.',
      ru: 'Просто не обращайте внимания на этот счёт — я сейчас аннулирую его в системе, и в этом месяце платить ничего не нужно.',
    },
  },
];

export const gameText = {
  en: {
    eyebrow: 'Play · 100 seconds', title: 'Handled or helped?',
    intro: 'Be a Euroanswer agent for 100 seconds. Five customers from five countries, five channels — and four replies that all sound polite. Only one truly helps.',
    rules: ['5 customer messages in their own language', '4 replies each — watch out for traps', '100 seconds for the whole shift — speed earns bonus points'],
    press: 'Press start', best: 'Best', streak: 'Streak', patience: 'Shift time', newRecord: 'New record!', level: 'Level',
    start: 'Start shift', round: 'Customer', of: 'of', translated: 'AI translation', pick: 'Choose your reply:',
    timeLeft: 'seconds left', next: 'Next customer →', finish: 'See my results →',
    verdict: { best: 'Helped ✓', ok: 'Handled', bad: 'Lost ✕', trap: 'Trap ✕', timeout: 'Shift over ✕' },
    explain: {
      best: 'You owned the problem and solved it in one contact — safely and within policy. That’s how loyalty is built.',
      ok: 'Polite — but the customer still has the problem and will have to contact you again.',
      bad: 'The customer feels dismissed. They’re probably looking at your competitors right now.',
      trap: 'It sounds helpful, but it’s unauthorised or unsafe — it costs your client money or puts the customer’s data at risk.',
      timeout: 'Time ran out before this customer got an answer. Response time matters.',
    },
    score: 'Score', csat: 'Customer satisfaction (CSAT)', helped: 'customers truly helped',
    titles: ['Let’s train together', 'Promising trainee', 'Senior agent', 'CX champion'],
    resultText: 'Our agents make these calls 24/7 — in 20+ languages, for global brands. Imagine what they could do for your customers.',
    cta: 'Talk to us', again: 'Play again',
  },
  de: {
    eyebrow: 'Spielen · 100 Sekunden', title: 'Abgewickelt oder geholfen?',
    intro: 'Seien Sie 100 Sekunden lang Euroanswer-Agent. Fünf Kunden aus fünf Ländern, fünf Kanäle — und vier Antworten, die alle höflich klingen. Nur eine hilft wirklich.',
    rules: ['5 Kundennachrichten in ihrer eigenen Sprache', 'je 4 Antworten — Vorsicht vor Fallen', '100 Sekunden für die ganze Schicht — Tempo bringt Bonuspunkte'],
    press: 'Start drücken', best: 'Rekord', streak: 'Serie', patience: 'Schichtzeit', newRecord: 'Neuer Rekord!', level: 'Level',
    start: 'Schicht starten', round: 'Kunde', of: 'von', translated: 'KI-Übersetzung', pick: 'Wählen Sie Ihre Antwort:',
    timeLeft: 'Sekunden übrig', next: 'Nächster Kunde →', finish: 'Ergebnis ansehen →',
    verdict: { best: 'Geholfen ✓', ok: 'Abgewickelt', bad: 'Verloren ✕', trap: 'Falle ✕', timeout: 'Schicht vorbei ✕' },
    explain: {
      best: 'Sie haben das Problem übernommen und mit einem Kontakt gelöst — sicher und regelkonform. So entsteht Kundenbindung.',
      ok: 'Höflich — aber der Kunde hat das Problem immer noch und muss sich erneut melden.',
      bad: 'Der Kunde fühlt sich abgewimmelt. Wahrscheinlich schaut er sich gerade bei der Konkurrenz um.',
      trap: 'Klingt hilfsbereit, ist aber nicht autorisiert oder unsicher — es kostet Ihren Auftraggeber Geld oder gefährdet die Daten des Kunden.',
      timeout: 'Die Zeit lief ab, bevor dieser Kunde eine Antwort bekam. Reaktionszeit zählt.',
    },
    score: 'Punkte', csat: 'Kundenzufriedenheit (CSAT)', helped: 'Kunden wirklich geholfen',
    titles: ['Wir trainieren gemeinsam', 'Vielversprechender Trainee', 'Senior Agent', 'CX-Champion'],
    resultText: 'Unsere Agents treffen diese Entscheidungen rund um die Uhr — in über 20 Sprachen, für globale Marken. Stellen Sie sich vor, was sie für Ihre Kunden tun könnten.',
    cta: 'Sprechen Sie mit uns', again: 'Nochmal spielen',
  },
  ru: {
    eyebrow: 'Игра · 100 секунд', title: 'Обработать или помочь?',
    intro: 'Побудьте оператором Euroanswer 100 секунд. Пять клиентов из пяти стран, пять каналов — и четыре вежливых ответа. Но по-настоящему помогает только один.',
    rules: ['5 сообщений клиентов на их родном языке', 'по 4 ответа — остерегайтесь ловушек', '100 секунд на всю смену — за скорость начисляются бонусы'],
    press: 'Нажмите старт', best: 'Рекорд', streak: 'Серия', patience: 'Время смены', newRecord: 'Новый рекорд!', level: 'Уровень',
    start: 'Начать смену', round: 'Клиент', of: 'из', translated: 'ИИ-перевод', pick: 'Выберите ответ:',
    timeLeft: 'сек. осталось', next: 'Следующий клиент →', finish: 'Мои результаты →',
    verdict: { best: 'Помог ✓', ok: 'Обработал', bad: 'Потерян ✕', trap: 'Ловушка ✕', timeout: 'Смена окончена ✕' },
    explain: {
      best: 'Вы взяли проблему на себя и решили её за одно обращение — безопасно и по правилам. Так и создаётся лояльность.',
      ok: 'Вежливо — но проблема клиента не решена, и ему придётся обратиться снова.',
      bad: 'Клиент чувствует, что от него отмахнулись. Скорее всего, он уже смотрит на конкурентов.',
      trap: 'Звучит заботливо, но это неразрешено или небезопасно — заказчик теряет деньги, а данные клиента оказываются под угрозой.',
      timeout: 'Время вышло, прежде чем клиент получил ответ. Скорость ответа важна.',
    },
    score: 'Очки', csat: 'Удовлетворённость клиентов (CSAT)', helped: 'клиентам действительно помогли',
    titles: ['Потренируемся вместе', 'Перспективный стажёр', 'Старший оператор', 'Чемпион CX'],
    resultText: 'Наши операторы принимают такие решения 24/7 — на 20+ языках, для глобальных брендов. Представьте, что они могут сделать для ваших клиентов.',
    cta: 'Связаться с нами', again: 'Сыграть ещё раз',
  },
} satisfies Record<Lang, unknown>;
