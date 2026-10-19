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
      "大手化学メーカーのエンタープライズ案件において、AIエンジニア・機械エンジニア視点を活かし、SpecKitを使用した仕様駆動開発（Spec-Driven Development）のPoCを主導。複数人開発を念頭に機能単位ごとのspec/plan/task設計やspeckit.orchestratorによるSKILL.md自律選定を構築。SourceTree手動運用からプロンプト指示による自動グルーピング・機密チェック・自動コミットへの刷新、Figma MCPから社内React 19ガイドラインのVue.js+Vite移植への迅速な方針転換をFDE（Forward Deployed Engineer）として主導しました。",
    technologies: [
      "SpecKit (仕様駆動開発)",
      "speckit.orchestrator",
      "SKILL.md (自律選定)",
      "spec / plan / task 設計",
      "Git自動コミット・機密チェック",
      "Vue.js",
      "TypeScript",
      "Vite",
      "React 19 (移植元)",
      "Java 21",
      "SpringBoot 3",
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
      "【機能別仕様駆動開発の確立】複数人エンジニアでの並行開発を可能にするため、機能単位ごとに spec.md（仕様）、plan.md（計画）、task.md（タスク）を分割管理するワークフローを策定",
      "【speckit.orchestrator によるスキル自律選定】プロンプトを投げるだけで、orchestrator が最適な SKILL.md を自動選択・実行する自律的エージェント構造を導入",
      "【Gitコミット自動化 & 機密情報漏洩チェック】従来 SourceTree から手動で行っていた運用から、プロンプト指示による差分の自動グルーピング・コミットメッセージ生成・機密情報チェック・自動コミットを実現",
      "【デザインシステム導入の迅速な方針転換】当初検討した Figma MCP 連携を見直し、社内既存の公式アプリデザインガイドライン（React 19）リポジトリをクローンして Vue.js + TypeScript + Vite 向けにカスタマイズ・移植する現実的な方針へ転換し迅速に導入",
      "【機械エンジニア・FDE視点での現場推進】化学・製造業のドメイン知識を基に、JAMP（chemSHERPA）からCMPへの移行要件定義、IMDS（自動車業界材料DB）外部連携、業務主管部門からの依頼対応をフロントラインでリード",
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
