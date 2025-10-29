import Hero from '@/components/hero';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Services from '@/components/services';
import Contact from '@/components/contact';


export default function Home() {
  return (
    <>

      <Hero />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}