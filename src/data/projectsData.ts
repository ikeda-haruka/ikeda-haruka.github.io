import type { Project, InfrastructureCostPolicy } from "../types/project";
import dentalDesktopFvImg from "../assets/dental/dental-lp-desktop-fv.png";
import dentalMobileFvImg from "../assets/dental/dental-lp-mobile-fv.png";
import dentalDesktopFullImg from "../assets/dental/dental-lp-desktop-full.png";
import dentalMobileFullImg from "../assets/dental/dental-lp-mobile-full.png";
import dentalBenefitsImg from "../assets/dental/dental-lp-benefits.png";
import dentalScheduleImg from "../assets/dental/dental-lp-schedule.png";
import dentalStaffImg from "../assets/dental/dental-lp-staff.png";
import dentalRequirementsImg from "../assets/dental/dental-lp-requirements.png";
import dentalCtaImg from "../assets/dental/dental-lp-cta.png";
import nurseCaptureImg from "../assets/nurse-capture.png";
import nurseCapturePcImg from "../assets/nurse-capture-pc.png";
import nurseCaptureMobileImg from "../assets/nurse-capture-mobile.png";
import nurseHeroImg from "../assets/nurse/hero-nurse.jpg";
import nurseBabyCareImg from "../assets/nurse/nurse-baby-care.jpg";
import nursePreceptorImg from "../assets/nurse/attraction-preceptor.jpg";
import nurseOutpatientImg from "../assets/nurse/work-outpatient.jpg";
import nurseTeamImg from "../assets/nurse/nurse-team.jpg";
import nurseDoctorKeikoImg from "../assets/nurse/doctor-keiko.jpg";
import olorosoCaptureImg from "../assets/oloroso-capture.png";
import olorosoCapturePcImg from "../assets/oloroso-capture-pc.png";
import olorosoCaptureMobileImg from "../assets/oloroso-capture-mobile.png";
import nailsalonCaptureImg from "../assets/nailsalon-capture.png";
import nailsalonCapturePcImg from "../assets/nailsalon-capture-pc.png";
import nailsalonCaptureMobileImg from "../assets/nailsalon-capture-mobile.png";
import nailsalonUiMensImg from "../assets/nailsalon-ui-mens.png";
import nailsalonUiMypageImg from "../assets/nailsalon-ui-mypage.png";
import nailsalonUiShopImg from "../assets/nailsalon-ui-shop.png";
import biwakogymCaptureImg from "../assets/biwakogym-capture.png";
import biwakogymCapturePcImg from "../assets/biwakogym-capture-pc.png";
import biwakogymCaptureMobileImg from "../assets/biwakogym-capture-mobile.png";
import portfolioCaptureImg from "../assets/portfolio-capture.png";
import portfolioCapturePcImg from "../assets/portfolio-capture-pc.png";
import portfolioCaptureMobileImg from "../assets/portfolio-capture-mobile.png";
import proteinCaptureImg from "../assets/protein-capture.png";
import proteinCapturePcImg from "../assets/protein-capture-pc.png";
import proteinCaptureMobileImg from "../assets/protein-capture-mobile.png";
import proteinUiDrawerImg from "../assets/protein-ui-drawer.png";
import proteinUiMarqueeImg from "../assets/protein-ui-marquee.png";
import proteinUiLineupImg from "../assets/protein-ui-lineup.png";
import proteinUiDetailImg from "../assets/protein-ui-detail.png";
import proteinUiPollImg from "../assets/protein-ui-poll.png";
import adminNewsListImg from "../assets/oloroso-admin/admin-news-list.png";
import adminNewsEditImg from "../assets/oloroso-admin/admin-news-edit.png";
import adminBlogListImg from "../assets/oloroso-admin/admin-blog-list.png";
import adminBlogEditImg from "../assets/oloroso-admin/admin-blog-edit.png";
import adminSettingsImg from "../assets/oloroso-admin/admin-settings.png";
import spProteinCaptureImg from "../assets/sp-protein-capture.png";
import spProteinCapturePcImg from "../assets/sp-protein-capture-pc.png";
import spProteinCaptureMobileImg from "../assets/sp-protein-capture-mobile.png";
import spProteinUiPillarsImg from "../assets/sp-protein-ui-pillars.png";
import spProteinUiDetailImg from "../assets/sp-protein-ui-detail.png";
import spProteinUiStatementImg from "../assets/sp-protein-ui-statement.png";
import flyerFlamencoImg from "../assets/flyer-flamenco.jpg";
import graphicFlyerWinterImg from "../assets/works_graphics/graphic_flyer_winter.jpg";
import graphicSnsEarlysummerImg from "../assets/works_graphics/graphic_sns_earlysummer.webp";
import graphicSnsAutumnImg from "../assets/works_graphics/graphic_sns_autumn.webp";
import graphicSnsSpringImg from "../assets/works_graphics/graphic_sns_spring.webp";
import graphicSnsSummerImg from "../assets/works_graphics/graphic_sns_summer.jpg";
import graphicSnsSlideDetailImg from "../assets/works_graphics/graphic_sns_slide_detail.webp";
import graphicCajonWorkshopImg from "../assets/works_graphics/graphic_cajon_workshop.jpg";
import okayamaCafePcImg from "../assets/okayamacafe/okayamacafe-capture-pc.png";
import okayamaCafeMobileImg from "../assets/okayamacafe/okayamacafe-capture-mobile.png";
import okayamaCafeThemeScreenshotImg from "../assets/okayamacafe/wp-theme-screenshot.png";
import okayamaCafeThemeAdminImg from "../assets/okayamacafe/wp-theme-admin.png";
import okayamaCafeCustomizerSiteInfoImg from "../assets/okayamacafe/wp-customizer-site-info.png";
import okayamaCafeCustomizerMenuImg from "../assets/okayamacafe/wp-customizer-menu.png";
import okayamaCafeCptMenuListImg from "../assets/okayamacafe/wp-cpt-menu-list.png";
import okayamaCafeTaxonomyCategoryImg from "../assets/okayamacafe/wp-taxonomy-category.png";

/**
 * Vercelホスティングにおけるインフラ選定・運用コスト管理ポリシー（FinOps）
 * 試作・デモ用途でのHobbyプラン採用理由と、商用案件での青天井課金防止策・Cloudflare選定基準を一元定義
 */
const createVercelCostPolicy = (
  projectName: string,
  contextNote?: string
): InfrastructureCostPolicy => ({
  badge: "FINOPS & COST DEFENSE",
  title: `${projectName} のインフラ選定・運用コスト管理ポリシー`,
  subtitle:
    "試作・デモでの無料枠（Hobby）安全運用と、実務商用案件における予期せぬ青天井課金を物理的に防ぐ設計思想",
  currentPlanNote:
    `本サイト（${projectName}）はポートフォリオ実績用の試作・検証・遊びのデモサイトであるため、すべてVercelの「Hobbyプラン（無料枠）」を利用してデプロイしています。Hobbyプランは非商用利用限定ですが、データ転送量（100GB/月）などの上限枠を使い切ってもサイト配信が一時停止するのみで、予期せぬ超過課金や青天井の高額請求が一切発生しない安全な設計となっています。` +
    (contextNote ? ` ${contextNote}` : ""),
  commercialVercel: {
    heading: "実務・商用案件でVercelを採用する場合の必須防衛策（Pro / Enterprise）",
    description:
      "実際のクライアントワークや商用Web案件でVercelを使用する場合は、商用利用規約に準拠するためProプラン（月額$20〜）やEnterpriseプランを検討・採用します。ただしProプランは従量課金制となるため、悪質なBot・DDoS攻撃や予期せぬSNSバズ等による急激なトラフィック集中で、費用が青天井に膨れ上がる重大な請求事故リスクを孕んでいます。",
    pauseDeployments:
      "そのため実務運用の現場では、VercelのSpend Management設定にて「Pause Production Deployments（本番デプロイ一時停止）」を必ずオン（有効化）にして運用します。設定予算上限への到達時に自動で本番配信を停止させることで、運用費が知らない間に膨れ上がる事態を物理的・確実に防ぎます。",
  },
  cloudflareAlternative: {
    heading: "運用費を最小化し、転送量を気にせず配信する場合の「Cloudflare」選定",
    description:
      "仕事のサイトで、月のランニング費用をできる限り小さく抑え、アクセス集中やリッチな画像配信に伴う転送量を一切気にせず運用したい場合は、Vercelではなく「Cloudflare（Cloudflare Pages / Workers）」へのデプロイを選択・提案します。",
    benefit:
      "Cloudflareはデータ転送量（Egress）の課金が原則発生しない（完全無料）という圧倒的な強みを持っています。急激なアクセス急増時でも従量課金の恐怖がなく、コストを予測可能な最小限に抑えた堅牢なインフラ運用を実現できます。",
  },
  referenceUrl: "https://barco-re.com/blog/vercel-pricing",
});

