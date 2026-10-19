import { useState } from "react";

interface HeaderProps {
  onNavClick: (
    section: "profile" | "about" | "skills" | "projects" | "contact",
  ) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  type SectionId = "profile" | "about" | "skills" | "projects" | "contact";

  const sections: { name: string; id: SectionId }[] = [
    { name: "制作実績", id: "projects" },
    { name: "自己紹介", id: "about" },
    { name: "スキル・領域", id: "skills" },
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
              className="px-4 py-2 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span>お問い合わせ</span>
              <span className="text-[10px]">✉</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-900 cursor-pointer p-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー開閉"
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
          <div className="md:hidden pb-4 border-t border-slate-200 mt-2 pt-2 bg-white space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className="block w-full text-left px-4 py-2.5 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-colors rounded-lg font-medium text-sm cursor-pointer"
              >
                {section.name}
              </button>
            ))}
            <div className="pt-2 px-4">
              <button
                onClick={() => handleClick("contact")}
                className="w-full py-2.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all shadow-xs text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>お問い合わせ</span>
                <span className="text-[10px]">✉</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
