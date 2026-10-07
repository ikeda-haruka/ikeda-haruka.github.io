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
      "Next.js",
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
      "GitLab",
      "GitHub",
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
      "電子証明書",
      "SMTP",
      "JP1",
      "Windows タスク スケジューラ",
      "IMDS",
    ],
    icon: "☁️",
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            対応領域・スキル
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            フロントエンドからバックエンド、CMS、インフラまで。技術選定からAPI・外部サービス連携、AI活用、モダナイゼーションまで一貫して対応します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-slate-900">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <p className="text-sm font-semibold text-blue-600">CMS構築</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">WordPress</h3>
            </div>
            <p className="text-slate-600 sm:text-right">
              更新しやすく、目的に合わせて運用できるサイトを構築します。
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {[
              "WordPressによるサイト構築",
              "オリジナルデザインへの対応",
              "固定ページ・投稿ページの設計",
              "カスタム投稿タイプ",
              "カテゴリ・タグ設計",
              "レスポンシブ対応",
              "プラグイン導入・設定",
              "SEO対策",
              "問い合わせフォーム",
              "管理者限定設定",
            ].map((item) => (
              <li key={item} className="flex items-start text-slate-700">
                <span className="text-blue-600 mr-2" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
