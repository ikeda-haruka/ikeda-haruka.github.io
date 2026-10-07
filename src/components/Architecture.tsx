const portfolioLayers = [
  {
    name: "React 19 / TypeScript",
    detail: "画面をコンポーネント単位で実装",
  },
  {
    name: "Vite",
    detail: "型チェック後に本番向けビルド",
  },
  {
    name: "HTML / CSS / JS",
    detail: "ブラウザで動作する静的ファイル",
  },
  {
    name: "GitHub Pages",
    detail: "Actionsからビルド成果物を公開",
  },
];

const creationSteps = [
  {
    number: "01",
    title: "情報設計",
    description:
      "プロフィール、スキル、職務経歴、プロジェクト、問い合わせを整理し、必要な情報へ移動しやすい構成にします。",
  },
  {
    number: "02",
    title: "実装・レスポンシブ対応",
    description:
      "ReactとTypeScriptでセクションを分割し、Tailwind CSSで画面幅に応じたレイアウトを組み立てます。",
  },
  {
    number: "03",
    title: "ビルド・公開",
    description:
      "npm run buildで型チェックと本番ビルドを行い、GitHub ActionsからGitHub Pagesへ静的ファイルをデプロイします。",
  },
];

interface SystemDiagramProps {
  variant: "legacy" | "modern";
}

