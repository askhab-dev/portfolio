import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const NAV_ITEMS = [
  { key: 'about' as const, href: '#about' },
  { key: 'experience' as const, href: '#experience' },
  { key: 'skills' as const, href: '#skills' },
  { key: 'education' as const, href: '#education' },
  { key: 'contact' as const, href: '#contact' },
];

export function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-stone-50/90 dark:bg-[#0f0e0d]/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-stone-900 dark:text-stone-100 tracking-tight hover:text-stone-600 dark:hover:text-stone-300 transition-colors duration-200"
            aria-label="Back to top"
          >
            <span style={{ fontWeight: 500 }}>askhab-dev</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map(item => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200 text-sm"
              >
                {t.nav[item.key]}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => setLang('ru')}
                className={`px-1.5 py-0.5 rounded transition-colors duration-200 ${
                  lang === 'ru'
                    ? 'text-stone-900 dark:text-stone-100'
                    : 'text-stone-400 dark:text-stone-600 hover:text-stone-600 dark:hover:text-stone-400'
                }`}
                aria-label="Switch to Russian"
              >
                RU
              </button>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded transition-colors duration-200 ${
                  lang === 'en'
                    ? 'text-stone-900 dark:text-stone-100'
                    : 'text-stone-400 dark:text-stone-600 hover:text-stone-600 dark:hover:text-stone-400'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200 rounded"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-14 left-0 right-0 z-40 bg-stone-50/95 dark:bg-[#0f0e0d]/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800/60 md:hidden"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-2.5 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200 text-sm border-b border-stone-100 dark:border-stone-800/50 last:border-0"
                >
                  {t.nav[item.key]}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
