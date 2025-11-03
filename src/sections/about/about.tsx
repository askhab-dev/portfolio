import { motion } from 'motion/react';
import { useLanguage } from '@/shared/providers/language-provider';
import { useInView } from '@/shared/hooks/use-in-view';
import { Card } from '@/shared/ui/card';

export const About = () => {
  const { translate } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id='about' ref={ref} className='py-20 relative'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto'
        >
          <h2
            className={'mb-12 text-center text-gray-900 ' + 'dark:text-white'}
          >
            {translate('about_title')}
          </h2>

          <Card
            className={
              'p-8 bg-white/70 dark:bg-gray-900/70 ' +
              'backdrop-blur-lg border border-white/20 ' +
              'dark:border-gray-700/50 shadow-xl text-center'
            }
          >
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={'mb-6 text-gray-700 dark:text-gray-300'}
            >
              {translate('about_text_1')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-gray-700 dark:text-gray-300'
            >
              {translate('about_text_2')}
            </motion.p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
