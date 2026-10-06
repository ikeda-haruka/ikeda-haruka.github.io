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
    { name: "システム構成図", id: "architecture" },
    { name: "お問い合わせ", id: "contact" },
  ];

  const handleClick = (id: SectionId) => {
    onNavClick(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-700 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-white font-bold text-xl">
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
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
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
          <div className="md:hidden pb-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors rounded"
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
