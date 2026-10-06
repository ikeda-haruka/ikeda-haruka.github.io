interface Project {
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  technologies: string[];
  features: string[];
  github?: string;
}

const projectsData: Project[] = [
  {
    title: "化学物質管理システム（PoC・バージョンアップ）",
    subtitle: "SpecKit による仕様駆動開発の実践",
    description:
      "レガシーな Struts + JSP アプリケーション（JDK8）を SpringBoot 3 + Vue.js へリプレイス。SpecKit を用いた仕様駆動開発により、要件定義から実装までのプロセスを最適化。",
    overview:
      "化学物質の使用・管理を一元化するシステム。JAMP（chemSHERPA）から CMP への移行対応を同時実施。企業の法令遵守と効率的な化学物質管理を実現。",
    technologies: [
      "Java 21",
      "SpringBoot",
      "Vue.js",
      "TypeScript",
      "Tomcat 11",
      "SpecKit",
      "Oracle DB",
    ],
    features: [
      "マイグレーション: Struts/JSP から SpringBoot/Vue.js への段階的リプレイス",
      "SpecKit による仕様駆動開発のPoC実施と検証",
      "JAMP から CMP への法令対応",
      "IaaS クラウドリフト前提の設計",
      "マルチテナント対応の検討",
    ],
  },
  {
    title: "銀行系決済システム",
    subtitle: "大量明細処理・即日振込機能の実装",
    description:
      "大手銀行向けの決済インフラシステム。大量の振込明細の取得と即日振込処理を実装。ミッションクリティカルなシステムのため高い信頼性・可用性を確保。",
    overview:
      "企業向けの法人決済サービス。SVN による厳格なバージョン管理、Hulft による定期ジョブ実行、複雑なプロキシ設定を含むオンプレミス基盤上での運用。銀行の厳しい要件を満たす堅牢なシステム。",
    technologies: [
      "Java 8",
      "Hulft",
      "SVN",
      "Tomcat",
      "Oracle Database",
      "Bash",
    ],
    features: [
      "大量明細の高速取得・処理機能",
      "即日振込実行エンジン",
      "Hulft カスタマーセンター連携",
      "プロキシを含む複雑なネットワーク設定の管理",
      "24/7 監視・対応体制による高可用性",
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            制作物・プロジェクト
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="p-6 sm:p-8">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-semibold mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 mt-4">{project.description}</p>

                <div className="mt-6 p-4 bg-gray-800 rounded border border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    プロジェクト概要
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    主な機能
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featIndex) => (
                      <li
                        key={featIndex}
                        className="text-gray-400 text-sm flex items-start"
                      >
                        <span className="text-blue-400 mr-2">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    使用技術
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
                  >
                    GitHub で見る →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg border border-blue-500 border-opacity-30">
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-blue-300">注：</span>{" "}
            SES案件の社内ネットワークアプリケーションのため、コードは公開していません。
            プロジェクトの詳細やコード例についてはお気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}
