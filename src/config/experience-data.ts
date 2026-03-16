import { Language } from "@/shared/constants/languages";

interface ExperienceItem {
  period: string;
  position: string;
  achievements: string[];
}

export const getExperienceData = (language: Language): ExperienceItem[] => {
  if (language === 'ru') {
    return [
      {
        period: '2024',
        position: 'Отдел интеграций (Frontend-разработчик)',
        achievements: [
          'Разработка виджетов — интеграций в CRM',
          'Поддержка интеграторов amoCRM и аудит кода виджетов в amoMarket',
          'Дополнение и актуализация API-документации amoCRM',
        ],
      },
      {
        period: '2025 (январь — октябрь)',
        position: 'Отдел автоматизации (Frontend-разработчик)',
        achievements: [
          'Разработка функционала обработки просроченных счетов в биллинге партнёрского кабинета <a href="https://amostart.ru" target="_blank">amostart.ru</a>',
          'Вёрстка сетки опций и добавление новых тарифов в клиентский и партнёрский биллинги amoCRM — Enterprise Lite 30, Enterprise 200, Лимиты+, API-фильтрация',
          'Написание unit-тестов для биллинговых опций и тарифов',
          'Настройка SEO и аналитики (Яндекс.Метрика, Top.Mail.ru, Google Tag Manager, BotFAQtor)',
          'Вёрстка HTML-писем для массовых рассылок',
          `
            Разработка и вёрстка лендингов бизнес-конференций:
            <a href="https://antinaim.ru" target="_blank">antinaim.ru</a>,
            <a href="https://startconf.ru" target="_blank">startconf.ru</a>,
            <a href="https://crmday.ru" target="_blank">crmday.ru</a>,
          `,
          'Создание виджетов для автоматизации CRM-процессов',
          'Дебаг и поддержка легаси-кода промо-сайта и ядра <a href="https://amocrm.ru" target="_blank">amocrm.ru</a>',
          'Оптимизация проектов: перевод сборки проекта <a href="https://antinaim.ru" target="_blank">antinaim.ru</a> с Gulp на Webpack — вес бандлов уменьшился на 15%, отрефакторил легаси-код, переведя рендеринг с PHP на Twig и сократив объём кода на 70%',
          'Вёрстка страницы кейсов тарифа Enterprise на <a href="https://amoprime.ru" target="_blank">amoprime.ru</a>',
          'Наставлял младшего разработчика: помогал в адаптации, проводил код-ревью (30+ ревью в месяц)',
          'Опыт работы c монолитами и микросервисной архитектурой, SSR и CSR-приложениями. FSD-подход к организации фронтенда',
        ],
      },
      {
        period: 'октябрь 2025 — март 2026',
        position: 'Отдел интеграций (Руководитель отдела)',
        achievements: [
          'Руководство отделом из 6 разработчиков и 2 менеджеров: планирование задач, распределение нагрузки, оценка эффективности работы, найм новых сотрудников',
          'Координация взаимодействия с другими отделами для обеспечения своевременного выполнения проектов',
          'Менторство и профессиональное развитие членов команды, проведение код-ревью',
        ]
      }
    ];
  }

  return [
    {
      period: '2024',
      position: 'Integrations Department (Frontend Developer)',
      achievements: [
        'Developed widgets — CRM integrations',
        'Supported amoCRM integrators and audited widget code in amoMarket',
        'Updated and maintained amoCRM API documentation',
      ],
    },
    {
      period: '2025 (January – October)',
      position: 'Automation Department (Frontend Developer)',
      achievements: [
        'Developed overdue invoice processing functionality for <a href="https://amostart.ru" target="_blank">amostart.ru</a> partner billing',
        'Built billing option grids and added new tariffs to client and partner billing — Enterprise Lite 30, Enterprise 200, Limits+, API filtering',
        'Wrote unit tests for billing options and tariffs',
        'Configured SEO and analytics (Yandex.Metrica, Top.Mail.ru, Google Tag Manager, BotFAQtor)',
        'Created HTML email templates for mass mailings',
        `
          Developed and built landing pages for business conferences:
          <a href="https://antinaim.ru" target="_blank">antinaim.ru</a>,
          <a href="https://startconf.ru" target="_blank">startconf.ru</a>,
          <a href="https://crmday.ru" target="_blank">crmday.ru</a>,
        `,
        'Created widgets for CRM process automation',
        'Debugged and maintained legacy code for promotional website and <a href="https://amocrm.ru" target="_blank">amocrm.ru</a> core',
        'Project optimization: switched <a href="https://antinaim.ru" target="_blank">antinaim.ru</a> build from Gulp to Webpack — bundle size reduced by 15%, refactored legacy code by switching rendering from PHP to Twig and reducing code volume by 70%',
        'Built Enterprise tariff case studies page at <a href="https://amoprime.ru" target="_blank">amoprime.ru</a>',
        'Mentored junior developer: helped with onboarding, conducted code reviews (30+ reviews per month)',
        'Experience with monoliths and microservice architecture, SSR and CSR applications. FSD approach to frontend organization',
      ],
    },
    {
      period: 'October 2025 – March 2026',
      position: 'Integrations Department (Department Lead)',
      achievements: [
        'Led a team of 6 developers and 2 managers: task planning, workload distribution, performance evaluation, hiring new team members',
        'Coordinated cross-department collaboration to ensure timely project delivery',
        'Mentored team members and supported their professional growth, conducted code reviews',
      ]
    }
  ];
};
