import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="py-28 md:py-36 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Label column */}
          <motion.div {...fadeUp(0)} className="md:col-span-3">
            <span className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">
              {t.skills.sectionLabel}
            </span>
          </motion.div>

          {/* Content column */}
          <div className="md:col-span-9">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-stone-900 dark:text-stone-50 mb-12"
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                fontWeight: 300,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {t.skills.title}
            </motion.h2>

            <div className="space-y-10">
              {t.skills.categories.map((cat, i) => (
                <motion.div key={cat.name} {...fadeUp(0.1 + i * 0.06)}>
                  <div
                    className="text-stone-400 dark:text-stone-500 mb-4"
                    style={{ fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {cat.name}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(item => (
                      <span
                        key={item}
                        className="px-3 py-1 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 rounded-sm hover:border-stone-400 dark:hover:border-stone-600 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200 cursor-default"
                        style={{ fontSize: '0.8rem', fontWeight: 400 }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
