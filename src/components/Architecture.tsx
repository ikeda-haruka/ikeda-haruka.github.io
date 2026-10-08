interface DiagramCard {
  title: string;
  detail: string;
}

interface FlowStep extends DiagramCard {
  tone: "blue" | "green" | "purple" | "red";
}

const portfolioLayers: FlowStep[] = [
  {
    title: "React 19 / TypeScript",
    detail: "画面をコンポーネント単位で実装",
    tone: "blue",
  },
  {
    title: "Vite",
    detail: "型チェック後に本番向けビルド",
    tone: "purple",
  },
  {
    title: "HTML / CSS / JS",
    detail: "ブラウザで動作する静的ファイル",
    tone: "green",
  },
  {
    title: "GitHub Pages",
    detail: "Actionsからビルド成果物を公開",
    tone: "red",
  },
];

const creationSteps = [
  {
    number: "01",
    title: "情報設計・タスク管理",
    description:
      "構成案や画面要件を整理し、GitHub Issues等でタスクをチケット化。実装フェーズの進捗を可視化しながら体系的に設計を進めます。",
  },
  {
    number: "02",
    title: "実装・レスポンシブ対応",
    description:
      "ReactとTypeScriptでコンポーネントを分割し、Tailwind CSSで画面幅に応じたモダンなUIと操作性を組み立てます。",
  },
  {
    number: "03",
    title: "ビルド・CI/CD自動公開",
    description:
      "npm run buildで型チェックと本番ビルドを行い、GitHub ActionsからGitHub Pages / Vercelへ静的ファイルを自動デプロイします。",
  },
];

const flowToneClasses: Record<FlowStep["tone"], string> = {
  blue: "border-blue-600 bg-blue-600 text-white",
  green: "border-emerald-600 bg-emerald-600 text-white",
  purple: "border-violet-600 bg-violet-600 text-white",
  red: "border-red-600 bg-red-600 text-white",
};

