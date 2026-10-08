import { useEffect, useState } from "react";
import olorosoCaptureImg from "../assets/oloroso-capture.png";
import adminNewsListImg from "../assets/oloroso-admin/admin-news-list.png";
import adminNewsEditImg from "../assets/oloroso-admin/admin-news-edit.png";
import adminBlogListImg from "../assets/oloroso-admin/admin-blog-list.png";
import adminBlogEditImg from "../assets/oloroso-admin/admin-blog-edit.png";
import adminSettingsImg from "../assets/oloroso-admin/admin-settings.png";

type ProjectCategory = "portfolio" | "client";

interface Screenshot {
  src: string;
  title: string;
  caption: string;
}

interface ProjectDocument {
  title: string;
  filename: string;
  format: "PPTX" | "CSV" | "PDF";
  size: string;
  description: string;
  keyPoints: string[];
  downloadUrl: string;
  githubUrl: string;
}

interface Project {
  id: string;
  category: ProjectCategory;
  categoryLabel: string;
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
  screenshots?: Screenshot[];
  documents?: ProjectDocument[];
}

const projectsData: Project[] = [
  {
    id: "oloroso",
    category: "portfolio",
    categoryLabel: "ポートフォリオ実績用制作物",
    title: "フラメンコスタジオ「Estudio Oloroso」公式WEBサイト",
    subtitle: "Next.js + Decap CMS によるモダンWeb制作・ヘッドレスCMS構築",
    description:
      "Web制作・フロントエンド開発実績用の架空フラメンコスタジオ「Estudio Oloroso（エストゥディオ・オロロソ）」のWebサイト。Next.js (App Router) と Decap CMS（旧 Netlify CMS）を採用し、GitベースのヘッドレスCMS構成により、非エンジニアでもMarkdown形式で手軽にお知らせやブログを更新できる運用設計を実現。",
    overview:
      "「洗練された深遠な情熱（Sophisticated Passion）」をコンセプトに、アンダルシア・ヘレスの伝統美とモダンなUI/UXを融合したデザイン。トップページ、スタジオ紹介、クラスカリキュラム、料金表、重要休講アラート付きお知らせ・ブログ、予約・お問い合わせフォームなどを包括的に設計・実装。Next.js Route Handler による GitHub OAuth 認証でサーバーレスに管理画面（/admin/）を連携し、Vercelへデプロイ・公開しています。",
    image: olorosoCaptureImg,
    imageCaption: "Estudio Oloroso 公式WEBサイト トップ画面キャッチ（ファーストビュー）",
    technologies: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Decap CMS",
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
      "Next.js Route Handlerを活用したGitHub OAuth認証による、外部認証サーバー不要のセキュアなCMS管理画面連携（/admin/）",
      "ブランドアイデンティティ（深みのあるワインレッド×シャンパンゴールド）に基づく上品で洗練されたUI/UXデザイン",
      "スマートフォン追従型フローティングCTA（LINE予約・体験予約）、アコーディオンFAQ、Stickyヘッダーなどのモバイル最適化",
      "DanceStudio / LocalBusiness の JSON-LD 構造化データマークアップ、OGP・Twitter Cards 設定による包括的なSEO対策",
      "曜日タブ切り替え式のレッスンスケジュール表、レベル別受講フローチャート、体験レッスン予約・問い合わせフォームの実装",
    ],
    demo: "https://oloroso.vercel.app/",
    github: "https://github.com/ikeda-haruka/oloroso",
    documents: [
      {
        title: "「Estudio Oloroso」WEBサイト デザインプレビュー＆リニューアル構成案",
        filename: "「Estudio Oloroso」WEBサイト デザインプレビュー＆リニューアル構成案.pptx",
        format: "PPTX",
        size: "6.6 MB",
        description:
          "既存の受講生・ファンに向けたデジタル体験の向上を目的とした提案書（全12スライド）。情報構造の課題分析からデザインコンセプト、サイトマップ、UI改善案、本公開に向けた推進計画までを網羅。",
        keyPoints: [
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
        filename: "「Estudio Oloroso」WEBサイト レイアウト構成・コンテンツ一覧 - WEBサイト構成一覧.csv",
        format: "CSV",
        size: "17 KB",
        description:
          "サイト全体（P01〜P06および共通コンポーネント）の画面設計・要件定義一覧表。各ブロックの配置エリア、掲載要素、デザイン仕様、システム要件、ターゲット、優先度を緻密に定義。",
        keyPoints: [
          "全ページ（トップ、スタジオ紹介、クラス、料金、ブログ、予約等）の画面ID別コンテンツ定義",
          "システム要件定義（Next.js SSG、Decap CMS Markdown連携、JSON-LD構造化データ等）",
          "ユーザー行動動線（CVR改善）とコンポーネント要件（Stickyヘッダー、スマホ追従CTA等）の紐付け",
        ],
        downloadUrl:
          "/docs/oloroso/Estudio_Oloroso_Layout_and_Content_List.csv",
        githubUrl:
          "https://github.com/ikeda-haruka/oloroso/blob/main/docs/%E3%80%8CEstudio%20Oloroso%E3%80%8DWEB%E3%82%B5%E3%82%A4%E3%83%88%20%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88%E6%A7%8B%E6%88%90%E3%83%BB%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E4%B8%80%E8%A6%A7%20-%20WEB%E3%82%B5%E3%82%A4%E3%83%88%E6%A7%8B%E6%88%90%E4%B8%80%E8%A6%A7.csv",
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
    id: "chemical",
    category: "client",
    categoryLabel: "参画案件（業務システム）",
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
    category: "client",
    categoryLabel: "参画案件（業務システム）",
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

type FilterType = "all" | "portfolio" | "client";

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

  const portfolioProjects = projectsData.filter(
    (p) => p.category === "portfolio",
  );
  const clientProjects = projectsData.filter((p) => p.category === "client");

  const renderProjectCard = (project: Project) => (
    <div
      key={project.id}
      className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500 transition-colors shadow-sm"
    >
      {/* 画面キャッチ（WEBサイトのファーストビュー） */}
      {project.image && (
        <div className="border-b border-slate-200 bg-slate-900">
          <div className="bg-slate-800/90 px-4 py-2 flex items-center justify-between border-b border-slate-700/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono px-3 py-0.5 bg-slate-900/80 rounded border border-slate-700/60 truncate max-w-[240px] sm:max-w-md">
              {project.demo || "https://oloroso.vercel.app/"}
            </div>
            <div className="text-[11px] text-emerald-400 font-medium hidden sm:block">
              ● 公開中
            </div>
          </div>
          <div
            className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden cursor-pointer group bg-slate-950"
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
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-slate-900 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg transition-opacity flex items-center gap-1.5">
                🔍 画面キャッチを拡大表示
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="p-6 sm:p-8">
        <div className="mb-2">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                project.category === "portfolio"
                  ? "bg-purple-100 text-purple-700 border border-purple-200"
                  : "bg-blue-100 text-blue-700 border border-blue-200"
              }`}
            >
              {project.categoryLabel}
            </span>
            {project.demo && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Webサイト公開中
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
          <p className="text-blue-600 font-semibold mt-1">{project.subtitle}</p>
        </div>

        <p className="text-slate-700 mt-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6 p-4 bg-slate-50 rounded border border-slate-200">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">
            プロジェクト概要
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            {project.overview}
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 mb-3">主な機能</h4>
          <ul className="space-y-2">
            {project.features.map((feature, featIndex) => (
              <li
                key={featIndex}
                className="text-slate-600 text-sm flex items-start"
              >
                <span className="text-blue-600 mr-2 shrink-0">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">
            使用技術
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
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
              <h4 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <span>📷</span>
                <span>CMS管理画面スクリーンショット（Decap CMS）</span>
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                ※管理画面（/admin/）はGitHubアカウント認証による管理者専用アクセスのため、実際の更新画面を掲載しています。クリックで拡大表示できます。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((shot, shotIndex) => (
                <div
                  key={shotIndex}
                  onClick={() => setSelectedScreenshot(shot)}
                  className="group cursor-pointer bg-slate-50 border border-slate-200 hover:border-blue-500 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col"
                >
                  <div className="relative aspect-video bg-slate-200 overflow-hidden">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded shadow-sm transition-opacity">
                        🔍 クリックで拡大
                      </span>
                    </div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
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
              <h4 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <span>📄</span>
                <span>設計・提案ドキュメント（企画提案書・画面要件定義）</span>
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                リニューアル推進にあたり作成したデザイン企画提案書および全画面レイアウト・コンテンツ要件定義書です。GitHubでオンライン閲覧、または直接ダウンロードしてご確認いただけます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.documents.map((doc, docIndex) => (
                <div
                  key={docIndex}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-purple-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded tracking-wide ${
                          doc.format === "PPTX"
                            ? "bg-orange-100 text-orange-700 border border-orange-200"
                            : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {doc.format} • {doc.size}
                      </span>
                    </div>

                    <h5 className="font-bold text-slate-900 text-sm leading-snug">
                      {doc.title}
                    </h5>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded text-xs font-semibold transition-colors shadow-xs"
                    >
                      <span>GitHubで確認</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                    <a
                      href={resolveDocUrl(doc.downloadUrl)}
                      download={doc.filename}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded text-xs font-semibold transition-colors shadow-xs"
                    >
                      <span>ダウンロード</span>
                      <span className="text-[10px]">↓</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(project.demo || project.github) && (
          <div className="mt-6 flex flex-wrap gap-3 pt-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors text-sm shadow-sm"
              >
                Webサイトを見る →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded transition-colors text-sm shadow-sm"
              >
                GitHub で見る →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            制作物・参画実績
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            個人で設計・実装・公開したWeb制作物と、業務で担当した大規模基盤・システム開発の参画実績をご紹介します。
          </p>

          {/* カテゴリ切り替えタブ */}
          <div className="mt-8 inline-flex p-1 bg-slate-200/80 rounded-xl shadow-inner">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeFilter === "all"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              すべて ({projectsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("portfolio")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeFilter === "portfolio"
                  ? "bg-white text-purple-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🎨 ポートフォリオ制作物 ({portfolioProjects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("client")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeFilter === "client"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🏢 参画案件・業務開発 ({clientProjects.length})
            </button>
          </div>
        </div>

        {/* コンテンツ表示エリア */}
        <div className="space-y-16">
          {/* ポートフォリオ実績用制作物グループ */}
          {(activeFilter === "all" || activeFilter === "portfolio") && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b-2 border-purple-200 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      ポートフォリオ実績用制作物（公開作品）
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    企画・デザイン・モダンフロントエンド開発・ヘッドレスCMS導入まで一貫して制作した公開作品です。
                  </p>
                </div>
                <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 self-start sm:self-auto">
                  {portfolioProjects.length}件
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {portfolioProjects.map(renderProjectCard)}
              </div>
            </div>
          )}

          {/* 参画案件グループ */}
          {(activeFilter === "all" || activeFilter === "client") && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b-2 border-blue-200 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      参画案件（業務システム・基盤開発）
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    金融系決済基盤や企業向け化学物質管理システムの要件定義・設計・開発・運用保守の参画実績です。
                  </p>
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 self-start sm:self-auto">
                  {clientProjects.length}件
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {clientProjects.map(renderProjectCard)}
              </div>

              {/* 守秘義務に関する注記 */}
              <div className="mt-8 p-5 bg-amber-50/80 rounded-xl border border-amber-200">
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold text-base mt-0.5">
                    ℹ️
                  </span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-amber-900">
                      参画案件に関する留意事項
                    </h5>
                    <p className="text-xs text-amber-900/90 mt-1 leading-relaxed">
                      参画案件（社内ネットワークアプリケーション等）は守秘義務およびセキュリティの観点から、ソースコードや非公開情報は掲載しておりません。システムの技術的アプローチや担当領域について記載しています。より詳細な経験内容についてはお問い合わせください。
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
