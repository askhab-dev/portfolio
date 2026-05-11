import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function Portfolio() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#0f0e0d] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <div className="h-px bg-stone-100 dark:bg-stone-800/60" />
        <About />
        <div className="h-px bg-stone-100 dark:bg-stone-800/60" />
        <Experience />
        <div className="h-px bg-stone-100 dark:bg-stone-800/60" />
        <Skills />
        <div className="h-px bg-stone-100 dark:bg-stone-800/60" />
        <Education />
        <div className="h-px bg-stone-100 dark:bg-stone-800/60" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Portfolio />
    </AppProvider>
  );
}
