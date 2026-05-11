import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export function About() {
  const { t, lang } = useApp();

  const stats = [
    { value: lang === 'ru' ? '2+ лет' : '2+ years', label: lang === 'ru' ? 'опыта' : 'experience' },
    { value: lang === 'ru' ? '16 месяцев' : '16 months', label: lang === 'ru' ? ' от стажёра до лида в первой компании' : 'from junior to lead in first company' },
    { value: lang === 'ru' ? '1 000 000+ юзеров' : '1 000 000+ people', label: lang === 'ru' ? 'взаимодействуют с моим кодом' : 'use my code' },
  ];

  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Label column */}
          <motion.div {...fadeUp(0)} className="md:col-span-3">
            <span className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">
              {t.about.sectionLabel}
            </span>
          </motion.div>

          {/* Content column */}
          <div className="md:col-span-9">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-stone-900 dark:text-stone-50 mb-8"
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                fontWeight: 300,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                whiteSpace: 'pre-line',
              }}
            >
              {t.about.title}
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="text-stone-600 dark:text-stone-400 max-w-lg"
              style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.75 }}
            >
              {t.about.text}
            </motion.p>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.3)}
              className="mt-12 pt-8 border-t border-stone-100 dark:border-stone-800/60 flex flex-wrap gap-8"
            >
              {stats.map(stat => (
                <div key={stat.label}>
                  <div
                    className="text-stone-900 dark:text-stone-100 mb-1"
                    style={{ fontSize: '1.8rem', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-wider uppercase text-stone-400 dark:text-stone-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
