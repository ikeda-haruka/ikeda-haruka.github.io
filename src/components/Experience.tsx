interface Experience {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const experienceData: Experience[] = [
  {
    title: "シニアエンジニア",
    company: "化学物質管理システム開発",
    description:
      "Java 21 + SpringBoot + Vue.js を使用した化学物質管理システムの開発・運用。アプリ改修に加え、外部連携、サーバー・リポジトリ移行、ジョブ運用、ITSMを通じた保守業務を担当。SpecKit による仕様駆動開発の PoC 実施や、レガシーシステム（JDK8 + Struts + iBatis）から最新技術へのリプレイスも推進。",
    technologies: [
      "Java 21",
      "SpringBoot",
      "Vue.js",
      "Tomcat 11",
      "SpecKit",
      "TypeScript",
      "JP1",
      "ITSM",
      "GitLab",
      "GitHub",
      "Task Scheduler",
      "SMTP",
      "IMDS",
    ],
    achievements: [
      "レガシーシステムのバージョンアップを実施し、新技術への移行を推進",
      "仕様駆動開発の PoC を主導し、開発プロセスの効率化を実現",
      "IaaS へのクラウドリフトの事前検証を実施",
      "JAMP（chemSHERPA）から CMP への移行に伴う要件定義に参画",
      "電子証明書を必要とするリバースプロキシ経由のベンダーパッケージ連携、および IMDS（自動車業界共通の材料データベース）との外部連携を実施。メール送信には SMTP サーバーを利用",
      "複数部署共用サーバーからアプリ専用サーバーへの移行、および GitLab から GitHub へのリポジトリ移行を対応",
      "ITSMでインシデント・変更・問題・ナレッジを管理。エスカレーションされたインシデントへの対応や、同部署内の変更管理アセスメントを実施",
      "月初に手動で行っていたログ削除を Windows タスク スケジューラで自動化。アプリのバッチジョブは JP1 で日次・5分間隔などのスケジュール実行を運用",
      "業務主管部門からのデータ抽出・改修依頼に随時対応し、共通管理の要件書レビューも実施",
    ],
  },
  {
    title: "エンジニア",
    company: "銀行系決済システム開発",
    description:
      "Java 8 を使用した大規模な銀行決済システムの開発・運用。大量明細獲得と即日振込機能の実装。SVN による構成管理。インフラ設定やプロキシ設定など基盤寄りの業務も担当。",
    technologies: ["Java 8", "Hulft", "SVN", "Tomcat", "Oracle Database", "NAS"],
    achievements: [
      "大量明細獲得・即日振込機能の実装と本番運用",
      "Hulft カスタマーセンターとの連携によケートを実施",
      "サーバー環境のプロキシ設定・保守を担当",
      "NAS導入時のセットアップと動作検証を実施",
      "基盤チームと協力してシステムの安定稼働を実現",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">職務経歴</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  {exp.title}
                </h3>
                <div className="text-lg text-slate-700 font-semibold">
                  {exp.company}
                </div>

                <p className="text-slate-700 mt-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">
                    使用技術
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">
                    主な成果
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-slate-600 text-sm flex items-start"
                      >
                        <span className="text-blue-600 mr-2">✓</span>
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
