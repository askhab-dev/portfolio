import { motion } from 'motion/react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/shared/providers/language-provider';
import { useInView } from '@/shared/hooks/use-in-view';
import { Card } from '@/shared/ui/card';
import { Badge } from '@/shared/ui/badge';
import { getExperienceData } from '@/config/experience-data';

export const Experience = () => {
  const { language, translate } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const experiences = getExperienceData(language);

  return (
    <section id='experience' ref={ref} className='py-20 relative'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={'mb-12 text-center text-gray-900 dark:text-white'}
        >
          {translate('experience_title')}
        </motion.h2>

        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-8'
          >
            <div
              className={
                'flex items-center gap-4 p-6 ' +
                'bg-gradient-to-r from-blue-600 ' +
                'to-indigo-600 rounded shadow-xl'
              }
            >
              <div
                className={
                  'w-14 h-14 rounded-full bg-white/20 ' +
                  'flex items-center justify-center'
                }
              >
                <Briefcase className='w-7 h-7 text-white' />
              </div>
              <div>
                <h3 className='text-white'>
                  {translate('experience_company')}
                </h3>
                <p className='text-blue-100'>
                  {translate('experience_full_period')}
                </p>
              </div>
            </div>
          </motion.div>

          <div className='space-y-8'>
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.2,
                }}
              >
                <Card
                  className={
                    'p-6 bg-white/70 dark:bg-gray-900/70 ' +
                    'backdrop-blur-lg border-l-4 border-blue-600 ' +
                    'border-t border-r border-b border-white/20 ' +
                    'dark:border-gray-700/50 hover:shadow-lg ' +
                    'transition-shadow duration-300'
                  }
                >
                  <div
                    className={
                      'flex items-start justify-between ' +
                      'mb-4 flex-wrap gap-2'
                    }
                  >
                    <h4 className='text-gray-900 dark:text-white'>
                      {experience.position}
                    </h4>
                    <Badge
                      variant='secondary'
                      className={
                        'bg-blue-100 dark:bg-blue-900 ' +
                        'text-blue-900 dark:text-blue-100'
                      }
                    >
                      {experience.period}
                    </Badge>
                  </div>

                  <ul className='space-y-3'>
                    {experience.achievements.map(
                      (achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? {
                                  opacity: 1,
                                  x: 0,
                                }
                              : {}
                          }
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + index * 0.2 + achievementIndex * 0.05,
                          }}
                          className={
                            'flex items-start gap-3 ' +
                            'text-gray-700 dark:text-gray-300'
                          }
                        >
                          <CheckCircle2
                            className={
                              'h-5 w-5 text-blue-600 flex-shrink-0 ' + 'mt-0.5'
                            }
                          />
                          <span>{achievement}</span>
                        </motion.li>
                      ),
                    )}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
