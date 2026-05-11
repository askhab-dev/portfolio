import { useApp } from '../context/AppContext';

export function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-8 border-t border-stone-100 dark:border-stone-800/60">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span
          className="text-stone-400 dark:text-stone-600"
          style={{ fontSize: '0.78rem', fontWeight: 300, letterSpacing: '0.01em' }}
        >
          © {year} askhab-dev
        </span>
      </div>
    </footer>
  );
}
