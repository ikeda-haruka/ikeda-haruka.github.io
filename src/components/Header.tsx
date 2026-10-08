import { useState } from "react";

interface HeaderProps {
  onNavClick: (
    section:
      | "profile"
      | "skills"
      | "experience"
      | "projects"
      | "architecture"
      | "contact",
  ) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  type SectionId =
    | "profile"
    | "skills"
    | "experience"
    | "projects"
    | "architecture"
    | "contact";

  const sections: { name: string; id: SectionId }[] = [
    { name: "制作実績", id: "projects" },
    { name: "スキル・領域", id: "skills" },
    { name: "制作プロセス・構成", id: "architecture" },
    { name: "経歴・バックグラウンド", id: "experience" },
    { name: "お問い合わせ", id: "contact" },
  ];

  const handleClick = (id: SectionId) => {
    onNavClick(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 z-50 transition-all">
      <nav className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-slate-900 font-bold text-lg sm:text-xl tracking-tight">
            <button
              onClick={() => handleClick("profile")}
              className="hover:text-indigo-600 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              <span>池田 遥香</span>
              <span className="text-xs font-normal text-slate-400 hidden sm:inline">
                / Portfolio
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`text-sm font-semibold transition-colors cursor-pointer ${
                  section.id === "projects"
                    ? "text-indigo-600 hover:text-indigo-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {section.name}
              </button>
            ))}
            <button
              onClick={() => handleClick("contact")}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 mt-2 pt-2 bg-white">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className="block w-full text-left px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors rounded"
              >
                {section.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
