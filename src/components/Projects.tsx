import { useEffect, useState } from "react";
import olorosoCaptureImg from "../assets/oloroso-capture.png";
import biwakogymCaptureImg from "../assets/biwakogym-capture.png";
import portfolioCaptureImg from "../assets/portfolio-capture.png";
import adminNewsListImg from "../assets/oloroso-admin/admin-news-list.png";
import adminNewsEditImg from "../assets/oloroso-admin/admin-news-edit.png";
import adminBlogListImg from "../assets/oloroso-admin/admin-blog-list.png";
import adminBlogEditImg from "../assets/oloroso-admin/admin-blog-edit.png";
import adminSettingsImg from "../assets/oloroso-admin/admin-settings.png";

type ProjectCategory = "portfolio" | "client_web" | "client_enterprise";

interface Screenshot {
  src: string;
  title: string;
  caption: string;
}

interface ProjectDocument {
  title: string;
  filename: string;
  format: "PPTX" | "XLSX" | "CSV" | "PDF";
  size: string;
  statusBadge?: string;
  creationMethod?: string;
  description: string;
  keyPoints: string[];
  downloadUrl: string;
  githubUrl: string;
  githubButtonText?: string;
  extraAction?: {
    label: string;
    url: string;
  };
}

interface FlowStep {
  title: string;
  detail: string;
  tone: "blue" | "green" | "purple" | "red";
}

interface CreationStep {
  number: string;
  title: string;
  description: string;
}

