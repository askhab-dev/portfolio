import { motion } from 'motion/react';
import { MapPin, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/shared/providers/language-provider';
import { Button } from '@/shared/ui/button';

export const Hero = () => {
  const { translate } = useLanguage();

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={'min-h-screen flex items-center justify-center relative'}
    >
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-4 text-gray-600 dark:text-gray-400'
          >
            {translate('hero_greeting')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-4 text-gray-900 dark:text-white'
          >
            {translate('hero_name')}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='mb-6'
          >
            <span
              className={
                'inline-block px-6 py-3 ' +
                'bg-gradient-to-r from-blue-600 ' +
                'to-indigo-600 text-white rounded-full'
              }
            >
              {translate('hero_role')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={
              'flex items-center justify-center gap-2 mb-8 ' +
              'text-gray-600 dark:text-gray-400'
            }
          >
            <MapPin className='h-5 w-5' />
            <span>{translate('hero_location')}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={
              'mb-12 text-gray-700 dark:text-gray-300 ' + 'max-w-2xl mx-auto'
            }
          >
            {translate('hero_description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              onClick={handleScrollToContact}
              size='lg'
              className={
                'bg-gradient-to-r from-blue-600 ' +
                'to-indigo-600 hover:from-blue-700 ' +
                'hover:to-indigo-700 text-white ' +
                'px-8 py-6 rounded-full'
              }
            >
              {translate('hero_cta')}
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className={'absolute bottom-8 left-1/2 -translate-x-1/2'}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className={'h-6 w-6 text-gray-600 dark:text-gray-400'} />
        </motion.div>
      </motion.div>
    </section>
  );
};
