import { MapPin, Mail, Github, LucideIcon } from 'lucide-react';

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  link?: string;
  color: string;
}

export const getContactsData = (translate: (key: string) => string): ContactItem[] => {
  return [
    {
      icon: MapPin,
      label: translate('contact_location'),
      value: translate('contact_location_val'),
      color: 'from-red-600 to-pink-600',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'askhab.abd.work@gmail.com',
      link: 'mailto:askhab.abd.work@gmail.com',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/askhab-dev',
      link: 'https://github.com/askhab-dev',
      color: 'from-gray-700 to-gray-900',
    },
  ];
};