export const projectsData: Project[] = [
  {
    id: "chemical",
    category: "client_enterprise",
    categoryLabel: "参画案件（業務システム）",
    badgeType: "client_enterprise",
    isClientWork: true,
    title: "化学物質管理システム（PoC・バージョンアップ）",
    subtitle: "AIエンジニア・機械エンジニア視点でSpecKit仕様駆動開発PoCを主導｜Vue.js 3+Vite × Spring Boot 4.x (Java 21) × JUnit 5",
    description:
      "大手化学メーカーのエンタープライズ案件において、AIエンジニア・機械エンジニア視点を活かし、SpecKitを使用した『仕様駆動開発（Spec-Driven Development）』のPoCを主導。複数人開発を前提に機能単位でspec.md/plan.md/task.mdを分割策定し、speckit.orchestratorへの自然言語指示から適切なSKILL.mdを自律選定・実行する高度なAIエージェントワークフローを構築。さらにSourceTree手動運用から、プロンプト指示によるコミットの自動グルーピング・機密情報チェック・コミット自動化を実現。UI設計では当初検討のFigma MCP連携を見直し、社内既存のReact 19デザインガイドラインをVue.js 3+TypeScript+Viteへカスタマイズ移植する現実的かつ迅速な方針転換を断行。顧客現場に入り込んで課題解決を牽引するFDE（Forward Deployed Engineer）として、StrutsからJava 21+Spring Boot 4.xへのモダナイゼーション、JUnit 5による単体テスト実装からITSM保守運用まで一気通貫で推進しました。",
    overview:
      "大手総合化学メーカーにおける化学物質管理業務のモダナイゼーション案件。AI・機械エンジニアとしての工学系バックグラウンドを背景に、現場の複雑な法令・物質データ要件を咀嚼し、SpecKitによる仕様駆動開発PoCを主導。フロントエンドはVue.js 3 + TypeScript + Vite、バックエンドはSpring Boot 4.x（Java 21）、単体テストはJUnit 5を採用。複数人での並行開発を可能にする機能単位のspec/plan/taskドキュメント設計、speckit.orchestratorとSKILL.mdによるAIスキル自動実行、SourceTree手動コミットからの脱却（自動グルーピング・機密チェック）、そして社内React 19デザインガイドラインのVue.js 3+Viteへの移植など、現場のリアルな課題に即した実務適用をFDEとして完遂しました。",
    purpose:
      "大手化学メーカーにおける化学物質管理の一元化および法改正（JAMPからCMPへの移行）への適合。レガシーなStruts/JSPからモダンなSpring Boot 4.x（Java 21）、Vue.js 3 + TypeScript + Vite、JUnit 5への段階的移行において、AIエンジニア・機械エンジニア視点でSpecKitを用いた仕様駆動開発（SDD）のPoCを主導。要件定義の曖昧さを排除し、保守性と開発生産性を抜本的に向上させること。",
    role: [
      "AIエンジニア / FDE（SpecKit仕様駆動開発PoC・オーケストレーター設計）",
      "要件定義・業務主管部門折衝（JAMP→CMP・法令対応）",
      "UI設計・社内デザインシステム移植（React 19 → Vue.js 3/Vite）",
      "フロントエンド実装 (Vue.js 3 + TypeScript + Vite)",
      "バックエンド開発 (Java 21 / Spring Boot 4.x)",
      "単体テスト設計・実装 (JUnit 5)",
      "Gitコミット自動化 & 機密情報漏洩チェックパイプライン導入",
      "外部システム連携 (IMDS・リバースプロキシ・電子証明書)",
      "インフラ移行 & ITSM保守運用・ジョブ自動化",
    ],
    technologies: [
      "Vue.js 3",
      "TypeScript",
      "Vite",
      "Spring Boot 4.x",
      "Java 21",
      "JUnit 5",
      "SpecKit (仕様駆動開発/SDD)",
      "speckit.orchestrator",
      "SKILL.md (スキル自律選定)",
      "spec.md / plan.md / task.md",
      "Git自動コミット・機密チェック",
      "React 19 (社内ガイドライン移植元)",
      "Figma",
      "Tomcat 11",
      "Oracle DB",
      "IMDS",
      "SMTP",
      "リバースプロキシ",
      "電子証明書",
      "GitLab",
      "GitHub",
      "JP1",
      "ITSM",
      "Windows タスク スケジューラ",
    ],
    features: [
      "【最新モダナイゼーションスタック】レガシーな Struts/JSP（JDK 8）から、フロントエンドは Vue.js 3 + TypeScript + Vite、バックエンドは Spring Boot 4.x（Java 21）、単体テストは JUnit 5 へと段階的にリプレイス・検証を推進",
      "【複数人対応の仕様駆動開発（SDD）】一枚岩の仕様書を排し、チーム開発でコンフリクトせず並行開発を進められるよう、機能単位ごとに spec.md（要件仕様）、plan.md（実装計画）、task.md（具体的作業タスク）を分割管理する実践的ワークフローを確立",
      "【speckit.orchestrator による自律スキル選定】プロンプトを speckit.orchestrator へ投入することで、文脈やタスク内容に応じた最適な SKILL.md をオーケストレーターが自動的に選択・実行してくれる自律的エージェント構造を導入し、開発効率を飛躍的に向上",
      "【Gitコミット自動化 & 機密情報漏洩チェック】従来 SourceTree から手動で行っていたコミット運用から脱却。「コミットしてください」とプロンプトを投げるだけで、変更差分の論理グルーピング、適切なコミットメッセージの自動生成、さらに社内機密・クレデンシャルの誤混入を検知する機密チェックを自動実行した上でコミットを完結する安全なパイプラインを構築",
      "【デザインシステム導入の迅速な方針転換】当初予定していた Figma MCP（Model Context Protocol）連携は現場の運用コスト・依存関係を考慮して見直し方針転換。社内で先行実績のあった公式アプリデザインガイドライン（React 19製）リポジトリをクローンし、本システムの Vue.js 3 + TypeScript + Vite 向けにカスタマイズ・移植する現実的なアプローチを採用してUI統一を迅速に達成",
      "【AIエンジニア・機械エンジニア視点】化学・製造業の専門的要件（JAMP/chemSHERPAからCMPへの法改正移行、自動車業界材料DB・IMDS連携）をエンジニアリングに直結",
      "【法令対応 & 業務要件定義】JAMP (chemSHERPA) から CMP への法令改正対応および業務主管部門との要件定義・折衝を推進",
      "【クラウド移行設計】IaaS クラウドリフト前提のシステム設計および将来的なマルチテナント対応の検討・検証",
      "【外部セキュア連携】電子証明書が必要なリバースプロキシ経由でのベンダーパッケージ連携、および IMDS（International Material Data System）外部連携の実装",
      "【専用基盤 & GitHub移行】複数部署共用サーバーからアプリ専用サーバーへの移行、および GitLab から GitHub へのリポジトリ移行を主導",
      "【セキュアメール送信】SMTP サーバーを利用したセキュアなシステム自動メール通知機構の実装",
      "【ITSMプロセス保守運用】ITSMに基づくインシデント・変更・問題・ナレッジ管理、エスカレーション対応と同部署内変更管理アセスメントの実施",
      "【ジョブ自動化 & JP1運用】月初の手動ログ削除を Windows タスク スケジューラで自動化。アプリ基幹バッチジョブは JP1 により日次・5分間隔等で安定実行",
      "【随時データ改修 & 要件レビュー】業務主管部門からのデータ抽出・改修依頼への随時対応、共通管理要件書の専門的レビュー",
    ],
    architecture: {
      title: "化学物質管理システム構成図・アーキテクチャ",
      subtitle: "AIエンジニア・FDE主導によるSpecKit仕様駆動開発PoC & レガシーからJava 21・Spring Boot 4.x・Vue.js 3・Vite・JUnit 5移行構成",
      description:
        "AIエンジニア・機械エンジニアとしての視点を活かし、SpecKitを用いた仕様駆動開発（SDD）のPoCを主導。機能別spec/plan/task設計やspeckit.orchestratorによるスキル自動実行、Gitコミット自動化、社内React 19ガイドラインのVue.js 3+Vite移植を断行。レガシー環境からJava 21・Spring Boot 4.x・Vue.js 3・JUnit 5を用いた最新構成への移行、外部サービス連携・サーバー／リポジトリ移行・ジョブ運用の改善をFDEとして一貫して推進しました。以下に論理構成と成果を示します。",
      variants: [
        {
          label: "レガシー版（移行前）",
          description:
            "JDK 8・Struts・JSP・iBatisを中心とした従来構成です。複数部署共用サーバー上で稼働し、外部連携や手動作業を含む運用を行っていました。",
          steps: [
            { title: "利用者", detail: "Webブラウザ", tone: "blue" },
            { title: "画面", detail: "Struts / JSP", tone: "purple" },
            { title: "アプリケーション", detail: "JDK 8 / iBatis", tone: "purple" },
            { title: "データベース", detail: "Oracle Database", tone: "red" },
          ],
          groups: [
            {
              title: "外部サービス連携",
              description: "アプリケーションから接続する外部サービス・連携先",
              tone: "blue",
              cards: [
                { title: "業界標準", detail: "JAMP (chemSHERPA)" },
                { title: "ベンダー連携", detail: "電子証明書 / リバースプロキシ" },
                { title: "外部データ連携", detail: "IMDS" },
                { title: "メール送信", detail: "SMTPサーバー" },
              ],
            },
            {
              title: "運用・開発基盤",
              tone: "slate",
              cards: [
                { title: "サーバー", detail: "複数部署で共用" },
                { title: "リポジトリ", detail: "GitLab" },
                { title: "ログ削除", detail: "月初に手動実施" },
                { title: "バッチ運用", detail: "JP1で定期実行" },
              ],
            },
          ],
        },
        {
          label: "モダナイゼーション後版（移行後・PoC検証）",
          description:
            "Java 21・Spring Boot 4.x・Vue.js 3・TypeScript・Vite・JUnit 5を用いた最新スタック構成。SpecKitによる仕様駆動開発PoC（機能別spec/plan/task、speckit.orchestrator、コミット自動化＆機密チェック、社内React 19ガイドライン移植）を組み込み、専用サーバーやGitHubへの移行、定期ジョブとITSMによる保守運用も図に含めています。",
          steps: [
            { title: "利用者", detail: "Webブラウザ", tone: "blue" },
            { title: "Web画面", detail: "Vue.js 3 / TypeScript / Vite", tone: "green" },
            {
              title: "API・アプリケーション",
              detail: "Java 21 / Spring Boot 4.x",
              tone: "purple",
            },
            { title: "データベース", detail: "Oracle Database", tone: "red" },
          ],
          groups: [
            {
              title: "外部サービス連携",
              description: "アプリケーションから接続する外部サービス・連携先",
              tone: "blue",
              cards: [
                { title: "業界標準", detail: "JAMP (chemSHERPA) → CMP" },
                { title: "ベンダー連携", detail: "電子証明書 / リバースプロキシ" },
                { title: "外部データ連携", detail: "IMDS" },
                { title: "メール送信", detail: "SMTPサーバー" },
              ],
            },
            {
              title: "運用・開発・テスト基盤（SDD & CI/CD）",
              tone: "slate",
              cards: [
                { title: "仕様駆動開発", detail: "機能別 spec / plan / task" },
                { title: "AIエージェント", detail: "speckit.orchestrator / SKILL.md" },
                { title: "単体テスト", detail: "JUnit 5 による自動テスト網羅" },
                { title: "Git運用自動化", detail: "自動グルーピング・機密チェック" },
                { title: "UI基盤移植", detail: "React 19ガイドライン→Vue 3+Vite" },
                { title: "サーバー/リポジトリ", detail: "アプリ専用環境 & GitHubへ移行" },
                { title: "ジョブ/保守運用", detail: "JP1 / タスクスケジューラ / ITSM" },
              ],
            },
          ],
          note: "【PoC成果】AIエンジニア・機械エンジニア視点でSpecKit仕様駆動開発・オーケストレーター・自動コミット・デザインシステム移植・JUnit 5単体テストを主導検証",
        },
      ],
      highlights: [
        {
          title: "SpecKit仕様駆動開発PoC & モダナイゼーション成果",
          items: [
            "【最新スタック移行】フロントエンドを Vue.js 3 + TypeScript + Vite、バックエンドを Spring Boot 4.x（Java 21）、単体テストを JUnit 5 で構成し、開発体験と品質を大幅強化",
            "【機能別仕様駆動開発】複数人での並行開発を可能にするため、機能単位ごとに spec.md、plan.md、task.md を分割策定する運用を主導",
            "【speckit.orchestrator】プロンプト投入から最適な SKILL.md を自律選定・実行するオーケストレーター構造を導入し、AI活用開発プロセスを最適化",
            "【コミット自動化 & 機密チェック】SourceTreeによる手動コミットから脱却し、プロンプト指示による自動グルーピング・メッセージ生成・機密情報漏洩チェックパイプラインを確立",
            "【デザインシステム移植の断行】当初検討したFigma MCP連携を見直し、社内既存のReact 19ガイドラインリポジトリをクローンしてVue.js 3+TypeScript+Viteへ移植・カスタマイズする迅速な方針転換を実現",
            "【ドメイン知見の融合】機械・化学分野のドメイン知識を活かし、JAMPからCMPへの移行要件やIMDS外部連携など複雑な業務要件を的確に咀嚼・具現化",
          ],
        },
        {
          title: "主な機能・外部連携",
          items: [
            "【JAMP/CMP法令対応】化学物質情報の管理と、JAMP（chemSHERPA）からCMPへの法改正適応に伴う要件整理・折衝",
            "【ベンダーパッケージ連携】電子証明書を用いたリバースプロキシ経由でのセキュアな外部パッケージ連携",
            "【外部DB & メール基盤】IMDS（自動車業界材料データシステム）外部連携およびSMTPサーバーを利用したメール送信",
            "【バッチ自動化 & ジョブ運用】JP1による日次・定期バッチ運用と、Windowsタスクスケジューラによるログ削除の自動化",
          ],
        },
      ],
    },
  },
  {
    id: "sp-protein",
    category: "client_web",
    categoryLabel: "参画案件（Webサイト共同開発）",
    badgeType: "client_web",
    isClientWork: true,
    title: "野球専門サプリメント「SPプロテイン」公式ブランドLP",
    subtitle: "2名体制での共同参画案件・リッチタイポグラフィ × スクロール連動ハイライト × 超高速Vanillaスタック",
    description:
      "アダプトゲン製薬（ARA）が展開する野球専門サプリメントブランド『SPECIALIST』のフラッグシップ商品「SPプロテイン」の公式ランディングページ。エンジニア2名体制での共同参画案件として制作し、フロントエンド実装、UI/UX設計、レスポンシブ最適化、スクロール連動アニメーション、EC計測連携（UTMパラメータ動的付与）を担当。『まだ、“ただ身体を大きくするだけ”のプロテインを飲んでるのか？』をキーメッセージに、サイズ（体づくり）・ケア（消耗対策）・リカバリー（翌日への回復）という独自の3本柱ストーリーを、強烈なタイポグラフィとエネルギッシュなオレンジ×ペーパーテクスチャの世界観で表現。スクロール位置に応じて1文字ずつハイライト点灯する見出し演出や、スマホ用スマート追従CTAなど、直感的で離脱を防ぐUIを外部ライブラリゼロの純粋なVanilla HTML/CSS/JSで極限まで軽量・高速に実装しました。本LPの優れた訴求骨格は、女性専用プロテインブランド「BERRY MILK」のリファレンス基盤としても発展・昇華されています。",
    overview:
      "「野球に必要なのは、デカさだけじゃない。」をコンセプトに、野球選手の体づくり（タンパク質20g/BCAA 4,000mg）、激しい投球・打撃での消耗ケア（コラーゲン/ヒアルロン酸）、ハードな練習からのリカバリー（乳酸菌1,000億個/コンブチャ）という3大価値を訴求する縦長ランディングページ。2名体制での密なコミュニケーションとコードレビューを通じ、ファーストビューからステートメント、3本柱の比較、製品スペック、製造元の信頼性、FAQ、公式ECショップへの購入導線までをシームレスに設計。Netlify Edgeからの高速配信により、モバイル環境でも表示遅延のない快適な閲覧体験を実現しています。",
    purpose:
      "野球選手・指導者・保護者層へ向けた「野球専門プロテイン」の認知拡大および公式ECショップへの購買誘導。単なる筋肥大プロテインとの明確な差別化（サイズ×ケア×リカバリー）を視覚的かつ直感的に伝え、2名体制による高品質・高パフォーマンスなLPをスピーディーに市場へ投入すること。",
    role: [
      "2名体制での共同フロントエンド開発",
      "UI/UXデザイン・レスポンシブ設計",
      "スクロール連動タイポグラフィ実装",
      "追従スマートCTA＆ヘッダー透過制御",
      "UTM計測パラメータ自動付与設計",
      "Netlify Edgeホスティング環境整備",
      "アクセシビリティ（prefers-reduced-motion）対応",
    ],
    image: spProteinCaptureImg,
    imageCaption: "SPプロテイン 公式ブランドLP トップ画面キャッチ（ファーストビュー）",
    imagePc: spProteinCapturePcImg,
    imageMobile: spProteinCaptureMobileImg,
    imagePcCaption: "SPプロテイン 公式ブランドLP PC版トップ画面キャッチ（エネルギッシュなオレンジ×迫力のパッケージ）",
    imageMobileCaption: "SPプロテイン 公式ブランドLP スマホ版トップ画面キャッチ（モバイルファースト・追従CTA）",
    technologies: [
      "HTML5 (セマンティックマークアップ)",
      "CSS3 (CSSカスタムプロパティ / clamp() / CSS Grid)",
      "JavaScript (ES6+ / Intersection Observer)",
      "Vanilla JS (外部ライブラリゼロ設計)",
      "Netlify Edge (CDN超高速静的配信)",
      "Google Fonts (Barlow Condensed / Barlow / Noto Sans JP)",
      "レスポンシブWebデザイン (Mobile First)",
      "アクセシビリティ (prefers-reduced-motion 対応)",
      "マーケティング計測 (UTMクエリパラメータ自動付与)",
      "2名共同開発・コードレビュー",
    ],
    features: [
      "【2名アジャイル共同参画】2名のエンジニアで役割分担とコードレビューを密に行い、デザインクオリティとパフォーマンスを両立させたWeb制作を推進",
      "【文字スクロール点灯エフェクト】ステートメント見出しにおいて、スクロール進捗に合わせて1文字ずつ鮮やかなオレンジ（#ee6b1f）へ点灯・ハイライトされる先進的なタイポグラフィ演出を軽量なVanilla JSで構築",
      "【3本柱ストーリー設計】野球選手の体づくり（サイズ）、激しいプレーでの消耗ケア（ケア）、翌日に備える回復（リカバリー）という3大ベネフィットを、巨大な背景ウォーターマークと数字・スペックで視覚的に整理",
      "【スマート追従CTA & 固定ヘッダー】ファーストビュー通過後に表示され、最終購入セクションでは邪魔にならないよう自動フェードアウトするスマホ追従CTAボタンや、スクロール時にすりガラス（backdrop-filter）のソリッド背景へ滑らかに切り替わるヘッダーを実装",
      "【UTM動的パラメータ連携】公式ECショップへの離脱リンクに対し、キャンペーン・参照元（utm_source=specialist_lp, utm_medium=referral, utm_campaign=sp_protein）を動的に付与し、マーケティングROIやコンバージョン分析を正確に行える設計",
      "【外部ライブラリゼロの超高速性能】重厚なJSライブラリやフレームワークに依存せず、素のHTML/CSS/JSのみで構成。Netlify Edge CDNからの配信と相まって、モバイル回線でも瞬時に表示される圧倒的なロード速度を達成",
      "【アクセシビリティ配慮】OSの「動きを減らす（prefers-reduced-motion: reduce）」設定を検知し、アニメーションや文字点灯を自動で抑制するユーザー配慮設計",
      "【エネルギッシュなブランドデザイン】熱量を感じさせるオレンジ（#ee6b1f）と黒（#141414）、ペーパーテクスチャ（SVGフラクタルノイズ）、力強いコンデンスドフォントを組み合わせた洗練のビジュアル設計",
    ],
    demo: "https://lovely-muffin-d4cf61.netlify.app/",
    screenshotsBadge: "LP & Dynamic UI",
    screenshotsTitle: "野球専門SPプロテイン LP 画面ギャラリー",
    screenshotsNote:
      "2名体制での共同開発により実現した、強烈なタイポグラフィとスクロール連動エフェクト、3本柱のストーリーテリング設計です。クリックで拡大プレビューできます。",
    screenshots: [
      {
        src: spProteinUiPillarsImg,
        title: "サイズ × ケア × リカバリーの3カラムストーリー",
        caption:
          "野球選手に特化した3大ベネフィット（サイズ：タンパク質20g/BCAA 4,000mg、ケア：コラーゲン/ヒアルロン酸、リカバリー：乳酸菌1,000億個/コンブチャ）を巨大な背景欧文ウォーターマークと数値で訴求。",
      },
      {
        src: spProteinUiDetailImg,
        title: "製品スペック・配合成分・オファー詳細セクション",
        caption:
          "カフェオレ味の飲みやすさ、低カロリー・低脂質、内容量1kg、付属スプーンすり切り3杯の美味しい飲み方、公式ECショップへの購入動線を整理したコンバージョンセクション。",
      },
      {
        src: spProteinUiStatementImg,
        title: "スクロール連動型テキスト点灯エフェクト「ここが違う。」",
        caption:
          "画面をスクロールするにつれて1文字ずつ文字色がオレンジへと点灯するインタラクティブタイポグラフィ演出。訪問者の視線を自然に引き込み、メッセージの精読率を向上。",
      },
    ],
    siteStructure: {
      title: "ランディングページ構成図・コンバージョン導線",
      subtitle: "ファーストビュー × 3本柱ストーリー × 製品詳細 × 公式ECショップ連携",
      description:
        "1ページ完結の縦長ランディングページとして、訪問者が上から下へスクロールするにつれて興味・納得・購入意欲が高まるよう緻密に設計されています。",
      categories: [
        {
          category: "1. ファーストビュー＆ステートメント層",
          badge: "Hero & Statement",
          badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
          pages: [
            {
              name: "Heroファーストビュー",
              path: "#hero",
              desc: "エネルギッシュなオレンジ背景・立体パッケージ写真・キャッチコピー",
              url: "https://lovely-muffin-d4cf61.netlify.app/",
              isHighlight: true,
            },
            {
              name: "ロゴマーキー（流れるテキスト）",
              path: "#band",
              desc: "無限ループアニメーションによるブランドロゴ・タグライン提示",
            },
            {
              name: "ステートメント＆文字スクロール点灯",
              path: "#state",
              desc: "「身体を大きくするだけ」への疑問提起・スクロール進捗ハイライト",
              isHighlight: true,
            },
          ],
        },
        {
          category: "2. ベネフィット訴求層（3 Pillars）",
          badge: "3 Pillars",
          badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
          pages: [
            {
              name: "01. サイズ（身体を大きくする）",
              path: "#size",
              desc: "タンパク質20g・BCAA 4,000mg・ビタミンミネラル14種",
            },
            {
              name: "02. ケア（消耗に向き合う）",
              path: "#care",
              desc: "コラーゲン配合・ヒアルロン酸配合・関節や疲労への配慮",
            },
            {
              name: "03. リカバリー（次に備える）",
              path: "#recovery",
              desc: "乳酸菌1,000億個・コンブチャ（紅茶キノコエキス）配合",
            },
          ],
        },
        {
          category: "3. プロダクト詳細＆スペック層",
          badge: "Product Detail",
          badgeColor: "bg-stone-100 text-stone-800 border-stone-200",
          pages: [
            {
              name: "製品スペック・美味しい飲み方",
              path: "#prod",
              desc: "リッチカフェオレ味・1kg（約1ヶ月分）・付属スプーン3杯（200ml水/牛乳）",
              isHighlight: true,
            },
            {
              name: "圧倒的なリカバリー実感",
              path: "#voice",
              desc: "野球プレイヤーのリアルな体感・翌日のコンディショニング変化",
            },
            {
              name: "つくる人、届ける人（製造元紹介）",
              path: "#maker",
              desc: "アダプトゲン製薬の安心安全な国内製造基準・開発ストーリー",
            },
            {
              name: "よくある質問（FAQ）",
              path: "#faq",
              desc: "飲むタイミング・ドーピング検査対応・保管方法など",
            },
          ],
        },
        {
          category: "4. コンバージョン＆EC連携層",
          badge: "Conversion & EC",
          badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
          pages: [
            {
              name: "スマート追従CTAボタン",
              path: "#stick",
              desc: "ファーストビュー通過後に表示・購入セクションで自動フェードアウト",
            },
            {
              name: "公式ECショップ遷移（UTM連携）",
              path: "EC遷移",
              desc: "utm_source=specialist_lp 動的クエリ付与による流入効果測定",
              isHighlight: true,
            },
          ],
        },
      ],
    },
    architecture: {
      title: "SPプロテイン LP システム構成・制作アーキテクチャ",
      subtitle: "2名共同フロントエンド開発 × Vanilla JS × Netlify Edge高速CDN",
      description:
        "2名体制での役割分担とコードレビューを通じ、外部ライブラリに一切依存しないVanilla HTML/CSS/JSによる極限の軽量・高速ランディングページを構築。Netlify Edge CDNからの配信と、公式ECショップへのUTM計測連携を実装しました。",
      steps: [
        {
          title: "閲覧者（PC / スマホ）",
          detail: "レスポンシブWebデザイン（Mobile First）",
          tone: "blue",
        },
        {
          title: "フロントエンド基盤",
          detail: "Vanilla HTML5 / CSS3 / ES6+（外部ライブラリ非依存）",
          tone: "purple",
        },
        {
          title: "動的演出・UI制御",
          detail: "スクロール進捗ハイライト点灯 / 追従CTA / UTM付与",
          tone: "green",
        },
        {
          title: "ホスティング・CDN",
          detail: "Netlify Edge CDN（世界規模の超高速配信）",
          tone: "red",
        },
      ],
      flowLabel: "ユーザーアクセスから動的UI制御・EC購入遷移までの処理フロー",
      groups: [
        {
          title: "共同開発・品質管理",
          tone: "indigo",
          cards: [
            {
              title: "2名体制の共同開発",
              detail: "役割分担とコードレビューを密に行い、高品質なUIと高速性を両立",
            },
            {
              title: "アクセシビリティ配慮",
              detail: "prefers-reduced-motionを検知し、アニメーションや文字点灯を自動抑制",
            },
            {
              title: "セマンティックHTML",
              detail: "SEOとアクセシビリティを考慮した綺麗なマークアップ設計",
            },
          ],
        },
        {
          title: "動的演出・UI実装",
          tone: "amber",
          cards: [
            {
              title: "スクロール連動文字点灯",
              detail: "DOMパースとスクロール進捗計算による滑らかなハイライト演出",
            },
            {
              title: "スマート追従CTA",
              detail: "ファーストビュー通過後に出現し、最終購入枠で隠れるスマート制御",
            },
            {
              title: "Intersection Observer",
              detail: "要素の画面内検知による軽量・低負荷なスクロールインアニメーション",
            },
          ],
        },
        {
          title: "マーケティング・ホスティング",
          tone: "blue",
          cards: [
            {
              title: "Netlify Edgeホスティング",
              detail: "グローバルCDNエッジ配信による圧倒的なページロード速度の実現",
            },
            {
              title: "UTM動的パラメータ付与",
              detail: "公式ECリンクへ自動で流入元パラメータを付与し効果測定を担保",
            },
            {
              title: "リバースエンジニアリング基盤",
              detail: "本実案件の優れた骨格は、D2Cブランド「BERRY MILK」の基盤へ昇華",
            },
          ],
        },
      ],
      highlights: [
        {
          title: "2名共同参画における制作推進",
          items: [
            "【アジャイル共同開発】エンジニア2名体制での密なコミュニケーションとコードレビューを通じたアジャイル開発",
            "【品質とスピードの両立】デザインニュアンスの再現とパフォーマンスの最適化を短納期で両立",
          ],
        },
        {
          title: "Vanilla JSによる極限のパフォーマンス追求",
          items: [
            "【外部ライブラリゼロ】外部JSライブラリ（jQuery・GSAP等）を一切使わず、ネイティブAPIのみで軽量実装",
            "【超高速CDN配信】Netlify Edge CDNと相まってモバイル回線でも瞬時に表示される圧倒的なロード速度",
          ],
        },
        {
          title: "データドリブンなECマーケティング連携",
          items: [
            "【UTMパラメータ自動付与】公式ECへの遷移リンクにキャンペーン計測用UTMクエリを自動付与し、流入ROIを可視化",
            "【スマート追従CTA】離脱を防ぐスマート追従CTA設計によるコンバージョン最大化",
          ],
        },
      ],
      note: "本案件はエンジニア2名体制で実際に参画・共同制作したクライアントワークです。本LPの優れた訴求動線・セクション骨格は、女性専用プロテインブランド「BERRY MILK」のリファレンス基盤としても発展・昇華されています。",
    },
  },
  {
    id: "biwakogym",
    category: "client_web",
    categoryLabel: "参画案件（Webサイト共同開発）",
    badgeType: "client_web",
    isClientWork: true,
    title: "トレーニングジム「BIWAKO GYM」公式WEBサイト",
    subtitle: "滋賀県草津市のトレーニング＆コンディショニングジム 公式WEBサイト（2名共同開発）",
    description:
      "滋賀県草津市に構えるトレーニング＆ストレッチ＆コンディショニングジム「BIWAKO GYM（ビワコジム）」の公式WEBサイト。エンジニア2名体制での共同開発案件として参画し、企画設計からフロントエンド実装、レスポンシブ対応、UI/UX最適化、SEO構造化データマークアップまでを担当。",
    overview:
      "「もう、ジムで迷わない。」をキーコンセプトに、鍛錬マシン全29台と3ステップサポートを強みとするジムの魅力を伝えるWebサイト。無料体験（Trial）、料金体系表、店舗アクセス、お問い合わせまでのユーザー動線を徹底追求。視覚的な引き込みを図るファーストビューやスクロール連動アニメーション、スマートフォンからの操作性を考慮したモバイルファースト設計を採用。",
    purpose:
      "滋賀県草津市のトレーニング＆コンディショニングジム新規オープンに伴う公式WEBサイト制作。鍛錬マシン全29台の魅力と初心者サポート体制を訴求し、無料体験予約へのコンバージョンを高めるとともに地域SEO（MEO）を強化する。",
    role: [
      "企画・構成設計",
      "フロントエンド実装",
      "レスポンシブ最適化",
      "Schema.org構造化マークアップ",
      "2名共同開発・コードレビュー",
    ],
    image: biwakogymCaptureImg,
    imageCaption: "BIWAKO GYM 公式WEBサイト トップ画面キャッチ（ファーストビュー）",
    imagePc: biwakogymCapturePcImg,
    imageMobile: biwakogymCaptureMobileImg,
    imagePcCaption: "BIWAKO GYM 公式WEBサイト PC版トップ画面キャッチ（ファーストビュー）",
    imageMobileCaption: "BIWAKO GYM 公式WEBサイト スマホ版トップ画面キャッチ（モバイルファースト・ナビゲーション）",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "レスポンシブWebデザイン",
      "Google Fonts (Outfit / Zen Kaku Gothic New)",
      "JSON-LD (HealthClub 構造化データ)",
      "SEO / OGP",
      "UI/UX設計",
      "2名共同開発",
    ],
    features: [
      "【2名アジャイル共同開発】役割分担とPull Request・コードレビューを通じた高品質・スピーディーなフロントエンド共同制作推進",
      "【ブランド世界観設計】「BIWAKO GYM」の力強さと清潔感を両立させたダークトーン×アクセントブルーの洗練モダンデザイン",
      "【臨場感溢れるビジュアル演出】鍛錬マシン全29台の魅力を伝えるフルスクリーン・ファーストビューとマーキー（流れるテキスト）演出",
      "【無料体験コンバージョン導線】無料体験（Trial）への離脱を防ぐヘッダー常設CTAおよびお問い合わせフォーム連動設計",
      "【モバイルファーストUI】スマートフォン閲覧に最適化したハンバーガーナビゲーションおよび親指操作に配慮したタッチUI",
      "【地域SEO / MEO構造化データ】Schema.org（HealthClub / LocalBusiness）準拠のJSON-LD構造化マークアップによる検索露出強化",
      "【アクセシビリティ情報設計】営業時間・定休日・電話・店舗マップ・料金表を迷わず瞬時に把握できるユーザー導線",
    ],
    demo: "https://biwakogym.com/",
    architecture: {
      title: "ジム公式Webサイト構成・制作アーキテクチャ",
      subtitle:
        "HTML5/CSS3/JavaScript × 2名共同開発 × Schema.org 地域SEO",
      description:
        "「もう、ジムで迷わない。」をコンセプトに、2名体制での役割分担・コードレビューを通じた効率的なフロントエンド共同開発を推進。無料体験コンバージョン動線と、Schema.org準拠の地域SEO（MEO）構造化データを実装しました。",
      steps: [
        {
          title: "閲覧者（PC / スマホ）",
          detail: "レスポンシブWebデザインによる快適な閲覧体験",
          tone: "blue",
        },
        {
          title: "フロントエンド実装",
          detail: "HTML5 / CSS3 / JavaScript (モダンUI演出)",
          tone: "purple",
        },
        {
          title: "コンバージョン動線",
          detail: "ヘッダー常設CTA・無料体験予約フォーム連携",
          tone: "green",
        },
        {
          title: "検索エンジン（SEO/MEO）",
          detail: "HealthClub / LocalBusiness JSON-LD構造化データ",
          tone: "red",
        },
      ],
      flowLabel: "ユーザー動線とWebサイト構成フロー",
      groups: [
        {
          title: "共同開発・技術仕様",
          tone: "indigo",
          cards: [
            {
              title: "2名体制の共同開発",
              detail: "GitHubを活用した役割分担と相互コードレビュー",
            },
            {
              title: "モバイルファースト設計",
              detail: "スマホ開閉ハンバーガーメニュー＆タッチ操作最適化",
            },
            {
              title: "地域SEO強化",
              detail:
                "滋賀県草津市のジム検索に強いSchema.org構造化マークアップ",
            },
          ],
        },
      ],
    },
  },
  {
    id: "flamenco-flyer",
    category: "client_graphic",
    categoryLabel: "実務制作案件（グラフィック・DTP・SNS広報）",
    badgeType: "client_graphic",
    isClientWork: true,
    title: "フラメンコ＆音楽イベント公式フライヤー・SNSプロモーションデザイン",
    subtitle: "クライアントワーク（実務制作案件）・Photoshop & Illustrator によるA4印刷フライヤー・SNS告知バナー・カルーセル画像制作",
    description:
      "フラメンコスタジオや舞台主催者・音楽家からの直接依頼による実務制作案件。フラメンコや打楽器（カホン）ワークショップなどの音楽・舞台イベントに向けた公式印刷フライヤーおよびSNSプロモーション用デザイン群。クライアントのヒアリングに基づき、Adobe PhotoshopおよびIllustratorを使用し、A4印刷用フライヤー（ダークトーン／ライトトーンの2パターンデザイン提案）からInstagram/Facebook向けの告知バナー、詳細解説カルーセルスライドまで幅広く制作。人物写真の切り抜き・レタッチ・光彩エフェクト加工から、タイポグラフィ、情報階層化、受講クラス・料金・アクセス案内のレイアウト、印刷入稿（CMYK/トンボ・塗り足し設定）までを一貫して担当しました。",
    overview:
      "四季（春・初夏・夏・初秋・冬）それぞれの開催時期や気候・テーマ、打楽器ワークショップのリズム感に合わせて、カラーパレットや装飾モチーフ（桜・新緑・紫陽花・紅葉・ホリデーオーナメント、幾何学リズムパターンなど）を綿密に設計。印刷用A4フライヤー（高解像度CMYK）とSNS用スクエアバナー（RGB）双方の媒体特性を最適化し、紙面・タイムライン双方で一目で目を引き、参加申込みへと繋がる導線（QRコード配置等）を構築。実際のクライアントワークとして高い集客成果と満足度を獲得しました。",
    purpose:
      "四季折々の舞台公演や打楽器ワークショップにおける集客・認知拡大。クライアントの要望に応じ、印刷用A4フライヤーとSNSタイムライン（Instagram/Facebook）それぞれの媒体特性に特化したビジュアルを制作。高精度の人物レタッチと季節感ある世界観で受講申込・チケット購買へ直結させること。",
    role: [
      "クライアント要件ヒアリング・コンセプト策定",
      "グラフィックデザイン (DTP / A4フライヤー)",
      "人物写真レタッチ・光彩エフェクト合成",
      "タイポグラフィ・文字組み・情報階層化",
      "SNSプロモーションバナー・スライド展開",
      "印刷入稿データ作成 (CMYK / 塗り足し・トンボ)",
    ],
    image: flyerFlamencoImg,
    imageCaption: "A4完成フライヤー 2パターン提案（左: ダークトーン / 右: ライトトーン）",
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "DTP / 印刷入稿データ作成 (CMYK)",
      "グラフィックデザイン",
      "SNSバナー・カルーセル制作",
      "人物写真切り抜き・レタッチ",
      "色調補正・光彩エフェクト合成",
      "タイポグラフィ・文字組み",
      "情報アーキテクチャ（IA）",
      "季節別コンセプトカラー設計",
      "QRコード導線設計",
      "クライアントワーク（実務制作）",
    ],
    features: [
      "【クライアント一貫対応】ヒアリングからダーク／ライトの2パターン提案、高解像度印刷入稿まで一貫対応。主催者・音楽家のニーズを丁寧に反映",
      "【四季の色彩コンセプト】春・初夏・夏・初秋・冬の開催時期やイベント特性に応じた色彩心理・季節モチーフの巧みな使い分けと世界観構築",
      "【高精度レタッチ & 光彩合成】人物写真の精密切り抜き・輪郭補正、衣装フリンジや楽器テクスチャを活かした色調補正・光彩エフェクト加工（Photoshop）",
      "【情報階層レイアウト構築】クラス詳細、料金表、キャンセルポリシー、アクセス等の複雑な情報を一目で理解できる階層レイアウト（Illustrator）",
      "【SNSマルチ展開】Instagram/Facebookのタイムラインで視線を引きつけるスクエア比率（1:1）バナーおよびカルーセル解説スライドの展開",
      "【マルチフォーマット制作】印刷入稿用（高解像度CMYK/塗り足し・トンボ設定）およびWeb・SNS配信（RGB）のマルチフォーマット制作",
      "【QRコード導線設計】メールおよびSNS公式申込みへ直結するQRコード配置による高いコンバージョン導線設計",
    ],
    screenshots: [
      {
        src: flyerFlamencoImg,
        title: "A4完成フライヤー 2パターン提案（初夏・第4弾）",
        caption:
          "左: フラメンコの格式と情熱を表現したブラックver / 右: 爽やかで可読性を重視したホワイトver。クライアントへのデザイン提案として制作した2パターンの印刷用フライヤーデータ",
      },
      {
        src: graphicFlyerWinterImg,
        title: "冬開催 公式フライヤー（12月・1月開催）",
        caption:
          "ホリデーシーズンを演出するバーガンディ×雪の結晶×オーナメント。ダンサー写真の立体的な光彩エフェクトとシックなA4フライヤーレイアウト",
      },
      {
        src: graphicSnsEarlysummerImg,
        title: "初夏開催 SNS告知バナー（6月開催）",
        caption:
          "水彩アルコールインクアート調のパープルグラデーションとゴールドフレーム。躍動感あふれる写真を活かしたInstagram用スクエアバナー（1:1）",
      },
      {
        src: graphicSnsAutumnImg,
        title: "初秋開催 SNS告知バナー（第7弾 9月開催）",
        caption:
          "フォレストグリーンと紅葉あしらいを取り入れた初秋の告知デザイン。ページめくり風の視覚演出でタイムライン上の視認性を高めたフィード画像",
      },
      {
        src: graphicSnsSlideDetailImg,
        title: "初秋開催 クラス解説カルーセルスライド",
        caption:
          "Instagramカルーセル投稿用に制作したクラス詳細解説スライド。各クラスの指導ポイントや対象レベル、受講条件を読みやすく構造化",
      },
      {
        src: graphicSnsSpringImg,
        title: "春開催 SNS告知スライド（5月開催）",
        caption:
          "爽やかなミントブルーとネイビーの配色。大判ショール（マントン）を羽織った人物写真の背景を精緻に切り抜いたモダンデザイン",
      },
      {
        src: graphicSnsSummerImg,
        title: "夏開催 SNS告知スライド（第5弾 7月開催）",
        caption:
          "シルバー×ブラックの星の煌めき・ボケ光彩エフェクト。夏の夜のワークショップを盛り上げるラグジュアリーな告知スライド",
      },
      {
        src: graphicCajonWorkshopImg,
        title: "打楽器ワークショップ SNS告知バナー（カホンクルシージョ）",
        caption:
          "イエロー×ボルドーの幾何学パターンと演奏者写真の切り抜き。初心者向けワークショップの親しみやすさとリズム感を表現したSNS告知バナー（秋葉原会場・QRコード導線設計）",
      },
    ],
  },
  {
    id: "bank",
    category: "client_enterprise",
    categoryLabel: "参画案件（業務システム）",
    badgeType: "client_enterprise",
    isClientWork: true,
    title: "銀行系決済システム",
    subtitle: "大量明細処理・即日振込機能の実装",
    description:
      "大手銀行向けの決済インフラシステム。大量の振込明細の取得と即日振込処理を実装。ミッションクリティカルなシステムのため高い信頼性・可用性を確保。",
    overview:
      "企業向けの法人決済サービス。SVN による厳格なバージョン管理、Hulft による定期ジョブ実行、複雑なプロキシ設定を含むオンプレミス基盤上での運用。銀行の厳しい要件を満たす堅牢なシステム。",
    purpose:
      "大手都市銀行における企業向け法人決済サービスの高度化。大量の振込明細の高速中継と即日振込処理を実現し、ミッションクリティカルな決済インフラとして24/7の高可用性・高信頼性を担保する。",
    role: [
      "バックエンド開発 (Java)",
      "大量明細バッチ処理設計",
      "Hulftジョブ連携",
      "ネットワーク・プロキシ設定",
      "障害監視・保守運用",
    ],
    technologies: [
      "Java 8",
      "Hulft",
      "SVN",
      "Tomcat",
      "Oracle Database",
      "Bash",
      "NAS",
    ],
    features: [
      "【大量明細・即日振込機能】大量の振込明細の高速取得・処理機能および即日振込機能の設計・実装と本番安定運用",
      "【Hulftデータ連携仕様調査】Hulft カスタマーセンターとの技術連携によるデータ連携仕様調査・サポート対応を主導",
      "【ネットワーク・プロキシ設定】プロキシを含むエンタープライズの複雑なネットワーク環境の設定・保守管理の推進",
      "【NAS環境導入・動作検証】NAS導入時におけるサーバーセットアップおよびデータ共有環境の動作検証・安定稼働推進",
      "【24/7 高可用性担保】インフラ基盤チームと緊密に連携したミッションクリティカルな無停止稼働・高可用性の維持",
      "【SVN構成管理 & バッチ運用】SVNによる厳格なブランチ構成管理とBashスクリプトによる定期バッチジョブ運用の実践",
    ],
    architecture: {
      title: "銀行系決済システム構成図・アーキテクチャ",
      subtitle: "法人向け大量明細データ中継・即日振込決済インフラ",
      description:
        "法人の業務システムと銀行側の決済サービスを連携するシステムの保守開発を担当しました。大量明細の取得・処理、即日振込機能の実装に加え、Java 8・Tomcatのアプリケーション、Oracle Database、Hulftによるデータ連携やプロキシ設定を含む運用に携わりました。以下は公開情報と担当実績をもとにした概念図であり、会社名・製品名や個別の接続先は記載していません。",
      steps: [
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
      ],
      flowLabel: "法人向け決済処理の流れ",
      groups: [
        {
          title: "データベース",
          description: "決済アプリケーションが振込・明細データを参照・更新します。",
          tone: "slate",
          cards: [
            {
              title: "Oracle Database",
              detail: "振込・大量明細データ高速トランザクション",
            },
          ],
        },
        {
          title: "開発・運用基盤",
          tone: "slate",
          cards: [
            { title: "ネットワーク", detail: "プロキシ設定・保守" },
            { title: "ソース管理", detail: "SVNによる厳格なバージョン管理" },
            { title: "バッチ連携", detail: "Hulft / Bashスクリプト" },
            { title: "ファイル共有", detail: "NAS セットアップ・動作検証" },
            { title: "実行環境", detail: "24/7 高可用性オンプレミス基盤" },
          ],
        },
      ],
      highlights: [
        {
          title: "主な機能",
          items: [
            "【大量明細高速処理】大量の振込明細を高速に取得・バッチ処理する機能の実装",
            "【即日振込エンジン】ミッションクリティカルな要件を満たす即日振込実行ロジック",
            "【Hulftデータ連携】Hulftを利用した基幹システム間定期データ連携の運用",
            "【企業システム連携】企業内ERP・業務システムと決済アプリケーションのAPI連携",
          ],
        },
        {
          title: "主な実績・エンジニアリング成果",
          items: [
            "【大量明細・即日振込】大量明細獲得・即日振込機能の実装と本番安定運用",
            "【Java 8/Tomcat/Oracle】Java 8・Tomcat・Oracle Databaseを用いた保守開発を担当",
            "【Hulftサポート主導】Hulft カスタマーセンターとの連携によるデータ連携仕様調査・サポート対応を主導",
            "【プロキシ・NAS検証】サーバー環境のプロキシ設定・保守、NAS導入時のセットアップと動作検証を実施",
            "【インフラ連携・安定稼働】インフラ基盤チームと協力してミッションクリティカルなシステムの安定稼働を実現",
            "【24/7 高可用性保守】24/7 監視・対応体制による高可用性を維持",
          ],
        },
      ],
      note: "担当機能：大量明細の取得・処理 ／ 即日振込機能の実装",
    },
  },
  {
    id: "okayamacafe",
    category: "portfolio",
    categoryLabel: "自主制作 / フルスクラッチWordPress CMS",
    badgeType: "portfolio",
    isClientWork: false,
    title: "岡山フルーツカフェ「CAFE HAREKA（晴果）」",
    subtitle:
      "WordPress 6.x 自作オリジナルテーマ・フルスクラッチCMS化 ＆ ReactハイブリッドWebサイト",
    description:
      "「晴れの国の太陽と、樹上のめぐみをそのままに。」をコンセプトに、岡山県産フルーツ（清水白桃・シャインマスカット等）の魅力を届けるカフェWebサイト。Localでの環境構築から自作オリジナルテーマによるフルスクラッチCMS化、カスタム投稿タイプ・タクソノミー設計、FileZillaによるFTP通信、All-in-One WP MigrationによるDB・メディア本番インポートまで一貫して構築。",
    overview:
      "岡山県に新オープンする架空の地産地消カフェ「CAFE HAREKA（晴果喫茶）」のWebサイトおよびWordPressオリジナルテーマです。HTML/CSSコーディングにとどまらず、「クライアントが自ら旬の果物メニューや入荷情報、お知らせを簡単・安全に更新できる本格的なCMS基盤」を要件定義・設計。Localでローカル開発環境を立ち上げ、WordPress 6.x＋PHP 8.x仕様のオリジナルテーマ「CAFE HAREKA Theme [晴果]」をフルスクラッチ開発。カスタム投稿タイプ「カフェメニュー」「新着情報」「果物図鑑」、カスタムタクソノミー「メニューカテゴリ」、カスタマイザーによる動的ロゴ・ヘッダー・フッターメニュー連動を実装しました。さらにFileZillaを用いたFTP通信とAll-in-One WP Migrationによるエクスポート・インポートを経て本番ホスティング環境へ安全にデプロイ・移行を完遂しています。",
    purpose:
      "Webデザイナー・コーダーからステップアップし、「WordPressオリジナルテーマの構築」「カスタム投稿タイプやタクソノミーを駆使した実務的CMS化」「ローカル開発から本番サーバーへの確実なデプロイ・データ移行」までをワンストップで完遂できるエンジニアリングスキルを実証すること。特に、飲食・観光系ビジネスで最もニーズの高い「旬の季節限定メニューの随時更新」「入荷糖度や産地情報の入力」「日英バイリンガル対応の席予約」をノーコードで運用できる管理画面設計を追求しました。",
    role: [
      "企画・要件定義・サイトマップ設計（全7ページ構成・日英予約フロー）",
      "WordPressオリジナルテーマ（CAFE HAREKA Theme）フルスクラッチ開発",
      "カスタム投稿タイプ（カフェメニュー / 果物図鑑 / 店舗設定）＆カスタムタクソノミー設計",
      "WordPressカスタマイザー連携（サイト基本情報、動的ナビゲーションメニュー）",
      "Local（旧 Local by Flywheel）によるローカル開発環境構築",
      "FileZilla（FTP通信）による本番サーバーファイル転送・パーミッション設定",
      "All-in-One WP Migration によるDB・投稿・メディア本番エクスポート＆インポート",
      "React 19 / TypeScript / Vite / Tailwind CSS v4 によるモダンSPAフロントエンド開発",
    ],
    technologies: [
      "WordPress 6.x",
      "PHP 8.x",
      "Local (Flywheel)",
      "FileZilla (FTP)",
      "All-in-One WP Migration",
      "カスタム投稿タイプ / タクソノミー",
      "WordPress Customizer API",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Vite 8.3",
      "Framer Motion",
      "REST API",
    ],
    features: [
      "自作オリジナルテーマによるフルスクラッチCMS化: 既存テーマを流用せず、header.php, footer.php, front-page.php, functions.php から完全自作したオリジナルテーマ「CAFE HAREKA Theme [晴果]」を開発。",
      "カスタム投稿タイプ『カフェメニュー』による柔軟なメニュー管理: メニュー名、価格、産直果物名、糖度（Brix）、テイクアウト可否、おすすめバッジなどを管理画面から直感的に登録・即時反映。",
      "カスタムタクソノミー『メニューカテゴリ』による直感的分類: 「旬果スイーツ」「ランチ・軽食」「ドリンク」「テイクアウト・ギフト」のカテゴリを自由に追加・管理し、サイト側のタブフィルタと自動連動。",
      "WordPressカスタマイザーによる動的サイト設定: 「外観 > カスタマイズ」からサイト名、キャッチフレーズ、サイトアイコン（ファビコン）、ヘッダー＆フッターのカスタムメニューをGUI上でリアルタイムプレビューしながら設定可能。",
      "Local × FileZilla × All-in-One WP Migration の完全移行フロー: ローカル環境（Local）で安全に開発・動作検証を行い、FileZillaによるFTPファイル転送とAll-in-One WP MigrationによるDB・メディアのエクスポート/インポートにより本番環境へシームレスに移行。",
      "React SPA × WordPress REST API のハイブリッド拡張性: WordPress単体での運用はもちろん、ヘッドレスCMSとしてWordPress REST APIを叩いて最新投稿を取得するReact 19モダンSPAフロントエンドも両立。",
      "日英バイリンガル対応のスマート予約フォーム: 訪日観光客の利便性に配慮し、日本語/英語のワンクリック切り替え、水曜定休日の自動ロック、時間帯別空き枠（◎/△/✕）のリアルタイム選択UIを実装。",
    ],
    image: okayamaCafeThemeScreenshotImg,
    imageCaption:
      "自作WordPressテーマ「CAFE HAREKA Theme [晴果]」ファーストビュー（清水白桃の極上パフェ）",
    imagePc: okayamaCafePcImg,
    imageMobile: okayamaCafeMobileImg,
    imagePcCaption:
      "PCデスクトップ表示（清水白桃の極上パフェ＆シャインマスカットカード）",
    imageMobileCaption:
      "モバイルスマートフォン表示（レスポンシブファーストビュー）",
    github: "https://github.com/ikeda-haruka/okayamaCafe",
    demo: "https://okayama-cafe.infinityfreeapp.com/",
    referenceSite: {
      title: "CAFE HAREKA (晴果) 公開本番Webサイト",
      url: "https://okayama-cafe.infinityfreeapp.com/",
      badge: "本番公開中",
      description:
        "InfinityFreeホスティング上にデプロイされたWordPress本番環境。Localで構築した自作テーマをFileZillaでFTP転送し、All-in-One WP MigrationでDBとメディアをインポートして稼働。",
    },
    siteStructure: {
      title: "全7ページ サイトマップ＆CMS連携構造",
      subtitle: "WordPress テンプレート階層と連動した明快なページ設計",
      description:
        "トップから商品一覧、果物ストーリー、お知らせ、アクセス、日英予約フォームまで、実店舗の集客・ブランディングに必要な動線を網羅しています。",
      categories: [
        {
          category: "メインページ",
          badge: "コア",
          badgeColor: "blue",
          pages: [
            {
              name: "ホーム (front-page.php)",
              path: "/",
              desc: "白桃パフェKV、産直入荷ティッカー、おすすめメニュー、果物ストーリー誘導、お知らせ最新一覧",
              isHighlight: true,
            },
            {
              name: "お店について (page-about.php)",
              path: "/about",
              desc: "創業ストーリー、3つのこだわり（産直・空間美・アップサイクル）、施設ガイド（テラス席ペット可/バリアフリー）",
            },
            {
              name: "メニュー (page-menu.php)",
              path: "/menu",
              desc: "カスタム投稿タイプ『カフェメニュー』連動。旬果リレーカレンダー、糖度（Brix）表示、カテゴリ別フィルタ",
              isHighlight: true,
            },
            {
              name: "岡山の果物 (page-fruits.php)",
              path: "/fruits",
              desc: "カスタム投稿タイプ『果物図鑑』。日照時間全国トップの理由、清水白桃・晴王・ピオーネ等5大フルーツ解説",
            },
          ],
        },
        {
          category: "情報発信・コンバージョン",
          badge: "CMS・予約",
          badgeColor: "green",
          pages: [
            {
              name: "お知らせ・果実便り (home.php / archive.php)",
              path: "/news",
              desc: "WordPress標準投稿タイプ。カテゴリ絞り込み（入荷/イベント/お知らせ）、詳細モーダル表示",
              isHighlight: true,
            },
            {
              name: "アクセス・店舗情報 (page-access.php)",
              path: "/access",
              desc: "吉備津神社近くの所在地、Google Maps連携、山陽道/JR桃太郎線アクセス、観光モデルコース案内",
            },
            {
              name: "ご予約・お問い合わせ (page-contact.php)",
              path: "/contact",
              desc: "日英バイリンガルUI、リアルタイム時間帯空き枠（◎/△/✕）、水曜定休日自動ロック、仮予約番号自動発行",
              isHighlight: true,
            },
          ],
        },
      ],
    },
    architecture: {
      title: "WordPress 自作オリジナルテーマ開発 ＆ 本番移行アーキテクチャ",
      subtitle:
        "Local（ローカル）から FileZilla（FTP通信）と All-in-One WP Migration による本番デプロイフロー",
      description:
        "Local環境でのPHP 8.x/WordPress 6.x開発、カスタム投稿タイプ・タクソノミー設計、FileZillaによる確実なFTPファイル転送、そしてAll-in-One WP Migrationを活用した本番環境への安全なデータ移行パイプラインです。",
      steps: [
        {
          title: "1. Local (Flywheel) 環境構築",
          detail:
            "Localを用いてローカルPC上にPHP 8.x + MySQL + Nginx/Apacheの安全なWordPress 6.x開発環境を即座に構築。SSL自己署名証明書によるHTTPS環境で検証。",
          tone: "blue",
        },
        {
          title: "2. オリジナルテーマ開発",
          detail:
            "header.php, footer.php, front-page.php, functions.php をフルスクラッチ作成。カスタム投稿タイプ「カフェメニュー」「果物図鑑」とカスタムタクソノミーを実装。",
          tone: "purple",
        },
        {
          title: "3. FileZilla によるFTP転送",
          detail:
            "FileZillaクライアントを用いてInfinityFreeサーバーとFTP接続。wp-content/themes/hareka-theme 配下へテーマファイル群を一括安全アップロード。",
          tone: "blue",
        },
        {
          title: "4. All-in-One WP Migration 移行",
          detail:
            "ローカルで入力した旬果メニュー、メディア画像、固定ページ設定を All-in-One WP Migration でエクスポートし、本番環境へワンクリックでインポート・整合性確認。",
          tone: "green",
        },
        {
          title: "5. カスタマイザー設定＆本番公開",
          detail:
            "「外観 > カスタマイズ」からサイト名、キャッチフレーズ、ファビコン、ヘッダー/フッターメニューの表示位置をGUIで設定し、本番稼働を開始。",
          tone: "blue",
        },
      ],
      groups: [
        {
          title: "CMS コア設計・カスタマイズ",
          description: "クライアントが直感的に更新できる管理画面のフルスクラッチ実装",
          tone: "blue",
          cards: [
            {
              title: "カスタム投稿タイプ「カフェメニュー」",
              detail:
                "register_post_type() により通常のお知らせと分離した専用メニュー管理画面を構築。パフェ・タルト・ドリンク等のサムネイル付き一覧・編集を実現。",
            },
            {
              title: "カスタムタクソノミー「メニューカテゴリ」",
              detail:
                "register_taxonomy() により「旬果スイーツ」「ランチ・軽食」「ドリンク」「テイクアウト」等の分類をノンプログラミングで追加・階層化可能。",
            },
            {
              title: "Customizer API（サイト基本情報・メニュー）",
              detail:
                "add_theme_support('custom-logo') や register_nav_menus() を活用し、ロゴ・ファビコン・メニュー位置を管理画面からリアルタイムプレビュー編集。",
            },
          ],
        },
        {
          title: "インフラ・開発移行パイプライン",
          description: "ローカル開発から本番サーバーへの安全・確実なデプロイメント",
          tone: "indigo",
          cards: [
            {
              title: "Local (旧 Local by Flywheel)",
              detail:
                "軽量かつモダンなWordPress専用ローカル開発環境。PHP 8.x環境下での構文チェックやデバッグを安全・迅速に実施。",
            },
            {
              title: "FileZilla (FTP / FTPS)",
              detail:
                "FTPクライアントによる本番ホスティング環境（InfinityFree）とのファイル転送。パーミッション設定とテーマアセットの確実な同期を管理。",
            },
            {
              title: "All-in-One WP Migration",
              detail:
                "データベースのURL置換（okayamacafe.local → okayama-cafe.infinityfreeapp.com）やメディアライブラリの整合性を保ちながら本番インポート。",
            },
          ],
        },
        {
          title: "ハイブリッド・フロントエンド技術",
          description: "PHPテンプレートとReact 19 SPAの柔軟な共存",
          tone: "emerald",
          cards: [
            {
              title: "PHP 8.x + Tailwind CSS",
              detail:
                "WordPressテーマ内でTailwind CSSを効率的にビルド・適用。ナチュラルで洗練された岡山フルーツカラーパレットを実現。",
            },
            {
              title: "WordPress REST API 連携",
              detail:
                "/wp-json/wp/v2/posts およびカスタムエンドポイントにより、React SPA側からヘッドレスCMSとしてもデータ取得可能なハイブリッド構造。",
            },
            {
              title: "Framer Motion & 多言語予約UI",
              detail:
                "洗練されたスクロールアニメーションと、外国人観光客に対応した日英バイリンガル予約フォーム（定休日・空き枠自動制御）を完備。",
            },
          ],
        },
      ],
      highlights: [
        {
          title: "主なCMS機能・実装ポイント",
          items: [
            "【自作テーマ】既存テーマの改変ではなく、1からfunctions.phpをコーディングしたオリジナルテーマ制作",
            "【メニュー管理】カスタム投稿タイプとカスタムフィールドによる糖度（Brix）・産地・価格のスマート管理",
            "【カテゴリ分類】カスタムタクソノミーとフロント側タブフィルターの完全自動連動",
            "【GUIカスタマイザー】サイト基本情報（タイトル・キャッチフレーズ・ファビコン）とナビゲーションの動的変更",
            "【REST API対応】WordPressをヘッドレスCMSとして活用し、Reactフロントエンドへのデータ供給も可能な設計",
          ],
        },
        {
          title: "開発・デプロイメント成果",
          items: [
            "【Local環境】ローカルPC上での完全再現環境構築とPHP 8.x最新仕様での堅牢なコーディング",
            "【FileZilla】FTP通信による本番サーバー（InfinityFree）への確実なファイル転送・階層同期",
            "【All-in-One WP Migration】データベースURLの一括置換とメディア・投稿データの本番インポート完遂",
            "【日英バイリンガルUI】インバウンド需要を見据えた日本語・英語ワンクリック切り替え予約システムの実現",
            "【レスポンシブ最適化】スマホ・タブレット・PC全端末で崩れない洗練されたフルーツカフェ世界観の表現",
          ],
        },
      ],
      note: "WordPressオリジナルテーマ開発から、Local環境、FileZilla FTP通信、All-in-One WP Migrationによる本番公開までを完全にワンストップで実証した案件です。",
    },
    screenshotsBadge: "WORDPRESS ADMIN & CUSTOMIZER",
    screenshotsTitle: "WordPress 管理画面・自作テーマ＆カスタマイザー展示",
    screenshotsNote:
      "ローカル環境（Local）および本番環境で実際に稼働しているWordPress管理画面のキャプチャです。自作オリジナルテーマ「CAFE HAREKA Theme [晴果]」の有効化、カスタム投稿タイプ「カフェメニュー」、カスタムタクソノミー「メニューカテゴリ」、カスタマイザーによる動的設定の様子をご確認いただけます。",
    screenshots: [
      {
        src: okayamaCafeThemeAdminImg,
        title: "自作オリジナルテーマ「CAFE HAREKA Theme [晴果]」有効化画面（外観 > テーマ）",
        caption:
          "WordPressのテーマ規約（style.cssのメタヘッダー定義、screenshot.png）に完全準拠して自作したオリジナルテーマ。ワンクリックで有効化・切り替えが可能です。",
      },
      {
        src: okayamaCafeCptMenuListImg,
        title: "カスタム投稿タイプ『カフェメニュー』一覧管理画面",
        caption:
          "「岡山県産 清水白桃の極上パフェ」「晴王（シャインマスカット）のエメラルドタルト」など、旬の果物スイーツをサムネイル画像付きで直感的に管理できる専用投稿画面。",
      },
      {
        src: okayamaCafeTaxonomyCategoryImg,
        title: "カスタムタクソノミー『メニューカテゴリ』設定画面",
        caption:
          "「テイクアウト・ギフト」「ドリンク」「ランチ・軽食」「旬果スイーツ」の各カテゴリをGUIで自由に追加・スラッグ設定でき、サイト側のタブ絞り込みと自動連動します。",
      },
      {
        src: okayamaCafeCustomizerSiteInfoImg,
        title: "WordPress カスタマイザー（サイト基本情報・リアルタイムプレビュー）",
        caption:
          "「外観 > カスタマイズ」からサイト名（okayamaCafe）、キャッチフレーズ、ファビコン（サイトアイコン）をGUIで即時編集。右側ペインで実際の表示を確認しながら安全に変更を適用できます。",
      },
      {
        src: okayamaCafeCustomizerMenuImg,
        title: "WordPress カスタマイザー（メニュー構造・ナビゲーション設定）",
        caption:
          "グローバルメインメニューおよびフッターメニューのリンク構造・表示位置をノーコードで設定。header.php / footer.php に組み込んだ wp_nav_menu() と完全連動しています。",
      },
      {
        src: okayamaCafeThemeScreenshotImg,
        title: "自作テーマ公式スクリーンショット＆PCファーストビュー",
        caption:
          "清水白桃の極上パフェ、晴王（シャインマスカット）、ガーデンテラス案内など、岡山の果物とカフェの心地よい木漏れ日空間を美しく伝えるトップビジュアルです。",
      },
    ],
    creationSteps: [
      {
        number: "1",
        title: "企画・要件定義・サイト設計（全7ページ・日英予約）",
        description:
          "岡山・地産地消カフェのブランドコンセプト「晴れの国の太陽と、樹上のめぐみをそのままに。」を策定。ホーム、店舗紹介、旬果メニュー、果物図鑑、お知らせ、アクセス、日英スマート予約の全7ページ構成を設計。",
      },
      {
        number: "2",
        title: "Local環境構築 ＆ WordPress自作テーマフルスクラッチ開発",
        description:
          "Localを用いてPHP 8.x/WordPress 6.x開発環境を構築。header.php, footer.php, front-page.php, functions.php を完全自作し、カスタム投稿タイプ（カフェメニュー/果物図鑑）とカスタムタクソノミーを実装。",
      },
      {
        number: "3",
        title: "FileZilla FTP転送 ＆ All-in-One WP Migration 本番移行・公開",
        description:
          "FileZillaを用いて本番サーバー（InfinityFree）へテーマファイル群をFTPアップロード。All-in-One WP MigrationによりDB・投稿データ・メディアを安全にエクスポート/インポートし、カスタマイザーで初期設定を行って本番公開を完了。",
      },
    ],
  },
  {
    id: "oloroso",
    category: "portfolio",
    categoryLabel: "ポートフォリオ実績用制作物",
    badgeType: "portfolio",
    title: "フラメンコスタジオ「Estudio Oloroso」公式WEBサイト",
    subtitle: "Next.js + Decap CMS によるモダンWeb制作・ヘッドレスCMS構築",
    description:
      "Web制作・フロントエンド開発実績用の架空フラメンコスタジオ「Estudio Oloroso（エストゥディオ・オロロソ）」のWebサイト。Next.js (App Router) と Decap CMS（旧 Netlify CMS）を採用し、GitベースのヘッドレスCMS構成により、非エンジニアでもMarkdown形式で手軽にお知らせやブログを更新できる運用設計を実現。",
    overview:
      "「洗練された深遠な情熱（Sophisticated Passion）」をコンセプトに、アンダルシア・ヘレスの伝統美とモダンなUI/UXを融合したデザイン。トップページ、スタジオ紹介、クラスカリキュラム、料金表、重要休講アラート付きお知らせ・ブログ、予約・お問い合わせフォームなどを包括的に設計・実装。初期Excel要件定義からGitHub Issuesへ全タスクをチケット化し、進捗可視化・アジャイル管理を実践しています。",
    purpose:
      "フラメンコスタジオのWebリニューアルにおいて、アンダルシアの伝統美とモダンWeb技術を融合。非エンジニアの講師・スタッフでも手軽に休講情報やブログ記事を更新できるようGit直結のDecap CMSを組み込み、運用コストと更新工数を大幅に削減する。",
    role: [
      "企画・要件定義",
      "情報アーキテクチャ (IA)",
      "UI/UXデザイン",
      "フロントエンド実装 (Next.js)",
      "Decap CMS構築 (Git直結)",
      "GitHub OAuth認証設計",
      "SEO構造化データ",
    ],
    image: olorosoCaptureImg,
    imageCaption: "Estudio Oloroso 公式WEBサイト トップ画面キャッチ（ファーストビュー）",
    imagePc: olorosoCapturePcImg,
    imageMobile: olorosoCaptureMobileImg,
    imagePcCaption: "Estudio Oloroso 公式WEBサイト PC版トップ画面キャッチ（ファーストビュー）",
    imageMobileCaption: "Estudio Oloroso 公式WEBサイト スマホ版トップ画面キャッチ（iPhone最適化・追従CTA）",
    technologies: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Decap CMS",
      "GitHub Issues (タスク管理)",
      "GitHub (OAuth / API)",
      "Vercel",
      "Markdown / Frontmatter",
      "Lucide React",
      "JSON-LD (構造化データ)",
      "SEO / OGP",
    ],
    features: [
      "【Next.js App Router & SSG】Turbopackによる超高速ページ遷移とSSG（静的サイト生成）/ SSRハイブリッド設計",
      "【Decap CMS & Git直結運用】GitHubリポジトリ（Markdown/Frontmatter）と直結した、非エンジニア向けブログ・お知らせコンテンツ管理",
      "【GitHub Issues チケット管理】初期Excel要件定義書から全タスクをチケット化し、ラベル・マイルストーンを活用した可視化タスク管理を実践",
      "【GitHub OAuth セキュア認証】Next.js Route Handlerを活用したGitHub OAuth認証による、外部認証サーバー不要のセキュアなCMS管理画面連携（/admin/）",
      "【ブランド世界観設計】深みのあるワインレッド×シャンパンゴールドに基づく、アンダルシアの伝統美とモダンUIの上品で洗練された融合",
      "【モバイル最適化 & 追従CTA】スマートフォン追従型フローティングCTA（LINE予約・体験予約）、アコーディオンFAQ、Stickyヘッダー等のモバイルUX設計",
      "【SEO構造化マークアップ】DanceStudio / LocalBusiness の JSON-LD 構造化データマークアップ、OGP・Twitter Cards 設定による包括的SEO対策",
      "【スケジュール表 & 予約フォーム】曜日タブ切り替え式のレッスンスケジュール表、レベル別受講フローチャート、体験レッスン予約・問い合わせフォームの実装",
    ],
    demo: "https://oloroso.vercel.app/",
    github: "https://github.com/ikeda-haruka/oloroso",
    issuesUrl: "https://github.com/ikeda-haruka/oloroso/issues",
    documentProcessNote:
      "本ドキュメント群は、GoogleスライドおよびGoogleスプレッドシートを使用し、Geminiにプロンプトを投げかけて作成させたものを目視確認して詳細レビューを行ったものが成果物となっています。AIプロンプトによる迅速なドラフト作成と人間による入念な品質検証・精査を組み合わせたドキュメント作成プロセスを実践しています。",
    documents: [
      {
        title: "「Estudio Oloroso」WEBサイト デザインプレビュー＆リニューアル構成案",
        filename: "「Estudio Oloroso」WEBサイト デザインプレビュー＆リニューアル構成案.pptx",
        format: "PPTX",
        size: "6.6 MB",
        creationMethod: "Googleスライド × Geminiプロンプト作成 ＋ 目視レビュー",
        description:
          "Googleスライドを使用し、Geminiにプロンプトを投げかけて作成させた構成案・スライド内容を目視確認して詳細レビューを行った企画提案書（全12スライド）。情報構造の課題分析からデザインコンセプト、サイトマップ、UI改善案、本公開に向けた推進計画までを網羅した成果物です。",
        keyPoints: [
          "Googleスライドを使用しGeminiにプロンプトを投げかけて作成、目視確認・レビューを実施した成果物",
          "デザインコンセプト策定（洗練された情熱 / Sophisticated Passion）",
          "情報アーキテクチャ（IA）およびサイトマップ設計",
          "主要画面のUI改善案（ファーストビュー、スマホ最適化カレンダー、ブログ統合、予約フォーム等）",
          "制作スケジュール・推進ロードマップ（全12スライド）",
        ],
        downloadUrl:
          "/docs/oloroso/Estudio_Oloroso_Design_Preview_and_Renewal_Proposal.pptx",
        githubUrl:
          "https://github.com/ikeda-haruka/oloroso/blob/main/docs/%E3%80%8CEstudio%20Oloroso%E3%80%8DWEB%E3%82%B5%E3%82%A4%E3%83%88%20%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%EF%BC%86%E3%83%AA%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%A2%E3%83%AB%E6%A7%8B%E6%88%90%E6%A1%88.pptx",
      },
      {
        title: "「Estudio Oloroso」WEBサイト レイアウト構成・コンテンツ一覧",
        filename: "「Estudio Oloroso」WEBサイト レイアウト構成・コンテンツ一覧.xlsx",
        format: "XLSX",
        size: "29 KB",
        statusBadge: "GitHub Issuesへタスク移行済（docs/old保管）",
        creationMethod: "Googleスプレッドシート × Geminiプロンプト作成 ＋ 目視レビュー",
        description:
          "Googleスプレッドシートを使用し、Geminiにプロンプトを投げかけて作成させた画面構成・要件定義項目を目視確認して詳細レビューを行った初期定義書。記載内容はすべてGitHub Issuesへチケット化してアジャイルなタスク・進捗管理へ移行したため、本ファイルはdocs/old配下に元資料としてアーカイブ保管しています。初期要件の設計根拠として引き続き閲覧・ダウンロードが可能です。",
        keyPoints: [
          "Googleスプレッドシートを使用しGeminiにプロンプトを投げかけて作成、目視確認・レビューを実施した成果物",
          "全ページ（トップ、スタジオ紹介、クラス、料金、ブログ、予約等）の画面ID別コンテンツ・デザイン初期要件定義",
          "GitHub Issuesへのタスク移行（各画面・機能の実装課題をチケット化し、ラベル・マイルストーンで進捗管理）",
          "システム要件定義（Next.js SSG、Decap CMS Markdown連携、JSON-LD構造化データ、GA4等）",
          "外部サービス連携仕様（Instagram API、LINE・Googleフォーム連携等）および旧ブログ移行仕様",
        ],
        downloadUrl:
          "/docs/oloroso/Estudio_Oloroso_Layout_and_Content_List.xlsx",
        githubUrl:
          "https://github.com/ikeda-haruka/oloroso/blob/main/docs/old/%E3%80%8CEstudio%20Oloroso%E3%80%8DWEB%E3%82%B5%E3%82%A4%E3%83%88%20%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88%E6%A7%8B%E6%88%90%E3%83%BB%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E4%B8%80%E8%A6%A7.xlsx",
        githubButtonText: "GitHub (docs/old) で確認",
        extraAction: {
          label: "GitHub Issues（タスク管理）を見る",
          url: "https://github.com/ikeda-haruka/oloroso/issues",
        },
      },
    ],
    screenshots: [
      {
        src: adminNewsListImg,
        title: "お知らせ・休講情報一覧",
        caption: "Decap CMSコレクション画面。休講・代講、発表会などの告知を一覧で視覚的に管理。",
      },
      {
        src: adminNewsEditImg,
        title: "お知らせ編集（リアルタイムプレビュー）",
        caption: "左側で入力しながら右側で実画面のレンダリング結果をリアルタイム確認可能。",
      },
      {
        src: adminBlogListImg,
        title: "公式ブログ記事一覧",
        caption: "Markdown / Frontmatter 形式でGitHubに自動保存・バージョン管理される記事一覧。",
      },
      {
        src: adminBlogEditImg,
        title: "ブログ記事編集・アイキャッチ設定",
        caption: "画像アップロード、タグ・カテゴリー分類、Markdownエディタでの直感的な編集画面。",
      },
      {
        src: adminSettingsImg,
        title: "スタジオ基本設定",
        caption: "スタジオ名、所在地、営業時間、SEOメタデータなどの全社・サイト共通設定を一元管理。",
      },
    ],
    architecture: {
      title: "モダンWeb ＆ ヘッドレスCMSアーキテクチャ",
      subtitle: "Next.js (App Router) × Decap CMS × GitHub OAuth連携",
      description:
        "Next.jsのハイブリッドレンダリング（SSG/SSR）と、GitベースのヘッドレスCMS（Decap CMS）を連携。非エンジニアでも管理画面（/admin/）からお知らせやブログを直接更新でき、GitHubリポジトリへのMarkdown自動保存とVercelのCI/CD自動デプロイが連動する運用コスト最小化アーキテクチャです。",
      steps: [
        {
          title: "閲覧者 / スタッフ",
          detail: "Webサイト閲覧 ／ CMS管理画面 (/admin/)",
          tone: "blue",
        },
        {
          title: "認証・Route Handler",
          detail: "Next.js OAuth Route Handler (GitHub API連携)",
          tone: "purple",
        },
        {
          title: "コンテンツ管理基盤",
          detail: "Decap CMS (Git直結・Markdown保存)",
          tone: "green",
        },
        {
          title: "ビルド・ホスティング",
          detail: "Vercel SSG/SSR (自動CI/CDデプロイ)",
          tone: "red",
        },
      ],
      flowLabel: "コンテンツ更新から静的サイト生成・公開までのフロー",
      groups: [
        {
          title: "コンテンツ・データ構造",
          tone: "indigo",
          cards: [
            {
              title: "お知らせコレクション",
              detail: "休講情報・代講・発表会通知 (Markdown / Frontmatter)",
            },
            {
              title: "ブログコレクション",
              detail: "アイキャッチ画像・カテゴリー・Markdownエディタ連携",
            },
            {
              title: "スタジオ設定",
              detail: "所在地・営業時間・SEOメタデータなどのサイト共通設定を一元管理",
            },
          ],
        },
        {
          title: "インフラ選定・運用コスト防衛（FinOps）",
          tone: "amber",
          cards: [
            {
              title: "Vercel Hobby（試作・デモ用）",
              detail: "無料枠上限到達時は配信停止する仕様のため、追加請求・青天井リスクが完全ゼロ",
            },
            {
              title: "Vercel Pro（商用防衛策）",
              detail: "「Pause Production Deployments」をオンにし、設定予算到達時に自動停止させて請求事故を防止",
            },
            {
              title: "Cloudflare選定（低コスト・転送量フリー）",
              detail: "月額費用最小化・画像等の転送量を気にせず運用したい商用案件ではCloudflare Pagesを採用",
            },
          ],
        },
        {
          title: "開発・SEO・外部連携",
          tone: "slate",
          cards: [
            {
              title: "GitHub OAuth認証",
              detail: "外部認証サーバー不要のRoute HandlerによるセキュアCMS連携",
            },
            {
              title: "JSON-LD構造化データ",
              detail: "DanceStudio / LocalBusiness 準拠の地域SEO対策",
            },
            {
              title: "チケット駆動開発",
              detail: "初期Excel要件定義からGitHub Issuesへ全タスクを移行して管理",
            },
          ],
        },
      ],
      highlights: [
        {
          title: "ヘッドレスCMS運用設計のポイント",
          items: [
            "非エンジニアのスタッフ・講師でもブラウザから手軽に休講情報やブログをリアルタイムプレビュー更新可能",
            "データベースサーバー不要のGitベース（Markdownファイル）永続化による高可用性と低運用コストの両立",
            "Next.js App Routerの静的生成（SSG）による高速表示パフォーマンス",
          ],
        },
        {
          title: "インフラ選定・運用コスト管理ポリシー（FinOps）",
          items: [
            "ポートフォリオ試作環境としてVercel Hobbyプラン（無料枠）を採用し、突発的な請求リスクを完全遮断",
            "商用・実務案件ではProプラン選定＋「Pause Production Deployments」有効化により、青天井の費用膨張を防止",
            "転送量を気にせず月額費用を最小限に抑えたいWebサイト案件では「Cloudflare」を採用し、転送量無料の配信基盤を提案",
          ],
        },
      ],
      note: "Vercelホスティングはポートフォリオ試作のためHobbyプラン（無料枠・超過時配信停止で安全）を採用。実際の商用案件ではProプラン＋Pause Production Deploymentsによる請求事故防止、またはデータ転送量無料のCloudflare Pages選定など、運用費が知らない間に膨れ上がらない設計を徹底しています。",
    },
    costPolicy: createVercelCostPolicy(
      "Estudio Oloroso 公式WEBサイト",
      "スタジオ案内やブログ写真・動画の配信においても、試作環境ではHobbyプランの安全停止仕様を活用しています。"
    ),
  },
  {
    id: "dental",
    category: "portfolio",
    categoryLabel: "ポートフォリオ実績用制作物",
    badgeType: "portfolio",
    title: "歯科クリニック 歯科衛生士採用LP（Figma Webデザイン・プロトタイプ）",
    subtitle: "ChatGPT要件定義・ワイヤーフレーム指示書策定 × Figma AIたたき台生成 × デザインシステム構築",
    description:
      "「AIを活用しながら、採用課題を解決するWebデザインを提案できる」ことを実証するWebデザイン制作実績。求職者（歯科衛生士）が抱える「職場の人間関係」「教育・サポート体制」「子育てやプライベートとの両立」「ブランク復職」といったリアルな不安を解決するため、ChatGPTを活用して要件定義・ワイヤーフレーム制作指示書を策定。これをプロンプトとしてFigma AIエージェントに読み込ませてたたき台を生成し、Figma上で配色・余白・タイポグラフィ・コンポーネントを精密に調整・仕上げました。清潔感・安心感・温かみを兼ね備えたセージグリーン×ベージュのデザインシステム（配色、フォント、ボタン、カード、見出し規約）を構築し、実際の歯科医院案件にも即時転用・カスタマイズ可能な高精度デザインデータとして制作しています。",
    overview:
      "「Natural & Clean — 自分らしく、安心して働ける歯科クリニック」をデザインコンセプトに掲げた採用ランディングページ。白をベースにセージグリーン（#8FA995）とベージュ（#EDE5D8）を組み合わせ、医療機関としての信頼感と親しみやすさを両立。ヘッダーからファーストビュー、求職者へのメッセージ、当院で働く3つの魅力、仕事内容、1日のタイムライン、スタッフ紹介・インタビュー、教育研修、福利厚生、募集要項、FAQ、見学CTAまで全16セクションを網羅。デスクトップ（1440px）およびスマートフォン（390px）の両デバイスに最適化しています。",
    purpose:
      "歯科クリニックにおける歯科衛生士の採用難・早期離職課題の解決、および「AIを活用したスピーディーかつ本質的なデザイン提案力」の実証。給与条件の提示だけでなく、スタッフの雰囲気、教育制度、働きやすさを視覚的・心理的に伝え、「ここなら安心して長く働けそう」「まずは見学してみたい」と感じる導線を構築すること。",
    role: [
      "企画・採用課題インサイト分析",
      "ChatGPTプロンプトエンジニアリング",
      "ワイヤーフレーム制作指示書策定 (全16セクション)",
      "Figma AIデザイン生成・プロンプト修正指示",
      "デザインシステム設計 (Color/Typography/Components)",
      "Figma UIデザイン仕上げ (PC 1440px / Mobile 390px)",
      "ポートフォリオ連携・公開共有設定",
    ],
    image: dentalDesktopFvImg,
    imageCaption: "歯科クリニック 歯科衛生士採用LP デスクトップ版ファーストビュー（セージグリーン×ベージュの温もりあるデザイン）",
    imagePc: dentalDesktopFvImg,
    imageMobile: dentalMobileFvImg,
    imagePcCaption: "歯科クリニック 歯科衛生士採用LP PC版ファーストビュー（1440px・キャッチコピー＆スタッフ写真2カラム構成）",
    imageMobileCaption: "歯科クリニック 歯科衛生士採用LP スマホ版ファーストビュー（390px・1カラム最適化＆見学CTA）",
    figmaUrl:
      "https://www.figma.com/design/FZtc8rzKg6x4TyvIYBGs76/%E6%AD%AF%E7%A7%91%E8%A1%9B%E7%94%9F%E5%A3%AB%E6%8E%A1%E7%94%A8LP%EF%BC%88%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E5%AE%9F%E7%B8%BE%E7%94%A8%E3%81%AE%E6%9E%B6%E7%A9%BA%E3%82%B5%E3%82%A4%E3%83%88%EF%BC%89?node-id=0-1&t=x8WNB41FrFwsjqiE-1",
    technologies: [
      "Figma (Auto Layout / コンポーネント設計)",
      "Figma AI (デザインたたき台生成・プロンプト修正)",
      "ChatGPT (採用課題整理 / ワイヤーフレーム指示書策定)",
      "デザインシステム設計 (Color Palette / Typography / Spacing)",
      "UI/UXデザイン (PC 1440px / Mobile 390px レスポンシブ)",
      "プロンプトエンジニアリング",
      "医療・歯科採用情報アーキテクチャ (IA)",
    ],
    features: [
      "【AI活用デザイン提案】「AIを活用しながら採用課題を解決するWebデザインを提案できる」スキルを実証。歯科衛生士の不安に寄り添う情報設計をAIで体系化",
      "【STEP 1: ChatGPT要件定義】ターゲット別の不安と訴求ポイント、全16セクション構成、配色・フォント・写真配置・CTA設計を網羅した高精度指示書を作成（目安30〜60分）",
      "【STEP 2: Figma AI生成】作成した指示書をプロンプトとしてFigmaエージェントに入力し、たたき台生成後に文章で修正指示や余白・タイポグラフィ調整を実施",
      "【再利用デザインシステム】セージグリーン（#8FA995）とベージュ（#EDE5D8）を基調としたカラーパレット、Noto Sans JPタイポグラフィ、ボタン・カード規約を完全整備",
      "【FV＆全体像の分割展示】縦長の採用LPにおいて、一目で世界観が伝わるファーストビューと、全16セクションの構成が俯瞰できるページ全体像を分けて提示する親切なUI設計",
      "【閲覧用Figma公式リンク】権限「Anyone can view（閲覧のみ）」に設定したFigma公式リンクを設置し、レイヤー構成やAuto Layout設定を直接確認可能",
      "【実務転用コンポーネント】実際の歯科クリニックの支給テキストや写真にワンクリックで差し替え可能な画像枠・テキストモジュール設計",
    ],
    fullPageImages: {
      pc: dentalDesktopFullImg,
      mobile: dentalMobileFullImg,
      pcCaption:
        "歯科衛生士採用LP デスクトップ版 ページ全体デザイン（1440px × 11,086px・全16セクションの完全デザイン）",
      mobileCaption:
        "歯科衛生士採用LP スマートフォン版 ページ全体デザイン（390px × 18,647px・縦長1カラム最適化）",
      note: "LP全体が縦長であるため、ファーストビューのクローズアップとは別に、全体の構成・情報の視線誘導・リズム感を一覧できるようページ全体を掲載しています。各フレームはスクロールして閲覧でき、クリックで高解像度モーダル表示が可能です。",
    },
    designSystem: {
      title: "歯科衛生士採用LP デザインシステム設計書",
      subtitle:
        "Natural & Clean — 清潔感・安心感・温かみを兼ね備えた再利用性の高いコンポーネント規約",
      concept:
        "白をベースにセージグリーン（#8FA995）とベージュ（#EDE5D8）を組み合わせ、医療機関としての高い信頼性を保ちつつ、堅苦しさを取り払った親しみやすいデザイン。見た目を整えるだけでなく、統一感と運用時の再利用性を徹底追求しています。",
      colors: [
        {
          name: "メイン背景",
          hex: "#FFFFFF",
          usage: "ページ全体の基本背景。清潔感と可読性の基盤",
          textColor: "#333B35",
        },
        {
          name: "セクション背景",
          hex: "#F5F7F2",
          usage: "セクション区切り・交互背景。単調さを防ぐ淡いグリーンベージュ",
          textColor: "#333B35",
        },
        {
          name: "メインカラー",
          hex: "#8FA995",
          usage: "セージグリーン。安心感・自然・医療の温かみを表現するキーカラー",
          textColor: "#FFFFFF",
        },
        {
          name: "濃いグリーン（アクセント）",
          hex: "#526B59",
          usage: "メインCTAボタン・強調見出し・重要アイコン",
          textColor: "#FFFFFF",
        },
        {
          name: "ベージュ（サブカラー）",
          hex: "#EDE5D8",
          usage: "カード背景・装飾タグ・柔らかな親しみやすさを演出",
          textColor: "#333B35",
        },
        {
          name: "メインテキスト",
          hex: "#333B35",
          usage: "見出し・本文テキスト。純黒を避け、目に優しいダークオリーブグレー",
          textColor: "#FFFFFF",
        },
        {
          name: "サブテキスト",
          hex: "#70776F",
          usage: "補足文・注釈・キャプション・メタ情報",
          textColor: "#FFFFFF",
        },
        {
          name: "ボーダー・枠線",
          hex: "#E4E9E2",
          usage: "カード境界線・区切り線・テーブルボーダー",
          textColor: "#333B35",
        },
      ],
      typography: {
        fontFamily: "Noto Sans JP（日本語） / 落ち着いたセリフ体（英字アクセント）",
        heading: "太めのウェイト（Bold / Black）、サイズ 24〜36px（PC）、20〜28px（SP）",
        body: "Regular（400）を基本に、行間 1.7〜1.9 で読みやすさを最優先、15〜16px（基準）",
        accent: "英字の小見出し（SECTION 01、BENEFITS 等）にエレガントなセリフ体を配置",
      },
      components: [
        {
          name: "メインCTAボタン",
          description: "濃いグリーン（#526B59）背景に白文字の最も目立つ重要アクションボタン",
          rules: [
            "高さ 48〜56px、角丸 8〜16pxを基準とし、十分な押しやすさを確保",
            "「まずは職場見学へ」「職場見学に申し込む」など心理的ハードルの低い文言",
            "SP表示時は横幅100%または最小240pxを確保し、タップミスを防止",
          ],
        },
        {
          name: "サブCTAボタン",
          description: "白またはベージュ背景に濃いグリーン枠線・テキストの補助ボタン",
          rules: [
            "「募集要項を見る」「応募する」などメインと目的を明確に分離",
            "メインボタンと横並びまたは縦並びに配置し、求職者に選択肢を提示",
          ],
        },
        {
          name: "情報カード（3カラム / 1カラム）",
          description: "働く魅力・仕事内容・インタビュー等を整理する角丸カードモジュール",
          rules: [
            "背景は白（#FFFFFF）またはベージュ（#EDE5D8）を使用",
            "角丸 12〜16px、境界線 #E4E9E2、影やグラデーションを多用せずフラットに設計",
            "SP表示時は横スクロールさせず、縦1列に自動スタック化して可読性を担保",
          ],
        },
        {
          name: "タイムライン（1日の流れ）",
          description: "出勤から診療準備、午前・午後診療、片付け、退勤までの業務フロー",
          rules: [
            "時刻を縦軸に配置し、各ステップのアイコンと説明を美しく整列",
            "実際の医院の勤務時間に合わせて即時差し替え可能なプレースホルダー構造",
          ],
        },
      ],
      rules: [
        "余白（Whitespace）を十分に確保し、医療従事者が落ち着いて読める息苦しさを感じさせないレイアウト",
        "角丸は8〜16px程度を統一基準とし、医療機関としての誠実さと親しみやすさを両立",
        "写真を大きく配置し、人物の表情や院内の清潔な雰囲気をダイレクトに伝達",
        "セクションごとに背景色（白 / #F5F7F2）を交互に切り替え、長文でも飽きさせない視線誘導とリズムを生み出す",
        "スタッフ写真は実際の医院支給素材をワンクリックで差し替えられる画像枠コンポーネントとして設計",
      ],
    },
    creationSteps: [
      {
        number: "1",
        title: "ChatGPTで情報を整理する（目安：30〜60分）",
        description:
          "歯科衛生士の求職インサイトを徹底分析し、求人LPの構成（全16セクション）、ターゲット別の不安と訴求ポイント、ファーストビューを含む3つのデザイン方向性、配色・フォント・写真配置・CTA設計を策定。高精度な『ワイヤーフレーム制作指示書（Markdown）』を完成させました。",
      },
      {
        number: "2",
        title: "Figma AIに指示書を入力し、デザインたたき台を生成",
        description:
          "完成した制作指示書をプロンプトとしてFigmaエージェント（Figma AI）に読み込ませ、デスクトップ（1440px）とスマートフォン（390px）の初期レイアウトを一括生成。AIの特性を活かし、短時間で全体の情報構造と骨格を可視化しました。",
      },
      {
        number: "3",
        title: "Figma上で文章修正・デザインシステム適用・仕上げ",
        description:
          "AI生成後、プロンプトでの追加修正指示に加え、手動で配色（セージグリーン×ベージュ）、余白（8pxグリッド）、タイポグラフィ、ボタン・カードコンポーネントの精緻な調整を実施。実際の歯科医院案件にも即時転用可能な高品質デザインに仕上げました。",
      },
    ],
    screenshotsBadge: "Figma UI Gallery",
    screenshotsTitle: "各セクション詳細デザイン＆UIモジュール展示",
    screenshotsNote:
      "求職者の不安を解消するために設計した各主要セクションのデザイン詳細です。クリックで拡大できます。",
    screenshots: [
      {
        src: dentalBenefitsImg,
        title: "当院で働く3つの魅力＆クリニック紹介",
        caption:
          "教育・チームワーク・働きやすさの3枚カード。不安を払拭するセージグリーンの清潔感あるUI設計。",
      },
      {
        src: dentalScheduleImg,
        title: "歯科衛生士の1日（タイムライン）＆仕事内容",
        caption:
          "出勤から退勤までの流れを時系列で可視化。実際の勤務イメージを具体的に伝え、入職後のギャップを防止。",
      },
      {
        src: dentalStaffImg,
        title: "スタッフ紹介＆スタッフインタビュー",
        caption:
          "先輩スタッフのリアルな声と院内の雰囲気を伝えるカードレイアウト。人物写真枠とコメントのバランスを最適化。",
      },
      {
        src: dentalRequirementsImg,
        title: "成長サポート・福利厚生＆募集要項",
        caption:
          "教育ステップ、アイコン付き福利厚生一覧、スマートフォンでも見やすい募集要項テーブル設計。",
      },
      {
        src: dentalCtaImg,
        title: "よくある質問（FAQ）＆最終見学CTA・フッター",
        caption:
          "アコーディオン形式のFAQと、見学の心理的ハードルを下げる温かみのあるセージグリーン背景の最終CTA。",
      },
    ],
    siteStructure: {
      title: "WEBサイト構成図・採用情報アーキテクチャ（全16セクション）",
      subtitle: "ファーストビュー × 職場の魅力 × スタッフ・教育環境 × 募集要項・見学CTA",
      description:
        "歯科衛生士の応募・見学動線をスムーズにするため、求職者の検討フェーズに合わせて全16セクションを論理的に構成。各セクションはFigma上で独立した編集可能フレームとして設計されています。",
      categories: [
        {
          category: "1. ファーストビュー＆導入層",
          badge: "Hero & Introduction",
          badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
          pages: [
            {
              name: "SECTION 01: ヘッダー",
              path: "Header",
              desc: "クリニックロゴ、ナビゲーション、見学・応募ボタン（SP: ハンバーガー）",
              isHighlight: true,
            },
            {
              name: "SECTION 02: ファーストビュー",
              path: "Hero",
              desc: "キャッチコピー、説明文、メインCTA（まずは見学へ）＆サブCTA（募集要項）",
              isHighlight: true,
            },
            {
              name: "SECTION 03: 求職者へのメッセージ",
              path: "Message",
              desc: "「新しい職場を探すあなたへ」不安に寄り添い歓迎する姿勢を伝える",
            },
            {
              name: "SECTION 04: クリニック紹介",
              path: "Clinic",
              desc: "院内写真と医院の特徴・診療方針を整理した2カラム構成",
            },
          ],
        },
        {
          category: "2. 職場の魅力＆仕事内容層",
          badge: "Benefits & Work",
          badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
          pages: [
            {
              name: "SECTION 05: 当院で働く魅力",
              path: "Benefits",
              desc: "教育サポート・チームワーク・働きやすさの3枚横並びカード（SP: 縦並び）",
              isHighlight: true,
            },
            {
              name: "SECTION 06: 仕事内容",
              path: "JobDescription",
              desc: "歯科衛生士の主な業務をカード形式で視覚的に紹介",
            },
            {
              name: "SECTION 07: 一日の仕事の流れ",
              path: "DailySchedule",
              desc: "出勤から退勤までを縦軸にしたタイムライン形式",
              isHighlight: true,
            },
          ],
        },
        {
          category: "3. スタッフ＆教育環境層",
          badge: "Staff & Support",
          badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
          pages: [
            {
              name: "SECTION 08: スタッフ紹介",
              path: "Staff",
              desc: "写真を大きく配置し院内の雰囲気を伝えるスタッフ紹介カード",
            },
            {
              name: "SECTION 09: スタッフインタビュー",
              path: "Interview",
              desc: "入職理由、職場の魅力、仕事のやりがいを伝えるQ&A形式",
              isHighlight: true,
            },
            {
              name: "SECTION 10: 教育・研修体制",
              path: "Education",
              desc: "入職後の成長ステップを可視化（ステップ形式）",
            },
            {
              name: "SECTION 11: 福利厚生・働きやすさ",
              path: "Welfare",
              desc: "勤務時間、休日、福利厚生をアイコン付きリストで整理",
            },
          ],
        },
        {
          category: "4. 募集要項＆エントリー層",
          badge: "Entry & Actions",
          badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
          pages: [
            {
              name: "SECTION 12: 募集要項",
              path: "Requirements",
              desc: "雇用形態、給与、時間、休日、勤務地を表形式でシンプルに整理",
              isHighlight: true,
            },
            {
              name: "SECTION 13: よくある質問",
              path: "FAQ",
              desc: "ブランク復職、新卒応募、見学の流れに関するアコーディオンFAQ",
            },
            {
              name: "SECTION 14: 院長メッセージ",
              path: "DirectorMessage",
              desc: "「これから一緒に働くあなたへ」温かみと信頼感のあるメッセージ",
            },
            {
              name: "SECTION 15: 最終見学CTA",
              path: "FinalCTA",
              desc: "セージグリーン背景・「まずは見学してみませんか？」申込導線",
              isHighlight: true,
            },
            {
              name: "SECTION 16: フッター",
              path: "Footer",
              desc: "医院ロゴ、住所、電話番号、プライバシーポリシー、著作権",
            },
          ],
        },
      ],
    },
    architecture: {
      title: "AI×Figma 連携デザイン制作プロセス＆システム構成",
      subtitle:
        "ChatGPT（要件整理・指示書策定） → Figma AI（生成・修正指示） → Figma（デザインシステム仕上げ）",
      description:
        "「AIを活用しながら、採用課題を解決するWebデザインを提案できる」ことを実証するハイブリッドなデザインワークフロー。ChatGPTでのインサイト分析・要件定義から、Figma AIによる高速たたき台作成、そしてFigma上での精緻なデザインシステム構築・仕上げまでを一気通貫で推進しました。",
      steps: [
        {
          title: "1. 採用課題インサイト分析",
          detail: "歯科衛生士の不安（人間関係・教育・両立）の洗い出し",
          tone: "blue",
        },
        {
          title: "2. ChatGPT要件定義",
          detail: "ワイヤーフレーム制作指示書（全16セクション）策定",
          tone: "purple",
        },
        {
          title: "3. Figma AI 生成・修正",
          detail: "指示書プロンプト入力・文章による反復指示調整",
          tone: "green",
        },
        {
          title: "4. デザインシステム仕上げ",
          detail: "セージグリーン配色・Noto Sans JP・コンポーネント化",
          tone: "blue",
        },
        {
          title: "5. Figma公開・実務連携",
          detail: "Anyone can view 共有設定・実案件への即時転用設計",
          tone: "green",
        },
      ],
      flowLabel: "デザイン制作＆AI活用ワークフロー",
      groups: [
        {
          title: "1. AI活用・要件定義フェーズ（ChatGPT）",
          description: "短時間（30〜60分）で採用課題を言語化し、高精度プロンプトを構築",
          tone: "indigo",
          cards: [
            {
              title: "求人LP構成の整理",
              detail: "ファーストビューから最終CTAまで全16セクションの論理的な情報設計",
            },
            {
              title: "ターゲット別の不安解消",
              detail: "教育サポート、人間関係、ワークライフバランスの3大訴求ポイント抽出",
            },
            {
              title: "ワイヤーフレーム指示書策定",
              detail: "配色・フォント・写真配置・CTA規約を網羅したMarkdownプロンプト作成",
            },
          ],
        },
        {
          title: "2. ビジュアル化・デザイン展開フェーズ（Figma AI）",
          description: "AIの生成力と文章修正指示を活かしたスピーディーな骨格構築",
          tone: "emerald",
          cards: [
            {
              title: "初期たたき台の一括生成",
              detail: "指示書プロンプトからデスクトップ（1440px）＆スマホ（390px）を迅速に生成",
            },
            {
              title: "文章による追加修正指示",
              detail: "生成後にプロンプトでレイアウトや文字情報のファインチューニングを実施",
            },
            {
              title: "マルチデバイス最適化",
              detail: "PC版2〜3カラムからスマホ版1カラム縦並びへの自然なレスポンシブ変換",
            },
          ],
        },
        {
          title: "3. デザインシステム＆実務転用フェーズ（Figma）",
          description: "統一感・再利用性・メンテナンス性を担保するプロレベルの仕上げ",
          tone: "blue",
          cards: [
            {
              title: "Natural & Clean デザインシステム",
              detail: "セージグリーン×ベージュの8カラートークン、Noto Sans JP、角丸規約",
            },
            {
              title: "差し替え可能な画像枠モジュール",
              detail: "実際のクリニック支給写真や医院情報にワンクリックで差し替え可能な構造",
            },
            {
              title: "閲覧用Figma公式リンク共有",
              detail: "Anyone can view 権限でクライアントや開発チームが自由に確認・検査可能",
            },
          ],
        },
      ],
      highlights: [
        {
          title: "主な成果・アピールポイント",
          items: [
            "「AIを活用しながら採用課題を解決するWebデザインを提案できる」スキルの確立",
            "ChatGPTによる要件整理（30〜60分）で制作期間を大幅短縮しつつ情報密度を担保",
            "Figma AIと手動調整のベストミックスによる高品質なデザインシステム構築",
            "ファーストビューとページ全体の分割掲載による、ポートフォリオ上での優れた閲覧性",
          ],
        },
        {
          title: "実務適用・医院案件へのメリット",
          items: [
            "このデザインをベースに、実際の歯科医院ごとの診療方針・写真・条件へ即時カスタマイズ可能",
            "「まずは見学から」というハードルの低いCTA設計により、応募CVRの向上に直結",
            "Auto Layoutとコンポーネント設計により、エンジニアへの実装受け渡しもスムーズ",
          ],
        },
      ],
      note: "本制作物はポートフォリオ実績用の架空歯科クリニック採用LPデザインです。Figma上で全レイヤー・オートレイアウト・テキストが個別に編集可能な状態で制作されています。",
    },
  },
  {
    id: "nurse",
    category: "portfolio",
    categoryLabel: "ポートフォリオ実績用制作物",
    badgeType: "portfolio",
    title: "医療法人社団 桜愛会「さくらレディース＆マタニティクリニック」看護師採用特設LP",
    subtitle: "HTML5 + Tailwind CSS・清潔感と温もりのサクラピンクUI・見学予約カレンダー連動モーダル＆GitHub Actions CI/CD",
    description:
      "医療法人社団 桜愛会が運営する産婦人科・不妊治療・小児科クリニック「さくらレディース＆マタニティクリニック」の看護師・助産師採用特設LP。20〜40代の女性看護師・助産師が抱える「夜勤の負担」「人間関係」「ブランクからの復職」「子育てとの両立」といった不安を払拭するため、清潔感と温もりを届けるサクラピンク×ウォームベージュのデザインシステムを構築。数字で知るクリニック（平均残業4.2h/月、有休消化率96%、産休育休復帰率100%）、日勤・夜勤のタイムスケジュール、教育研修3ステップ、3名の先輩スタッフインタビュー、院長メッセージ、福利厚生・募集要項、FAQ、Webエントリーまで全18セクションを包括設計。さらに「履歴書不要・私服OK・30分」の職場見学予約を後押しするインタラクティブな月別見学予約カレンダーモーダル（2026年10月・11月切替、ワンタップ日時選択連動）、プライバシーポリシー（privacy.html）、サイトマップ（sitemap.html）まで完全網羅。GitHub Issues（全9件クローズ）を活用したチケット駆動開発とGitHub Actionsによる自動デプロイ・進捗自動同期ワークフローを実現しました。",
    overview:
      "「生命の誕生に寄り添い、あなたらしい看護を咲かせる場所。」をキーメッセージに掲げた医療従事者特化型の採用Webサイト。医療現場のリアルな安心感を伝えるため、現場写真とテキストを100%整合させ、モバイル・タブレット（1024px未満）での閲覧性を担保する1カラム自動スタック設計を導入。見学予約カレンダーモーダルによる予約CVR最大化、ヘッダー・フッターのSVGロゴ統合、架空クリニック告知バー（PORTFOLIO DEMO）のヘッダー連動オフセット計算など、細部まで徹底的に作り込みました。",
    purpose:
      "産婦人科・小児科クリニックにおける看護師・助産師の採用エントリー獲得および職場見学会への動員。「産婦人科未経験でも大丈夫か」「夜勤や子育てと両立できるか」という応募者の心理的ハードルを、客観的なデータ（残業4.2h・有休96%）、リアルな先輩インタビュー、段階的研修カリキュラムの可視化によって解消し、「履歴書不要・私服OK・30分の見学会」から気軽に接点を持てる導線を確立すること。",
    role: [
      "企画・ターゲットインサイト分析",
      "情報アーキテクチャ (IA設計・全18セクション)",
      "UI/UXデザイン (サクラピンク×ウォームベージュ)",
      "フロントエンド実装 (HTML5 / Tailwind CSS / ES6+ JS)",
      "見学予約カレンダー連動モーダル設計・実装",
      "チケット駆動開発 (GitHub Issues 全9件)",
      "CI/CD自動化 (GitHub Actions デプロイ＆Changelog同期Bot)",
    ],
    image: nurseCaptureImg,
    imageCaption: "さくらレディース＆マタニティクリニック 看護師採用特設LP トップ画面キャッチ（ファーストビュー）",
    imagePc: nurseCapturePcImg,
    imageMobile: nurseCaptureMobileImg,
    imagePcCaption: "さくらレディース＆マタニティクリニック 看護師採用特設LP PC版ファーストビュー（温もりのサクラピンク×清潔感ある医療UI）",
    imageMobileCaption: "さくらレディース＆マタニティクリニック 看護師採用特設LP スマホ版トップ画面（固定ヘッダー＆見学会予約CTAバー連動）",
    technologies: [
      "HTML5 (セマンティックマークアップ)",
      "Tailwind CSS (JITコンパイル / カスタムカラーパレット)",
      "JavaScript (ES6+ / モーダル・カレンダー制御)",
      "GitHub Actions (デプロイCI/CD & Issues同期Bot)",
      "GitHub Pages (完全相対パス / .nojekyll運用)",
      "チケット駆動開発 (GitHub Issues 全9件クローズ)",
      "見学予約カレンダーモーダル (動的月切り替え・空き状況○△表示)",
      "マルチデバイス最適化 (1024px未満 1カラム自動スタック化)",
      "ポートフォリオ実績用デモ告知バー＆ヘッダー動的オフセット連動",
      "SVGアイコンシステム & ブランドロゴ一元化",
      "Webアクセシビリティ (コントラスト比 / ARIA属性 / モーダルESC閉じ)",
      "レスポンシブWebデザイン (Mobile / Tablet / Desktop)",
    ],
    features: [
      "【全18セクション採用情報設計（Issue #1）】20〜40代の看護師・助産師が抱える不安（夜勤・人間関係・ブランク）を払拭するため、数字で知る当院（残業4.2h/有休96%）、4つの魅力、日勤夜勤タイムライン、先輩インタビュー3名、研修3ステップ、福利厚生、FAQ、応募フォームなど全18セクションを包括設計",
      "【現場写真と情報の100%整合（Issue #2）】新生児ケア、外来看護、マタニティクラス、先輩看護師（病棟リーダー佐藤・外来看護田中・助産師高橋）、院長メッセージに至るまで、現場のリアルな医療職ビジュアルを独自生成し、各テキストと1対1で完全整合配置",
      "【GitHub Actions 自動デプロイ（Issue #3）】mainブランチプッシュ時にGitHub ActionsでGitHub Pagesへ自動デプロイするパイプラインを構築。サブディレクトリ（/nurse/）配信に対応するため、リソースパスを完全相対パス化し.nojekyllを配備",
      "【デモ告知バー & ヘッダー動的連動（Issue #4）】架空クリニックであることを明示するデモ告知バー（PORTFOLIO DEMO）を最上部に設置しつつ、追従ヘッダー（top: 36px）やフローティングCTAボタンとの重なり・干渉をゼロにする動的オフセット計算を実装",
      "【モバイル1カラム自動最適化（Issue #5）】1024px未満の中間ブレイクポイントで3カラムカード（インタビュー3名・研修3ステップ）の文字詰まり・レイアウト崩れを解消するため、最大幅540pxの中央揃え1カラム縦並びへ自動最適化",
      "【Changelog自動同期Bot（Issue #6）】コミットプッシュ時にGitHub Actionsがコミットログを抽出し、マスターIssue #6（Changelogトラッカー）へ自動追記・関連Issueへ通知するBotワークフロー（sync-issues.yml）を構築",
      "【プライバシー & サイトマップ拡充（Issue #7）】医療機関のWebサイトとしての信頼性とコンプライアンスを高めるため、個人情報保護方針（privacy.html）および全18セクション＋下層ページを俯瞰できるサイトマップ（sitemap.html）を新設し相互リンクを確立",
      "【見学予約カレンダーモーダル（Issue #8）】2026年10月・11月の動的月切り替え、空き状況アイコン（○/△/-）、希望日時ワンタップ自動入力連動モーダルを実装し、見学会への応募ハードルを極限まで低減",
      "【SVGロゴ & ブランド表記一元化（Issue #9）】桜シンボルマークSVG＋医療法人社団 桜愛会＋さくらレディース＆マタニティクリニック＋採用特設サイトバッジの構成を共通コンポーネント化し、全ページで統一感のあるブランド体験を実現",
    ],
    demo: "https://ikeda-haruka.github.io/nurse/",
    github: "https://github.com/ikeda-haruka/nurse",
    issuesUrl: "https://github.com/ikeda-haruka/nurse/issues",
    screenshotsBadge: "採用LP & UI/UX",
    screenshotsTitle: "医療現場ビジュアル・研修制度＆見学予約カレンダーギャラリー",
    screenshotsNote:
      "清潔感と温もりを伝えるリアルな医療現場ビジュアル、教育研修カリキュラム、見学予約カレンダーモーダルなど、看護師・助産師の心理的ハードルを取り除くデザインハイライトです。クリックで拡大プレビューできます。",
    screenshots: [
      {
        src: nurseHeroImg,
        title: "メインビジュアル・キャッチコピー（ファーストビュー）",
        caption:
          "『生命の誕生に寄り添い、あなたらしい看護を咲かせる場所。』産婦人科・小児科の温かみとプロフェッショナリズムを伝えるサクラピンクのヒーローセクション。",
      },
      {
        src: nurseBabyCareImg,
        title: "助産・新生児ケア現場ビジュアル（仕事内容セクション）",
        caption:
          "病棟・新生児室での丁寧な沐浴・ケアの様子。現場写真と文言を100%整合させ、産婦人科看護のやりがいと安心感を訴求。",
      },
      {
        src: nursePreceptorImg,
        title: "安心のプリセプター制度（教育・研修体制セクション）",
        caption:
          "先輩ナースがマンツーマンで指導するプリセプター制度。ブランクのある復職者や産婦人科未経験者でも安心して成長できるステップを可視化。",
      },
      {
        src: nurseOutpatientImg,
        title: "外来看護・患者コミュニケーション（業務紹介セクション）",
        caption:
          "妊婦健診や小児科外来での丁寧な問診・案内風景。患者さまに寄り添う医療の現場感を鮮明に伝達。",
      },
      {
        src: nurseTeamImg,
        title: "チーム医療・カンファレンス風景（職場環境ギャラリー）",
        caption:
          "医師・助産師・看護師が職種の垣根を越えて意見交換を行うカンファレンス風景。風通しの良い人間関係を視覚化。",
      },
      {
        src: nurseDoctorKeikoImg,
        title: "院長メッセージ・クリニック理念（院長あいさつセクション）",
        caption:
          "医療法人社団 桜愛会 院長メッセージ。女性のライフステージに寄り添う医療方針と、スタッフ一人ひとりの働きやすさを大切にする姿勢を発信。",
      },
    ],
    taskAutomationBanner: {
      badge: "GitHub Issues 全9件クローズ",
      subtitle: "チケット駆動開発によるアジャイルな品質向上と自動化",
      title: "GitHub Issues（全9件）によるUI/UXブラッシュアップ＆CI/CD自動化プロセス",
      description:
        "要件定義・全体構築から、リアルな医療現場写真の100%整合配置、GitHub Actions自動デプロイ、告知バーとヘッダーのオフセット連動、1024px未満での1カラム自動スタック化、Changelog自動同期Bot、プライバシー・サイトマップ拡充、見学予約カレンダーモーダル実装、ロゴ統一まで、全9件の課題をチケット駆動で完遂しました。",
      linkText: "GitHub Issues（全9件の改善タスク）を見る",
      linkUrl: "https://github.com/ikeda-haruka/nurse/issues",
    },
    siteStructure: {
      title: "WEBサイト構成図・採用情報アーキテクチャ（全18セクション＋下層ページ群）",
      subtitle: "トップ採用LP（全18セクション） × 見学予約カレンダーモーダル × プライバシーポリシー × サイトマップ",
      description:
        "看護師・助産師の応募導線をスムーズにするため、メイン採用LP（全18セクション）から、ワンタップで希望日時を選択できる見学予約カレンダーモーダル、医療機関としての信頼性を担保するプライバシーポリシー、全容を俯瞰できるサイトマップを有機的に連携させています。各リンクから実際のページを確認可能です。",
      categories: [
        {
          category: "1. メイン採用LP（index.html / 全18セクション）",
          badge: "Main Landing Page",
          badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
          pages: [
            {
              name: "ファーストビュー・キャッチコピー",
              path: "#hero / FV",
              desc: "温かみのあるサクラピンクUI・安心の医療ビジュアル・見学会応募CTA",
              url: "https://ikeda-haruka.github.io/nurse/#hero",
              isHighlight: true,
            },
            {
              name: "院長メッセージ・理念",
              path: "#message",
              desc: "院長挨拶・女性医療に寄り添うクリニックの理念と想い",
              url: "https://ikeda-haruka.github.io/nurse/#message",
            },
            {
              name: "数字で知る当院の実績",
              path: "#numbers",
              desc: "平均残業4.2h/月・有休消化率96%・産休育休復帰率100%の客観データ",
              url: "https://ikeda-haruka.github.io/nurse/#numbers",
              isHighlight: true,
            },
            {
              name: "当院で働く4つの魅力",
              path: "#attractions",
              desc: "プリセプター指導・あたたかな人間関係・最新医療設備・ワークライフバランス",
              url: "https://ikeda-haruka.github.io/nurse/#attractions",
            },
            {
              name: "仕事内容＆看護領域",
              path: "#work",
              desc: "産科病棟・外来看護・手術室・助産マタニティケアの業務紹介タブ",
              url: "https://ikeda-haruka.github.io/nurse/#work",
            },
            {
              name: "日勤・夜勤 1日のスケジュール",
              path: "#schedule",
              desc: "日勤（8:30〜17:30）と夜勤（16:30〜翌9:30）の具体的タイムライン",
              url: "https://ikeda-haruka.github.io/nurse/#schedule",
            },
            {
              name: "先輩スタッフインタビュー",
              path: "#interview",
              desc: "病棟リーダー・外来看護・助産師 3名のリアルな声と入職理由",
              url: "https://ikeda-haruka.github.io/nurse/#interview",
              isHighlight: true,
            },
            {
              name: "職場環境・フォトギャラリー",
              path: "#gallery",
              desc: "ナースステーション・分べん室・新生児室・スタッフルーム写真",
              url: "https://ikeda-haruka.github.io/nurse/#gallery",
            },
            {
              name: "教育研修体制（3ステップ）",
              path: "#training",
              desc: "プリセプター指導・スキルアップ研修・専門助産師支援の成長ロードマップ",
              url: "https://ikeda-haruka.github.io/nurse/#training",
            },
            {
              name: "福利厚生・募集要項",
              path: "#requirements",
              desc: "給与体系・夜勤手当・賞与年2回・年間休日120日・院内保育所案内",
              url: "https://ikeda-haruka.github.io/nurse/#requirements",
            },
            {
              name: "よくある質問（FAQ）",
              path: "#faq",
              desc: "ブランク復職・未経験応募・夜勤回数などに関するアコーディオンFAQ",
              url: "https://ikeda-haruka.github.io/nurse/#faq",
            },
            {
              name: "見学予約＆応募エントリーフォーム",
              path: "#entry",
              desc: "私服OK・履歴書不要の30分見学予約および本応募Webフォーム",
              url: "https://ikeda-haruka.github.io/nurse/#entry",
              isHighlight: true,
            },
          ],
        },
        {
          category: "2. 動的モーダル＆予約アクション層",
          badge: "Interactive Modal",
          badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
          pages: [
            {
              name: "見学予約カレンダーモーダル",
              path: "#tourCalendarModal",
              desc: "2026年10月・11月動的切替、空き状況○△表示、希望日時ワンタップ自動入力",
              isHighlight: true,
            },
            {
              name: "公式LINE相談動線",
              path: "LINE連携",
              desc: "友だち追加で採用担当者へ質問・カジュアルチャット相談可能",
            },
          ],
        },
        {
          category: "3. 下層・コンプライアンスページ群",
          badge: "Compliance & Structure",
          badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
          pages: [
            {
              name: "プライバシーポリシー",
              path: "privacy.html",
              desc: "個人情報保護方針・応募者データの利用目的・安全管理措置",
              url: "https://ikeda-haruka.github.io/nurse/privacy.html",
              isHighlight: true,
            },
            {
              name: "視覚的サイトマップ",
              path: "sitemap.html",
              desc: "全18セクション＋下層ページの階層構造・ワンクリック遷移ナビ",
              url: "https://ikeda-haruka.github.io/nurse/sitemap.html",
              isHighlight: true,
            },
          ],
        },
        {
          category: "4. 自動化パイプライン＆インフラ層",
          badge: "CI/CD & Hosting",
          badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
          pages: [
            {
              name: "GitHub Actions デプロイパイプライン",
              path: ".github/workflows/deploy.yml",
              desc: "mainブランチプッシュ時のGitHub Pages自動配信・.nojekyll配備",
            },
            {
              name: "Changelog自動同期ワークフロー",
              path: ".github/workflows/sync-issues.yml",
              desc: "コミットプッシュ時にマスターIssue #6へ更新履歴を自動記録するBot",
            },
          ],
        },
      ],
    },
    architecture: {
      title: "看護師採用LPシステム構成・自動化アーキテクチャ",
      subtitle: "HTML5 / Tailwind CSS × バニラJSモーダル × GitHub Actions CI/CD",
      description:
        "外部の重量ライブラリに依存しない高速バニラJavaScript＋Tailwind CSS設計により、PageSpeedモバイル表示速度を最大化。2026年10月・11月動的カレンダーモーダルや、GitHub ActionsによるGitHub Pages自動デプロイ、コミット連動型Changelog同期Botによって開発・運用の自動化を実現しました。",
      steps: [
        {
          title: "Webブラウザ / スマホ",
          detail: "メインLP・見学予約カレンダー・下層ページ",
          tone: "blue",
        },
        {
          title: "フロントエンド基盤",
          detail: "HTML5 / Tailwind CSS / ES6+ JavaScript",
          tone: "purple",
        },
        {
          title: "動的UI・モーダル制御",
          detail: "見学カレンダー日時自動代入 / FAQアコーディオン",
          tone: "green",
        },
        {
          title: "GitHub Actions CI/CD",
          detail: "自動デプロイ(deploy.yml) & Issues同期Bot",
          tone: "blue",
        },
        {
          title: "GitHub Pages 配信",
          detail: "完全相対パス / .nojekyll / HTTPS",
          tone: "green",
        },
      ],
      flowLabel: "リクエスト & 自動化パイプライン",
      groups: [
        {
          title: "1. フロントエンド・UI層",
          description: "セマンティックHTML5とTailwind CSSによる軽量・高速なデザイン基盤",
          tone: "blue",
          cards: [
            {
              title: "サクラピンク デザインシステム",
              detail: "清潔感と温もりを両立するサクラピンク×ウォームベージュ配色、グラスモーフィズム",
            },
            {
              title: "マルチデバイス自動スタック化",
              detail: "1024px未満での3カラム文字詰まりを解消する中央揃え1カラム自動最適化",
            },
            {
              title: "デモ告知バー連動オフセット",
              detail: "最上部告知バーと追従ヘッダー（top: 36px）の重なり干渉をゼロにする動的オフセット",
            },
          ],
        },
        {
          title: "2. インタラクティブ機能・コンポーネント層",
          description: "外部ライブラリ非依存のバニラJavaScriptによる高速・軽量なユーザー体験",
          tone: "indigo",
          cards: [
            {
              title: "見学予約カレンダーモーダル",
              detail: "2026年10月・11月の月切り替え、空き状況○△表示、希望日時ワンタップ自動代入",
            },
            {
              title: "FAQアコーディオン＆スムーススクロール",
              detail: "WAI-ARIA属性に準拠した開閉アニメーションとセクション間スムース遷移",
            },
            {
              title: "ブランドロゴ＆SVGコンポーネント",
              detail: "桜シンボルマークSVG＋法人名＋クリニック名＋採用バッジの全ページ完全統一",
            },
          ],
        },
        {
          title: "3. CI/CD自動化＆ホスティング層",
          description: "GitHub Actionsを活用した自動デプロイと進捗管理の完全自動化",
          tone: "emerald",
          cards: [
            {
              title: "GitHub Pages 自動デプロイ",
              detail: "deploy.ymlによりmainプッシュ時に自動ビルド・デプロイ、.nojekyll配備",
            },
            {
              title: "コミット連動 Changelog 同期Bot",
              detail: "sync-issues.ymlによりコミット内容をマスターIssue #6へ自動記録・チケット同期",
            },
            {
              title: "完全相対パス設計",
              detail: "サブディレクトリ（/nurse/）配信でのアセット404を防止する相対URL運用",
            },
          ],
        },
      ],
      highlights: [
        {
          title: "主な機能・実装の工夫",
          items: [
            "数字で知る当院（残業4.2h/有休96%/復帰100%）の客観的データ提示による心理的不安の払拭",
            "現場医療職（病棟・外来・助産師・院長）の写真と文言を100%整合させたリアリティの確立",
            "見学予約カレンダーモーダルによる予約ステップの簡略化と応募CVRの向上",
            "1024px未満での3カラム自動1カラムスタック化によるスマホ・タブレット可読性の担保",
            "個人情報保護方針（privacy.html）およびサイトマップ（sitemap.html）の配備による信頼性",
          ],
        },
        {
          title: "運用品質・アクセシビリティ",
          items: [
            "GitHub Issues全9件による完全チケット駆動開発とコミット連動Changelog同期Bot",
            "ESCキーやオーバーレイクリックによる安全なモーダル閉鎖とフォーカス管理",
            "WCAG 2.1 AA準拠の高コントラスト比テキストカラーとセマンティックタグ構造",
            "軽量バニラJSによるゼロ依存・高速レンダリング（PageSpeedモバイル高速化）",
          ],
        },
      ],
      note: "医療法人社団 桜愛会「さくらレディース＆マタニティクリニック」はポートフォリオ実績用の架空クリニックです。Webサイト最上部にデモ用告知バーを常時表示し、閲覧者が混乱しないよう配慮しています。",
    },
  },
  {
    id: "nailsalon",
    category: "portfolio",
    categoryLabel: "ポートフォリオ実績用制作物",
    badgeType: "portfolio",
    title: "表参道パラジェル＆水光マグネット専門サロン「Salon de Fraise」公式WEBサイト",
    subtitle: "Next.js + Tailwind CSS・大人可愛いUI設計＆完全永久無料Spring Boot 3.3バックエンド・メンズサロン（HOMME）展開",
    description:
      "表参道駅徒歩4分の自爪を削らないパラジェル＆水光マグネットネイル専門店「Salon de Fraise（サロン・ド・フレーズ）」の公式ブランドWebサイト。20〜30代女性に愛される上質で洗練された『大人可愛い』世界観（白・ラベンダーモーブ・シャンパンゴールド）を軸に、50色以上の水光マグネット体験シミュレーターやネイルカラー＆スタイル診断、空席シミュレーターなど高度なインタラクティブUIを実装。さらに男性特有の爪の悩みに特化したメンズ専用サロン『Salon de Fraise HOMME（サロン・ド・フレーズ オム）』および自爪風マットネイルチップ等を扱うメンズ公式ECショップ（/mens/shop）、会員ランク（4段階）・誕生月50%OFFクーポン・ポイント還元機能付きマイページ（/mypage）まで包括的に開発。バックエンドにはRenderマネージドPostgreSQLの30日失効制約を回避する『組み込みH2ファイル永続化＋Render無料枠（Java 21 / Spring Boot 3.3 REST API）』の完全永久無料アーキテクチャを策定し、二重予約防止・空き枠計算・排他制御インデックスまで設計・実装しました。全20件の課題・改善をGitHub Issuesでチケット駆動管理しています。",
    overview:
      "「自爪を削らない、うるおい美爪。透き通る水光ラベンダーとシャンパンゴールドの煌めき」をテーマに、レディース専門サロンからメンズ専門サロン（HOMME）、会員マイページ、オンラインショップまで網羅したサロンDXプラットフォーム。HotPepper Beauty・公式LINE・電話のマルチ予約動線、明朗会計メニュー表、在籍ネイリスト（全8名）の顔写真ポートレート、未生成・404画像のブランドロゴ自動フォールバック表示、WCAG高コントラスト対応など、細部まで徹底して作り込みました。GitHub Issues（全20件クローズ）を活用し、Tailwind CSSバンドル最適化から大人可愛いデザインリニューアル、永久無料バックエンド仕様書の策定までを高速イテレーションで解決しています。",
    purpose:
      "表参道駅至近の自爪育成・パラジェル＆水光マグネット専門サロンにおける認知拡大と予約獲得。HotPepper Beauty手数料依存からの脱却を目指し、大人可愛い独自の世界観（白×モーブ×シャンパンゴールド）の確立、メンズネイル（HOMME）需要の開拓、会員制度・オンラインショップ・永久無料Spring Boot APIによる総合サロンDX基盤の構築。",
    role: [
      "要件定義・IA設計",
      "UI/UXデザイン",
      "フロントエンド実装 (Next.js)",
      "バックエンドAPI設計 (Spring Boot)",
      "DB論理設計・排他制御",
      "チケット駆動開発 (GitHub Issues)",
      "CI/CDデプロイ (Vercel)",
    ],
    image: nailsalonCaptureImg,
    imageCaption: "Salon de Fraise 公式WEBサイト トップ画面キャッチ（ファーストビュー）",
    imagePc: nailsalonCapturePcImg,
    imageMobile: nailsalonCaptureMobileImg,
    imagePcCaption: "Salon de Fraise 公式WEBサイト PC版トップ画面キャッチ（大人可愛い水光ラベンダー×シャンパンゴールド）",
    imageMobileCaption: "Salon de Fraise 公式WEBサイト スマホ版トップ画面キャッチ（モバイル最適化・ヘッダー＆予約CTA）",
    technologies: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS (グラスモーフィズム)",
      "Java 21 / Spring Boot 3.3 (REST API)",
      "H2 Database (PostgreSQL互換ファイル永続化)",
      "完全永久無料バックエンド設計 (Render)",
      "チケット駆動開発 (GitHub Issues 全20件)",
      "二重予約防止・排他制御インデックス設計",
      "会員ランク制度・ポイント還元・クーポンUI",
      "水光マグネット体験シミュレーター (マウス追従)",
      "ネイルカラー＆スタイル診断ウィジェット",
      "メンズ専用サロン (HOMME) / メンズEC展開",
      "レスポンシブWebデザイン (Mobile First)",
      "404フォールバック・画像自動代替システム",
      "Vercel (CI/CD自動デプロイ)",
    ],
    features: [
      "【全20件チケット駆動改善】プロジェクト初期化からデザインフルリニューアル、画像差し替え、メンズサロン・EC新設、会員ランク制度、永久無料バックエンド仕様書策定まで、全20件の課題をチケット駆動で完遂",
      "【永久無料バックエンド設計（Issue #20, #15, #16）】RenderマネージドPostgreSQLの30日失効制約を解消するため、組み込みH2（PostgreSQL互換ファイル永続化モード）＋Render無料枠によるJava 21 / Spring Boot 3.3 REST APIアーキテクチャを策定。クレカ不要・無期限・完全無料で安定稼働",
      "【二重予約防止・排他インデックス（Issue #14）】データベース論理設計（ER図・DDL）において、空き枠計算・二重予約判定用の複合インデックス（idx_reservations_slot）や指名ネイリスト重複防止インデックス（idx_reservations_staff）を実装",
      "【大人可愛いデザイン刷新（Issue #11, #13）】ユーザーフィードバックに基づき、甘すぎる配色から白・ラベンダーモーブ・シャンパンゴールドの上品な世界観へフル刷新。すりガラス（グラスモーフィズム）や水光エフェクトを融合",
      "【爪先マクロ写真への完全刷新（Issue #12）】パラジェル専門店の価値を伝えるため、人物の顔写真から自爪を削らないパラジェル施術・爪先マクロ写真・50色水光マグネット写真へ徹底刷新",
      "【メンズサロン & 公式EC新設（Issue #17）】「男なのにネイル？」の固定概念を覆すダークトーンのメンズ専用ページ（/mens）と、自爪風完全マットネイルチップや速乾オイルを扱うメンズEC（/mens/shop）を新設。男性ネイリスト5名体制",
      "【会員ランク & 誕生月クーポン（Issue #18）】Regular/Silver/Gold/Platinumの4段階会員ランク、1%〜5%のポイント還元率計算、誕生月50%OFFクーポン、会員マイページ（/mypage）での進捗バー・保有クーポン一覧UIを実装",
      "【プロ顔写真 & 画像フォールバック（Issue #19）】男女全8名のプロポートレート設定に加え、ProductImageコンポーネントによる未生成・404画像の公式ブランドロゴ（レディース／メンズ別）自動代替表示を一元化",
      "【水光マグネット体験シミュレーター（Issue #4, #9）】マウス追従で微粒子マグネットパウダーの光沢が変わるシミュレーターや、3問で自分に合うスタイルがわかるインタラクティブ診断、空席シミュレーターを実装",
    ],
    demo: "https://nailsalon-inky.vercel.app/",
    github: "https://github.com/ikeda-haruka/nailsalon",
    issuesUrl: "https://github.com/ikeda-haruka/nailsalon/issues",
    screenshotsBadge: "UI & FullStack",
    screenshotsTitle: "レディース・メンズ（HOMME）・会員マイページ＆ECギャラリー",
    screenshotsNote:
      "20〜30代女性向けの大人可愛い本館サロン、ダークトーンのメンズ専用サロン（HOMME）、会員ランク・クーポンを管理するマイページ、自爪風マットチップ等を直接注文できるメンズ公式ECまで、多角的なサロンDX設計のハイライトです。クリックで拡大プレビューできます。",
    screenshots: [
      {
        src: nailsalonUiMensImg,
        title: "メンズ専用サロン「Salon de Fraise HOMME」（/mens）",
        caption:
          "「男なのに、なんでネイル？その言葉に、もう息苦しさを感じなくていい。」を掲げたメンズ専用パラジェルサロン。ダークトーン×ゴールドの重厚な世界観、在籍男性ネイリスト5名、完全個室・半個室、ツヤ消し自爪風処方を訴求。",
      },
      {
        src: nailsalonUiMypageImg,
        title: "会員マイページ・ランク＆クーポン案内（/mypage）",
        caption:
          "Regular・Silver・Gold・Platinumの4段階会員ランク制度、誕生月50%OFFクーポン、1%〜5%ポイント還元に対応した会員専用マイページ。デモ会員ログイン機能も備え、ランク進捗バーや保有クーポン一覧を視覚的に提示。",
      },
      {
        src: nailsalonUiShopImg,
        title: "メンズ公式オンラインショップ（/mens/shop）",
        caption:
          "自爪風完全マットネイルチップや速乾ネイルオイルを販売する専用EC。新規登録1,000pt進呈、商品コードによるクイック注文フォーム、宅配便限定・出荷日明記など、信頼性の高いEC体験を構築。",
      },
    ],
    taskAutomationBanner: {
      badge: "GitHub Issues 全20件クローズ",
      subtitle: "アジャイルな課題解決とフルスタックアーキテクチャの確立",
      title: "GitHub Issues（全20件）による品質向上・フルスタック機能拡張プロセス",
      description:
        "プロジェクト初期化・デザインシステム策定から、Tailwind CSSバンドル修正、20〜30代女性向け『大人可愛い』世界観へのフル刷新、メンズ専用サロン・ECショップの新設、会員ランク制度・誕生月クーポン設計、そしてRenderでの完全永久無料（Java 21 / Spring Boot 3.3 + H2ファイル永続化）バックエンド仕様書策定まで、全20件の課題をチケット駆動で解決しました。",
      linkText: "GitHub Issues（全20件の改善タスク）を見る",
      linkUrl: "https://github.com/ikeda-haruka/nailsalon/issues",
    },
    siteStructure: {
      title: "WEBサイト構成図・サロンDXアーキテクチャ（全8+ページ群）",
      subtitle: "レディース本館 × メンズHOMME × 会員マイページ × 公式EC × Spring Boot API",
      description:
        "レディース向けパラジェル専門サロンにとどまらず、メンズ専用サロン（HOMME）、会員ランクマイページ、メンズ公式ECショップ、そしてJava 21 / Spring Boot 3.3による予約・会員バックエンドAPIまでを有機的に連携させた、総合的なサロンDXプラットフォームとして設計・開発されています。各リンクから実際のページを確認可能です。",
      categories: [
        {
          category: "1. レディース本館（Salon de Fraise）",
          badge: "Ladies Salon",
          badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
          pages: [
            {
              name: "サロン トップ画面",
              path: "index.html / (top)",
              desc: "大人可愛いHero・パラジェル＆フィルイン強み・実績数値",
              url: "https://nailsalon-inky.vercel.app/",
              isHighlight: true,
            },
            {
              name: "最旬デザインカタログ",
              path: "#gallery",
              desc: "春夏秋冬・オフィス・水光マグネット50色フィルターギャラリー",
              url: "https://nailsalon-inky.vercel.app/#gallery",
            },
            {
              name: "水光マグネット体験シミュレーター",
              path: "#magnet-lab",
              desc: "マウス追従で微粒子マグネットパウダーの輝きが変わる動的UI",
              url: "https://nailsalon-inky.vercel.app/#magnet-lab",
            },
            {
              name: "明朗会計・メニュー料金表",
              path: "#menu",
              desc: "定額コース・オフ無料・回数券・LINE限定クーポン案内",
              url: "https://nailsalon-inky.vercel.app/#menu",
            },
          ],
        },
        {
          category: "2. メンズ専用サロン（Salon de Fraise HOMME）",
          badge: "Mens Salon",
          badgeColor: "bg-slate-800 text-amber-200 border-slate-700",
          pages: [
            {
              name: "メンズサロン トップ画面",
              path: "/mens",
              desc: "男性向けダークトーンUI・深爪/爪割れケア・完全個室・男性ネイリスト5名",
              url: "https://nailsalon-inky.vercel.app/mens",
              isHighlight: true,
            },
            {
              name: "メンズ公式オンラインショップ",
              path: "/mens/shop",
              desc: "自爪風マットネイルチップ・速乾オイル販売・クイック注文コード",
              url: "https://nailsalon-inky.vercel.app/mens/shop",
              isHighlight: true,
            },
          ],
        },
        {
          category: "3. 会員プログラム＆予約システム層",
          badge: "Member & Reservation",
          badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
          pages: [
            {
              name: "会員マイページ",
              path: "/mypage",
              desc: "Regular〜Platinum 4段階ランク進捗・誕生月50%OFFクーポン・保有ポイント",
              url: "https://nailsalon-inky.vercel.app/mypage",
              isHighlight: true,
            },
            {
              name: "HotPepper / LINE / 電話 予約",
              path: "#reservation",
              desc: "24h即時予約・公式LINE空席カレンダー・電話のマルチ予約動線",
              url: "https://nailsalon-inky.vercel.app/#reservation",
            },
          ],
        },
        {
          category: "4. バックエンドAPI＆インフラ層",
          badge: "Backend & DB",
          badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
          pages: [
            {
              name: "Spring Boot 3.3 REST API",
              path: "Java 21 / Spring Boot / Render",
              desc: "二重予約防止・空き枠計算・排他制御インデックス・会員認証API",
            },
            {
              name: "H2ファイル永続化DB（完全永久無料）",
              path: "H2 Database / PostgreSQL Mode",
              desc: "30日失効なし・¥0・無期限・クレジットカード不要の堅牢設計",
            },
          ],
        },
      ],
    },
    architecture: {
      title: "サロンDXシステム構成・フルスタックアーキテクチャ",
      subtitle: "Next.js 19 × Spring Boot 3.3 × Render永久無料H2ファイル永続化",
      description:
        "20〜30代向け大人可愛い世界観のレディース本館、メンズ専用サロン（HOMME）、会員マイページ、公式ECのマルチフロントエンドと、Java 21 / Spring Boot 3.3による堅牢な予約・会員APIバックエンドを有機的に連携。RenderマネージドPostgreSQLの30日失効制約を解消する『組み込みH2ファイル永続化』による完全永久無料アーキテクチャを確立しました。",
      steps: [
        {
          title: "Webブラウザ / スマホ",
          detail: "レディース本館・メンズHOMME・公式EC・マイページ",
          tone: "blue",
        },
        {
          title: "フロントエンド基盤",
          detail: "Next.js 19 / TypeScript / Vercel (CI/CD)",
          tone: "green",
        },
        {
          title: "REST API バックエンド",
          detail: "Java 21 / Spring Boot 3.3 (Render無料枠)",
          tone: "purple",
        },
        {
          title: "ファイル永続化DB",
          detail: "H2 Database (PostgreSQL互換・完全無料)",
          tone: "red",
        },
      ],
      flowLabel: "エンドユーザーアクセスからバックエンド永続化までの処理フロー",
      groups: [
        {
          title: "排他制御・データベース設計",
          description:
            "二重予約を物理的に遮断し、空席を高速判定する複合インデックス設計",
          tone: "indigo",
          cards: [
            {
              title: "複合インデックス (idx_reservations_slot)",
              detail: "日付・開始終了時間・スロットの重複予約を物理的に遮断",
            },
            {
              title: "指名インデックス (idx_reservations_staff)",
              detail: "同一時間帯におけるネイリスト指名の重複予約を完全防止",
            },
            {
              title: "ファイル永続化モード",
              detail: "DB再起動でもデータが消えない永久無料ファイルストレージ",
            },
          ],
        },
        {
          title: "インフラ選定・運用コスト防衛（FinOps）",
          tone: "amber",
          cards: [
            {
              title: "Vercel Hobby（試作・デモ用）",
              detail: "無料枠上限到達時は配信停止する仕様のため、追加請求・青天井リスクが完全ゼロ",
            },
            {
              title: "Vercel Pro（商用防衛策）",
              detail: "「Pause Production Deployments」をオンにし、設定予算到達時に自動停止させて請求事故を防止",
            },
            {
              title: "Cloudflare選定（低コスト・転送量フリー）",
              detail: "月額費用最小化・転送量を気にせず運用したい商用案件ではCloudflare Pagesを採用",
            },
          ],
        },
        {
          title: "マルチ予約・外部サービス連携",
          tone: "blue",
          cards: [
            { title: "HotPepper Beauty", detail: "24h即時予約システム連携" },
            { title: "公式LINE友だち", detail: "空席カレンダー・チャット相談窓口" },
            { title: "電話予約動線", detail: "店舗直通ワンタップ発信" },
            { title: "GitHub Issues", detail: "全20件の課題・チケット駆動管理" },
          ],
        },
      ],
      highlights: [
        {
          title: "完全永久無料アーキテクチャの確立（Issue #20, #15, #16）",
          items: [
            "RenderマネージドPostgreSQLの30日失効制約を排した組み込みH2ファイル永続化モードの導入",
            "クレジットカード登録不要・無期限・完全無料で稼働するSpring Boot 3.3 REST APIの実現",
            "JPA/Hibernateによるトランザクション分離レベル設定と排他制御の担保",
          ],
        },
        {
          title: "インフラ選定・運用コスト管理ポリシー（FinOps）",
          items: [
            "ポートフォリオ試作環境としてVercel Hobbyプラン（無料枠）を採用し、追加請求リスクを完全遮断",
            "実務・商用案件でのVercel Pro運用時は「Pause Production Deployments」を有効化し、予期せぬ青天井課金を防止",
            "データ転送量フリー＆ランニングコスト最小化が求められる商用サイトでは「Cloudflare」を選択肢として提案",
          ],
        },
      ],
      note: "RenderマネージドPostgreSQLの30日失効制約を回避するため組み込みH2ファイル永続化を採用しバックエンド完全無料化を実現。フロントエンドも試作用途としてVercel Hobby（無料枠・超過時停止）を採用し安全稼働。商用案件ではPro+Pause Deployments設定やCloudflare（転送量フリー）への切り替えなど、運用費膨張を防止するFinOpsを実践。",
    },
    costPolicy: createVercelCostPolicy(
      "Salon de Fraise 公式WEBサイト",
      "バックエンド側もRenderの30日失効制約をH2ファイル永続化で回避して完全永久無料化しており、フロント（Vercel Hobby）・バックエンド共に運用費ゼロで安全に長期稼働させています。"
    ),
  },
  {
    id: "protein",
    category: "portfolio",
    categoryLabel: "ポートフォリオ実績用制作物",
    badgeType: "portfolio",
    title: "女性専用プロテイン＆インナーケア「BERRY MILK」公式ブランドサイト",
    subtitle: "実案件参画（SPプロテイン LP）の設計ノウハウをリファレンス基に昇華・女性向けLPデザインシステム＆包括的D2Cサイト構築（一覧→個別詳細遷移・細部作り込み・LINE連携・会員・動的演出）",
    description:
      "女性専用あまおう苺ミルクプロテインおよび内臓脂肪ケアティーを展開する架空のD2Cインナービューティーブランド「BERRY MILK」の公式ブランドWebサイト。自身がエンジニア2名体制で実際に参画・共同開発した実案件LP『SPプロテイン（lovely-muffin-d4cf61.netlify.app）』をリファレンス基盤とし、その制作参画経験とセクション構造・訴求シナリオのノウハウを土台にリバースエンジニアリング・再構築。ターゲット女性層（美容・腸活・引き締め関心層）に最適化した「イチゴミルク配色」の独自デザインシステムを構築し、ライフスタイル別のカード型商品一覧（LINEUP）から各商品の個別詳細ページ（product-milk.html等）へシームレスに遷移するリッチなEC体験を実現。主要栄養成分4連カード・★4.8レビュー・原材料表示・返金保証付き定期オファーボックスまで細部を徹底的に作り込みました。ハンバーガー展開時のカード型ドロワーUI、上下2段で交差して流れる『デュアルトラック・プルーフストリーム』マーキーアニメーション、ユーザーが1日1回投票でき即時グラフに反映される『新作フレーバー総選挙』アンケート投票機能など、動きと遊び心に満ちたモダンなWebデザインを実装。さらに公式LINEコンシェルジュ連携（相談・スキップ窓口）、定期購入会員用ログインページ（login.html）、会社概要（company.html）、新卒・中途採用情報、開発秘話ストーリー、品質基準ページまで網羅した総合的な情報アーキテクチャ（IA）を設計・開発しました。",
    overview:
      "「整える、満たす、愛せるわたしへ。」をブランドメッセージに掲げ、自身が共同参画したSPプロテインLP（実案件）の優れた訴求動線を土台に、ファーストビューからお悩み提起、選ばれる理由、専門家監修、カード型商品一覧（LINEUP）から各商品の個別詳細ページ（product-milk.html等）へのシームレスな遷移動線、他社比較表、愛用者の声、フレーバー人気投票（インタラクティブアンケート機能）、よくある質問（FAQアコーディオン）、初回特別オファーまでの高いコンバージョン率を生み出すストーリー設計を再構築。商品詳細ページでは栄養成分4連カードや★4.8レビュー、原材料表、レシピ、オファーボックスなど細部まで徹底して作り込み、カード型モバイルドロワーや動くマーキー演出など遊び心満載のギミックを実装。公式LINE連携や会員マイページ、コーポレート・採用情報まで実動する包括的なD2Cブランドサイトとして構築し、課題や改修タスクはGitHub Issuesでチケット駆動管理しています。",
    purpose:
      "D2Cインナービューティーブランドの公式LPとして、自ら2名共同体制で参画した実案件『SPプロテイン LP』の構造をリファレンス基盤として分析・リバースエンジニアリング。20〜30代女性ターゲットに最適化したイチゴミルク配色のデザインシステムを策定し、カード型商品一覧から詳細個別ページへの回遊、アンケート投票や動的マーキー等の遊び心、公式LINE・会員マイページ連携によるLTV最大化を目指す。",
    role: [
      "競合・リファレンス分析",
      "デザインシステム策定",
      "情報アーキテクチャ (IA)",
      "フロントエンド実装 (HTML/CSS/JS)",
      "動的ギミック・アンケートUI開発",
      "チケット駆動改善 (GitHub Issues 全45件)",
      "LINE・CRM動線設計",
    ],
    image: proteinCaptureImg,
    imageCaption: "BERRY MILK 公式ブランドサイト トップ画面キャッチ（ファーストビュー）",
    imagePc: proteinCapturePcImg,
    imageMobile: proteinCaptureMobileImg,
    imagePcCaption: "BERRY MILK 公式ブランドサイト PC版トップ画面キャッチ（イチゴミルク配色のファーストビュー）",
    imageMobileCaption: "BERRY MILK 公式ブランドサイト スマホ版トップ画面キャッチ（モバイル最適化・ヘッダー＆CTA）",
    technologies: [
      "HTML5",
      "CSS3 (Flexbox / CSS Grid)",
      "JavaScript (ES6+)",
      "レスポンシブWebデザイン (Mobile First)",
      "LPデザインシステム設計 (イチゴミルク配色)",
      "情報アーキテクチャ (IA) / サイトマップ設計",
      "EコマースUI設計 (商品一覧カード → 詳細個別ページ遷移)",
      "チケット駆動開発 (GitHub Issues 全45件)",
      "公式LINEアカウント連携 (コンシェルジュ/CRM)",
      "会員認証・マイページ設計 (login.html)",
      "コーポレート・採用ページ設計 (company / recruit)",
      "コンプライアンス・個人情報保護配慮",
      "Web構成リバースエンジニアリング",
      "Google Fonts (Barlow Condensed / Noto Sans JP)",
      "UI/UX設計 (アコーディオン / フレーバー投票 / ドロワーメニュー)",
      "デュアルトラック・プルーフストリーム演出",
      "Vercel (CI/CD自動デプロイ)",
      "Edge Headless (画面キャプチャ自動同期)",
    ],
    features: [
      "【カード型商品一覧 & 個別詳細遷移】ライフスタイルや利用シーンに合わせて選べる4種の商品ラインナップをカード型UIで整理。「詳細を見る →」ボタンから各商品の個別詳細ページ（product-milk.html等）へとスムーズに誘導し、離脱を防ぐ回遊性の高いEC導線を構築",
      "【個別詳細ページの徹底作り込み】福岡県産あまおう苺果汁バッジや★4.8（1,280件）レビュー、主要栄養成分4連カード（タンパク質20g/乳酸菌1,000億個等）、3つのこだわり、詳細な原材料表、レシピ、30日間返金保証付き定期オファーまで実在D2Cブランド品質で実装",
      "【新作フレーバー総選挙（アンケート機能）】4つのフレーバー候補から選んで投票すると、閲覧日時点の最新集計グラフへリアルタイム反映されるインタラクティブなアンケート機能を実装。訪問者の滞在時間を延ばしファン化を促すエンタメ体験を創出",
      "【動くWeb演出（デュアルトラック・プルーフストリーム）】ファーストビュー直下で実績数値と製品スペックの2系統が上下逆方向に滑らかに流れる無限ループCSSマーキーアニメーションを構築。視覚的なリズム感と圧倒的な社会的証明を両立",
      "【洗練されたモバイルドロワーメニュー】ハンバーガー展開時に全画面で開くドロワー内に、WEB限定特典オファーや会員ログイン導線を最上部に配置。各メニューを丸みのあるカード型UI・可愛い絵文字・英語サブ表記で構造化し、迷わせない直感的なモバイル体験を提供",
      "【全45件チケット駆動改善】要件定義からモバイル実機バグ修正、CVR向上、ビジュアル整合性精査までを課題チケット化し、全45回の高速イテレーションを経て高品質に完成",
      "【実機検証に基づくモバイルUX最適化（Issue #16, #24, #30, #33）】モバイルハンバーガーメニュー開閉不具合、Hero要素重複、LINEUPカード画像見切れなどを実機検証で発見し即座にチケット解消",
      "【プライバシー配慮レビューUI（Issue #40）】愛用者の声セクションにおいて実名を非表示とし、イニシャルアイコンおよび年代・職業（例: 28歳・会社員）へ統一して実在ブランド基準のコンプライアンスを徹底",
      "【ブランド表記・画像の徹底整合（Issue #26, #27, #44, #45）】表記ゆれ（『ストロベリーミルク』→『ベリーミルク プロテイン』）の完全統一、ブランド専用パッケージ画像の再生成、開発風景写真から実製品と異なるパウチを除外する等、細部ディテールまで徹底精査",
      "【インタラクティブ社会的証明（Issue #8, #35, #36, #41）】閲覧日リアルタイム集計付きフレーバー投票ウィジェット、実績マーキー、TV・雑誌掲載＆芸能人愛用カードの追加による権威性向上",
      "【公式LINEコンシェルジュ連携】専任女性コンシェルジュ・管理栄養士への24時間相談窓口および次回お届け周期のスキップ・変更をLINEから行えるCRM動線を設計・実装",
      "【会員ログイン・定期マイページ（login.html）】会員ログイン認証UI、パスワード再設定、定期購入ステータス管理への導線を完備",
      "【コーポレート・採用情報ページの展開】会社概要（company.html）、SANDYグループ系列企業情報、新卒採用・中途採用の各募集ページを完備し、ブランドとしての社会的信用を確立",
      "【ブランドストーリー＆品質基準サブページ】女性開発チームの秘話（story.html）や国内GMP認定工場の安心安全基準（quality.html）を設け、購入前の不安を払拭する信頼設計",
      "【実案件参画ノウハウのリファレンス昇華】自らエンジニア2名体制で共同参画・開発した実務案件『SPプロテイン LP』の優れた訴求動線を構造化分析し、女性向けインナーケアブランドに最適化した情報アーキテクチャへ再構築・発展",
      "【独自デザインシステム構築】いちごミルクを象徴するパステルピンク（#FF7597）、ベリーレッド、ミルクホワイトの洗練された配色パレットとフォントタイポグラフィを策定",
      "【社会的証明・CVR最適化】管理栄養士監修、他社製品との詳細比較マトリクス表、安心の30日間返金保証・縛りなし明記",
    ],
    demo: "https://protein-sandy.vercel.app/",
    github: "https://github.com/ikeda-haruka/protein",
    issuesUrl: "https://github.com/ikeda-haruka/protein/issues",
    screenshotsBadge: "UI & Interactive",
    screenshotsTitle: "動的Webデザイン・モバイルUI＆遊び心ギミックギャラリー",
    screenshotsNote:
      "ユーザー参加型のアンケート機能「新作フレーバー総選挙」、カード型商品一覧からの詳細個別ページ遷移、動くマーキー演出「デュアルトラック・プルーフストリーム」、カード型モバイルドロワーまで、遊び心と実務品質を兼ね備えたWeb UIハイライトです。クリックで拡大プレビューできます。",
    screenshots: [
      {
        src: proteinUiPollImg,
        title: "アンケート投票機能「新作フレーバー総選挙」",
        caption:
          "「次回の新作フレーバーはどれがいい？」をテーマにしたユーザー参加型の遊び心ギミック。キャラメルラテ・マスカットジャスミン・ショコラベリー・アップルシナモンの4候補から1日1回投票可能。閲覧日時点の最新集計データとパーセンテージグラフが即時更新されるリアルタイム同期UIを構築。",
      },
      {
        src: proteinUiLineupImg,
        title: "カード型商品一覧（LINEUP）",
        caption:
          "4種（プロテイン・内臓脂肪ケアティー・スムージー・睡眠ケア）の利用シーン、スペック、税込価格をカード型UIで整理。「詳細を見る →」から各商品の詳細個別ページへシームレスに遷移する購買動線を設計。",
      },
      {
        src: proteinUiDetailImg,
        title: "商品紹介の詳細ページ（BERRY MILK PROTEIN）",
        caption:
          "一覧から遷移した先の個別詳細ページ。あまおう苺果汁バッジや楽天3冠・GMP認証、★4.8（1,280件）レビュー、主要栄養成分4連カード（タンパク質20g/コラーゲン1,500mg等）、定期初回20%OFFオファーや返金保証まで細部を徹底的に作り込み。",
      },
      {
        src: proteinUiDrawerImg,
        title: "モバイルドロワーメニュー（カード型ナビゲーション）",
        caption:
          "ハンバーガーメニューをタップすると展開されるフルスクリーン・ドロワー。特典オファー・マイページ導線を最上部に配置し、12個のメニューを可愛いアイコン付きカード型UIで整理。片手操作でも迷わない直感的なモバイル体験を実現。",
      },
      {
        src: proteinUiMarqueeImg,
        title: "動くWEBデザイン「デュアルトラック・プルーフストリーム」",
        caption:
          "ファーストビュー直下で実績データ（リピート率92.4%・満足度96.8%等）と商品スペック（飲む美容液・あまおう苺果汁等）の2列が上下で交差しながら無限ループで滑らかに流れるCSSマーキー演出。訪問者の視線を自然に引き込み、高い社会的証明を演出。",
      },
    ],
    taskAutomationBanner: {
      badge: "GitHub Issues 全45件クローズ",
      subtitle: "チケット駆動開発によるアジャイルなUI/UX高速イテレーション",
      title: "GitHub Issues（全45件）を活用した品質改善・機能拡充プロセス",
      description:
        "要件定義・デザインシステム策定から、スマホ実機検証で発見したレイアウト崩れ・メニュー動作不具合の修正、レビュー欄の個人情報保護（イニシャル・年代統一）、デュアルトラック・プルーフストリームやフレーバーリアルタイム投票の実装、開発秘話での画像整合性精査（実物と異なるパウチの除外）、会社概要・採用情報・会員マイページ・LINE連携に至るまで、全45件の課題をチケット駆動で可視化・解決しました。",
      linkText: "GitHub Issues（全45件の改善タスク）を見る",
      linkUrl: "https://github.com/ikeda-haruka/protein/issues",
    },
    referenceSite: {
      url: "https://lovely-muffin-d4cf61.netlify.app/",
      badge: "実際の共同参画案件（リファレンス基盤）",
      title: "自ら2名体制で共同開発した実案件「SPプロテイン LP」のリファレンス昇華と発展",
      description:
        "本制作のリファレンス基盤となっている上記サイト（lovely-muffin-d4cf61.netlify.app）は、自身がエンジニア2名体制で実際に参画・共同開発した実務案件LPです。本BERRY MILKでは、その実案件参画で培った訴求動線やセクション構造の知見を土台にしつつ、ターゲットを男性アスリートから20〜30代女性へと大胆にシフト。リバースエンジニアリングと再解釈を経て、イチゴミルク配色のデザインシステム、個別詳細ページ群、フレーバー投票、公式LINE連携などを拡張した総合D2Cブランドサイトへと昇華させました。",
    },
    siteStructure: {
      title: "WEBサイト構成図・情報アーキテクチャ（全14+ページ群）",
      subtitle: "メインLP × 個別商品詳細 × 公式LINE × 会員機能 × 会社・採用",
      description:
        "単一のランディングページにとどまらず、D2Cブランドとしての信頼性と顧客体験（LTV）を最大化するため、カード型商品一覧からの個別商品詳細ページ群（各商品ごとの成分・オファー・レシピ作り込み）、公式LINEコンシェルジュ連携、定期会員マイページ、ブランドストーリー、品質基準、会社概要、採用情報（新卒・中途）までを包括的に網羅した画面構成・動線設計を構築しています。各リンクから実際のページを確認可能です。",
      categories: [
        {
          category: "1. メインLP（集客・訴求層）",
          badge: "Main LP",
          badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
          pages: [
            {
              name: "公式LP トップ画面",
              path: "index.html#top",
              desc: "ファーストビュー・動的マーキー・お悩み提起・専門家監修",
              url: "https://protein-sandy.vercel.app/",
              isHighlight: true,
            },
            {
              name: "カード型商品一覧（LINEUP）",
              path: "index.html#lineup",
              desc: "4商品展開（プロテイン/お茶/スムージー/睡眠）・個別詳細への動線",
              url: "https://protein-sandy.vercel.app/#lineup",
              isHighlight: true,
            },
            {
              name: "愛用者の声＆フレーバー投票",
              path: "index.html#vote",
              desc: "リアルクチコミ・次期フレーバー投票（1日1回・動的集計UI）",
              url: "https://protein-sandy.vercel.app/#vote",
            },
            {
              name: "よくある質問（FAQ）",
              path: "index.html#faq",
              desc: "アコーディオン開閉FAQ・30日間全額返金保証案内",
              url: "https://protein-sandy.vercel.app/#faq",
            },
          ],
        },
        {
          category: "2. 個別商品詳細ページ群（PDP・商品深掘り層）",
          badge: "Product Detail",
          badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
          pages: [
            {
              name: "美ボディ苺ミルクプロテイン 詳細",
              path: "product-milk.html",
              desc: "★4.8レビュー・成分4大カード・3大こだわり・原材料表・レシピ3選・定期初回オファー",
              url: "https://protein-sandy.vercel.app/product-milk.html",
              isHighlight: true,
            },
            {
              name: "内臓脂肪ケアスリムティー 詳細",
              path: "product-tea.html",
              desc: "機能性表示食品届出・難消化性デキストリン・3フレーバー仕様",
              url: "https://protein-sandy.vercel.app/product-tea.html",
            },
            {
              name: "生酵素ベリースムージー 詳細",
              path: "product-smoothie.html",
              desc: "チアシード・生酵素120種・置き換えダイエット仕様詳細",
              url: "https://protein-sandy.vercel.app/product-smoothie.html",
            },
            {
              name: "睡眠ケア プロテイン 詳細",
              path: "product-night.html",
              desc: "カゼイン・GABA 100mg・ラベンダーベリー味・夜間リカバリー仕様",
              url: "https://protein-sandy.vercel.app/product-night.html",
            },
          ],
        },
        {
          category: "3. 購入・会員＆LINE連携層",
          badge: "CV & CRM",
          badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
          pages: [
            {
              name: "初回特別オファー・購入",
              path: "offer.html",
              desc: "定期割引・30日間返金保証付きの専用購入フォーム",
              url: "https://protein-sandy.vercel.app/offer.html",
              isHighlight: true,
            },
            {
              name: "公式LINEコンシェルジュ",
              path: "line.me/@460hfpvz",
              desc: "LINE友だち連携・24時間チャット相談・スキップ窓口",
              url: "https://line.me/R/ti/p/@460hfpvz",
              isHighlight: true,
            },
            {
              name: "会員ログイン・マイページ",
              path: "login.html",
              desc: "定期購入コースの配送日変更・スキップ・会員認証",
              url: "https://protein-sandy.vercel.app/login.html",
              isHighlight: true,
            },
          ],
        },
        {
          category: "4. ブランド・品質ストーリー層",
          badge: "Brand & Quality",
          badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
          pages: [
            {
              name: "女性開発チームの秘話",
              path: "story.html",
              desc: "ブランド誕生の背景・女性向け開発エピソード",
              url: "https://protein-sandy.vercel.app/story.html",
            },
            {
              name: "品質基準・安心へのこだわり",
              path: "quality.html",
              desc: "国内GMP認定工場・厳選原料・安全性検査の公開",
              url: "https://protein-sandy.vercel.app/quality.html",
            },
          ],
        },
        {
          category: "5. 会社情報・採用情報層",
          badge: "Corporate & Recruit",
          badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
          pages: [
            {
              name: "会社概要・企業情報",
              path: "company.html",
              desc: "運営企業情報（SANDYグループ系列）・理念・沿革",
              url: "https://protein-sandy.vercel.app/company.html",
              isHighlight: true,
            },
            {
              name: "新卒採用情報",
              path: "recruit-newgrad.html",
              desc: "新卒募集要項・求める人物像・選考フロー",
              url: "https://protein-sandy.vercel.app/recruit-newgrad.html",
              isHighlight: true,
            },
            {
              name: "中途採用情報",
              path: "recruit-midcareer.html",
              desc: "キャリア募集・各職種案内",
              url: "https://protein-sandy.vercel.app/recruit-midcareer.html",
              isHighlight: true,
            },
            {
              name: "特定商取引法 / プライバシー",
              path: "tokushoho.html / privacy.html",
              desc: "EC運営に必要な法定表記および個人情報保護方針",
              url: "https://protein-sandy.vercel.app/tokushoho.html",
            },
          ],
        },
      ],
    },
    architecture: {
      title: "D2CブランドWebサイト・情報アーキテクチャ＆システム構成",
      subtitle: "レスポンシブWeb LP × 個別商品PDP × 公式LINE × 会員ログイン",
      description:
        "既存Web構成のリバースエンジニアリング分析を基盤に、単一LPを超えて商品個別詳細ページ群（PDP）、公式LINEコンシェルジュ、定期会員マイページ、動的演出ギミックまでを有機的に結合した総合D2C情報アーキテクチャです。",
      steps: [
        {
          title: "一般訪問者・ターゲット層",
          detail: "スマホ / PC からのLPアクセス・回遊",
          tone: "blue",
        },
        {
          title: "動的Webデザイン層",
          detail: "デュアルトラック・プルーフストリーム / フレーバー総選挙",
          tone: "purple",
        },
        {
          title: "Eコマース回遊層",
          detail: "LINEUP商品一覧 → 個別商品詳細 (4連成分・定期オファー)",
          tone: "green",
        },
        {
          title: "CRM・会員基盤",
          detail: "公式LINEコンシェルジュ / 定期会員ログイン (login.html)",
          tone: "red",
        },
      ],
      flowLabel: "集客から商品深掘り・CRM連携までの顧客体験フロー",
      groups: [
        {
          title: "動的UI・ギミック設計",
          tone: "indigo",
          cards: [
            {
              title: "新作フレーバー総選挙",
              detail: "1日1回投票・リアルタイムグラフ集計UI",
            },
            {
              title: "デュアルトラック・マーキー",
              detail: "実績数値×スペックの2段交差ループ演出",
            },
            {
              title: "カード型モバイルドロワー",
              detail: "全12メニュー・可愛い絵文字付き直感ナビ",
            },
          ],
        },
        {
          title: "インフラ選定・運用コスト防衛（FinOps）",
          tone: "amber",
          cards: [
            {
              title: "Vercel Hobby（試作・デモ用）",
              detail: "無料枠上限到達時は配信停止する仕様のため、追加請求・青天井リスクが完全ゼロ",
            },
            {
              title: "Vercel Pro（商用防衛策）",
              detail: "「Pause Production Deployments」をオンにし、設定予算到達時に自動停止させて請求事故を防止",
            },
            {
              title: "Cloudflare選定（低コスト・転送量フリー）",
              detail: "月額費用最小化・画像等の転送量を気にせず運用したい商用D2C案件ではCloudflare Pagesを採用",
            },
          ],
        },
        {
          title: "インフラ・品質管理・開発基盤",
          tone: "slate",
          cards: [
            {
              title: "ホスティング",
              detail: "Vercel による高速静的エッジ配信とCI/CDパイプライン",
            },
            {
              title: "チケット駆動開発",
              detail: "GitHub Issues 全45件クローズ達成による高速イテレーション",
            },
            {
              title: "画面同期自動化",
              detail: "Edgeヘッドレス自動スクリーンショット同期ツールの整備",
            },
          ],
        },
      ],
      highlights: [
        {
          title: "D2Cブランドサイトとしての情報設計（IA）の工夫",
          items: [
            "カード型商品一覧（LINEUP）から各商品の個別詳細ページ（product-milk.html等）へのシームレスな回遊設計",
            "女性専任コンシェルジュ・管理栄養士相談および次回配送変更ができる公式LINE（CRM）連携",
            "新卒・中途採用情報、会社概要、開発秘話ストーリー、GMP品質基準を完備し社会的信頼を獲得",
          ],
        },
        {
          title: "インフラ選定・運用コスト管理ポリシー（FinOps）",
          items: [
            "試作・デモ用途としてVercel Hobbyプラン（無料枠）を採用し、超過時の自動配信停止により予期せぬ請求をゼロ遮断",
            "商用D2C案件ではProプラン選定＋「Pause Production Deployments」を必ず有効化し、キャンペーン時のアクセス急増でも費用爆発を防止",
            "画像転送量が多くランニングコストを極小化したいEC案件では「Cloudflare Pages」を選定し、転送量完全無料で安定稼働",
          ],
        },
      ],
      note: "高解像度商品画像や動的UIを備えたD2Cサイトですが、試作・デモ用途としてVercel Hobbyプラン（無料枠）を採用。実務・商用案件ではProプランでのPause Production Deployments設定や、転送量無料のCloudflare選定など、運用費の青天井膨張を未然に防ぐコスト管理設計を適用します。",
    },
    costPolicy: createVercelCostPolicy(
      "BERRY MILK 公式ブランドサイト",
      "高解像度な商品パッケージ画像や動的ギミックを多数含むD2Cサイトですが、試作環境としてHobbyプランで安全にホスティングしています。"
    ),
  },
  {
    id: "portfolio",
    category: "portfolio",
    categoryLabel: "ポートフォリオ実績用制作物",
    badgeType: "portfolio",
    title: "エンジニアポートフォリオ「ikeda-haruka.github.io」",
    subtitle: "React 19 + TypeScript + GitHub Issues自動タスク起票・CI/CDによるアジャイル制作",
    description:
      "WEBデザイナー＆フルスタックエンジニアとしての制作実績、Adobe公認認定資格、フロントエンドからバックエンド・インフラ連携まで網羅するシステムアーキテクチャ設計力を直感的に伝えるポートフォリオWebサイト。React 19とTailwind CSSを採用し、大画面ワイドモニターからモバイルまでの完全レスポンシブ対応を実現。さらに、開発要件や改修依頼をGitHub REST API経由で自動チケット化する「自動タスク追加ワークフロー」を独自構築し、チケット駆動開発を実践。GitHub ActionsによるCI/CD自動デプロイパイプラインを整備。",
    overview:
      "情報を探しやすい1ページ完結型の洗練されたモダンUI/UX。企画設計・自動タスク起票ツールによるアジャイル管理・実装・CI/CD公開までワンストップで制作。要件発生からGitHub Issues起票・コミット連携（Closes #XX）・本番デプロイまでを完全自動化し、エンジニアとしての自動化推進力と品質管理力を体現しています。",
    purpose:
      "Webデザイナー・フルスタックエンジニアとしてのデザイン力・技術力・課題解決プロセスを統合発信するポートフォリオ。要件発生からGitHub REST API経由での自動Issue起票、Edgeヘッドレス自動スクリーンショット同期、CI/CD自動公開まで、開発プロセスの徹底的な自動化とチケット駆動開発の可視化を体現する。",
    role: [
      "企画・全体設計",
      "UI/UXデザイン",
      "コンポーネント実装 (React 19 / TS)",
      "自動タスク起票ツール自作",
      "Edgeキャプチャ自動同期開発",
      "CI/CDパイプライン構築 (Actions)",
    ],
    image: portfolioCaptureImg,
    imageCaption: "当ポートフォリオWEBサイト トップ画面キャッチ（ファーストビュー）",
    imagePc: portfolioCapturePcImg,
    imageMobile: portfolioCaptureMobileImg,
    imagePcCaption: "当ポートフォリオWEBサイト PC版トップ画面キャッチ（最新の美しい大見出しレイアウト）",
    imageMobileCaption: "当ポートフォリオWEBサイト スマホ版トップ画面キャッチ（iPhone最適化・レスポンシブ表示）",
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Vite",
      "Edge Headless (画面キャプチャ自動同期)",
      "GitHub Issues (自動タスク起票)",
      "GitHub REST API",
      "Git Credential Manager",
      "GitHub Pages",
      "GitHub Actions (CI/CD)",
      "チケット駆動開発 / 自動化",
      "レスポンシブWebデザイン",
      "アクセシビリティ",
    ],
    features: [
      "GitHub Issues自動タスク起票ワークフロー: 開発要件や機能改修依頼をGitHub REST API経由で自動的にチケット化（Issue起票・ラベル分類・コミット連携自動クローズ）する仕組みを自作・導入し、チケット駆動開発を完全自動化",
      "画面キャプチャ自動同期ツール（PC版・スマホ版マルチデバイス自動撮影）: 最新のビルド成果物からEdgeヘッドレス経由でPC版（1280px）およびスマホ版（iPhone 390px）のスクリーンショットを自動生成・アセットへ同期するワークフローを自作・導入し、表示内容の常時同期を実現",
      "React 19 と TypeScript による型安全かつ拡張性の高いコンポーネント指向UI設計",
      "Tailwind CSS v4 を用いた最新のユーティリティファーストスタイリングとグラスモーフィズム演出",
      "大画面ワイドモニター（2560px〜）からスマートフォンまで左右均等に配置されるレスポンシブ中央揃え設計",
      "日本語タイポグラフィ最適化: 禁則処理とブロック分割による助詞落ち・不自然な改行防止",
      "Vite による高速ビルドと GitHub Actions による GitHub Pages への完全自動デプロイ（CI/CD）",
      "ブラウザ完結の高速静的SPA構成により、表示パフォーマンスとセキュアな配信を両立",
    ],
    demo: "https://ikeda-haruka.github.io/",
    github: "https://github.com/ikeda-haruka/ikeda-haruka.github.io",
    issuesUrl: "https://github.com/ikeda-haruka/ikeda-haruka.github.io/issues?q=is%3Aissue",
    taskAutomationBanner: {
      badge: "Task Automation & Issue Bot",
      subtitle: "自作スクリプトによる完全自動タスク起票 ＆ 画面キャプチャ常時同期",
      title: "GitHub Issues 自動タスク追加・チケット駆動開発 ＆ 画面キャプチャ自動同期",
      description:
        "Git Credential ManagerとGitHub REST APIを連携させた自動起票ツールを自作導入。開発要件や機能改修依頼を受け取った際に自動でIssueを新規起票し、ラベル分類・進捗管理・コミット連携（Closes #XX）による自動クローズまでを一貫して自動化。さらに、Edgeヘッドレスブラウザ連携により、本番ビルドからPC版・スマホ版両方の画面キャッチを常に最新状態へと自動同期するツールを整備。実務に即したチケット駆動開発と継続的自動化を体現しています。",
      linkText: "実際のGitHub Issues一覧を見る（全14件）",
      linkUrl: "https://github.com/ikeda-haruka/ikeda-haruka.github.io/issues?q=is%3Aissue",
    },
    creationSteps: [
      {
        number: "01",
        title: "情報設計・GitHub Issues自動タスク起票",
        description:
          "構成案や画面要件を整理し、自作スクリプトとGitHub API連携により依頼内容をGitHub Issuesへ自動チケット化。タスク着手から完了クローズまで完全可視化されたチケット駆動開発を推進します。",
      },
      {
        number: "02",
        title: "実装・マルチデバイス最適化",
        description:
          "ReactとTypeScriptでコンポーネントを分割し、Tailwind CSSで大画面からモバイル（iPhone等）まで美しい改行・レイアウトを組み立てます。",
      },
      {
        number: "03",
        title: "ビルド・CI/CD自動公開・Issueクローズ",
        description:
          "本番ビルド後、GitHub ActionsからGitHub Pagesへ自動デプロイ。コミットメッセージ連携により関連Issueを自動完了（Closed）にします。",
      },
    ],
    flowSteps: [
      {
        title: "React 19 / TypeScript",
        detail: "画面をコンポーネント単位で型安全に実装",
        tone: "blue",
      },
      {
        title: "Vite",
        detail: "型チェック後に高速かつ軽量に本番向けビルド",
        tone: "purple",
      },
      {
        title: "HTML / CSS / JS",
        detail: "ブラウザで直接動作する静的ファイル生成",
        tone: "green",
      },
      {
        title: "GitHub Pages",
        detail: "GitHub Actionsを通じて自動デプロイ・公開",
        tone: "red",
      },
    ],
    flowNote:
      "閲覧時はブラウザがGitHub PagesからHTML・CSS・JavaScriptを取得し、Reactが各セクションを描画します。静的なポートフォリオのため、独自のバックエンドやデータベースは使用していません。",
    architecture: {
      title: "ポートフォリオ制作・CI/CD ＆ 開発自動化アーキテクチャ",
      subtitle:
        "React 19 × Vite × GitHub Issues自動起票Bot × Edge自動撮影 × GitHub Actions",
      description:
        "開発要件発生からGitHub REST API経由での自動Issueチケット起票、最新本番成果物のEdgeヘッドレスによるPC/スマホマルチデバイス自動撮影・アセット同期、そしてGitHub ActionsによるGitHub Pagesへの完全自動デプロイまでを自作ツールで一気通貫させた継続的自動化アーキテクチャです。",
      steps: [
        {
          title: "React 19 / TypeScript",
          detail: "画面をコンポーネント単位で型安全に実装",
          tone: "blue",
        },
        {
          title: "Vite 高速ビルド",
          detail: "型チェック後に高速かつ軽量に本番向けバンドル",
          tone: "purple",
        },
        {
          title: "Edge Headless 自動撮影",
          detail: "PC版(1280px)＆スマホ版(390px)を自動キャプチャ同期",
          tone: "green",
        },
        {
          title: "GitHub Pages (CI/CD)",
          detail: "GitHub Actionsを通じて完全自動デプロイ・公開",
          tone: "red",
        },
      ],
      flowLabel: "自作開発自動化ツール群とCI/CDパイプラインの流れ",
      groups: [
        {
          title: "自作開発自動化ツール群",
          tone: "indigo",
          cards: [
            {
              title: "GitHub Issues 自動起票Bot",
              detail:
                "REST API & Git Credential Manager連携で依頼内容を自動チケット化",
            },
            {
              title: "Edgeヘッドレス画面同期スクリプト",
              detail:
                "最新ビルドからPC/スマホ実機スクリーンショットを常時自動更新",
            },
            {
              title: "チケット自動完了連携",
              detail:
                "コミットメッセージ（Closes #XX）で関連Issueを自動クローズ",
            },
          ],
        },
        {
          title: "フロントエンド技術スタック",
          tone: "slate",
          cards: [
            {
              title: "Tailwind CSS v4",
              detail: "最新ユーティリティ＆グラスモーフィズム演出",
            },
            {
              title: "ハッシュルーティング",
              detail:
                "GitHub Pages環境での404回避・直リンク共有（#/project/:id）対応",
            },
            {
              title: "日本語タイポグラフィ",
              detail: "禁則処理・ブロック分割による不自然な改行防止",
            },
          ],
        },
      ],
      highlights: [
        {
          title: "エンジニアとしての自動化推進力",
          items: [
            "要件定義からGitHub Issues起票・コミット連携・本番公開までを完全自動化",
            "ブラウザ完結の高速静的SPA構成により、表示パフォーマンスとセキュアな配信を両立",
          ],
        },
      ],
      note: "閲覧時はブラウザがGitHub PagesからHTML・CSS・JavaScriptを取得し、Reactが各セクションを描画します。静的なポートフォリオのため、独自のバックエンドやデータベースは使用していません。",
    },
  }
];
