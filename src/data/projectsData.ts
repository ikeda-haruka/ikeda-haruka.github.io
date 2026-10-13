import type { Project } from "../types/project";
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
import flyerFlamencoImg from "../assets/flyer-flamenco.jpg";
import graphicFlyerWinterImg from "../assets/works_graphics/graphic_flyer_winter.jpg";
import graphicSnsEarlysummerImg from "../assets/works_graphics/graphic_sns_earlysummer.webp";
import graphicSnsAutumnImg from "../assets/works_graphics/graphic_sns_autumn.webp";
import graphicSnsSpringImg from "../assets/works_graphics/graphic_sns_spring.webp";
import graphicSnsSummerImg from "../assets/works_graphics/graphic_sns_summer.jpg";
import graphicSnsSlideDetailImg from "../assets/works_graphics/graphic_sns_slide_detail.webp";
import graphicCajonWorkshopImg from "../assets/works_graphics/graphic_cajon_workshop.jpg";

export const projectsData: Project[] = [
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
      "GitHub Issues全20件によるチケット駆動改善: プロジェクト初期化からデザインフルリニューアル、画像差し替え、メンズサロン・EC新設、会員ランク制度、永久無料バックエンド仕様書策定まで、全20件の課題をチケット駆動で完遂",
      "完全永久無料バックエンド設計（Issue #20, #15, #16）: RenderマネージドPostgreSQLの30日失効制約を解消するため、組み込みH2（PostgreSQL互換ファイル永続化モード）＋Render無料枠によるJava 21 / Spring Boot 3.3 REST APIアーキテクチャを策定。クレカ不要・無期限・完全無料で安定稼働",
      "二重予約防止・排他制御インデックス設計（Issue #14）: データベース論理設計（ER図・DDL）において、空き枠計算・二重予約判定用の複合インデックス（idx_reservations_slot）や指名ネイリスト重複防止インデックス（idx_reservations_staff）を実装",
      "20〜30代向け「大人可愛い」洗練デザインリニューアル（Issue #11, #13）: ユーザーフィードバックに基づき、甘すぎる配色から白・ラベンダーモーブ・シャンパンゴールドの上品な世界観へフル刷新。すりガラス（グラスモーフィズム）や水光エフェクトを融合",
      "サロン実務に即した爪先・ネイルマクロ写真への完全刷新（Issue #12）: パラジェル専門店の価値を伝えるため、人物の顔写真から自爪を削らないパラジェル施術・爪先マクロ写真・50色水光マグネット写真へ徹底刷新",
      "メンズ専用サロン「Salon de Fraise HOMME」＆公式ECショップ（Issue #17）: 「男なのにネイル？」の固定概念を覆すダークトーンのメンズ専用ページ（/mens）と、自爪風完全マットネイルチップや速乾オイルを扱うメンズEC（/mens/shop）を新設。男性ネイリスト5名体制",
      "会員ランク制度・誕生月50%OFFクーポン・ポイント還元（Issue #18）: Regular/Silver/Gold/Platinumの4段階会員ランク、1%〜5%のポイント還元率計算、誕生月50%OFFクーポン、会員マイページ（/mypage）での進捗バー・保有クーポン一覧UIを実装",
      "ネイリスト全員のプロ顔写真＆画像フォールバック機構（Issue #19）: 男女全8名のプロポートレート設定に加え、ProductImageコンポーネントによる未生成・404画像の公式ブランドロゴ（レディース／メンズ別）自動代替表示を一元化",
      "水光マグネット体験シミュレーター＆スタイル診断（Issue #4, #9）: マウス追従で微粒子マグネットパウダーの光沢が変わるシミュレーターや、3問で自分に合うスタイルがわかるインタラクティブ診断、空席シミュレーターを実装",
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
    id: "protein",
    category: "portfolio",
    categoryLabel: "ポートフォリオ実績用制作物",
    badgeType: "portfolio",
    title: "女性専用プロテイン＆インナーケア「BERRY MILK」公式ブランドサイト",
    subtitle: "既存Web構成のリバースエンジニアリング・女性向けLPデザインシステム＆包括的サイト構築（一覧→個別詳細遷移・細部作り込み・LINE連携・会員・動的演出）",
    description:
      "女性専用あまおう苺ミルクプロテインおよび内臓脂肪ケアティーを展開する架空のD2Cインナービューティーブランド「BERRY MILK」の公式ブランドWebサイト。既存のWeb構成（SPプロテイン LP: lovely-muffin-d4cf61.netlify.app）をリファレンスとし、セクション構造・訴求シナリオを徹底分析（リバースエンジニアリング）。その骨格をベースに、ターゲット女性層（美容・腸活・引き締め関心層）に最適化した「イチゴミルク配色」の独自デザインシステムを構築。ライフスタイル別のカード型商品一覧（LINEUP）から各商品の個別詳細ページ（product-milk.html等）へシームレスに遷移し、主要栄養成分4連カード・★4.8レビュー・原材料表示・返金保証付き定期オファーボックスまで細部を徹底的に作り込んだリッチなEC体験を実現。ハンバーガー展開時のカード型ドロワーUI、上下2段で交差して流れる『デュアルトラック・プルーフストリーム』マーキーアニメーション、ユーザーが1日1回投票でき即時グラフに反映される『新作フレーバー総選挙』アンケート投票機能など、動きと遊び心に満ちたモダンなWebデザインを実装。さらに公式LINEコンシェルジュ連携（相談・スキップ窓口）、定期購入会員用ログインページ（login.html）、会社概要（company.html）、新卒・中途採用情報、開発秘話ストーリー、品質基準ページまで網羅した総合的な情報アーキテクチャ（IA）を設計・開発しました。",
    overview:
      "「整える、満たす、愛せるわたしへ。」をブランドメッセージに掲げ、ファーストビューからお悩み提起、選ばれる理由、専門家監修、カード型商品一覧（LINEUP）から各商品の個別詳細ページ（product-milk.html等）へのシームレスな遷移動線、他社比較表、愛用者の声、フレーバー人気投票（インタラクティブアンケート機能）、よくある質問（FAQアコーディオン）、初回特別オファーまでの高いコンバージョン率を生み出すストーリー設計。商品詳細ページでは栄養成分4連カードや★4.8レビュー、原材料表、レシピ、オファーボックスなど細部まで徹底して作り込み、カード型モバイルドロワーや動くマーキー演出など遊び心満載のギミックを実装。公式LINE連携や会員マイページ、コーポレート・採用情報まで実動する包括的なD2Cブランドサイトとして構築し、課題や改修タスクはGitHub Issuesでチケット駆動管理しています。",
    purpose:
      "D2Cインナービューティーブランドの公式LPとして、既存Web構成（SPプロテイン LP）をリバースエンジニアリングして分析。20〜30代女性ターゲットに最適化したイチゴミルク配色のデザインシステムを策定し、カード型商品一覧から詳細個別ページへの回遊、アンケート投票や動的マーキー等の遊び心、公式LINE・会員マイページ連携によるLTV最大化を目指す。",
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
      "カード型商品一覧（LINEUP）から商品詳細ページへのシームレスな遷移動線: ライフスタイルや利用シーン（毎日の朝食・リフレッシュ・置き換えダイエット・睡眠前）に合わせて選べる4種の商品ラインナップをカード型UIで整理。「詳細を見る →」ボタンから各商品の個別詳細ページ（product-milk.html等）へとスムーズに誘導し、離脱を防ぐ回遊性の高いEC導線を構築",
      "細部まで徹底的に作り込んだ個別商品詳細ページ（product-milk.html等）: 福岡県産あまおう苺果汁バッジや★4.8（1,280件）のレビュー表示、主要栄養成分4連カード（タンパク質20g/コラーゲン1,500mg/植物性乳酸菌1,000億個/98kcal）、3つのこだわり、詳細な原材料・栄養成分表、美味しい飲み方レシピ（3STEP）、30日間全額返金保証・定期縛りなしのコンバージョンボックスまで、実在のD2Cブランドと遜色ない密度で細部まで実装",
      "ユーザー参加型の遊び心ギミック（新作フレーバー総選挙）: 4つのフレーバー候補から選んで投票すると、閲覧日時点の最新集計グラフへリアルタイム反映されるインタラクティブなアンケート機能を実装。訪問者の滞在時間を延ばしファン化を促すエンタメ体験を創出",
      "動くWEBデザイン演出（デュアルトラック・プルーフストリーム）: ファーストビュー直下で実績数値と製品スペックの2系統が上下で逆方向に滑らかに流れる無限ループCSSマーキーアニメーションを構築。視覚的なリズム感と圧倒的な社会的証明を両立",
      "洗練されたモバイルドロワーメニュー設計: ハンバーガー展開時に全画面で開くドロワー内に、WEB限定特典オファーや会員ログイン導線を最上部に配置。各メニューを丸みのあるカード型UI・可愛い絵文字・英語サブ表記で構造化し、迷わせない直感的なモバイル体験を提供",
      "GitHub Issues全45件によるチケット駆動改善: 要件定義からモバイル実機バグ修正、CVR向上、ビジュアル整合性精査までを課題チケット化し、全45回の高速イテレーションを経て高品質に完成",
      "実機検証に基づくモバイルUXの極限最適化（Issue #16, #24, #30, #33）: モバイルハンバーガーメニュー開閉不具合、Hero要素重複、LINEUPカード画像見切れなどを実機検証で発見し即座にチケット解消",
      "プライバシー・個人情報保護に配慮したレビューUI（Issue #40）: 愛用者の声セクションにおいて実名を非表示とし、イニシャルアイコンおよび年代・職業（例: 28歳・会社員）へ統一して実在ブランド基準のコンプライアンスを徹底",
      "ブランド表記・画像アセットの徹底整合（Issue #26, #27, #44, #45）: 表記ゆれ（『ストロベリーミルク』→『ベリーミルク プロテイン』）の完全統一、ブランド専用パッケージ画像の再生成、開発風景写真（story.html）から実製品と異なるパウチを除外する等、細部のディテールまで徹底精査",
      "高度なインタラクティブUIと社会的証明（Issue #8, #35, #36, #41）: 閲覧日リアルタイム集計付きフレーバー投票ウィジェット、実績が2列交差する『デュアルトラック・プルーフストリーム』、TV・雑誌掲載＆芸能人愛用カードの追加による権威性向上",
      "公式LINEコンシェルジュ連携: 専任女性コンシェルジュ・管理栄養士への24時間相談窓口および次回お届け周期のスキップ・変更をLINEから行えるCRM動線を設計・実装",
      "会員用ログインページ・定期マイページ設計（login.html）: 会員ログイン認証UI、パスワード再設定、定期購入ステータス管理への導線を完備",
      "コーポレート・採用情報ページの展開（company.html / recruit）: 会社概要、SANDYグループ系列企業情報、新卒採用・中途採用の各募集ページを完備し、ブランドとしての社会的信用を確立",
      "ブランドストーリー＆品質基準サブページ: 女性開発チームの秘話（story.html）や国内GMP認定工場の安心安全基準（quality.html）を設け、購入前の不安を払拭する信頼設計",
      "リファレンス構成分析（リバースエンジニアリング）: 既存LPの優れた訴求動線を構造化分析し、女性向けインナーケアブランドに最適化した情報アーキテクチャへ再構築",
      "独自デザインシステム構築: いちごミルクを象徴するパステルピンク（#FF7597）、ベリーレッド、ミルクホワイトの洗練された配色パレットとフォントタイポグラフィを策定",
      "社会的証明・CVR最適化: 管理栄養士監修、他社製品との詳細比較マトリクス表、安心の30日間返金保証・縛りなし明記",
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
      badge: "構成リファレンス元",
      title: "既存Web構成（SPプロテイン LP）のリバースエンジニアリングと再構築",
      description:
        "本制作では、上記参考サイト（lovely-muffin-d4cf61.netlify.app）の優れたWeb構成・訴求動線をベースに、女性専用インナーケア向けに「イチゴミルク配色」の独自デザインシステムと画面構造を設計・再構築しました。既存資産を分析して新たなターゲット層向けに昇華させるデザイン＆エンジニアリング力を体現しています。",
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
    id: "flamenco-flyer",
    category: "graphic",
    categoryLabel: "グラフィックデザイン / DTP・SNS制作",
    badgeType: "graphic",
    title: "フラメンコ＆音楽イベント公式フライヤー・SNSプロモーションデザイン",
    subtitle: "Photoshop & Illustrator によるA4印刷フライヤー・SNS告知バナー・カルーセル画像制作",
    description:
      "フラメンコや打楽器（カホン）ワークショップなどの音楽・舞台イベントに向けた公式フライヤーおよびSNSプロモーション用デザイン群。Adobe PhotoshopおよびIllustratorを使用し、A4印刷用フライヤー（ダークトーン／ライトトーンの2パターンデザイン提案）からInstagram/Facebook向けの告知バナー、詳細解説カルーセルスライドまで幅広く制作。人物写真の切り抜き・レタッチ・光彩エフェクト加工から、タイポグラフィ、情報階層化、受講クラス・料金・アクセス案内のレイアウトまでを一貫して担当。",
    overview:
      "四季（春・初夏・夏・初秋・冬）それぞれの開催時期や気候・テーマ、打楽器ワークショップのリズム感に合わせて、カラーパレットや装飾モチーフ（桜・新緑・紫陽花・紅葉・ホリデーオーナメント、幾何学リズムパターンなど）を綿密に設計。印刷用A4フライヤー（高解像度CMYK）とSNS用スクエアバナー（RGB）双方の媒体特性を最適化し、紙面・タイムライン双方で一目で目を引き、参加申込みへと繋がる導線（QRコード配置等）を構築しました。",
    purpose:
      "四季折々の舞台公演や打楽器ワークショップの集客・認知拡大。印刷用A4フライヤーとSNSタイムライン（Instagram/Facebook）それぞれの媒体特性に特化したビジュアルを制作し、高精度の人物レタッチと季節感ある世界観で受講申込・チケット購買へ直結させる。",
    role: [
      "企画・コンセプト策定",
      "グラフィックデザイン (DTP)",
      "写真レタッチ・光彩エフェクト合成",
      "タイポグラフィ・文字組み",
      "SNSバナー・スライド展開",
      "印刷入稿データ作成 (CMYK)",
    ],
    image: flyerFlamencoImg,
    imageCaption: "A4完成フライヤー 2パターン提案（左: ダークトーン / 右: ライトトーン）",
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "DTP / 印刷入稿データ作成",
      "グラフィックデザイン",
      "SNSバナー・カルーセル制作",
      "人物写真切り抜き・レタッチ",
      "色調補正・エフェクト合成",
      "タイポグラフィ",
      "情報アーキテクチャ（IA）",
      "季節別コンセプトカラー設計",
      "QRコード導線設計",
    ],
    features: [
      "四季（春・初夏・夏・初秋・冬）の開催時期やイベント特性に応じた色彩心理・モチーフの巧みな使い分けと世界観構築",
      "人物写真の高精度な切り抜き・輪郭補正、衣装のゴールドフリンジや楽器テクスチャを活かした色調補正・光彩エフェクト加工（Photoshop）",
      "クラス詳細（テクニカ・振付・コムニカシオン、初心者向け打楽器講座）、料金表、キャンセルポリシー、アクセス等の複雑な情報を一目で理解できる階層レイアウト（Illustrator）",
      "Instagram/Facebookのタイムラインで視線を引きつけるスクエア比率（1:1）のバナーおよびカルーセル解説スライドの展開",
      "印刷入稿用（高解像度CMYK/塗り足し・トンボ設定）およびWeb・SNS配信（RGB）のマルチフォーマット制作",
      "メールおよびSNS申込みへ直結するQRコード配置による高いコンバージョン導線設計",
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
    purpose:
      "大手総合化学メーカーにおける化学物質管理業務の一元化および法改正（JAMPからCMPへの移行）への適応。レガシーなStruts/JSPシステムからモダンなSpringBoot/Vue.jsへの段階的マイグレーションを推進し、保守性と開発生産性を抜本的に向上させる。",
    role: [
      "要件定義・基本設計",
      "Figma UI部品設計",
      "フロントエンド実装 (Vue.js)",
      "バックエンド開発 (SpringBoot)",
      "外部システム連携 (IMDS)",
      "保守運用・タスク自動化",
    ],
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
      "大量明細の高速取得・処理機能",
      "即日振込実行エンジン",
      "Hulft カスタマーセンター連携",
      "プロキシを含む複雑なネットワーク設定の管理",
      "NAS導入時のセットアップ・動作検証",
      "24/7 監視・対応体制による高可用性",
    ],
  },
];
