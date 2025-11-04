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
        position: 'Отдел интеграций',
        achievements: [
          'Разработка виджетов — интеграций в CRM',
          'Поддержка интеграторов amoCRM и аудит кода ' +
            'виджетов в amoMarket',
          'Дополнение и актуализация API-документации amoCRM',
        ],
      },
      {
        period: '2025',
        position: 'Отдел автоматизации',
        achievements: [
          'Разработка функционала обработки просроченных ' +
            'счетов в биллинге партнёрского кабинета ' +
            'amostart.ru',
          'Вёрстка сетки опций и добавление новых тарифов в ' +
            'клиентский и партнёрский биллинги amoCRM — ' +
            'Enterprise Lite 30, Enterprise 200, Лимиты+, ' +
            'API-фильтрация',
          'Написание unit-тестов для биллинговых опций и тарифов',
          'Настройка SEO и аналитики (Яндекс.Метрика, ' +
            'Top.Mail.ru, Google Tag Manager, BotFAQtor)',
          'Вёрстка HTML-писем для массовых рассылок',
          'Разработка и вёрстка лендингов бизнес-конференций: antinaim.ru, startconf.ru, crmday.ru',
          'Создание виджетов для автоматизации CRM-процессов',
          'Дебаг и поддержка легаси-кода промо-сайта и ядра amocrm.ru',
          'Оптимизация проектов: перевод сборки проекта antinaim.ru с Gulp на ' +
            'Webpack — вес бандлов уменьшился на 15%, ' + 
          'отрефакторил легаси-код, переведя ' +
            'рендеринг с PHP на Twig и сократив объём кода на 70%',
          'Вёрстка страницы кейсов тарифа Enterprise на ' +
            'amoprime.ru',
          'Наставлял младшего разработчика: помогал в ' +
            'адаптации, проводил код-ревью (30+ ревью в месяц)',
          'Опыт работы c монолитами и микросервисной ' +
            'архитектурой, SSR и CSR-приложениями. FSD-подход к ' +
            'организации фронтенда',
        ],
      },
    ];
  }

  return [
    {
      period: '2024',
      position: 'Integrations Department',
      achievements: [
        'Developing widgets — CRM integrations',
        'Support for amoCRM integrators and widget code ' +
          'audits in amoMarket',
        'Updating and maintaining amoCRM API documentation',
      ],
    },
    {
      period: '2025',
      position: 'Automation Department',
      achievements: [
        'Developed overdue invoice processing functionality ' +
          'for amostart.ru partner billing',
        'Created billing option grids and added new tariffs ' +
          'to client and partner billing — Enterprise Lite 30, ' +
          'Enterprise 200, Limits+, API filtering',
        'Wrote unit tests for billing options and tariffs',
        'Configured SEO and analytics (Yandex.Metrica, ' +
          'Top.Mail.ru, Google Tag Manager, BotFAQtor)',
        'Created HTML email templates for mass mailings',
        'Developed and built business conference landing pages: antinaim.ru, startconf.ru, crmday.ru',
        'Created widgets for CRM process automation',
        'Debugged and maintained legacy code for promotional ' +
          'website and amocrm.ru core',
        'Project optimization: Switching the antinaim.ru project build from Gulp to Webpack reduced bundle size by 15%, ' +
          'refactoring legacy code by switching rendering from PHP to Twig and reducing code size by 70%',
        'Built Enterprise tariff integration cases page at ' +
          'amoprime.ru',
        'Mentored junior developer: helped with onboarding, ' +
          'conducted code reviews (30+ reviews per month)',
        'Experience with monoliths and microservice ' +
          'architecture, SSR and CSR applications. FSD approach ' +
          'to frontend organization',
      ],
    },
  ];
};
