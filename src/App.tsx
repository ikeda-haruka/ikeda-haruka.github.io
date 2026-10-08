import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Architecture from "./components/Architecture";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import profileImage from "./assets/profile.jpg";

function App() {
  const sectionRefs = {
    profile: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    architecture: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const handleNavClick = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-indigo-500 selection:text-white">
      <Header onNavClick={handleNavClick} />

      {/* ファーストビュー / ヒーロー */}
      <div ref={sectionRefs.profile}>
        <Hero
          profileImage={profileImage}
          onExploreWorks={() => handleNavClick("projects")}
          onContactClick={() => handleNavClick("contact")}
        />
      </div>

      {/* 制作実績・プロジェクト（最優先で表示） */}
      <div ref={sectionRefs.projects}>
        <Projects />
      </div>

      {/* スキル・対応領域（Adobe認定資格統合） */}
      <div ref={sectionRefs.skills}>
        <Skills />
      </div>

      {/* 制作プロセス・システム構成図 */}
      <div ref={sectionRefs.architecture}>
        <Architecture />
      </div>

      {/* 経歴・バックグラウンド */}
      <div ref={sectionRefs.experience}>
        <Experience />
      </div>

      {/* お問い合わせ */}
      <div ref={sectionRefs.contact}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
