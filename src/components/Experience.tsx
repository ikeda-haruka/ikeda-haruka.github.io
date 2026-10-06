interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const experienceData: Experience[] = [
  {
    period: "2025年10月 - 現在",
    title: "シニアエンジニア",
    company: "化学物質管理システム開発",
    description:
      "Java 21 + SpringBoot + Vue.js を使用した化学物質管理システムの開発・運用。SpecKit による仕様駆動開発の PoC 実施。レガシーシステム（JDK8 + Struts + iBatis）から最新技術へのリプレイスを推進。",
    technologies: [
      "Java 21",
      "SpringBoot",
      "Vue.js",
      "Tomcat 11",
      "SpecKit",
      "TypeScript",
    ],
    achievements: [
      "レガシーシステムのバージョンアップを実施し、新技術への移行を推進",
      "仕様駆動開発の PoC を主導し、開発プロセスの効率化を実현",
      "IaaS へのクラウドリフトの事前検証を実施",
      "JAMP（chemSHERPA）から CMP への移行に伴う要件定義に参画",
    ],
  },
  {
    period: "2024年 - 2025年9月",
    title: "エンジニア",
    company: "銀行系決済システム開発",
    description:
      "Java 8 を使用した大規模な銀行決済システムの開発・運用。大量明細獲得と即日振込機能の実装。SVN による構成管理。インフラ設定やプロキシ設定など基盤寄りの業務も担当。",
    technologies: ["Java 8", "Hulft", "SVN", "Tomcat", "Oracle Database"],
    achievements: [
      "大量明細獲得・即日振込機能の実装と本番運用",
      "Hulft カスタマーセンターとの連携によケートを実施",
      "サーバー環境のプロキシ設定・保守を担当",
      "基盤チームと協力してシステムの安定稼働を実現",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">職務経歴</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-6 w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900"></div>

              <div className="ml-4">
                <div className="text-sm font-semibold text-blue-400">
                  {exp.period}
                </div>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {exp.title}
                </h3>
                <div className="text-lg text-gray-300 font-semibold">
                  {exp.company}
                </div>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    使用技術
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    主な成果
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-gray-400 text-sm flex items-start"
                      >
                        <span className="text-blue-400 mr-2">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
