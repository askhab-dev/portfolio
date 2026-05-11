import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export function Experience() {
  const { t } = useApp();

  return (
    <section id="experience" className="py-28 md:py-36 px-6 md:px-8 bg-stone-50/50 dark:bg-stone-900/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Label column */}
          <motion.div {...fadeUp(0)} className="md:col-span-3">
            <span className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">
              {t.experience.sectionLabel}
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
              {t.experience.title}
            </motion.h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-stone-200 dark:bg-stone-800" />

              <div className="space-y-12">
                {t.experience.jobs.map((job, i) => (
                  <motion.div
                    key={`${job.company}-${job.role}`}
                    {...fadeUp(0.1 + i * 0.08)}
                    className="pl-8 relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-3.5px] top-2 w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-600 ring-2 ring-stone-50 dark:ring-[#0f0e0d]" />

                    {/* Period */}
                    <div
                      className="text-stone-400 dark:text-stone-500 mb-2"
                      style={{ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.02em' }}
                    >
                      {job.period}
                    </div>

                    {/* Company + Role */}
                    <div className="mb-1">
                      <span
                        className="text-stone-900 dark:text-stone-100"
                        style={{ fontWeight: 500, fontSize: '0.95rem' }}
                      >
                        {(job.company.includes('.') || job.company === 'amoCRM') ? (
                          <a
                            href={job.company.includes('.') ? `https://${job.company}` : 'https://amocrm.ru'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200"
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                      </span>
                      <span className="text-stone-400 dark:text-stone-600 mx-2">·</span>
                      <span
                        className="text-stone-600 dark:text-stone-400"
                        style={{ fontWeight: 300, fontSize: '0.95rem' }}
                      >
                        {job.role}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="mt-4 space-y-2">
                      {job.description.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-stone-500 dark:text-stone-400"
                          style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.6 }}
                        >
                          <span className="mt-[0.45em] w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-600 flex-shrink-0" />
                          <span
                            className="leading-6"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
