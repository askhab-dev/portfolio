import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, type Lang, type Translations } from '../data/translations';

interface AppContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  t: Translations;
}

const AppContext = createContext<AppContextType | null>(null);

function getInitialTheme(): 'light' | 'dark' {
  try {
    const stored = localStorage.getItem('portfolio-theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {}
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem('portfolio-lang');
    if (stored === 'ru' || stored === 'en') return stored;
  } catch {}
  return 'ru';
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('portfolio-lang', l);
    } catch {}
  }, []);

  const t = translations[lang] as Translations;

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