function FlowSequence({ steps, label }: { steps: FlowStep[]; label: string }) {
  return (
    <ol
      aria-label={label}
      className="grid grid-cols-1 gap-y-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0"
    >
      {steps.map((step, index) => (
        <li key={step.title} className="relative">
          <div
            className={`h-full rounded-lg border p-5 shadow-sm ${flowToneClasses[step.tone]}`}
          >
            <p className="text-xs font-semibold opacity-80">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h4 className="mt-2 !text-lg !text-white font-bold">
              {step.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed opacity-90">
              {step.detail}
            </p>
          </div>
          {index < steps.length - 1 && (
            <>
              <span
                className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-blue-600 text-xl"
                aria-hidden="true"
              >
                →
              </span>
              <span
                className="block text-center text-blue-600 text-xl lg:hidden"
                aria-hidden="true"
              >
                ↓
              </span>
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

function CardGrid({
  cards,
  className = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  tone = "blue",
}: {
  cards: DiagramCard[];
  className?: string;
  tone?: "blue" | "slate";
}) {
  const cardTone =
    tone === "blue"
      ? "border-blue-200 bg-blue-50"
      : "border-slate-200 bg-slate-100";

  return (
    <ul className={`grid gap-3 ${className}`}>
      {cards.map((card) => (
        <li
          key={card.title}
          className={`rounded-lg border p-4 ${cardTone}`}
        >
          <h5 className="font-bold text-slate-900">{card.title}</h5>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {card.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}

function DiagramGroup({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h5 className="mb-3 text-lg font-bold text-slate-900">{title}</h5>
      {description && (
        <p className="mb-4 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

function ChemicalSystemFlow({ variant }: { variant: "legacy" | "modern" }) {
  const isLegacy = variant === "legacy";
  const layers: FlowStep[] = isLegacy
    ? [
        { title: "利用者", detail: "Webブラウザ", tone: "blue" },
        { title: "画面", detail: "Struts / JSP", tone: "purple" },
        { title: "アプリケーション", detail: "JDK 8 / iBatis", tone: "purple" },
        { title: "データベース", detail: "Oracle Database", tone: "red" },
      ]
    : [
        { title: "利用者", detail: "Webブラウザ", tone: "blue" },
        { title: "Web画面", detail: "Vue.js / TypeScript", tone: "green" },
        {
          title: "API・アプリケーション",
          detail: "Java 21 / SpringBoot 3",
          tone: "purple",
        },
        { title: "データベース", detail: "Oracle Database", tone: "red" },
      ];
  const integrations = [
    { title: "業界標準", detail: "JAMP (chemSHERPA) → CMP" },
    { title: "ベンダー連携", detail: "電子証明書 / リバースプロキシ" },
    { title: "外部データ連携", detail: "IMDS" },
    { title: "メール送信", detail: "SMTPサーバー" },
  ];
  const operations = isLegacy
    ? [
        { title: "サーバー", detail: "複数部署で共用" },
        { title: "リポジトリ", detail: "GitLab" },
        { title: "ログ削除", detail: "月初に手動実施" },
        { title: "バッチ運用", detail: "JP1で定期実行" },
      ]
    : [
        { title: "サーバー", detail: "アプリ専用環境へ移行" },
        { title: "リポジトリ", detail: "GitHubへ移行" },
        { title: "ジョブ運用", detail: "JP1 / タスクスケジューラ" },
        { title: "保守運用", detail: "ITSMで管理" },
      ];

  return (
    <div>
      <DiagramGroup
        title="アプリケーション処理"
        description="利用者から画面・アプリケーションを経て、データベースへ処理が流れます。"
      >
        <FlowSequence steps={layers} label="アプリケーション処理の流れ" />
      </DiagramGroup>

      <DiagramGroup
        title="外部サービス連携"
        description="アプリケーションから接続する外部サービス・連携先"
      >
        <CardGrid cards={integrations} />
      </DiagramGroup>

      <DiagramGroup title="運用・開発基盤">
        <CardGrid cards={operations} tone="slate" />
      </DiagramGroup>

      {!isLegacy && (
        <p className="mt-6 border-l-2 border-blue-500 pl-4 text-sm text-slate-600">
          SpecKitによる仕様駆動開発のPoCも実施
        </p>
      )}
    </div>
  );
}

function CorporatePaymentFlow() {
  const steps: FlowStep[] = [
    { title: "企業の業務システム", detail: "会計・ERP等", tone: "blue" },
    { title: "連携・転送", detail: "ファイル連携 / Hulft", tone: "green" },
    {
      title: "決済アプリケーション",
      detail: "Java 8 / Tomcat",
      tone: "purple",
    },
    {
      title: "銀行側決済サービス",
      detail: "振込・口座情報連携",
      tone: "red",
    },
  ];
  const operations = [
    { title: "ネットワーク", detail: "プロキシ設定・保守" },
    { title: "ソース管理", detail: "SVN" },
    { title: "バッチ連携", detail: "Hulft / Bash" },
    { title: "ファイル共有", detail: "NAS セットアップ・検証" },
    { title: "実行環境", detail: "オンプレミス" },
  ];

  return (
    <div>
      <DiagramGroup
        title="業務データ・決済処理の流れ"
        description="企業の業務システムから連携基盤・決済アプリケーションを経由し、銀行側の決済サービスへ接続します。"
      >
        <FlowSequence steps={steps} label="法人向け決済処理の流れ" />
      </DiagramGroup>

      <DiagramGroup
        title="データベース"
        description="決済アプリケーションが振込・明細データを参照・更新します。"
      >
        <CardGrid
          cards={[
            { title: "Oracle Database", detail: "振込・明細データ" },
          ]}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          tone="slate"
        />
      </DiagramGroup>

      <DiagramGroup title="開発・運用基盤">
        <CardGrid cards={operations} tone="slate" />
      </DiagramGroup>

      <p className="mt-6 border-l-2 border-blue-500 pl-4 text-sm text-slate-600">
        担当機能：大量明細の取得・処理 ／ 即日振込機能の実装
      </p>
    </div>
  );
}

export default function Architecture() {
  return (
    <section className="bg-white py-20 border-t border-slate-200 w-full">
      <div className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>📐</span>
            <span>PROCESS & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            制作プロセス・システム構成
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Webサイト制作における設計・実装・CI/CD公開フローと、業務システムにおけるアーキテクチャ構成実績です。
          </p>
        </div>

        <div className="mb-16">
          <div className="mb-8">
            <p className="text-sm font-semibold text-blue-600">PORTFOLIO</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              このポートフォリオの制作と公開
            </h3>
            <p className="mt-3 max-w-4xl leading-relaxed text-slate-700">
              情報を探しやすい構成に整理し、React・TypeScript・Tailwind
              CSSで実装しています。Viteで静的ファイルを生成し、GitHub
              Actionsを通じてGitHub Pagesへ公開する構成です。
            </p>
          </div>

          <figure aria-labelledby="portfolio-architecture-title">
            <figcaption
              id="portfolio-architecture-title"
              className="mb-4 text-sm font-semibold text-slate-700"
            >
              システム構成・公開フロー
            </figcaption>
            <FlowSequence
              steps={portfolioLayers}
              label="ポートフォリオの制作・公開フロー"
            />
          </figure>

          <div className="mt-10">
            <h4 className="mb-4 text-lg font-bold text-slate-900">
              制作の進め方
            </h4>
            <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {creationSteps.map((step) => (
                <li key={step.number} className="border-t-2 border-blue-500 pt-4">
                  <p className="text-sm font-semibold text-blue-600">
                    STEP {step.number}
                  </p>
                  <h5 className="mt-2 text-lg font-bold text-slate-900">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-8 border-l-2 border-emerald-500 pl-4 text-sm leading-relaxed text-slate-700">
            閲覧時はブラウザがGitHub
            PagesからHTML・CSS・JavaScriptを取得し、Reactが各セクションを描画します。静的なポートフォリオのため、独自のバックエンドやデータベースは使用していません。
          </p>
        </div>

        <div className="border-t border-slate-200 pt-10">
          <h3 className="mb-8 text-2xl font-bold text-slate-900">
            業務システムの構成実績
          </h3>

          <section
            aria-labelledby="chemical-system-title"
            className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <h3
              id="chemical-system-title"
              className="mb-3 text-2xl font-bold text-slate-900"
            >
              化学物質管理システム構成図
            </h3>
            <p className="mb-8 max-w-4xl leading-relaxed text-slate-700">
              レガシー環境からJava 21・SpringBoot 3・Vue.jsを用いた構成への移行と、
              外部サービス連携・サーバー／リポジトリ移行・ジョブ運用の改善を担当しました。
              以下に移行前後の論理構成と、主な成果を示します。
            </p>

            <div className="mb-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h4 className="text-xl font-bold text-slate-900">レガシー版</h4>
              <p className="mb-5 mt-2 leading-relaxed text-slate-600">
                JDK 8・Struts・JSP・iBatisを中心とした従来構成です。
                複数部署共用サーバー上で稼働し、外部連携や手動作業を含む運用を行っていました。
              </p>
              <ChemicalSystemFlow variant="legacy" />
            </div>

            <div className="mb-8 rounded-xl border border-blue-200 bg-white p-5 shadow-sm sm:p-6">
              <h4 className="text-xl font-bold text-slate-900">
                モダナイゼーション後版
              </h4>
              <p className="mb-5 mt-2 leading-relaxed text-slate-600">
                Java 21・SpringBoot 3・Vue.js・TypeScriptを用いた構成です。
                専用サーバーやGitHubへの移行、定期ジョブとITSMによる保守運用も図に含めています。
                CMPへの移行は要件定義への参画内容として示しています。
              </p>
              <ChemicalSystemFlow variant="modern" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-3 text-lg font-bold text-slate-900">
                  主な機能・連携
                </h4>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
                  <li>・化学物質情報の管理と、JAMP（chemSHERPA）からCMPへの移行に伴う要件整理</li>
                  <li>・電子証明書を用いたリバースプロキシ経由のベンダーパッケージ連携</li>
                  <li>・IMDSとの外部連携およびSMTPサーバーを利用したメール送信</li>
                  <li>・JP1による日次・定期バッチ運用と、Windowsタスクスケジューラによるログ削除の自動化</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-lg font-bold text-slate-900">
                  主な成果
                </h4>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
                  <li>・JDK 8・Struts・iBatisを用いたレガシーシステムのバージョンアップと、最新技術への移行を推進</li>
                  <li>・複数部署共用サーバーからアプリ専用サーバーへ移行し、GitLabからGitHubへのリポジトリ移行を実施</li>
                  <li>・手動で行っていた月初のログ削除を自動化し、定期ジョブ運用を整備</li>
                  <li>・SpecKitによる仕様駆動開発のPoCを主導し、開発プロセスの効率化を検証</li>
                  <li>・ITSMでインシデント・変更・問題・ナレッジを管理し、保守運用を支援</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="payment-system-title"
            className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <h3
              id="payment-system-title"
              className="mb-3 text-2xl font-bold text-slate-900"
            >
              銀行系決済システム（実績）
            </h3>
            <p className="mb-6 max-w-4xl leading-relaxed text-slate-700">
              法人の業務システムと銀行側の決済サービスを連携するシステムの保守開発を担当しました。
              大量明細の取得・処理、即日振込機能の実装に加え、Java 8・Tomcatのアプリケーション、
              Oracle Database、Hulftによるデータ連携やプロキシ設定を含む運用に携わりました。
              以下は公開情報と担当実績をもとにした概念図であり、会社名・製品名や個別の接続先は記載していません。
            </p>
            <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
              <CorporatePaymentFlow />
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <h4 className="mb-2 font-bold text-slate-900">主な機能</h4>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
                  <li>・大量の振込明細を取得・処理する機能</li>
                  <li>・即日振込機能</li>
                  <li>・Hulftを利用した定期データ連携</li>
                  <li>・企業内システムと決済アプリケーションの連携</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <h4 className="mb-2 font-bold text-slate-900">
                  担当・使用技術
                </h4>
                <p className="text-sm leading-relaxed text-slate-700">
                  Java 8・Tomcat・Oracle Databaseを用いた保守開発を担当。
                  SVNによる構成管理、Hulftでのデータ連携、プロキシを含むサーバー環境の設定・保守に加え、
                  NASのセットアップと動作検証も実施しました。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
