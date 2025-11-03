import { motion } from 'motion/react';
import { Send } from 'lucide-react';

import { useLanguage } from '@/shared/providers/language-provider';
import { useInView } from '@/shared/hooks/use-in-view';
import { Card } from '@/shared/ui/card';
import { getContactsData } from '@/config/contacts-data';
import { Button } from '@/shared/ui/button';

export const Contact = () => {
  const { translate } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const contacts = getContactsData(translate);

  return (
    <section id='contact' ref={ref} className='py-20 relative'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={'mb-12 text-center text-gray-900 dark:text-white'}
        >
          {translate('contact_title')}
        </motion.h2>

        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
          >
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
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
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <Card
                    className={
                      'p-6 bg-white/70 dark:bg-gray-900/70 ' +
                      'backdrop-blur-lg border border-white/20 ' +
                      'dark:border-gray-700/50 h-full ' +
                      'hover:shadow-xl transition-all duration-300 ' +
                      'hover:-translate-y-2'
                    }
                  >
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
                        delay: 0.4 + index * 0.1,
                      }}
                      className={
                        `w-14 h-14 rounded-full bg-gradient-to-br ` +
                        `${contact.color} ` +
                        `flex items-center justify-center mb-4 mx-auto`
                      }
                    >
                      <Icon className='w-7 h-7 text-white' />
                    </motion.div>

                    <h4
                      className={
                        'text-center mb-2 text-gray-900 ' + 'dark:text-white'
                      }
                    >
                      {contact.label}
                    </h4>

                    {contact.link ? (
                      <a
                        href={contact.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={
                          'text-center block text-blue-600 ' +
                          'dark:text-blue-400 hover:underline'
                        }
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p
                        className={
                          'text-center text-gray-600 ' + 'dark:text-gray-400'
                        }
                      >
                        {contact.value}
                      </p>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-full"
            >
              <a href="https://t.me/dhehetwg" target="_blank">
                <Send className="w-6 h-6 mr-2" />{translate('text_me')}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-20 text-center text-gray-500 dark:text-gray-400"
      >
        <p>© 2025 askhab-dev. {translate('rights_reserved')}</p>
      </motion.footer>
    </section>
  );
};
