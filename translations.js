/**
 * Arena 90 Sports Bar — Internationalization
 * Supports: Deutsch (de) — default | English (en)
 *
 * Usage:
 *   data-i18n="key"             → sets element.textContent
 *   data-i18n-html="key"        → sets element.innerHTML (allows nested tags)
 *   data-i18n-placeholder="key" → sets input/textarea placeholder attribute
 *   data-i18n-aria="key"        → sets aria-label attribute
 *   data-i18n-title="key"       → sets title attribute
 */

window.i18n = (function () {

  /* ─── Translation strings ───────────────────────────────────── */
  const t = {

    /* ══════════════════════ GERMAN (default) ══════════════════ */
    de: {

      /* Page metadata */
      'meta.title':       'Arena 90 Sports Bar – München',
      'meta.description': 'Arena 90 Sports Bar München — Das Spiel erleben, großartiges Essen genießen, gemeinsam feiern. Jetzt Tisch reservieren.',

      /* Navigation */
      'nav.about':      'Über uns',
      'nav.menu':       'Speisekarte',
      'nav.res':        'Reservierungen',
      'nav.careers':    'Karriere',
      'nav.contact':    'Kontakt',
      'nav.book':       'Tisch buchen',

      /* Hero */
      'hero.eyebrow':   'Das ultimative Sporterlebnis',
      'hero.subtitle':  'Das Spiel erleben. Großartiges Essen genießen. Gemeinsam feiern.',
      'hero.cta.res':   'Tisch reservieren',
      'hero.cta.menu':  'Speisekarte',
      'hero.scroll':    'Scrollen',
      'hero.stat.screens': 'HD-Bildschirme',
      'hero.stat.items':   'Menüpunkte',
      'hero.stat.beers':   'Craft-Biere',
      'hero.stat.seats':   'Sitzplätze',

      /* About */
      'about.label':    'Unsere Geschichte',
      'about.title':    'Wo Fans<br><span class="text-accent">zusammenkommen</span>',
      'about.p1':       'Die Arena 90 Sports Bar ist ein Ort, an dem Fans zusammenkommen, um die größten Spiele in einer lebhaften Atmosphäre zu erleben. Wir kombinieren hervorragendes Essen, kalte Getränke und hochauflösende Bildschirme, um das perfekte Sporterlebnis zu schaffen.',
      'about.p2':       'Ob beim Champions-League-Finale, am Bundesliga-Spieltag oder einfach nach der Arbeit auf ein kühles Bier — die Arena 90 ist Ihr zweites Zuhause. Unsere Leidenschaft für Sport und Gastfreundschaft ist in jeden Teil des Erlebnisses eingewoben.',
      'about.feat1.title': 'Live-Übertragungen',
      'about.feat1.text':  'Jedes Spiel, jede Liga — live auf über 40 HD-Bildschirmen.',
      'about.feat2.title': 'Spieltag-Küche',
      'about.feat2.text':  'Burger, Wings, Pommes und mehr — Fuel für leidenschaftliche Fans.',
      'about.feat3.title': 'Craft-Getränke',
      'about.feat3.text':  '30+ Craft-Biere, Cocktails und Premium-Spirituosen vom Fass.',
      'about.feat4.title': 'Private Events',
      'about.feat4.text':  'Bereich buchen für Geburtstage, Public Viewings und Firmenevents.',
      'about.img1.alt': 'Arena 90 Sports Bar Innenraum mit HD-Bildschirmen',
      'about.img2.alt': 'Craft-Biere und Cocktails an der Bar',
      'about.img3.alt': 'Fußballfans beim Spielen',

      /* Menu section */
      'menu.label':     'Essen & Trinken',
      'menu.title':     'Die <span class="text-accent">Speisekarte</span>',
      'menu.subtitle':  'Unsere Speisekarte umfasst Burger, Wings, Craft-Biere, Cocktails und klassische Spieltag-Favoriten — frisch und schnell serviert.',
      'menu.c1.title':  'Burger & Hauptgerichte',
      'menu.c1.text':   'Smash Burger, belegte Sandwiches und herzhafte Gerichte für jeden Appetit.',
      'menu.c2.title':  'Wings & Sharing',
      'menu.c2.text':   'Klassische Buffalo Wings, Loaded Nachos und Sharing-Platten für die Runde.',
      'menu.c3.title':  'Craft-Biere',
      'menu.c3.text':   '30+ rotierende Zapfhähne mit lokalen und internationalen Craft-Bieren.',
      'menu.c4.title':  'Cocktails & Spirits',
      'menu.c4.text':   'Signature Cocktails, Premium-Spirituosen und eine vollständige Cocktailkarte.',
      'menu.cta':       'Vollständige Speisekarte',

      /* Reservation section */
      'res.label':      'Ihren Platz sichern',
      'res.title':      'Tisch<br><span class="text-accent">reservieren</span>',
      'res.subtitle':   'Reservieren Sie Ihren Tisch im Voraus und genießen Sie den besten Platz im Haus beim großen Spiel.',
      'res.p1.title':   'Prioritätssitzplätze',
      'res.p1.text':    'Reservierte Tische erhalten die besten Positionen vor den Hauptbildschirmen.',
      'res.p2.title':   'Dedizierter Tischservice',
      'res.p2.text':    'Ihr eigener Kellner, damit Sie sich voll aufs Spiel konzentrieren können.',
      'res.p3.title':   'Willkommensgetränke',
      'res.p3.text':    'Kostenlose Begrüßungsgetränke für Gruppen ab 6 Personen bei Voranmeldung.',
      'res.card.title': 'Reservierung anfragen',
      'res.card.desc':  'Füllen Sie Ihre Daten aus — wir bestätigen Ihren Tisch innerhalb von 2 Stunden.',
      'res.label.name':     'Vollständiger Name',
      'res.label.email':    'E-Mail-Adresse',
      'res.label.phone':    'Telefonnummer',
      'res.label.guests':   'Anzahl Gäste',
      'res.label.date':     'Datum',
      'res.label.time':     'Uhrzeit',
      'res.label.occasion': 'Anlass',
      'res.label.notes':    'Besondere Wünsche',
      'res.ph.name':        'Max Mustermann',
      'res.ph.email':       'max@beispiel.de',
      'res.ph.phone':       '+49 89 000 0000',
      'res.ph.guests':      '2',
      'res.ph.time':        'Uhrzeit wählen',
      'res.ph.occasion':    'Anlass wählen (optional)',
      'res.ph.notes':       'Ernährungsanforderungen, Sitzwünsche, Barrierefreiheit…',
      'res.occ.regular':    'Normaler Besuch',
      'res.occ.matchday':   'Bundesliga / Public Viewing',
      'res.occ.birthday':   'Geburtstagsfeier',
      'res.occ.corporate':  'Firmenveranstaltung',
      'res.occ.party':      'Private Party',
      'res.occ.other':      'Sonstiges',
      'res.submit':         'Tisch reservieren',
      'res.success.title':  'Reservierung eingegangen!',
      'res.success.text':   'Wir bestätigen Ihren Tisch in der Arena 90 innerhalb von 2 Stunden.',
      'res.hours.1':        'Mo–Do: 15:00 – 01:00 Uhr',
      'res.hours.2':        'Fr–Sa: 12:00 – 03:00 Uhr',
      'res.hours.3':        'So: 12:00 – 00:00 Uhr',
      'res.address':        'Stadionstraße 90, 80809 München',
      'res.phone.alt':      'Oder rufen Sie uns an:',

      /* Careers section */
      'careers.label':    'Unser Team',
      'careers.title':    'Arbeiten wo die<br><span class="text-accent">Action ist</span>',
      'careers.subtitle': 'Wir suchen immer leidenschaftliche Menschen für unser Gastgewerbe- und Serviceteam. Wenn Sie in einem schnellen, energetischen Umfeld aufblühen und Sport lieben, freuen wir uns von Ihnen zu hören.',
      'careers.cta':      'Stellenangebote ansehen',
      'careers.img.alt':  'Freundliches Barpersonal in der Arena 90',
      'careers.role.bar':    'Barteam',
      'careers.role.kitchen':'Küchenteam',
      'careers.role.foh':    'Service',
      'careers.role.events': 'Eventkoordination',
      'careers.role.manager':'Management',
      'careers.role.security':'Sicherheit',

      /* Contact section */
      'contact.label':       'Kontakt aufnehmen',
      'contact.title':       'Kontakt<br><span class="text-accent">zu uns</span>',
      'contact.brand.text':  'Arena 90 Sports Bar — Ihr Ziel für Live-Sport, Craft-Drinks und großartiges Essen. Fans vereinen seit 2018.',
      'contact.addr.label':  'Adresse',
      'contact.addr.value':  'Stadionstraße 90<br>80809 München',
      'contact.phone.label': 'Telefon',
      'contact.gen.label':   'Allgemein',
      'contact.res.label':   'Reservierungen',
      'contact.evt.label':   'Veranstaltungen',
      'contact.car.label':   'Karriere',
      'contact.sup.label':   'Support',
      'contact.form.title':  'Nachricht senden',
      'contact.form.desc':   'Wir lesen jede Nachricht und antworten innerhalb von 24 Stunden.',
      'contact.label.name':      'Vollständiger Name',
      'contact.label.email':     'E-Mail-Adresse',
      'contact.label.topic':     'Thema',
      'contact.label.message':   'Nachricht',
      'contact.ph.name':         'Max Mustermann',
      'contact.ph.email':        'max@beispiel.de',
      'contact.ph.topic':        'Thema auswählen',
      'contact.ph.message':      'Wie können wir Ihnen heute helfen?',
      'contact.topic.general':   'Allgemeine Anfrage',
      'contact.topic.res':       'Reservierungsfrage',
      'contact.topic.event':     'Veranstaltungsanfrage',
      'contact.topic.menu':      'Speisekarteninformation',
      'contact.topic.feedback':  'Feedback & Beschwerden',
      'contact.topic.press':     'Presse & Medien',
      'contact.topic.other':     'Sonstiges',
      'contact.submit':          'Nachricht senden',
      'contact.success.title':   'Nachricht gesendet!',
      'contact.success.text':    'Vielen Dank. Wir melden uns innerhalb von 24 Stunden.',

      /* Footer */
      'footer.copy':    '© 2025 Arena 90 Sports Bar. Alle Rechte vorbehalten.',
      'footer.home':    'Startseite',
      'footer.menu':    'Speisekarte',
      'footer.careers': 'Karriere',
      'footer.imprint': 'Impressum',
      'footer.contact': 'Kontakt',

      /* Subpage common */
      'sub.back': 'Zurück zur Startseite',

      /* Validation errors */
      'err.required':    'Dieses Feld ist erforderlich.',
      'err.email':       'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      'err.phone':       'Bitte geben Sie eine gültige Telefonnummer ein.',
      'err.guests.min':  'Bitte mindestens 1 Gast angeben.',
      'err.guests.max':  'Maximale Gruppengröße ist 40. Kontaktieren Sie uns für größere Gruppen.',
      'err.date.empty':  'Bitte wählen Sie ein Datum.',
      'err.date.future': 'Bitte wählen Sie heute oder ein zukünftiges Datum.',
      'err.select':      'Bitte wählen Sie eine Option.',
      'err.minlength':   'Bitte geben Sie mindestens {min} Zeichen ein.',

      /* ARIA */
      'aria.nav':     'Hauptnavigation',
      'aria.lang':    'Sprache / Language',
      'aria.social.fb':  'Arena 90 auf Facebook folgen',
      'aria.social.ig':  'Arena 90 auf Instagram folgen',
      'aria.social.x':   'Arena 90 auf X (Twitter) folgen',
      'aria.social.tt':  'Arena 90 auf TikTok folgen',
      'aria.social.yt':  'Arena 90 auf YouTube abonnieren',
      'aria.toggle':  'Navigation ein-/ausblenden',
      'aria.hero':    'Hintergrundbild der Sports Bar',
    },

    /* ══════════════════════ ENGLISH ═══════════════════════════ */
    en: {

      'meta.title':       'Arena 90 Sports Bar – Munich',
      'meta.description': 'Arena 90 Sports Bar Munich — Watch the game, enjoy great food, celebrate together. Reserve your table today.',

      'nav.about':   'About',
      'nav.menu':    'Menu',
      'nav.res':     'Reservations',
      'nav.careers': 'Careers',
      'nav.contact': 'Contact',
      'nav.book':    'Book a Table',

      'hero.eyebrow':  'The Ultimate Sports Experience',
      'hero.subtitle': 'Watch the Game. Enjoy Great Food. Celebrate Together.',
      'hero.cta.res':  'Reserve a Table',
      'hero.cta.menu': 'View Menu',
      'hero.scroll':   'Scroll',
      'hero.stat.screens': 'HD Screens',
      'hero.stat.items':   'Menu Items',
      'hero.stat.beers':   'Craft Beers',
      'hero.stat.seats':   'Seats Available',

      'about.label': 'Our Story',
      'about.title': 'Where Fans Come<br><span class="text-accent">Together</span>',
      'about.p1':    'Arena 90 Sports Bar is a place where fans gather to watch the biggest games in a lively atmosphere. We combine great food, cold drinks, and high-definition screens to create the perfect sports experience.',
      'about.p2':    'Whether you\'re here for the Champions League final, a Bundesliga matchday, or just to enjoy a cold one after work — Arena 90 is your home away from home. Our passion for sport and hospitality is woven into every part of the experience.',
      'about.feat1.title': 'Live Broadcasts',
      'about.feat1.text':  'Every match, every league — streamed live on 40+ HD screens.',
      'about.feat2.title': 'Game-Day Food',
      'about.feat2.text':  'Burgers, wings, loaded fries and more to fuel the passion.',
      'about.feat3.title': 'Craft Drinks',
      'about.feat3.text':  '30+ craft beers, cocktails, and premium spirits on tap.',
      'about.feat4.title': 'Private Events',
      'about.feat4.text':  'Book a section for your group — birthdays, viewings, and more.',
      'about.img1.alt': 'Arena 90 Sports Bar interior with HD screens',
      'about.img2.alt': 'Craft beers and cocktails at the bar',
      'about.img3.alt': 'Soccer fans watching the game',

      'menu.label':    'Food & Drinks',
      'menu.title':    'The <span class="text-accent">Menu</span>',
      'menu.subtitle': 'Our menu includes burgers, wings, craft beers, cocktails, and classic game-day favorites — made fresh and served fast so you never miss a moment.',
      'menu.c1.title': 'Burgers & Mains',
      'menu.c1.text':  'Smash burgers, loaded sandwiches, and hearty mains to satisfy every appetite.',
      'menu.c2.title': 'Wings & Sharers',
      'menu.c2.text':  'Classic buffalo wings, loaded nachos, and sharing platters built for the crowd.',
      'menu.c3.title': 'Craft Beers',
      'menu.c3.text':  '30+ rotating taps featuring local and international craft beers and lagers.',
      'menu.c4.title': 'Cocktails & Spirits',
      'menu.c4.text':  'Signature cocktails, premium spirits, and a full cocktail menu for game night.',
      'menu.cta':      'View Full Menu',

      'res.label':    'Book Your Spot',
      'res.title':    'Reserve Your<br><span class="text-accent">Table</span>',
      'res.subtitle': 'Book your table in advance and enjoy the best seat in the house during major matches. Secure your spot for the big game today.',
      'res.p1.title': 'Priority Seating',
      'res.p1.text':  'Reserved tables get prime viewing positions in front of the main screens.',
      'res.p2.title': 'Dedicated Table Service',
      'res.p2.text':  'Your own server so you can focus on the game, not queuing at the bar.',
      'res.p3.title': 'Welcome Drinks',
      'res.p3.text':  'Complimentary welcome drinks for groups of 6 or more with advance booking.',
      'res.card.title': 'Make a Reservation',
      'res.card.desc':  'Fill in your details and we\'ll confirm your table within 2 hours.',
      'res.label.name':     'Full Name',
      'res.label.email':    'Email',
      'res.label.phone':    'Phone',
      'res.label.guests':   'Guests',
      'res.label.date':     'Date',
      'res.label.time':     'Time',
      'res.label.occasion': 'Occasion',
      'res.label.notes':    'Special Requests',
      'res.ph.name':        'Jane Smith',
      'res.ph.email':       'jane@example.com',
      'res.ph.phone':       '+49 89 000 0000',
      'res.ph.guests':      '2',
      'res.ph.time':        'Select a time',
      'res.ph.occasion':    'Select an occasion (optional)',
      'res.ph.notes':       'Dietary requirements, seating preferences, accessibility needs…',
      'res.occ.regular':    'Regular Visit',
      'res.occ.matchday':   'Match Day Viewing',
      'res.occ.birthday':   'Birthday Celebration',
      'res.occ.corporate':  'Corporate Event',
      'res.occ.party':      'Private Party',
      'res.occ.other':      'Other',
      'res.submit':         'Reserve My Table',
      'res.success.title':  'Reservation received!',
      'res.success.text':   'We\'ll confirm your table at Arena 90 within 2 hours.',
      'res.hours.1':        'Mon–Thu: 3 PM – 1 AM',
      'res.hours.2':        'Fri–Sat: 12 PM – 3 AM',
      'res.hours.3':        'Sun: 12 PM – 12 AM',
      'res.address':        'Stadionstraße 90, 80809 Munich',
      'res.phone.alt':      'Or call us:',

      'careers.label':    'Join Our Team',
      'careers.title':    'Work Where the<br><span class="text-accent">Action Is</span>',
      'careers.subtitle': 'We are always looking for passionate people to join our team in hospitality and service. If you thrive in a fast-paced, energetic environment and love sport, we want to hear from you.',
      'careers.cta':      'View Careers',
      'careers.img.alt':  'Friendly bar staff serving guests at Arena 90',
      'careers.role.bar':     'Bar Staff',
      'careers.role.kitchen': 'Kitchen Team',
      'careers.role.foh':     'Front of House',
      'careers.role.events':  'Event Coordinator',
      'careers.role.manager': 'Manager',
      'careers.role.security':'Security',

      'contact.label':      'Get In Touch',
      'contact.title':      'Contact<br><span class="text-accent">Us</span>',
      'contact.brand.text': 'Arena 90 Sports Bar — your premier destination for live sports, craft drinks, and great food. Bringing fans together since 2018.',
      'contact.addr.label': 'Address',
      'contact.addr.value': 'Stadionstraße 90<br>80809 Munich, Germany',
      'contact.phone.label':'Phone',
      'contact.gen.label':  'General',
      'contact.res.label':  'Reservations',
      'contact.evt.label':  'Events',
      'contact.car.label':  'Careers',
      'contact.sup.label':  'Support',
      'contact.form.title': 'Send a Message',
      'contact.form.desc':  'We read every message and reply within 24 hours.',
      'contact.label.name':     'Full Name',
      'contact.label.email':    'Email',
      'contact.label.topic':    'Topic',
      'contact.label.message':  'Message',
      'contact.ph.name':        'Jane Smith',
      'contact.ph.email':       'jane@example.com',
      'contact.ph.topic':       'Select a topic',
      'contact.ph.message':     'How can we help you today?',
      'contact.topic.general':  'General Inquiry',
      'contact.topic.res':      'Reservation Question',
      'contact.topic.event':    'Private Event Inquiry',
      'contact.topic.menu':     'Menu Information',
      'contact.topic.feedback': 'Feedback & Complaints',
      'contact.topic.press':    'Press & Media',
      'contact.topic.other':    'Other',
      'contact.submit':         'Send Message',
      'contact.success.title':  'Message sent!',
      'contact.success.text':   'Thanks for reaching out. We\'ll reply within 24 hours.',

      'footer.copy':    '© 2025 Arena 90 Sports Bar. All rights reserved.',
      'footer.home':    'Home',
      'footer.menu':    'Menu',
      'footer.careers': 'Careers',
      'footer.imprint': 'Imprint / Legal',
      'footer.contact': 'Contact',

      'sub.back': 'Back to Home',

      'err.required':    'This field is required.',
      'err.email':       'Please enter a valid email address.',
      'err.phone':       'Please enter a valid phone number.',
      'err.guests.min':  'Please enter at least 1 guest.',
      'err.guests.max':  'Maximum party size is 40. Contact us for larger groups.',
      'err.date.empty':  'Please select a date.',
      'err.date.future': 'Please choose today or a future date.',
      'err.select':      'Please select an option.',
      'err.minlength':   'Please enter at least {min} characters.',

      'aria.nav':        'Main navigation',
      'aria.lang':       'Sprache / Language',
      'aria.social.fb':  'Follow Arena 90 on Facebook',
      'aria.social.ig':  'Follow Arena 90 on Instagram',
      'aria.social.x':   'Follow Arena 90 on X (Twitter)',
      'aria.social.tt':  'Follow Arena 90 on TikTok',
      'aria.social.yt':  'Subscribe on YouTube',
      'aria.toggle':     'Toggle navigation',
      'aria.hero':       'Sports bar atmosphere background',
    },
  };

  /* ─── State ─────────────────────────────────────────────────── */
  const STORAGE_KEY = 'arena90-lang';
  let currentLang = 'de';

  /* ─── Detect initial language ────────────────────────────────── */
  function detectLang() {
    const saved   = localStorage.getItem(STORAGE_KEY);
    if (saved === 'de' || saved === 'en') return saved;
    const browser = (navigator.language || navigator.userLanguage || 'de').slice(0, 2).toLowerCase();
    return browser === 'en' ? 'en' : 'de'; // default to German
  }

  /* ─── Get a single translation ───────────────────────────────── */
  function get(key, lang) {
    lang = lang || currentLang;
    return (t[lang] && t[lang][key]) || (t['de'] && t['de'][key]) || key;
  }

  /* ─── Apply all translations to the DOM ──────────────────────── */
  function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Update lang toggle button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = get(key, lang);
      if (val !== undefined) el.textContent = val;
    });

    // HTML content (allows nested markup like <br> and <span>)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      const val = get(key, lang);
      if (val !== undefined) el.innerHTML = val;
    });

    // Placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const val = get(key, lang);
      if (val !== undefined) el.placeholder = val;
    });

    // aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      const val = get(key, lang);
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    // title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      const val = get(key, lang);
      if (val !== undefined) el.title = val;
    });

    // Page <title> and meta description
    const metaTitle = get('meta.title', lang);
    if (metaTitle) document.title = metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = get('meta.description', lang);

    // Long-form bilingual content blocks (.de-text / .en-text)
    document.querySelectorAll('.de-text').forEach(el => { el.hidden = lang !== 'de'; });
    document.querySelectorAll('.en-text').forEach(el => { el.hidden = lang !== 'en'; });
  }

  /* ─── Initialize ─────────────────────────────────────────────── */
  function init() {
    const lang = detectLang();

    // Wire toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.lang !== currentLang) {
          applyTranslations(btn.dataset.lang);
        }
      });
    });

    applyTranslations(lang);
  }

  /* ─── Public API ─────────────────────────────────────────────── */
  return { init, get, applyTranslations, getLang: () => currentLang };

})();
