interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
  badge?: string;
  description?: string;
}

const skillsData: SkillCategory[] = [
  {
    category: "デザイン & UI/UX（認定資格）",
    icon: "🎨",
    badge: "Official Certified",
    description: "Adobe公認認定資格を保持。デザインからコーディングまで一貫対応",
    skills: [
      "Visual Design using Adobe Photoshop 2023 (公認資格)",
      "Graphic Design & Illustration using Adobe Illustrator 2023 (公認資格)",
      "Figma",
      "Webデザイン・UI/UX設計",
      "LP制作・バナー作成",
      "レスポンシブデザイン",
    ],
  },
  {
    category: "モダンフロントエンド & CMS",
    icon: "⚡",
    description: "高速かつSEOに強い最新スタックとヘッドレスCMSによるサイト構築",
    skills: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Decap CMS (Git-based)",
      "WordPress",
      "SEO対策 / 構造化データ (JSON-LD)",
      "OGP設計",
      "問い合わせフォーム構築",
    ],
  },
  {
    category: "バックエンド & API・外部連携",
    icon: "⚙️",
    description: "大規模・金融開発で培った堅牢なロジック設計とセキュアな外部連携",
    skills: [
      "Java (JDK 8〜21)",
      "SpringBoot 3",
      "RESTful API",
      "GitHub OAuth認証",
      "Oracle DB",
      "リバースプロキシ・電子証明書",
      "SMTP / メール配信",
      "IMDS外部連携",
    ],
  },
  {
    category: "開発基盤 & AI推進・自動化",
    icon: "🚀",
    description: "GitHub Issues自動タスク起票・CI/CD自動化と最新のAI活用環境",
    skills: [
      "GitHub Issues（自動タスク起票・チケット管理）",
      "GitHub REST API / 自動化スクリプト (Node.js)",
      "GitHub Actions (CI/CD自動デプロイ)",
      "Git / GitHub / GitLab / SVN",
      "Gemini / Copilot (AI活用プロンプト設計)",
      "SpecKit（仕様駆動開発）",
      "Vercel / GitHub Pages",
      "JP1 / タスクスケジューラ (自動化)",
      "ITSM（運用保守）",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>🛠️</span>
            <span>SKILLS & CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            <span className="inline-block">対応領域・</span>
            <span className="inline-block">スキルスタック</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            デザインからモダンフロントエンド、ヘッドレスCMS、そしてバックエンド・インフラ連携まで。
            企画から公開・運用保守までワンストップで高品質に形にします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-indigo-400 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2.5 bg-slate-50 border border-slate-100 rounded-xl group-hover:scale-110 transition-transform">
                      {category.icon}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {category.category}
                    </h3>
                  </div>
                  {category.badge && (
                    <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      ★ {category.badge}
                    </span>
                  )}
                </div>

                {category.description && (
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill, skillIndex) => {
                    const isCert = skill.includes("公認資格");
                    return (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          isCert
                            ? "bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 border border-amber-200 font-bold shadow-2xs"
                            : "bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 hover:border-indigo-200"
                        }`}
                      >
                        {isCert && <span className="mr-1">🏅</span>}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
