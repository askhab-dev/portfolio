import { Code2, Wrench, Database, Sparkles, LucideIcon } from 'lucide-react';
import React from 'react';

interface SkillCategory {
  title: string | React.ReactNode;
  icon: LucideIcon;
  skills: string[] | React.ReactNode[];
  color: string;
}

export const getSkillsData = (translate: (key: string) => string | React.ReactNode): SkillCategory[] => {
  return [
    {
      title: translate('skills_frontend'),
      icon: Code2,
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Sass',
        'Tailwind',
        'Zustand',
        'Redux',
        'jQuery',
        'Backbone',
        'Twig',
        'Svelte',
        'Framer Motion',
        'TanStack Query',
        'SWR',
        'Recharts',
        'i18next',
        'Jest',
        'Playwright',
        'React Hook Form',
      ],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: translate('skills_tools'),
      icon: Wrench,
      skills: ['Webpack', 'Vite', 'Git', 'Gitlab', 'Figma', 'Postman', 'Docker', 'Make', 'VSCode', 'Ubuntu', 'Vercel', 'npm', 'yarn', 'Eslint'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: translate('skills_backend'),
      icon: Database,
      skills: ['PHP', 'Node.js', 'MongoDB'],
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: translate('skills_additional'),
      icon: Sparkles,
      skills: [
        translate('skills_additional_1'),
        translate('skills_additional_2'),
        translate('skills_additional_3'),
        translate('skills_additional_4'),
        translate('skills_additional_5'),
        translate('skills_additional_6'),
        'Agile/Scrum/Kanban',
      ],
      color: 'from-orange-600 to-red-600',
    },
  ];
};
