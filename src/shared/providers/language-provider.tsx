import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/shared/constants/languages';
import { translations } from '@/config/translations';
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
} from '@/shared/constants/languages';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string) => string;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    ) as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
  };

  const translate = (key: string): string => {
    const translation =
      translations[language as keyof typeof translations][key as keyof typeof translations.ru];

    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
