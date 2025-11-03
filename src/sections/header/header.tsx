import { motion } from 'motion/react';
import { Moon, Sun, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/shared/providers/theme-provider';
import { useLanguage } from '@/shared/providers/language-provider';
import { Button } from '@/shared/ui/button';

const NAVIGATION_ITEMS = [
  'about',
  'education',
  'experience',
  'skills',
  'contact',
];

const SCROLL_THRESHOLD = 50;

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, translate } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={
        'fixed top-0 left-0 right-0 z-50 ' +
        'transition-all duration-300 ' +
        `${
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 ' + 'backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`
      }
    >
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-gray-900 dark:text-white'
          >
            askhab-dev
          </motion.div>

          <nav className='hidden md:flex items-center gap-8'>
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleScrollToSection(item)}
                className={
                  'text-gray-700 dark:text-gray-300 ' +
                  'hover:text-gray-900 dark:hover:text-white ' +
                  'transition-colors'
                }
              >
                {translate(`nav_${item}`)}
              </motion.button>
            ))}
          </nav>

          <div className='flex items-center gap-2'>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant='ghost'
                size='icon'
                onClick={toggleTheme}
                className='rounded-full'
              >
                {theme === 'light' ? (
                  <Moon className='h-5 w-5' />
                ) : (
                  <Sun className='h-5 w-5' />
                )}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant='ghost'
                size='icon'
                onClick={handleLanguageToggle}
                className='rounded-full w-fit px-2'
              >
                <Globe className='h-5 w-5' />
                <span className='ml-1 text-xs'>{language.toUpperCase()}</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
