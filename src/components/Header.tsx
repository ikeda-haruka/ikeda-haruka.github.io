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
    { name: "プロフィール", id: "profile" },
    { name: "スキル", id: "skills" },
    { name: "職務経歴", id: "experience" },
    { name: "制作物", id: "projects" },
    { name: "制作方法・構成図", id: "architecture" },
    { name: "お問い合わせ", id: "contact" },
  ];

  const handleClick = (id: SectionId) => {
    onNavClick(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-slate-900 font-bold text-xl">
            <a href="#" onClick={() => handleClick("profile")}>
              池田遥香
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                {section.name}
              </button>
            ))}
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