function ChemicalSystemDiagram({ variant }: SystemDiagramProps) {
  const isLegacy = variant === "legacy";
  const id = `chemical-${variant}`;
  const layers = isLegacy
    ? [
        { title: "利用者", detail: "Webブラウザ", color: "#2563eb" },
        { title: "画面", detail: "Struts / JSP", color: "#7c3aed" },
        { title: "アプリケーション", detail: "JDK 8 / iBatis", color: "#7c3aed" },
        { title: "データベース", detail: "Oracle Database", color: "#dc2626" },
      ]
    : [
        { title: "利用者", detail: "Webブラウザ", color: "#2563eb" },
        { title: "Web画面", detail: "Vue.js / TypeScript", color: "#059669" },
        {
          title: "API・アプリケーション",
          detail: "Java 21 / SpringBoot 3",
          color: "#7c3aed",
        },
        { title: "データベース", detail: "Oracle Database", color: "#dc2626" },
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
  const positions = [20, 230, 440, 650];

  return (
    <svg
      viewBox="0 0 840 570"
      className="w-full min-w-[700px] max-w-[840px]"
      role="img"
      aria-labelledby={`${id}-title ${id}-description`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={`${id}-title`}>
        化学物質管理システムの{isLegacy ? "レガシー版" : "モダナイゼーション後版"}構成図
      </title>
      <desc id={`${id}-description`}>
        利用者から画面、アプリケーション、データベースへの処理の流れと、
        外部連携および運用基盤を示す構成図です。
      </desc>
      <defs>
        <marker
          id={`${id}-arrow`}
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
        </marker>
        <marker
          id={`${id}-dashed-arrow`}
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#2563eb" />
        </marker>
      </defs>

      <text x="32" y="35" fill="#0f172a" fontSize="18" fontWeight="700">
        アプリケーション処理
      </text>
      {layers.map((layer, index) => (
        <g key={layer.title}>
          <rect
            x={positions[index]}
            y="70"
            width="190"
            height="100"
            rx="12"
            fill={layer.color}
          />
          <text
            x={positions[index] + 95}
            y="113"
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="700"
          >
            {layer.title}
          </text>
          <text
            x={positions[index] + 95}
            y="140"
            textAnchor="middle"
            fill="white"
            fontSize="13"
          >
            {layer.detail}
          </text>
          {index < layers.length - 1 && (
            <line
              x1={positions[index] + 190}
              y1="120"
              x2={positions[index + 1] - 8}
              y2="120"
              stroke="#64748b"
              strokeWidth="3"
              markerEnd={`url(#${id}-arrow)`}
            />
          )}
        </g>
      ))}

      <text x="32" y="220" fill="#0f172a" fontSize="18" fontWeight="700">
        外部サービス連携
      </text>
      <line
        x1="115"
        y1="252"
        x2="745"
        y2="252"
        stroke="#2563eb"
        strokeWidth="2"
        strokeDasharray="7 6"
      />
      <line
        x1="535"
        y1="170"
        x2="612"
        y2="252"
        stroke="#2563eb"
        strokeWidth="2"
        strokeDasharray="7 6"
        markerEnd={`url(#${id}-dashed-arrow)`}
      />
      {integrations.map((integration, index) => (
        <g key={integration.title}>
          <line
            x1={positions[index] + 95}
            y1="252"
            x2={positions[index] + 95}
            y2="275"
            stroke="#2563eb"
            strokeWidth="2"
            strokeDasharray="7 6"
          />
          <rect
            x={positions[index]}
            y="275"
            width="190"
            height="82"
            rx="10"
            fill="#eff6ff"
            stroke="#93c5fd"
            strokeWidth="2"
          />
          <text
            x={positions[index] + 95}
            y="309"
            textAnchor="middle"
            fill="#1e3a8a"
            fontSize="15"
            fontWeight="700"
          >
            {integration.title}
          </text>
          <text
            x={positions[index] + 95}
            y="334"
            textAnchor="middle"
            fill="#334155"
            fontSize="12"
          >
            {integration.detail}
          </text>
        </g>
      ))}

      <text x="32" y="405" fill="#0f172a" fontSize="18" fontWeight="700">
        運用・開発基盤
      </text>
      {operations.map((operation, index) => (
        <g key={operation.title}>
          <rect
            x={positions[index]}
            y="425"
            width="190"
            height="82"
            rx="10"
            fill="#f1f5f9"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          <text
            x={positions[index] + 95}
            y="459"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="15"
            fontWeight="700"
          >
            {operation.title}
          </text>
          <text
            x={positions[index] + 95}
            y="484"
            textAnchor="middle"
            fill="#334155"
            fontSize="12"
          >
            {operation.detail}
          </text>
        </g>
      ))}
      {!isLegacy && (
        <text x="32" y="545" fill="#475569" fontSize="13">
          SpecKitによる仕様駆動開発のPoCも実施
        </text>
      )}
    </svg>
  );
}

function CorporatePaymentDiagram() {
  return (
    <svg
      viewBox="0 0 1000 450"
      className="w-full min-w-[760px] max-w-[1000px]"
      role="img"
      aria-labelledby="payment-diagram-title payment-diagram-description"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="payment-diagram-title">
        法人向け決済システムの概念構成図
      </title>
      <desc id="payment-diagram-description">
        企業の会計・業務システムから連携基盤を経由して決済アプリケーションへ接続し、
        データベースと銀行側の決済サービスを連携する構成です。
        下段に開発・運用基盤と担当した主な機能を示しています。
      </desc>
      <defs>
        <marker
          id="payment-arrow"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
        </marker>
        <marker
          id="payment-blue-arrow"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#2563eb" />
        </marker>
      </defs>

      <text x="30" y="35" fill="#0f172a" fontSize="18" fontWeight="700">
        業務データ・決済処理の流れ
      </text>

      <rect x="30" y="65" width="205" height="95" rx="12" fill="#2563eb" />
      <text
        x="132"
        y="105"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="700"
      >
        企業の業務システム
      </text>
      <text x="132" y="132" textAnchor="middle" fill="white" fontSize="13">
        会計・ERP等
      </text>

      <rect
        x="275"
        y="65"
        width="195"
        height="95"
        rx="12"
        fill="#0f766e"
      />
      <text
        x="372"
        y="105"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="700"
      >
        連携・転送
      </text>
      <text x="372" y="132" textAnchor="middle" fill="white" fontSize="13">
        ファイル連携 / Hulft
      </text>

      <rect
        x="510"
        y="65"
        width="220"
        height="95"
        rx="12"
        fill="#7c3aed"
      />
      <text
        x="620"
        y="105"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="700"
      >
        決済アプリケーション
      </text>
      <text x="620" y="132" textAnchor="middle" fill="white" fontSize="13">
        Java 8 / Tomcat
      </text>

      <rect x="770" y="65" width="200" height="95" rx="12" fill="#dc2626" />
      <text
        x="870"
        y="105"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="700"
      >
        銀行側決済サービス
      </text>
      <text x="870" y="132" textAnchor="middle" fill="white" fontSize="13">
        振込・口座情報連携
      </text>

      {[235, 470, 730].map((x) => (
        <line
          key={x}
          x1={x}
          y1="112"
          x2={x + 35}
          y2="112"
          stroke="#64748b"
          strokeWidth="3"
          markerEnd="url(#payment-arrow)"
        />
      ))}

      <line
        x1="620"
        y1="160"
        x2="620"
        y2="217"
        stroke="#2563eb"
        strokeWidth="2"
        markerEnd="url(#payment-blue-arrow)"
      />
      <rect
        x="510"
        y="220"
        width="220"
        height="70"
        rx="10"
        fill="#fff1f2"
        stroke="#fda4af"
        strokeWidth="2"
      />
      <text
        x="620"
        y="250"
        textAnchor="middle"
        fill="#881337"
        fontSize="15"
        fontWeight="700"
      >
        Oracle Database
      </text>
      <text x="620" y="274" textAnchor="middle" fill="#475569" fontSize="12">
        振込・明細データ
      </text>

      <text x="30" y="220" fill="#0f172a" fontSize="18" fontWeight="700">
        開発・運用基盤
      </text>
      {[
        { title: "ネットワーク", detail: "プロキシ設定・保守" },
        { title: "ソース管理", detail: "SVN" },
        { title: "バッチ連携", detail: "Hulft / Bash" },
        { title: "ファイル共有", detail: "NAS セットアップ・検証" },
        { title: "実行環境", detail: "オンプレミス" },
      ].map((item, index) => {
        const x = 30 + index * 190;
        return (
          <g key={item.title}>
            <rect
              x={x}
              y="320"
              width="170"
              height="72"
              rx="10"
              fill="#f1f5f9"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            <text
              x={x + 85}
              y="349"
              textAnchor="middle"
              fill="#0f172a"
              fontSize="15"
              fontWeight="700"
            >
              {item.title}
            </text>
            <text
              x={x + 85}
              y="375"
              textAnchor="middle"
              fill="#334155"
              fontSize="13"
            >
              {item.detail}
            </text>
          </g>
        );
      })}

      <text x="30" y="430" fill="#475569" fontSize="13">
        担当機能：大量明細の取得・処理 ／ 即日振込機能の実装
      </text>
    </svg>
  );
}

export default function Architecture() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            制作方法・システム構成図
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="mb-16">
          <div className="mb-8">
            <p className="text-sm font-semibold text-blue-600">PORTFOLIO</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              このポートフォリオの制作と公開
            </h3>
            <p className="text-slate-700 mt-3 leading-relaxed max-w-4xl">
              情報を探しやすい構成に整理し、React・TypeScript・Tailwind
              CSSで実装しています。Viteで静的ファイルを生成し、GitHub
              Actionsを通じてGitHub Pagesへ公開する構成です。
            </p>
          </div>

          <figure aria-labelledby="portfolio-architecture-title">
            <figcaption
              id="portfolio-architecture-title"
              className="text-sm font-semibold text-slate-700 mb-4"
            >
              システム構成・公開フロー
            </figcaption>
            <ol className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-2">
              {portfolioLayers.map((layer, index) => (
                <li key={layer.name} className="relative">
                  <div className="h-full border border-slate-200 bg-slate-50 p-5 rounded-lg shadow-sm">
                    <p className="text-xs font-semibold text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="text-lg font-bold text-slate-900 mt-2">
                      {layer.name}
                    </h4>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {layer.detail}
                    </p>
                  </div>
                  {index < portfolioLayers.length - 1 && (
                    <>
                      <span
                        className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-blue-600 text-xl"
                        aria-hidden="true"
                      >
                        →
                      </span>
                      <span
                        className="md:hidden block text-center text-blue-600 text-xl"
                        aria-hidden="true"
                      >
                        ↓
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </figure>

          <div className="mt-10">
            <h4 className="text-lg font-bold text-slate-900 mb-4">制作の進め方</h4>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {creationSteps.map((step) => (
                <li
                  key={step.number}
                  className="border-t-2 border-blue-500 pt-4"
                >
                  <p className="text-sm font-semibold text-blue-600">
                    STEP {step.number}
                  </p>
                  <h5 className="text-lg font-bold text-slate-900 mt-2">
                    {step.title}
                  </h5>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-8 border-l-2 border-emerald-500 pl-4 text-sm text-slate-700 leading-relaxed">
            閲覧時はブラウザがGitHub
            PagesからHTML・CSS・JavaScriptを取得し、Reactが各セクションを描画します。静的なポートフォリオのため、独自のバックエンドやデータベースは使用していません。
          </p>
        </div>

        <div className="border-t border-slate-200 pt-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
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
              <h4 className="text-xl font-bold text-slate-900">
                レガシー版
              </h4>
              <p className="mb-5 mt-2 leading-relaxed text-slate-600">
                JDK 8・Struts・JSP・iBatisを中心とした従来構成です。
                複数部署共用サーバー上で稼働し、外部連携や手動作業を含む運用を行っていました。
              </p>
              <div className="overflow-x-auto rounded-lg bg-white">
                <ChemicalSystemDiagram variant="legacy" />
              </div>
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
              <div className="overflow-x-auto rounded-lg bg-white">
                <ChemicalSystemDiagram variant="modern" />
              </div>
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
              className="text-2xl font-bold text-slate-900 mb-3"
            >
              銀行系決済システム（実績）
            </h3>
            <p className="max-w-4xl leading-relaxed text-slate-700 mb-6">
              法人の業務システムと銀行側の決済サービスを連携するシステムの保守開発を担当しました。
              大量明細の取得・処理、即日振込機能の実装に加え、Java 8・Tomcatのアプリケーション、
              Oracle Database、Hulftによるデータ連携やプロキシ設定を含む運用に携わりました。
              以下は公開情報と担当実績をもとにした概念図であり、会社名・製品名や個別の接続先は記載していません。
            </p>
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
              <CorporatePaymentDiagram />
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
                <h4 className="mb-2 font-bold text-slate-900">担当・使用技術</h4>
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
