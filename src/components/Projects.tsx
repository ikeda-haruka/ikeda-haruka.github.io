import { useEffect, useState } from "react";
import adminNewsListImg from "../assets/oloroso-admin/admin-news-list.png";
import adminNewsEditImg from "../assets/oloroso-admin/admin-news-edit.png";
import adminBlogListImg from "../assets/oloroso-admin/admin-blog-list.png";
import adminBlogEditImg from "../assets/oloroso-admin/admin-blog-edit.png";
import adminSettingsImg from "../assets/oloroso-admin/admin-settings.png";

interface Screenshot {
  src: string;
  title: string;
  caption: string;
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  screenshots?: Screenshot[];
}

const projectsData: Project[] = [
  {
    title: "フラメンコスタジオ「Estudio Oloroso」公式WEBサイト",
    subtitle: "Next.js + Decap CMS によるモダンWeb制作・ヘッドレスCMS構築",
    description:
      "Web制作・フロントエンド開発実績用の架空フラメンコスタジオ「Estudio Oloroso（エストゥディオ・オロロソ）」のWebサイト。Next.js (App Router) と Decap CMS（旧 Netlify CMS）を採用し、GitベースのヘッドレスCMS構成により、非エンジニアでもMarkdown形式で手軽にお知らせやブログを更新できる運用設計を実現。",
    overview:
      "「洗練された深遠な情熱（Sophisticated Passion）」をコンセプトに、アンダルシア・ヘレスの伝統美とモダンなUI/UXを融合したデザイン。トップページ、スタジオ紹介、クラスカリキュラム、料金表、重要休講アラート付きお知らせ・ブログ、予約・お問い合わせフォームなどを包括的に設計・実装。Next.js Route Handler による GitHub OAuth 認証でサーバーレスに管理画面（/admin/）を連携し、Vercelへデプロイ・公開しています。",
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

export default function Projects() {
  const [selectedScreenshot, setSelectedScreenshot] =
    useState<Screenshot | null>(null);

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

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            制作物・プロジェクト
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500 transition-colors shadow-sm"
            >
              <div className="p-6 sm:p-8">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-slate-700 mt-4">{project.description}</p>

                <div className="mt-6 p-4 bg-slate-50 rounded border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">
                    プロジェクト概要
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">
                    主な機能
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featIndex) => (
                      <li
                        key={featIndex}
                        className="text-slate-600 text-sm flex items-start"
                      >
                        <span className="text-blue-600 mr-2">→</span>
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

                {(project.demo || project.github) && (
                  <div className="mt-6 flex flex-wrap gap-3">
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
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-slate-700 text-sm">
            <span className="font-semibold text-blue-700">注：</span>{" "}
            業務系システム（社内ネットワークアプリケーション）は守秘義務のためコードを非公開としておりますが、個人制作・ポートフォリオ作品（Estudio Oloroso等）はGitHubリポジトリおよび公開デモサイトをご覧いただけます。各プロジェクトの詳細やコード例についてはお気軽にお問い合わせください。
          </p>
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
