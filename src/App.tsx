import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Architecture from "./components/Architecture";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import profileImage from "./assets/profile.jpg";

function App() {
  const sectionRefs = {
    profile: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    architecture: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const handleNavClick = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      <Header onNavClick={handleNavClick} />

      <div ref={sectionRefs.profile}>
        <Hero profileImage={profileImage} />
      </div>

      <div ref={sectionRefs.skills}>
        <Skills />
      </div>

      <Qualifications />

      <div ref={sectionRefs.experience}>
        <Experience />
      </div>

      <div ref={sectionRefs.projects}>
        <Projects />
      </div>

      <div ref={sectionRefs.architecture}>
        <Architecture />
      </div>

      <div ref={sectionRefs.contact}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
