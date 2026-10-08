interface Experience {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const experienceData: Experience[] = [
  {
    title: "エンジニア",
    company: "化学物質管理システム開発",
    description:
      "Java 21 + SpringBoot + Vue.js を使用した化学物質管理システムの技術検証・保守開発を担当。アプリ改修に加え、外部連携、サーバー・リポジトリ移行、ジョブ運用、ITSMを通じた保守業務に携わる。SpecKit による仕様駆動開発の PoC や、レガシーシステム（JDK8 + Struts + iBatis）のリプレイスに伴う検証・改修も実施。",
    technologies: [
      "Java 21",
      "SpringBoot",
      "Vue.js",
      "Figma",
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
      "Figmaのアプリデザインガイドラインをライブラリとして活用し、化学物質管理システム向けにカスタマイズしたUI部品を作成。設計に沿ったVue.js部品をプロジェクト内に実装",
      "社内公開されているアプリデザインガイドラインの公開方法に着想を得て、本ポートフォリオもGitHub Pagesで公開",
      "レガシーシステムのバージョンアップに伴う検証・改修を実施",
      "仕様駆動開発の PoC を実施し、開発プロセスの効率化を検証",
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
      "Java 8 を使用した大規模な銀行決済システムの基盤・保守開発を担当。大量明細獲得と即日振込機能の実装に加え、SVN による構成管理、インフラ・プロキシ設定などに携わる。",
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
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold mb-3">
            <span>💼</span>
            <span>CAREER & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            経歴・エンジニアリング背景
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            ミッションクリティカルな金融決済や化学物質管理システムの開発・保守運用を通じて培った、
            高い信頼性・保守性・セキュリティ設計力。Webサイト制作においてもこの確かな技術力が基盤となっています。
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 hover:border-slate-300 transition-all shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                    {exp.title}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {exp.company}
                </h3>

                <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    使用技術
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    主な実績・担当領域
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-slate-700 text-xs sm:text-sm flex items-start leading-relaxed"
                      >
                        <span className="text-indigo-600 font-bold mr-2 shrink-0">
                          ✓
                        </span>
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
