import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
  
      <footer className="py-10 text-center text-sm text-gray-500 border-t border-white/5">
        © 2026 Built with Next.js & React Compiler
      </footer>
     
    </main>
  );
}