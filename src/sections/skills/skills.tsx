import { motion } from 'motion/react';
import { useLanguage } from '@/shared/providers/language-provider';
import { useInView } from '@/shared/hooks/use-in-view';
import { Card } from '@/shared/ui/card';
import { Badge } from '@/shared/ui/badge';
import { getSkillsData } from '@/config/skills-data';

export const Skills = () => {
  const { translate } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const skillCategories = getSkillsData(translate);

  return (
    <section id='skills' ref={ref} className='py-20 relative'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={'mb-12 text-center text-gray-900 dark:text-white'}
        >
          {translate('skills_title')}
        </motion.h2>

        <div
          className={
            'grid grid-cols-1 md:grid-cols-2 ' +
            'lg:grid-cols-4 gap-6 max-w-6xl mx-auto'
          }
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <Card
                  className={
                    'p-6 bg-white/70 dark:bg-gray-900/70 ' +
                    'backdrop-blur-lg border border-white/20 ' +
                    'dark:border-gray-700/50 h-full ' +
                    'hover:shadow-xl transition-shadow duration-300'
                  }
                >
                  <div className='flex items-center gap-3 mb-6'>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={
                        isInView
                          ? {
                              scale: 1,
                              rotate: 0,
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + 0.2,
                      }}
                      className={
                        `w-12 h-12 rounded bg-gradient-to-br ` +
                        `${category.color} ` +
                        `flex items-center justify-center`
                      }
                    >
                      <Icon className='w-6 h-6 text-white' />
                    </motion.div>
                    <h3 className='text-gray-900 dark:text-white'>
                      {category.title}
                    </h3>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? {
                                opacity: 1,
                                scale: 1,
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + 0.3 + skillIndex * 0.05,
                        }}
                      >
                        <Badge
                          variant='secondary'
                          className={
                            'bg-gray-100 dark:bg-gray-800 ' +
                            'text-gray-900 dark:text-gray-100'
                          }
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