interface TaskAutomationBanner {
  badge: string;
  subtitle: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

interface Project {
  id: string;
  category: ProjectCategory;
  categoryLabel: string;
  badgeType: "portfolio" | "client_web" | "client_enterprise";
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  technologies: string[];
  features: string[];
  image?: string;
  imageCaption?: string;
  github?: string;
  demo?: string;
  issuesUrl?: string;
  screenshots?: Screenshot[];
  documents?: ProjectDocument[];
  documentProcessNote?: string;
  flowSteps?: FlowStep[];
  creationSteps?: CreationStep[];
  flowNote?: string;
  taskAutomationBanner?: TaskAutomationBanner;
}

const projectsData: Project[] = [
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
    image: olorosoCaptureImg,
    imageCaption: "Estudio Oloroso 公式WEBサイト トップ画面キャッチ（ファーストビュー）",
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
      "Next.js (App Router / Turbopack) による高速なページ遷移とSSG（静的サイト生成）/ SSRハイブリッド設計",
      "Decap CMS（GitベースCMS）を導入し、GitHubリポジトリ（Markdown/Frontmatter）と直結したブログ・お知らせコンテンツ管理",
      "初期Excel要件定義書からGitHub Issuesへ全タスクをチケット化し、ラベル・ステータスを活用した可視化タスク管理を実施",
      "Next.js Route Handlerを活用したGitHub OAuth認証による、外部認証サーバー不要のセキュアなCMS管理画面連携（/admin/）",
      "ブランドアイデンティティ（深みのあるワインレッド×シャンパンゴールド）に基づく上品で洗練されたUI/UXデザイン",
      "スマートフォン追従型フローティングCTA（LINE予約・体験予約）、アコーディオンFAQ、Stickyヘッダーなどのモバイル最適化",
      "DanceStudio / LocalBusiness の JSON-LD 構造化データマークアップ、OGP・Twitter Cards 設定による包括的なSEO対策",
      "曜日タブ切り替え式のレッスンスケジュール表、レベル別受講フローチャート、体験レッスン予約・問い合わせフォームの実装",
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
  },
  {
    id: "portfolio",
    category: "portfolio",
    categoryLabel: "ポートフォリオ実績用制作物",
    badgeType: "portfolio",
    title: "エンジニアポートフォリオ「ikeda-haruka.github.io」",
    subtitle: "React 19 + TypeScript + GitHub Issues自動タスク起票・CI/CDによるアジャイル制作",
    description:
      "Webデザイナー＆フロントエンドエンジニアとしての制作実績、Adobe公認認定資格、システムアーキテクチャ設計力を直感的に伝えるポートフォリオWebサイト。React 19とTailwind CSSを採用し、大画面ワイドモニターからモバイルまでの完全レスポンシブ対応を実現。さらに、開発要件や改修依頼をGitHub REST API経由で自動チケット化する「自動タスク追加ワークフロー」を独自構築し、チケット駆動開発を実践。GitHub ActionsによるCI/CD自動デプロイパイプラインを整備。",
    overview:
      "情報を探しやすい1ページ完結型の洗練されたモダンUI/UX。企画設計・自動タスク起票ツールによるアジャイル管理・実装・CI/CD公開までワンストップで制作。要件発生からGitHub Issues起票・コミット連携（Closes #XX）・本番デプロイまでを完全自動化し、エンジニアとしての自動化推進力と品質管理力を体現しています。",
    image: portfolioCaptureImg,
    imageCaption: "当ポートフォリオWEBサイト トップ画面キャッチ（ファーストビュー）",
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Vite",
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
      "React 19 と TypeScript による型安全かつ拡張性の高いコンポーネント指向UI設計",
      "Tailwind CSS v4 を用いた最新のユーティリティファーストスタイリングとグラスモーフィズム演出",
      "大画面ワイドモニター（2560px〜）からスマートフォンまで左右均等に配置されるレスポンシブ中央揃え設計",
      "日本語タイポグラフィ最適化: 禁則処理とinline-blockによる助詞落ち・1文字落ち防止",
      "Vite による高速ビルドと GitHub Actions による GitHub Pages への完全自動デプロイ（CI/CD）",
      "ブラウザ完結の高速静的SPA構成により、表示パフォーマンスとセキュアな配信を両立",
    ],
    demo: "https://ikeda-haruka.github.io/",
    github: "https://github.com/ikeda-haruka/ikeda-haruka.github.io",
    issuesUrl: "https://github.com/ikeda-haruka/ikeda-haruka.github.io/issues?q=is%3Aissue",
    taskAutomationBanner: {
      badge: "Task Automation & Issue Bot",
      subtitle: "自作スクリプトによる完全自動タスク起票ワークフロー",
      title: "GitHub Issues 自動タスク追加・チケット駆動開発の仕組み",
      description:
        "Git Credential ManagerとGitHub REST APIを連携させた自動起票ツールを自作導入。開発要件や機能改修依頼を受け取った際に自動でIssueを新規起票し、ラベル分類・進捗管理・コミット連携（Closes #XX）による自動クローズまでを一貫して自動化。実務に即したチケット駆動開発と業務効率化を実践しています。",
      linkText: "実際のGitHub Issues一覧を見る（全12件）",
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
  },
  {
    id: "biwakogym",
    category: "client_web",
    categoryLabel: "参画案件（Webサイト共同開発）",
    badgeType: "client_web",
    title: "トレーニングジム「BIWAKO GYM」公式WEBサイト",
    subtitle: "滋賀県草津市のトレーニング＆コンディショニングジム 公式WEBサイト（2名共同開発）",
    description:
      "滋賀県草津市に構えるトレーニング＆ストレッチ＆コンディショニングジム「BIWAKO GYM（ビワコジム）」の公式WEBサイト。エンジニア2名体制での共同開発案件として参画し、企画設計からフロントエンド実装、レスポンシブ対応、UI/UX最適化、SEO構造化データマークアップまでを担当。",
    overview:
      "「もう、ジムで迷わない。」をキーコンセプトに、鍛錬マシン全29台と3ステップサポートを強みとするジムの魅力を伝えるWebサイト。無料体験（Trial）、料金体系表、店舗アクセス、お問い合わせまでのユーザー動線を徹底追求。視覚的な引き込みを図るファーストビューやスクロール連動アニメーション、スマートフォンからの操作性を考慮したモバイルファースト設計を採用。",
    image: biwakogymCaptureImg,
    imageCaption: "BIWAKO GYM 公式WEBサイト トップ画面キャッチ（ファーストビュー）",
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
      "2名体制での役割分担・コードレビューを通じた効率的な共同開発推進",
      "「BIWAKO GYM」の力強さと清潔感を両立させたダークトーン×アクセントブルーのモダンデザイン",
      "鍛錬マシンフロアの臨場感を伝えるフルスクリーン・ファーストビューとマーキー（流れるテキスト）演出",
      "無料体験（Trial）へのコンバージョンを最大化する導線設計（ヘッダー常設CTA・お問い合わせフォーム連動）",
      "スマートフォン閲覧に最適化したハンバーガーメニュー・開閉ナビゲーションおよびタッチ操作対応",
      "Schema.org（HealthClub / LocalBusiness）準拠のJSON-LD構造化マークアップによる地域SEO（MEO）強化",
      "店舗情報（営業時間・定休日・電話・マップ・料金表）を迷わず確認できるアクセシビリティ設計",
    ],
    demo: "https://biwakogym.com/",
  },
  {
    id: "chemical",
    category: "client_enterprise",
    categoryLabel: "参画案件（業務システム）",
    badgeType: "client_enterprise",
    title: "化学物質管理システム（PoC・バージョンアップ）",
    subtitle: "アプリ開発から外部連携・サーバー移行・運用まで",
    description:
      "レガシーな Struts + JSP アプリケーション（JDK8）を SpringBoot 3 + Vue.js へリプレイス。SpecKit を用いた仕様駆動開発の PoC に加え、外部サービス連携、インフラ・リポジトリ移行、日々の保守運用を担当。",
    overview:
      "化学物質の使用・管理を一元化するシステム。JAMP（chemSHERPA）から CMP への移行に伴う要件定義に参画し、企業の法令遵守と効率的な化学物質管理を支援。業務主管部門からの依頼対応や共通管理の要件書レビューも実施。",
    technologies: [
      "Java 21",
      "SpringBoot",
      "Vue.js",
      "Figma",
      "TypeScript",
      "Tomcat 11",
      "SpecKit",
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
      "Figmaのアプリデザインガイドラインを基に、システム向けにカスタマイズしたUI部品を設計・作成",
      "Figmaの設計に沿ったVue.js部品をプロジェクト内に実装",
      "マイグレーション: Struts/JSP から SpringBoot/Vue.js への段階的リプレイス",
      "SpecKit による仕様駆動開発のPoC実施と検証",
      "JAMP から CMP への法令対応",
      "IaaS クラウドリフト前提の設計",
      "マルチテナント対応の検討",
      "電子証明書が必要なリバースプロキシ経由でのベンダーパッケージ連携、および IMDS（International Material Data System）との外部連携",
      "複数部署共用サーバーからアプリ専用サーバーへの移行、GitLab から GitHub への移行",
      "SMTP サーバーを利用したメール送信",
      "ITSMによるインシデント・変更・問題・ナレッジ管理。エスカレーションされたインシデントへの対応と、同部署内の変更管理アセスメント",
      "月初の手動ログ削除を Windows タスク スケジューラで自動化。アプリのバッチジョブは JP1 で日次・5分間隔などで実行",
      "業務主管部門からのデータ抽出・改修依頼への随時対応、共通管理の要件書レビュー",
    ],
  },
  {
    id: "bank",
    category: "client_enterprise",
    categoryLabel: "参画案件（業務システム）",
    badgeType: "client_enterprise",
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
      "NAS",
    ],
    features: [
      "大量明細の高速取得・処理機能",
      "即日振込実行エンジン",
      "Hulft カスタマーセンター連携",
      "プロキシを含む複雑なネットワーク設定の管理",
      "NAS導入時のセットアップ・動作検証",
      "24/7 監視・対応体制による高可用性",
    ],
  },
];

