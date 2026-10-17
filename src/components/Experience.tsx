interface Experience {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const experienceData: Experience[] = [
  {
    title: "AIエンジニア・FDE / フルスタックエンジニア",
    company: "化学物質管理システム開発",
    description:
      "大手化学メーカーのエンタープライズ案件において、AIエンジニア・機械エンジニア視点を活かし、SpecKitを使用した仕様駆動開発（Spec-Driven Development）のPoCを主導。現場の課題解決を直接推進するFDE（Forward Deployed Engineer）として、レガシーStruts環境からJava 21・SpringBoot 3・Vue.jsへのモダナイゼーション検証、Figma UI設計、JAMPからCMPへの法令要件定義、IMDS外部連携、インフラ・リポジトリ移行からITSM保守運用まで一気通貫で担当。",
    technologies: [
      "SpecKit (仕様駆動開発)",
      "AI/LLM活用",
      "Java 21",
      "SpringBoot 3",
      "Vue.js",
      "TypeScript",
      "Figma",
      "Tomcat 11",
      "Oracle DB",
      "IMDS",
      "JP1",
      "ITSM",
      "GitHub",
      "GitLab",
      "Task Scheduler",
      "SMTP",
    ],
    achievements: [
      "【SpecKit仕様駆動開発PoCを主導】AIエンジニアとしてSpecKitを用いた仕様駆動開発（SDD）のPoCをエンタープライズ現場で主導。自然言語仕様から設計・コード生成の整合性を高め、開発生産性向上を実証",
      "【機械エンジニア・FDE視点での現場推進】化学・製造業のドメイン知識を基に、JAMP（chemSHERPA）からCMPへの移行要件定義、IMDS（自動車業界材料DB）外部連携、業務主管部門からの依頼対応をフロントラインでリード",
      "Figmaのアプリデザインガイドラインをライブラリとして活用し、化学物質管理システム向けにカスタマイズしたUI部品を作成。設計に沿ったVue.js部品をプロジェクト内に実装",
      "社内公開されているアプリデザインガイドラインの公開方法に着想を得て、本ポートフォリオもGitHub Pagesで公開",
      "レガシーシステム（JDK8 + Struts + iBatis）から Java 21 + SpringBoot 3 + Vue.js へのバージョンアップに伴う検証・改修を実施",
      "IaaS へのクラウドリフトおよびマルチテナント対応の事前検証を実施",
      "電子証明書を必要とするリバースプロキシ経由のベンダーパッケージ連携、およびメール送信（SMTP）を実装",
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
    <section className="py-20 bg-slate-50 border-t border-slate-200 w-full">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold mb-3">
            <span>💼</span>
            <span>CAREER & BACKGROUND</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            <span className="inline-block">経歴・</span>
            <span className="inline-block">エンジニアリング背景</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            金融決済や大手化学メーカーのエンタープライズ案件で培った堅牢なシステム設計力と、AIエンジニア・機械エンジニアとしての現場ドメイン理解。最新のAI技術やSpecKitによる仕様駆動開発PoCを現場で主導するFDE（Forward Deployed Engineer）としての突破力を活かし、Web制作から高度なシステム構築まで高品質に実現します。
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
