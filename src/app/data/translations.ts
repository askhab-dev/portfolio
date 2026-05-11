export type Lang = 'ru' | 'en';

export const translations = {
  ru: {
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      skills: 'Навыки',
      education: 'Образование',
      contact: 'Контакты',
    },
    hero: {
      name: 'Асхаб',
      role: 'Frontend-разработчик',
      location: 'Москва',
      description: 'Разрабатываю понятные и быстрые интерфейсы',
      cta: 'Связаться',
      scrollHint: 'прокрутите вниз',
    },
    about: {
      sectionLabel: 'Обо мне',
      title: 'Создаю интерфейсы,\nкоторые работают.',
      text: 'Мне 22 года, я frontend-разработчик из Москвы. Люблю наводить порядок в коде и улучшать пользовательский опыт. В работе ценю чистую архитектуру, командное взаимодействие и внимание к деталям.',
    },
    experience: {
      sectionLabel: 'Опыт работы',
      title: 'Профессиональный путь',
      present: 'по настоящее время',
      jobs: [
        {
          company: 'certit.ru',
          role: 'Руководитель команды Frontend',
          period: 'апрель 2026 — настоящее время',
          description: [
            'Поддержка, адаптация и code-review стажёров',
            'Разработка интеграции <a href="https://amocrm.ru" target="_blank" rel="noopener noreferrer">amoCRM</a> и Elma365 для управления акциями при продаже недвижимости',
            'Разработка интеграционного модуля Elma365 для автоматизации отправки документов в Контур.Диадок',
          ],
        },
        {
          company: 'amoCRM',
          role: 'Руководитель отдела интеграций',
          period: 'октябрь 2025 — март 2026',
          description: [
            'Руководство отделом из 6 разработчиков и 2 менеджеров: планирование, распределение нагрузки, найм',
            'Координация взаимодействия с другими отделами',
            'Менторство и код-ревью команды',
          ],
        },
        {
          company: 'amoCRM',
          role: 'Frontend-разработчик · Отдел автоматизации',
          period: 'январь — октябрь 2025',
          description: [
            'Разработка функционала обработки просроченных счетов в биллинге партнёрского кабинета <a href="https://amostart.ru" target="_blank" rel="noopener noreferrer">amostart.ru</a>',
            'Вёрстка сетки опций и добавление новых тарифов в клиентский и партнёрский биллинги <a href="https://amocrm.ru" target="_blank" rel="noopener noreferrer">amoCRM</a> — Enterprise Lite 30, Enterprise 200, Лимиты+, API-фильтрация',
            'Написание unit-тестов для биллинговых опций и тарифов',
            'Настройка SEO и аналитики (Яндекс.Метрика, Top.Mail.ru, Google Tag Manager, BotFAQtor)',
            'Вёрстка HTML-писем для массовых рассылок',
            'Разработка и вёрстка лендингов бизнес-конференций: <a href="https://antinaim.ru" target="_blank" rel="noopener noreferrer">antinaim.ru</a>, <a href="https://startconf.ru" target="_blank" rel="noopener noreferrer">startconf.ru</a>, <a href="https://crmday.ru" target="_blank" rel="noopener noreferrer">crmday.ru</a>',
            'Создание виджетов для автоматизации CRM-процессов',
            'Оптимизация <a href="https://antinaim.ru" target="_blank" rel="noopener noreferrer">antinaim.ru</a>: перевод сборки с Gulp на Webpack — бандл -15%, рефакторинг PHP → Twig -70% кода',
            'Вёрстка страницы кейсов тарифа Enterprise на <a href="https://amoprime.ru" target="_blank" rel="noopener noreferrer">amoprime.ru</a>',
            'Наставлял junior-разработчика: 30+ код-ревью в месяц',
            'Опыт с монолитами, микросервисами, SSR/CSR, FSD-архитектурой',
          ],
        },
        {
          company: 'amoCRM',
          role: 'Frontend-разработчик · Отдел интеграций',
          period: '2024',
          description: [
            'Разработка виджетов-интеграций в CRM',
            'Поддержка интеграторов и аудит кода виджетов в amoMarket',
            'Дополнение и актуализация API-документации <a href="https://amocrm.ru" target="_blank" rel="noopener noreferrer">amoCRM</a>',
          ],
        },
      ],
    },
    skills: {
      sectionLabel: 'Навыки',
      title: 'Технологический стек',
      categories: [
        {
          name: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind', 'Zustand', 'Redux', 'jQuery', 'Backbone', 'Twig', 'Svelte', 'Framer Motion', 'TanStack Query', 'SWR', 'Recharts', 'i18next', 'Jest', 'Playwright', 'React Hook Form'],
        },
        {
          name: 'Инструменты',
          items: ['Webpack', 'Vite', 'Git', 'GitLab', 'Figma', 'Postman', 'Docker', 'Make', 'VSCode', 'Ubuntu', 'Vercel', 'npm', 'yarn', 'ESLint'],
        },
        {
          name: 'Backend (основы)',
          items: ['PHP', 'Node.js', 'MongoDB'],
        },
        {
          name: 'Дополнительно',
          items: ['SEO-оптимизация', 'Аналитика', 'Адаптивная вёрстка', 'Code review', 'Legacy-код', 'Английский B2', 'Agile / Scrum / Kanban'],
        },
      ],
    },
    education: {
      sectionLabel: 'Образование',
      title: 'Бакалавриат',
      institution: 'Московский авиационный институт (МАИ)',
      field: '09.03.03 — Прикладная информатика в технических системах',
      period: '2020 — 2024',
    },
    contact: {
      sectionLabel: 'Контакты',
      title: 'Давайте создавать\nвместе',
      subtitle: 'Открыт к интересным проектам и возможностям.',
      location: 'Москва, Россия',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      telegramLabel: 'Telegram',
    },
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      name: 'Askhab',
      role: 'Frontend Developer',
      location: 'Moscow',
      description: 'Building clear and fast interfaces',
      cta: 'Get in touch',
      scrollHint: 'scroll down',
    },
    about: {
      sectionLabel: 'About',
      title: 'Building interfaces\nthat work.',
      text: "I'm 22 years old, a frontend developer based in Moscow. I love bringing order to code and improving user experience. I value clean architecture, teamwork, and attention to detail.",
    },
    experience: {
      sectionLabel: 'Experience',
      title: 'Career path',
      present: 'present',
      jobs: [
        {
          company: 'certit.ru',
          role: 'Frontend Team Lead',
          period: 'April 2026 — Present',
          description: [
            'Onboarding, mentoring and code review of interns',
            'Built <a href="https://amocrm.ru" target="_blank" rel="noopener noreferrer">amoCRM</a> & Elma365 integration for managing real estate promotions with complex discount logic',
            'Developed Elma365 integration module for automated document delivery to Kontur.Diadok',
          ],
        },
        {
          company: 'amoCRM',
          role: 'Head of Integration Department',
          period: 'October 2025 — March 2026',
          description: [
            'Led a team of 6 developers and 2 managers: planning, load distribution, hiring',
            'Coordinated cross-department collaboration for on-time project delivery',
            'Mentoring and code review for the entire team',
          ],
        },
        {
          company: 'amoCRM',
          role: 'Frontend Developer · Automation Department',
          period: 'January — October 2025',
          description: [
            'Developed overdue invoice handling in the partner billing dashboard (<a href="https://amostart.ru" target="_blank" rel="noopener noreferrer">amostart.ru</a>)',
            'Built pricing grid layouts, added new plans: Enterprise Lite 30, Enterprise 200, Limits+',
            'Wrote unit tests for billing options and plans',
            'Implemented SEO and analytics setup (Yandex.Metrica, Top.Mail.ru, Google Tag Manager, BotFAQtor)',
            'Built HTML email templates for mass mailings',
            'Designed landing pages for business conferences: <a href="https://antinaim.ru" target="_blank" rel="noopener noreferrer">antinaim.ru</a>, <a href="https://startconf.ru" target="_blank" rel="noopener noreferrer">startconf.ru</a>, <a href="https://crmday.ru" target="_blank" rel="noopener noreferrer">crmday.ru</a>',
            'Created widgets to automate CRM processes',
            'Optimized <a href="https://antinaim.ru" target="_blank" rel="noopener noreferrer">antinaim.ru</a>: migrated build from Gulp to Webpack (bundle −15%), refactored PHP → Twig (code −70%)',
            'Developed the Enterprise tariff case page on <a href="https://amoprime.ru" target="_blank" rel="noopener noreferrer">amoprime.ru</a>',
            'Mentored a junior developer: 30+ code reviews per month',
            'Worked with monoliths, microservices, SSR/CSR, FSD architecture',
          ],
        },
        {
          company: 'amoCRM',
          role: 'Frontend Developer · Integration Department',
          period: '2024',
          description: [
            'Developed CRM integration widgets',
            'Supported integrators and audited widget code in amoMarket',
            'Updated and extended <a href="https://amocrm.ru" target="_blank" rel="noopener noreferrer">amoCRM</a> API documentation',
          ],
        },
      ],
    },
    skills: {
      sectionLabel: 'Skills',
      title: 'Tech stack',
      categories: [
        {
          name: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind', 'Zustand', 'Redux', 'jQuery', 'Backbone', 'Twig', 'Svelte', 'Framer Motion', 'TanStack Query', 'SWR', 'Recharts', 'i18next', 'Jest', 'Playwright', 'React Hook Form'],
        },
        {
          name: 'Tools',
          items: ['Webpack', 'Vite', 'Git', 'GitLab', 'Figma', 'Postman', 'Docker', 'Make', 'VSCode', 'Ubuntu', 'Vercel', 'npm', 'yarn', 'ESLint'],
        },
        {
          name: 'Backend (basics)',
          items: ['PHP', 'Node.js', 'MongoDB'],
        },
        {
          name: 'Additional',
          items: ['SEO', 'Analytics setup', 'Responsive design', 'Code review', 'Legacy code', 'English B2', 'Agile / Scrum / Kanban'],
        },
      ],
    },
    education: {
      sectionLabel: 'Education',
      title: 'Bachelor\'s degree',
      institution: 'Moscow Aviation Institute (MAI)',
      field: '09.03.03 — Applied Informatics in Technical Systems',
      period: '2020 — 2024',
    },
    contact: {
      sectionLabel: 'Contact',
      title: "Let's create\ntogether",
      subtitle: 'Open to interesting projects and opportunities.',
      location: 'Moscow, Russia',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      telegramLabel: 'Telegram',
    },
  },
};

export type Translations = typeof translations['ru'];