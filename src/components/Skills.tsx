interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

const skillsData: SkillCategory[] = [
  {
    category: "言語・フレームワーク",
    skills: [
      "Java",
      "Java 21",
      "SpringBoot",
      "TypeScript",
      "Vue.js",
      "React",
      "JSP",
      "Struts",
    ],
    icon: "🔧",
  },
  {
    category: "機械学習・AI",
    skills: ["機械学習フレームワーク", "AI推進", "Copilot for VS Code"],
    icon: "🤖",
  },
  {
    category: "開発手法・ツール",
    skills: [
      "SpecKit（仕様駆動開発）",
      "SVN",
      "Tomcat",
      "Eclipse",
      "VS Code",
      "iBatis",
      "sqlmap.xml",
    ],
    icon: "⚙️",
  },
  {
    category: "インフラ・その他",
    skills: [
      "ITSM",
      "Asana",
      "ChatWork",
      "Teams",
      "VBA",
      "Hulft",
      "プロキシ設定",
    ],
    icon: "☁️",
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">スキル</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
