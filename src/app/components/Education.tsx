import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { useApp } from '../context/AppContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export function Education() {
  const { t } = useApp();

  return (
    <section id="education" className="py-28 md:py-36 px-6 md:px-8 bg-stone-50/50 dark:bg-stone-900/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Label column */}
          <motion.div {...fadeUp(0)} className="md:col-span-3">
            <span className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">
              {t.education.sectionLabel}
            </span>
          </motion.div>

          {/* Content column */}
          <div className="md:col-span-9">
            <motion.div
              {...fadeUp(0.1)}
              className="flex items-start gap-4"
            >
              <div className="mt-0.5 w-9 h-9 rounded flex items-center justify-center border border-stone-200 dark:border-stone-800 flex-shrink-0">
                <GraduationCap size={16} strokeWidth={1.5} className="text-stone-500 dark:text-stone-400" />
              </div>

              <div>
                <div
                  className="text-stone-400 dark:text-stone-500 mb-2"
                  style={{ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.02em' }}
                >
                  {t.education.period}
                </div>
                <h3
                  className="text-stone-900 dark:text-stone-100 mb-1"
                  style={{ fontSize: '1.1rem', fontWeight: 400, lineHeight: 1.4 }}
                >
                  {t.education.title}
                </h3>
                <div
                  className="text-stone-600 dark:text-stone-400 mb-1"
                  style={{ fontSize: '0.9rem', fontWeight: 300 }}
                >
                  {t.education.institution}
                </div>
                <div
                  className="text-stone-400 dark:text-stone-500"
                  style={{ fontSize: '0.82rem', fontWeight: 300 }}
                >
                  {t.education.field}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
