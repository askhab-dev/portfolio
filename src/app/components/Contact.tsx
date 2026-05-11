import { motion } from 'motion/react';
import { MapPin, Mail, Github, Send, ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export function Contact() {
  const { t } = useApp();

  const links = [
    {
      icon: MapPin,
      label: t.contact.location,
      href: null,
    },
    {
      icon: Mail,
      label: 'askhab.abd.work@gmail.com',
      href: 'mailto:askhab.abd.work@gmail.com',
    },
    {
      icon: Github,
      label: 'github.com/askhab-dev',
      href: 'https://github.com/askhab-dev',
    },
    {
      icon: Send,
      label: t.contact.telegramLabel,
      href: 'https://t.me/dhehetwg',
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Label column */}
          <motion.div {...fadeUp(0)} className="md:col-span-3">
            <span className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">
              {t.contact.sectionLabel}
            </span>
          </motion.div>

          {/* Content column */}
          <div className="md:col-span-9">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-stone-900 dark:text-stone-50 mb-4"
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                fontWeight: 300,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                whiteSpace: 'pre-line',
              }}
            >
              {t.contact.title}
            </motion.h2>

            <motion.p
              {...fadeUp(0.15)}
              className="text-stone-500 dark:text-stone-400 mb-12"
              style={{ fontSize: '1rem', fontWeight: 300 }}
            >
              {t.contact.subtitle}
            </motion.p>

            <motion.div
              {...fadeUp(0.2)}
              className="space-y-4"
            >
              {links.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-3 group py-3 border-b border-stone-100 dark:border-stone-800/60 last:border-0">
                    <Icon size={15} strokeWidth={1.5} className="text-stone-400 dark:text-stone-500 flex-shrink-0" />
                    <span
                      className={`text-stone-700 dark:text-stone-300 ${item.href ? 'group-hover:text-stone-900 dark:group-hover:text-stone-100' : ''} transition-colors duration-200`}
                      style={{ fontSize: '0.9rem', fontWeight: 300 }}
                    >
                      {item.label}
                    </span>
                    {item.href && (
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.5}
                        className="ml-auto text-stone-300 dark:text-stone-700 group-hover:text-stone-500 dark:group-hover:text-stone-400 transition-colors duration-200"
                      />
                    )}
                  </div>
                );

                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