type FilterType = "all" | "web" | "portfolio" | "client";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedScreenshot, setSelectedScreenshot] =
    useState<Screenshot | null>(null);

  const resolveDocUrl = (url: string) => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    return `${base}${url}`;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedScreenshot(null);
      }
    };
    if (selectedScreenshot) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedScreenshot]);

  // カテゴリ別フィルタリング
  const webProjects = projectsData.filter(
    (p) => p.category === "portfolio" || p.category === "client_web",
  );
  const portfolioProjects = projectsData.filter(
    (p) => p.category === "portfolio",
  );
  const clientWebProjects = projectsData.filter(
    (p) => p.category === "client_web",
  );
  const enterpriseProjects = projectsData.filter(
    (p) => p.category === "client_enterprise",
  );
  const allClientProjects = projectsData.filter(
    (p) => p.category === "client_web" || p.category === "client_enterprise",
  );

  const renderProjectCard = (project: Project) => (
    <div
      key={project.id}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-indigo-400 transition-all duration-300 shadow-xs hover:shadow-xl group"
    >
      {/* 画面キャッチ（WEBサイトのファーストビュー・ブラウザモック） */}
      {project.image && (
        <div className="border-b border-slate-200 bg-slate-900">
          <div className="bg-slate-800/95 px-4 py-2.5 flex items-center justify-between border-b border-slate-700/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono px-3.5 py-0.5 bg-slate-950/70 rounded-full border border-slate-700/60 truncate max-w-[240px] sm:max-w-md">
              {project.demo || "https://oloroso.vercel.app/"}
            </div>
            <div className="text-[11px] text-emerald-400 font-semibold hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>LIVE</span>
            </div>
          </div>
          <div
            className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden cursor-pointer group/img bg-slate-950"
            onClick={() =>
              setSelectedScreenshot({
                src: project.image!,
                title: `${project.title} - 画面キャッチ`,
                caption:
                  project.imageCaption || "トップページ ファーストビュー",
              })
            }
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover/img:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/25 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover/img:opacity-100 bg-white/95 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-xl transition-all duration-200 flex items-center gap-2 transform translate-y-1 group-hover/img:translate-y-0">
                <span>🔍</span>
                <span>画面キャッチを拡大表示</span>
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="p-6 sm:p-9">
        <div className="mb-4">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                project.badgeType === "portfolio"
                  ? "bg-purple-100 text-purple-700 border border-purple-200"
                  : project.badgeType === "client_web"
                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                  : "bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              {project.categoryLabel}
            </span>
            {project.demo && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>公開中Webサイト</span>
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-indigo-600 font-semibold mt-1.5 text-base sm:text-lg">
            {project.subtitle}
          </p>
        </div>

        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>

        <div className="mt-6 p-4 sm:p-5 bg-slate-50/80 rounded-xl border border-slate-200/80">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Overview / 概要
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            {project.overview}
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Key Features / 主な機能・実装
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {project.features.map((feature, featIndex) => (
              <li
                key={featIndex}
                className="text-slate-700 text-sm flex items-start bg-slate-50/50 p-2.5 rounded-lg border border-slate-100"
              >
                <span className="text-indigo-600 font-bold mr-2.5 shrink-0">
                  ✦
                </span>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
            Technologies / 使用技術スタック
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-200 group-hover:border-indigo-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CMS管理画面スクリーンショットギャラリー */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold">
                  CMS
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  管理画面スクリーンショット（Decap CMS）
                </h4>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                ※管理画面（/admin/）はGitHubアカウント認証による管理者限定アクセスのため、実際の更新画面を掲載しています。クリックで拡大できます。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((shot, shotIndex) => (
                <div
                  key={shotIndex}
                  onClick={() => setSelectedScreenshot(shot)}
                  className="group/shot cursor-pointer bg-white border border-slate-200 hover:border-indigo-400 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col"
                >
                  <div className="relative aspect-video bg-slate-100 overflow-hidden">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      className="w-full h-full object-cover object-top group-hover/shot:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-indigo-950/0 group-hover/shot:bg-indigo-950/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/shot:opacity-100 bg-white/95 text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-md transition-opacity">
                        🔍 拡大表示
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-between bg-slate-50/60">
                    <div className="text-xs font-bold text-slate-800 group-hover/shot:text-indigo-600 transition-colors">
                      {shot.title}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      {shot.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 設計・提案資料（企画提案書・要件定義一覧） */}
        {project.documents && project.documents.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs font-bold">
                  DOCS
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  設計・提案ドキュメント（企画提案書・画面要件定義）
                </h4>
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-bold border border-indigo-200/80">
                  🤖 Geminiプロンプト作成 × 目視レビュー成果物
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                リニューアル推進にあたり作成したデザイン企画提案書（PPTX）および全画面レイアウト・コンテンツ要件定義書（XLSX）です。GitHubでオンライン閲覧、または直接ダウンロードしてご確認いただけます。
              </p>
            </div>

            {/* 作成プロセスの説明バナー */}
            {project.documentProcessNote && (
              <div className="mb-4 p-4 bg-gradient-to-r from-purple-50/90 via-indigo-50/70 to-purple-50/90 border border-purple-200 rounded-2xl text-xs leading-relaxed shadow-2xs">
                <div className="flex items-start gap-2.5">
                  <span className="text-base leading-none mt-0.5">💡</span>
                  <div>
                    <span className="font-bold text-purple-950 text-xs sm:text-sm">
                      ドキュメント作成プロセス（Google Workspace × 生成AI活用・目視レビュー）:
                    </span>
                    <p className="mt-1 text-slate-700 leading-relaxed text-xs">
                      {project.documentProcessNote}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.documents.map((doc, docIndex) => (
                <div
                  key={docIndex}
                  className="bg-slate-50/90 border border-slate-200 rounded-2xl p-5 hover:border-purple-300 transition-all flex flex-col justify-between shadow-2xs hover:shadow-sm"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide ${
                          doc.format === "PPTX"
                            ? "bg-orange-100 text-orange-700 border border-orange-200"
                            : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {doc.format} • {doc.size}
                      </span>
                      {doc.statusBadge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                          {doc.statusBadge}
                        </span>
                      )}
                    </div>

                    <h5 className="font-bold text-slate-900 text-sm leading-snug">
                      {doc.title}
                    </h5>

                    {doc.creationMethod && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-100/70 text-purple-900 border border-purple-200/90 text-[11px] font-semibold">
                        <span>✨</span>
                        <span>{doc.creationMethod}</span>
                      </div>
                    )}

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {doc.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-200/80">
                      <div className="text-[11px] font-semibold text-slate-700 mb-1.5">
                        主な記載項目:
                      </div>
                      <ul className="space-y-1">
                        {doc.keyPoints.map((point, pIndex) => (
                          <li
                            key={pIndex}
                            className="text-[11px] text-slate-600 flex items-start"
                          >
                            <span className="text-purple-600 mr-1.5 shrink-0">
                              ✓
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2">
                    <a
                      href={doc.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors shadow-2xs"
                    >
                      <span>{doc.githubButtonText || "GitHubで確認"}</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                    <a
                      href={resolveDocUrl(doc.downloadUrl)}
                      download={doc.filename}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors shadow-2xs"
                    >
                      <span>ダウンロード</span>
                      <span className="text-[10px]">↓</span>
                    </a>
                    {doc.extraAction && (
                      <a
                        href={doc.extraAction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-xs font-bold transition-colors shadow-2xs"
                      >
                        <span>{doc.extraAction.label}</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* GitHub Issues タスク管理ハイライトバナー */}
            {project.issuesUrl && (
              <div className="mt-5 p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl border border-indigo-500/30 text-white shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 text-xl">
                      📋
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Task & Issue Management
                        </span>
                        <span className="text-xs text-indigo-300 font-medium">
                          Excel要件定義からチケット駆動開発へ移行
                        </span>
                      </div>
                      <h5 className="text-base font-bold text-white tracking-tight">
                        GitHub Issues によるアジャイル・チケット駆動のタスク管理
                      </h5>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed max-w-2xl">
                        初期Excel定義書（レイアウト構成・コンテンツ一覧）の記載内容はすべてGitHub Issuesへタスク（チケット）として落とし込み、ラベル（UI, CMS, SEO, Docs等）やマイルストーンで進捗・ステータスを可視化管理しています。仕様策定から実際の開発チケット運用までを一貫して推進できるスキルを実践しています。
                      </p>
                    </div>
                  </div>
                  <a
                    href={project.issuesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer self-start md:self-auto"
                  >
                    <span>GitHub Issues（タスク一覧）</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 制作プロセス・進め方（3ステップ） */}
        {project.creationSteps && project.creationSteps.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-bold">
                  PROCESS
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  制作の進め方（3ステップ）
                </h4>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                要件整理からGitHub Issuesを活用したタスク管理、レスポンシブ実装、CI/CD自動デプロイまでのワークフローです。
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.creationSteps.map((step) => (
                <li
                  key={step.number}
                  className="bg-slate-50/80 border border-slate-200/90 rounded-xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold text-blue-600 bg-blue-100/70 px-2 py-0.5 rounded-md">
                      STEP {step.number}
                    </span>
                    <h5 className="mt-2 text-sm font-bold text-slate-900">
                      {step.title}
                    </h5>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* システム構成・公開フロー */}
        {project.flowSteps && project.flowSteps.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold">
                  CI/CD & ARCHITECTURE
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  システム構成・公開フロー
                </h4>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                TypeScriptによる型チェックからViteによる本番ビルド、GitHub ActionsによるGitHub Pages自動公開までのアーキテクチャです。
              </p>
            </div>

            <ol
              aria-label="ポートフォリオの制作・公開フロー"
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {project.flowSteps.map((step, index) => {
                const toneBg =
                  step.tone === "blue"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : step.tone === "green"
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : step.tone === "purple"
                        ? "border-violet-600 bg-violet-600 text-white"
                        : "border-red-600 bg-red-600 text-white";
                return (
                  <li key={step.title} className="relative">
                    <div
                      className={`h-full rounded-xl border p-4 shadow-2xs ${toneBg}`}
                    >
                      <p className="text-[11px] font-semibold opacity-80">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h5 className="mt-1 text-sm font-bold text-white">
                        {step.title}
                      </h5>
                      <p className="mt-1.5 text-xs leading-relaxed opacity-90">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            {project.flowNote && (
              <p className="mt-4 border-l-2 border-emerald-500 pl-3.5 text-xs leading-relaxed text-slate-600">
                {project.flowNote}
              </p>
            )}
          </div>
        )}

        {/* GitHub Issues 自動タスク追加・チケット駆動開発ハイライトバナー */}
        {project.taskAutomationBanner && (
          <div className="mt-8 p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl border border-indigo-500/40 text-white shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 text-2xl shadow-inner">
                  ⚡
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {project.taskAutomationBanner.badge}
                    </span>
                    <span className="text-xs text-indigo-300 font-medium">
                      {project.taskAutomationBanner.subtitle}
                    </span>
                  </div>
                  <h5 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {project.taskAutomationBanner.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-2xl">
                    {project.taskAutomationBanner.description}
                  </p>
                </div>
              </div>
              <a
                href={project.taskAutomationBanner.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer self-start md:self-auto"
              >
                <span>{project.taskAutomationBanner.linkText}</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        )}

        {(project.demo || project.github || project.issuesUrl) && (
          <div className="mt-8 flex flex-wrap gap-3 pt-4 border-t border-slate-100">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>公開Webサイトを見る</span>
                <span className="ml-1.5">↗</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all text-sm shadow-xs hover:shadow-md"
              >
                <span>GitHub で確認</span>
                <span className="ml-1.5">↗</span>
              </a>
            )}
            {project.issuesUrl && (
              <a
                href={project.issuesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold rounded-xl transition-all text-sm shadow-2xs hover:shadow-xs"
              >
                <span>📋 GitHub Issues（タスク管理）</span>
                <span className="ml-1.5">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
            <span>✨</span>
            <span>WORKS & PORTFOLIO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            <span className="inline-block">制作実績・</span>
            <span className="inline-block">参画プロジェクト</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            企画・UIデザイン・モダンフロントエンド・ヘッドレスCMS導入まで一貫して手掛けたWeb制作物から、
            2名でのWebサイト共同開発、金融・大規模業務システムの参画実績までご紹介します。
          </p>

          {/* カテゴリ切り替えタブ */}
          <div className="mt-8 inline-flex flex-wrap justify-center p-1.5 bg-slate-200/80 rounded-2xl shadow-inner gap-1">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              すべて ({projectsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("web")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeFilter === "web"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🌐 Webサイト制作 ({webProjects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("portfolio")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeFilter === "portfolio"
                  ? "bg-white text-purple-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🎨 自主制作物 ({portfolioProjects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("client")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeFilter === "client"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🏢 参画案件 ({allClientProjects.length})
            </button>
          </div>
        </div>

        {/* コンテンツ表示エリア */}
        <div className="space-y-16">
          {/* 1. Webサイト制作実績グループ（Oloroso & BIWAKO GYM） */}
          {(activeFilter === "all" ||
            activeFilter === "web" ||
            activeFilter === "portfolio") && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b-2 border-indigo-200 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {activeFilter === "portfolio"
                        ? "ポートフォリオ実績用制作物（自主制作）"
                        : "Webサイト制作実績（公開中）"}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    デザイン・モダンフロントエンド・ヘッドレスCMS・SEO構造化データを統合したWebサイト実績です。
                  </p>
                </div>
                <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 self-start sm:self-auto">
                  {activeFilter === "portfolio"
                    ? `${portfolioProjects.length}件`
                    : `${webProjects.length}件`}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {activeFilter === "portfolio"
                  ? portfolioProjects.map(renderProjectCard)
                  : webProjects.map(renderProjectCard)}
              </div>
            </div>
          )}

          {/* 2. 参画案件（Webサイト共同開発 BIWAKO GYM）※clientタブ選択時のみWeb案件として表示 */}
          {activeFilter === "client" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b-2 border-blue-200 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Webサイト共同開発 参画案件
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    実在の店舗・クライアントに向けたWebサイトの共同開発案件です。
                  </p>
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 self-start sm:self-auto">
                  {clientWebProjects.length}件
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {clientWebProjects.map(renderProjectCard)}
              </div>
            </div>
          )}

          {/* 3. 参画案件（業務システム・基盤開発）グループ */}
          {(activeFilter === "all" || activeFilter === "client") && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b-2 border-slate-300 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      参画案件（エンタープライズ・業務システム開発）
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    金融系決済基盤や企業向け化学物質管理システムの要件定義・設計・開発・運用保守の参画実績です。
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 self-start sm:self-auto">
                  {enterpriseProjects.length}件
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {enterpriseProjects.map(renderProjectCard)}
              </div>

              {/* 守秘義務に関する注記 */}
              <div className="mt-8 p-5 bg-amber-50/70 rounded-2xl border border-amber-200/80">
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-lg leading-none mt-0.5">
                    ℹ️
                  </span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-amber-900">
                      参画案件に関する留意事項
                    </h5>
                    <p className="text-xs text-amber-900/90 mt-1 leading-relaxed">
                      参画案件のうち、社内ネットワークアプリケーション等の業務系システムは守秘義務およびセキュリティの観点からソースコードや非公開情報は掲載しておりません（BIWAKO GYM等の公開Webサイトはリンクより実際の画面をご確認いただけます）。システムの技術的アプローチや担当領域の詳細はお気軽にお問い合わせください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* スクリーンショット拡大モーダル */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="font-bold text-slate-800 text-base">
                  {selectedScreenshot.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedScreenshot.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScreenshot(null)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center font-bold text-sm transition-colors ml-4 shrink-0"
                aria-label="閉じる"
              >
                ✕
              </button>
            </div>

            <div className="p-2 sm:p-4 bg-slate-900/5 overflow-auto flex items-center justify-center max-h-[calc(92vh-80px)]">
              <img
                src={selectedScreenshot.src}
                alt={selectedScreenshot.title}
                className="max-h-[76vh] w-auto max-w-full object-contain rounded border border-slate-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
