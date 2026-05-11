import { motion } from 'motion/react';
import { ArrowDown, Github, Mail, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export function Hero() {
  const { t } = useApp();

  return (
    <section className="min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-8 max-w-5xl mx-auto">
      <div className="flex-1 flex flex-col justify-center">
        {/* Location tag */}
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-1.5 mb-10">
          <MapPin size={13} strokeWidth={1.5} className="text-stone-400 dark:text-stone-500" />
          <span className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">
            {t.hero.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-stone-900 dark:text-stone-50 mb-2"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          {t.hero.name}
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-stone-400 dark:text-stone-500 mb-10"
          style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
        >
          {t.hero.role}
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-stone-600 dark:text-stone-400 max-w-md mb-12"
          style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.65 }}
        >
          {t.hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} className="flex items-center gap-4 flex-wrap">
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors duration-200 text-sm rounded-sm"
            style={{ fontWeight: 400 }}
          >
            {t.hero.cta}
          </a>
          <a
            href="https://github.com/askhab-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200 text-sm"
            style={{ fontWeight: 400 }}
          >
            <Github size={15} strokeWidth={1.5} />
            GitHub
          </a>
          <a
            href="mailto:askhab.abd.work@gmail.com"
            className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200 text-sm"
            style={{ fontWeight: 400 }}
          >
            <Mail size={15} strokeWidth={1.5} />
            Email
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="flex items-center gap-2 text-stone-300 dark:text-stone-700"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.div>
        <span className="text-xs tracking-widest uppercase">{t.hero.scrollHint}</span>
      </motion.div>
    </section>
  );
}
