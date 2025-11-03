import { Language } from "../shared/constants/languages";

interface Translations {
  nav_about: string;
  nav_education: string;
  nav_experience: string;
  nav_skills: string;
  nav_contact: string;
  hero_greeting: string;
  hero_name: string;
  hero_role: string;
  hero_location: string;
  hero_description: string;
  hero_cta: string;
  about_title: string;
  about_text_1: string;
  about_text_2: string;
  education_title: string;
  education_degree: string;
  education_university: string;
  education_specialty: string;
  education_year: string;
  experience_title: string;
  experience_company: string;
  experience_full_period: string;
  experience_period_1: string;
  experience_position_1: string;
  experience_period_2: string;
  experience_position_2: string;
  skills_title: string;
  skills_frontend: string;
  skills_tools: string;
  skills_backend: string;
  skills_additional: string;
  skills_additional_1: string;
  skills_additional_2: string;
  skills_additional_3: string;
  skills_additional_4: string;
  skills_additional_5: string;
  skills_additional_6: string;
  contact_title: string;
  contact_location: string;
  contact_location_val: string;
  contact_email: string;
  contact_github: string;
  text_me: string;
  rights_reserved: string;
}

export const translations: Record<Language, Translations> = {
  ru: {
    nav_about: 'Обо мне',
    nav_education: 'Образование',
    nav_experience: 'Опыт',
    nav_skills: 'Навыки',
    nav_contact: 'Контакты',
    hero_greeting: 'Привет!',
    hero_name: 'Меня зовут Асхаб',
    hero_role: 'Frontend-разработчик',
    hero_location: 'Москва',
    hero_description: 'Разрабатываю понятные и быстрые интерфейсы',
    hero_cta: 'Связаться со мной',
    about_title: 'Обо мне',
    about_text_1:
      'Мне 22 года, я ' +
      'frontend-разработчик из Москвы.',
    about_text_2:
      'Люблю наводить порядок в коде и улучшать пользовательский ' +
      'опыт. В работе ценю чистую архитектуру, командное ' +
      'взаимодействие и внимание к деталям.',
    education_title: 'Образование',
    education_degree: 'Бакалавриат',
    education_university: 'Московский авиационный институт (МАИ)',
    education_specialty:
      '09.03.03 — Прикладная информатика в технических ' + 'системах',
    education_year: '2020 — 2024',
    experience_title: 'Опыт работы',
    experience_company: 'amoCRM',
    experience_full_period: '2024 — настоящее время',
    experience_period_1: '2024',
    experience_position_1: 'Отдел интеграций',
    experience_period_2: '2025',
    experience_position_2: 'Отдел автоматизации',
    skills_title: 'Навыки',
    skills_frontend: 'Frontend',
    skills_tools: 'Инструменты',
    skills_backend: 'Backend (основы)',
    skills_additional: 'Дополнительно',
    skills_additional_1: 'SEO-оптимизация',
    skills_additional_2: 'Настройка аналитики',
    skills_additional_3: 'Адаптивная вёрстка',
    skills_additional_4: 'Code review',
    skills_additional_5: 'Работа с Legacy',
    skills_additional_6: 'Английский - B2',
    contact_title: 'Контакты',
    contact_location: 'Локация',
    contact_location_val: 'Москва',
    contact_email: 'Email',
    contact_github: 'GitHub',
    text_me: 'Написать мне в Telegram',
    rights_reserved: 'Все права защищены',
  },
  en: {
    nav_about: 'About',
    nav_education: 'Education',
    nav_experience: 'Experience',
    nav_skills: 'Skills',
    nav_contact: 'Contact',
    hero_greeting: 'Hi!',
    hero_name: 'My name is Askhab',
    hero_role: 'Frontend Developer',
    hero_location: 'Moscow, Russia',
    hero_description: 'Building clear and fast interfaces',
    hero_cta: 'Get in touch',
    about_title: 'About Me',
    about_text_1:
      "I'm 22 years old " +
      'frontend developer from Moscow.',
    about_text_2:
      'I love developing clear and fast interfaces, ' +
      'organizing code, and improving user experience. ' +
      'I value clean architecture, team collaboration, ' +
      'and attention to detail.',
    education_title: 'Education',
    education_degree: "Bachelor's Degree",
    education_university: 'Moscow Aviation Institute (MAI)',
    education_specialty:
      '09.03.03 — Applied Computer Science in Technical ' + 'Systems',
    education_year: '2020 — 2024',
    experience_title: 'Experience',
    experience_company: 'amoCRM',
    experience_full_period: '2024 — present',
    experience_period_1: '2024',
    experience_position_1: 'Integrations Department',
    experience_period_2: '2025',
    experience_position_2: 'Automation Department',
    skills_title: 'Skills',
    skills_frontend: 'Frontend',
    skills_tools: 'Tools',
    skills_backend: 'Backend (basics)',
    skills_additional: 'Additional',
    skills_additional_1: 'SEO optimization',
    skills_additional_2: 'Analytics setup',
    skills_additional_3: 'Responsive design',
    skills_additional_4: 'Code review',
    skills_additional_5: 'Legacy code',
    skills_additional_6: 'English - B2',
    contact_title: 'Contact',
    contact_location: 'Location',
    contact_location_val: 'Moscow',
    contact_email: 'Email',
    contact_github: 'GitHub',
    text_me: 'Send me a message in Telegram',
    rights_reserved: 'All rights reserved',
  },
};
