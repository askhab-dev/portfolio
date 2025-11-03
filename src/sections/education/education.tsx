import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/shared/providers/language-provider';
import { useInView } from '@/shared/hooks/use-in-view';
import { Card } from '@/shared/ui/card';

export const Education = () => {
  const { translate } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id='education' ref={ref} className='py-20 relative'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={'mb-12 text-center text-gray-900 ' + 'dark:text-white'}
        >
          {translate('education_title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='max-w-3xl mx-auto'
        >
          <Card
            className={
              'p-8 bg-white/70 dark:bg-gray-900/70 ' +
              'backdrop-blur-lg border border-white/20 ' +
              'dark:border-gray-700/50 shadow-xl ' +
              'hover:shadow-2xl transition-shadow duration-300'
            }
          >
            <div className='flex items-start gap-6'>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='flex-shrink-0'
              >
                <div
                  className={
                    'w-16 h-16 rounded-full bg-gradient-to-br ' +
                    'from-blue-600 to-indigo-600 ' +
                    'flex items-center justify-center'
                  }
                >
                  <GraduationCap className='w-8 h-8 text-white' />
                </div>
              </motion.div>

              <div className='flex-1'>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className='mb-2 text-gray-900 dark:text-white'
                >
                  {translate('education_degree')}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={'mb-2 text-gray-700 dark:text-gray-300'}
                >
                  {translate('education_university')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className={'mb-2 text-gray-600 dark:text-gray-400'}
                >
                  {translate('education_specialty')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className='text-gray-500 dark:text-gray-500'
                >
                  {translate('education_year')}
                </motion.p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
