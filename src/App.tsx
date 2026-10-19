import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import ProjectDetailPage from "./components/ProjectDetailPage";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import profileImage from "./assets/profile.jpg";

function parseProjectHash(hash: string): string | null {
  // 支持: #/project/:id, #/projects/:id, #project/:id
  const match = hash.match(/^#\/?project[s]?\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : null;
}

type SectionKey =
  | "profile"
  | "about"
  | "projects"
  | "skills"
  | "contact";

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(() => {
    return parseProjectHash(window.location.hash);
  });

  const profileRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: SectionKey) => {
    const targetMap: Record<SectionKey, React.RefObject<HTMLDivElement | null>> = {
      profile: profileRef,
      about: aboutRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    };
    targetMap[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const pid = parseProjectHash(window.location.hash);
      setActiveProjectId(pid);

      // ハッシュが通常のセクション（#projects等）の場合はスムーズスクロール
      if (!pid) {
        const rawHash = window.location.hash.replace(/^#\/?/, "");
        if (rawHash === "projects") {
          setTimeout(() => {
            projectsRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 50);
        } else if (rawHash === "about") {
          setTimeout(() => {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 50);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (section: SectionKey) => {
    if (activeProjectId) {
      // 詳細ページからトップのセクションへ戻る場合
      setActiveProjectId(null);
      window.location.hash = `#${section}`;
      setTimeout(() => {
        scrollToSection(section);
      }, 50);
    } else {
      scrollToSection(section);
    }
  };

  const handleSelectProject = (projectId: string) => {
    window.location.hash = `#/project/${projectId}`;
    setActiveProjectId(projectId);
  };

  const handleBackToList = () => {
    window.location.hash = "#projects";
    setActiveProjectId(null);
    setTimeout(() => {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  // 個別専用ページ表示モード
  if (activeProjectId) {
    return (
      <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-indigo-500 selection:text-white flex flex-col">
        <ProjectDetailPage
          projectId={activeProjectId}
          onBackToList={handleBackToList}
          onSelectProject={handleSelectProject}
        />
        <Footer />
      </div>
    );
  }

  // 通常のポートフォリオ一覧・トップページ表示モード
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-indigo-500 selection:text-white">
      <Header onNavClick={handleNavClick} />

      {/* ファーストビュー / ヒーロー */}
      <div ref={profileRef}>
        <Hero
          profileImage={profileImage}
          onExploreWorks={() => handleNavClick("projects")}
          onAboutClick={() => handleNavClick("about")}
          onContactClick={() => handleNavClick("contact")}
        />
      </div>

      {/* 制作実績・プロジェクト一覧（検索＆サマリーカード） */}
      <div ref={projectsRef}>
        <Projects onSelectProject={handleSelectProject} />
      </div>

      {/* 自己紹介・歩んできた道 */}
      <div ref={aboutRef}>
        <About onContactClick={() => handleNavClick("contact")} />
      </div>

      {/* スキル・対応領域（Adobe認定資格統合） */}
      <div ref={skillsRef}>
        <Skills />
      </div>

      {/* お問い合わせ */}
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
