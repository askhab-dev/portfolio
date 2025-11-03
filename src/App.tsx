import { Background } from '@/sections/background/background';
import { Header } from '@/sections/header/header';
import { Hero } from '@/sections/hero/hero';
import { About } from '@/sections/about/about';
import { Education } from '@/sections/education/education';
import { Experience } from '@/sections/experience/experience';
import { Skills } from '@/sections/skills/skills';
import { Contact } from '@/sections/contact/contact';

import { LanguageProvider } from '@/shared/providers/language-provider';
import { ThemeProvider } from '@/shared/providers/theme-provider';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className='min-h-screen relative'>
          <Background />
          <Header />
          <main className='relative'>
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Contact />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
