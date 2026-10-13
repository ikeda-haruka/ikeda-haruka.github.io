import { useEffect, useState } from "react";
import type { Screenshot } from "../types/project";
import { projectsData } from "../data/projectsData";

interface ProjectDetailPageProps {
  projectId: string;
  onBackToList: () => void;
  onSelectProject: (id: string) => void;
}

export default function ProjectDetailPage({
  projectId,
  onBackToList,
  onSelectProject,
}: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.id === projectId);
  const [selectedScreenshot, setSelectedScreenshot] =
    useState<Screenshot | null>(null);

  // ページ遷移時に最上部へスクロール
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [projectId]);

  // モーダル表示時のキーボード(Esc)＆スクロール制御
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

  const resolveDocUrl = (url: string) => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    return `${base}${url}`;
  };

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-50 py-20 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-lg">
          <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-2xl font-bold">
            !
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            指定された作品が見つかりませんでした
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            URLが変更されたか、該当する作品データが存在しない可能性があります。
          </p>
          <button
            onClick={onBackToList}
            className="w-full py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md cursor-pointer"
          >
            ← 制作実績一覧へ戻る
          </button>
        </div>
      </main>
    );
  }

  // 前後のプロジェクトを特定（回遊導線）
  const currentIndex = projectsData.findIndex((p) => p.id === projectId);
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : null;

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 pb-20 selection:bg-indigo-500 selection:text-white">
      {/* ページ上部ナビゲーションバー（パンくずリスト ＆ 戻るボタン） */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <nav aria-label="パンくずリスト" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap py-1">
            <button
              onClick={onBackToList}
              className="hover:text-indigo-600 transition-colors font-medium flex items-center gap-1 cursor-pointer"
            >
              <span>ホーム</span>
            </button>
            <span className="text-slate-300">/</span>
            <button
              onClick={onBackToList}
              className="hover:text-indigo-600 transition-colors font-medium cursor-pointer"
            >
              制作実績一覧
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-md">
              {project.title}
            </span>
          </nav>

          <button
            onClick={onBackToList}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 transition-colors border border-slate-200 hover:border-indigo-200 cursor-pointer shadow-2xs"
          >
            <span>←</span>
            <span>作品一覧へ戻る</span>
          </button>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* 作品ヘッダー */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                project.badgeType === "graphic"
                  ? "bg-amber-100 text-amber-800 border border-amber-200"
                  : project.badgeType === "portfolio"
                  ? "bg-purple-100 text-purple-700 border border-purple-200"
                  : project.badgeType === "client_web"
                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                  : "bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              {project.categoryLabel}
            </span>
            {project.demo && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>公開中WEBサイト</span>
              </span>
            )}
            {project.issuesUrl && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                チケット駆動開発対応
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {project.title}
          </h1>
          <p className="text-indigo-600 font-semibold mt-2.5 text-base sm:text-xl">
            {project.subtitle}
          </p>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base mt-6">
            {project.description}
          </p>

          {/* クイックリンクボタン群 */}
          <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-slate-100">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>公開Webサイトを開く</span>
                <span>↗</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all text-sm shadow-xs hover:shadow-md"
              >
                <span>GitHub リポジトリ</span>
                <span>↗</span>
              </a>
            )}
            {project.issuesUrl && (
              <a
                href={project.issuesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold rounded-xl transition-all text-sm shadow-2xs hover:shadow-xs"
              >
                <span>📋 GitHub Issues（課題管理）</span>
                <span>↗</span>
              </a>
            )}
            {project.referenceSite && (
              <a
                href={project.referenceSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold rounded-xl transition-all text-sm shadow-2xs hover:shadow-xs"
              >
                <span>🔍 参考サイト（構成ベース元）</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </section>

        {/* 制作目的 ＆ 担当範囲 ＆ 使用技術 スタックカード（2列グリッド） */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* 左列: 制作目的・背景・課題（Why） ＆ 概要 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {project.purpose && (
              <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-md border border-indigo-700/40">
                <div className="flex items-center gap-2.5 mb-3 text-indigo-300">
                  <span className="text-xl">🎯</span>
                  <h2 className="text-xs font-bold uppercase tracking-widest">
                    Purpose & Background / 制作目的・背景・課題
                  </h2>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white leading-snug">
                  プロジェクトの目的と狙い
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {project.purpose}
                </p>
              </div>
            )}

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex-1">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span>📑</span>
                <span>Overview / 概要</span>
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>

          {/* 右列: 担当範囲（Role） ＆ 使用技術（Technologies） */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {project.role && project.role.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
                <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span>👤</span>
                  <span>Scope of Work / 担当範囲・役割</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.role.map((roleItem, rIdx) => (
                    <span
                      key={rIdx}
                      className="px-3.5 py-1.5 bg-indigo-50 text-indigo-800 rounded-xl text-xs sm:text-sm font-bold border border-indigo-200/80 shadow-2xs flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span>{roleItem}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex-1">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span>⚡</span>
                <span>Technologies / 使用技術・ツール</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-200 hover:border-indigo-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 画面イメージ・マルチデバイス実機プレビュー（Graphic または Web） */}
        <section className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm mb-8">
          {/* A. グラフィック案件展示 */}
          {project.category === "graphic" && project.image && (
            <div className="bg-slate-950 overflow-hidden">
              <div className="bg-slate-900/95 px-5 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-700/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>DTP・グラフィックデザイン高解像度展示</span>
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    Adobe Photoshop & Illustrator 制作実績
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  クリックで高解像度拡大表示
                </span>
              </div>

              <div
                className="p-4 sm:p-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 flex flex-col items-center justify-center cursor-pointer group/flyer"
                onClick={() =>
                  setSelectedScreenshot({
                    src: project.image!,
                    title: `${project.title} - 完成フライヤー`,
                    caption:
                      project.imageCaption ||
                      "A4フライヤー 2パターン提案（Photoshop / Illustrator制作）",
                  })
                }
              >
                <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 group-hover/flyer:border-amber-400/80 transition-all duration-300 bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain group-hover/flyer:scale-[1.01] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover/flyer:bg-slate-950/25 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/flyer:opacity-100 bg-white/95 text-slate-900 text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-2xl transition-all duration-200 flex items-center gap-1.5">
                      <span>🔍</span>
                      <span>クリックして高解像度で拡大表示</span>
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-3 text-center flex items-center gap-1.5">
                  <span>💡</span>
                  <span>{project.imageCaption || "クリックで拡大表示できます"}</span>
                </p>
              </div>

              {/* グラフィックギャラリー */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="bg-slate-900/90 p-4 sm:p-6 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold text-xs sm:text-sm flex items-center gap-1.5">
                        <span>✨</span>
                        <span>制作物デザインギャラリー（全{project.screenshots.length}作品）</span>
                      </span>
                      <span className="text-[11px] text-slate-400 hidden sm:inline">
                        クリックで高解像度拡大プレビュー
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Photoshop & Illustrator
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {project.screenshots.map((item, sIndex) => (
                      <div
                        key={sIndex}
                        onClick={() => setSelectedScreenshot(item)}
                        className="group/thumb bg-slate-950/80 rounded-xl overflow-hidden border border-slate-800 hover:border-amber-400/80 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-lg"
                      >
                        <div className="relative aspect-square overflow-hidden bg-slate-900 flex items-center justify-center p-2">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="max-h-full max-w-full object-contain group-hover/thumb:scale-105 transition-transform duration-300 rounded"
                          />
                          <div className="absolute inset-0 bg-slate-950/0 group-hover/thumb:bg-slate-950/30 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover/thumb:opacity-100 bg-white/95 text-slate-900 text-[10px] font-bold px-2 py-1 rounded-full shadow transition-all">
                              拡大 🔍
                            </span>
                          </div>
                        </div>
                        <div className="p-2.5 bg-slate-900/90 border-t border-slate-800/80">
                          <h4 className="text-[11px] font-bold text-slate-200 truncate group-hover/thumb:text-amber-300 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-tight">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* B. Web案件 マルチデバイス実機プレビュー */}
          {project.category !== "graphic" && (project.imagePc || project.image) && (
            <div className="bg-slate-950 overflow-hidden">
              <div className="bg-slate-900/95 px-5 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-indigo-300 bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-700/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>マルチデバイス実機画面プレビュー</span>
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    PC（1280px）＆ スマホ（iPhone）両対応
                  </span>
                </div>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5 bg-emerald-950/70 hover:bg-emerald-900/70 px-2.5 py-0.5 rounded-full border border-emerald-800/60 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>LIVEサイトを開く ↗</span>
                  </a>
                )}
              </div>

              <div className="p-5 sm:p-8 lg:p-10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* PC版 */}
                  <div
                    className={`${project.imageMobile ? "lg:col-span-8" : "lg:col-span-12"} group/pc cursor-pointer`}
                    onClick={() =>
                      setSelectedScreenshot({
                        src: project.imagePc || project.image!,
                        title: `${project.title} - PC版デスクトップ画面`,
                        caption:
                          project.imagePcCaption ||
                          project.imageCaption ||
                          "PC版ファーストビュー",
                      })
                    }
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                        <span className="px-2 py-0.5 bg-slate-800 rounded text-[10px] text-indigo-400 font-mono border border-slate-700">
                          PC
                        </span>
                        <span>デスクトップ表示 (1280px)</span>
                      </div>
                      <span className="text-[11px] text-slate-400 group-hover/pc:text-indigo-300 transition-colors flex items-center gap-1">
                        <span>🔍</span>
                        <span>クリックで拡大</span>
                      </span>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group-hover/pc:border-indigo-500/70 transition-all duration-300">
                      <div className="bg-slate-800/95 px-3.5 py-2 flex items-center justify-between border-b border-slate-700/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 inline-block"></span>
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono px-3 py-0.5 bg-slate-950/80 rounded-full border border-slate-700/60 truncate max-w-[200px] sm:max-w-xs">
                          {project.demo || "https://..."}
                        </div>
                        <div className="w-6"></div>
                      </div>

                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                        <img
                          src={project.imagePc || project.image}
                          alt={`${project.title} PC版`}
                          className="w-full h-full object-cover object-top group-hover/pc:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-950/0 group-hover/pc:bg-slate-950/20 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover/pc:opacity-100 bg-white/95 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-xl transition-all duration-200">
                            PC版を拡大 🔍
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* スマホ版 */}
                  {project.imageMobile && (
                    <div
                      className="lg:col-span-4 flex flex-col items-center group/mobile cursor-pointer"
                      onClick={() =>
                        setSelectedScreenshot({
                          src: project.imageMobile!,
                          title: `${project.title} - スマホ版画面`,
                          caption:
                            project.imageMobileCaption ||
                            "スマートフォン最適化表示",
                        })
                      }
                    >
                      <div className="w-full flex items-center justify-between mb-2.5 max-w-[240px]">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
                          <span className="px-2 py-0.5 bg-slate-800 rounded text-[10px] text-pink-400 font-mono border border-slate-700">
                            MOBILE
                          </span>
                          <span>スマホ表示 (iPhone)</span>
                        </div>
                        <span className="text-[11px] text-slate-400 group-hover/mobile:text-pink-300 transition-colors flex items-center gap-1">
                          <span>🔍</span>
                          <span>拡大</span>
                        </span>
                      </div>

                      <div className="w-full max-w-[230px] rounded-[38px] p-2.5 bg-slate-800 border-2 border-slate-700/90 shadow-2xl relative group-hover/mobile:border-pink-500/70 transition-all duration-300">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-20 border border-slate-800/80 flex items-center justify-end pr-2 pointer-events-none">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-900/80"></div>
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-400/50 rounded-full z-20 pointer-events-none"></div>

                        <div className="w-full aspect-[390/844] rounded-[28px] overflow-hidden bg-slate-950 relative">
                          <img
                            src={project.imageMobile}
                            alt={`${project.title} スマホ版`}
                            className="w-full h-full object-cover object-top group-hover/mobile:scale-[1.02] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-slate-950/0 group-hover/mobile:bg-slate-950/20 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover/mobile:opacity-100 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-xl transition-all duration-200">
                              スマホ版を拡大 🔍
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 工夫した点・主な特徴（Key Features） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2.5 h-6 rounded-full bg-indigo-600 inline-block"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {project.category === "graphic"
                ? "工夫した点・デザイン設計のポイント"
                : "工夫した点・主な機能＆実装ポイント"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, featIndex) => (
              <div
                key={featIndex}
                className="text-slate-800 text-sm flex items-start bg-slate-50/70 hover:bg-indigo-50/40 p-4 rounded-2xl border border-slate-200/80 transition-colors"
              >
                <span className="text-indigo-600 font-bold mr-3 mt-0.5 text-base shrink-0">
                  ✦
                </span>
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* UI機能ギャラリー（Web案件） */}
        {project.category !== "graphic" &&
          project.screenshots &&
          project.screenshots.length > 0 && (
            <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8">
              <div className="mb-6">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold">
                    {project.screenshotsBadge || "UI GALLERY"}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {project.screenshotsTitle || "UI機能・画面ギャラリー"}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  {project.screenshotsNote ||
                    "細部まで作り込んだ機能・画面のプレビューです。クリックで拡大できます。"}
                </p>
              </div>

              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  project.screenshots.length % 4 === 0
                    ? "lg:grid-cols-4"
                    : "lg:grid-cols-3"
                } gap-5`}
              >
                {project.screenshots.map((shot, shotIndex) => (
                  <div
                    key={shotIndex}
                    onClick={() => setSelectedScreenshot(shot)}
                    className="group/shot cursor-pointer bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg flex flex-col"
                  >
                    <div className="relative aspect-video bg-slate-100 overflow-hidden">
                      <img
                        src={shot.src}
                        alt={shot.title}
                        className="w-full h-full object-cover object-top group-hover/shot:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-indigo-950/0 group-hover/shot:bg-indigo-950/25 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover/shot:opacity-100 bg-white/95 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md transition-opacity">
                          🔍 拡大表示
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between bg-slate-50/60">
                      <div className="text-sm font-bold text-slate-800 group-hover/shot:text-indigo-600 transition-colors">
                        {shot.title}
                      </div>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {shot.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        {/* チケット駆動開発バナー（GitHub Issues） */}
        {project.taskAutomationBanner && (
          <section className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl border border-indigo-500/40 text-white shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 text-2xl shadow-inner">
                  ⚡
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {project.taskAutomationBanner.badge}
                    </span>
                    <span className="text-xs text-indigo-300 font-medium">
                      {project.taskAutomationBanner.subtitle}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {project.taskAutomationBanner.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-3xl">
                    {project.taskAutomationBanner.description}
                  </p>
                </div>
              </div>
              <a
                href={project.taskAutomationBanner.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer self-start md:self-auto"
              >
                <span>{project.taskAutomationBanner.linkText}</span>
                <span>↗</span>
              </a>
            </div>
          </section>
        )}

        {/* WEBサイト構成図・サイトマップ */}
        {project.siteStructure && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8">
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200/80">
                  SITE ARCHITECTURE
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {project.siteStructure.title}
                </h2>
              </div>
              <p className="text-indigo-600 font-semibold text-sm mb-2">
                {project.siteStructure.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                {project.siteStructure.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.siteStructure.categories.map((cat, catIdx) => (
                <div
                  key={catIdx}
                  className="bg-slate-50/90 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:border-rose-300 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-slate-200">
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        {cat.category}
                      </span>
                      {cat.badge && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            cat.badgeColor ||
                            "bg-slate-100 text-slate-700 border-slate-200"
                          }`}
                        >
                          {cat.badge}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2.5">
                      {cat.pages.map((page, pageIdx) => (
                        <li
                          key={pageIdx}
                          className={`p-3 rounded-xl border transition-all text-xs ${
                            page.isHighlight
                              ? "bg-white border-rose-200 shadow-2xs"
                              : "bg-white/60 border-slate-200/80"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="font-bold text-slate-800 flex items-center gap-1.5">
                              {page.isHighlight && (
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                              )}
                              <span>{page.name}</span>
                            </span>
                            {page.url && (
                              <a
                                href={page.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-0.5 px-1.5 py-0.5 rounded hover:bg-rose-50 transition-colors shrink-0"
                                title="実際のページを開く"
                              >
                                <span>開く</span>
                                <span>↗</span>
                              </a>
                            )}
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                            {page.path}
                          </span>
                          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                            {page.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3.5 pt-2 text-[10px] text-slate-400 border-t border-slate-200/60 text-right">
                    全 {cat.pages.length} 画面・導線
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 参考サイトバナー */}
        {project.referenceSite && (
          <section className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-rose-50/80 via-pink-50/40 to-slate-50/80 rounded-3xl border border-rose-200 text-slate-900 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-300 flex items-center justify-center shrink-0 text-2xl shadow-inner">
                  🍓
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-700 border border-rose-200">
                      {project.referenceSite.badge || "構成リファレンス元"}
                    </span>
                    <span className="text-xs text-rose-600 font-semibold">
                      既存LP構成のリバースエンジニアリング＆再設計
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {project.referenceSite.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl">
                    {project.referenceSite.description}
                  </p>
                </div>
              </div>
              <a
                href={project.referenceSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer self-start md:self-auto"
              >
                <span>参考サイトを見る</span>
                <span>↗</span>
              </a>
            </div>
          </section>
        )}

        {/* 設計・提案ドキュメント一覧 */}
        {project.documents && project.documents.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8">
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs font-bold">
                  DOCS
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  設計・提案ドキュメント（企画提案書・画面要件定義）
                </h2>
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-bold border border-indigo-200/80">
                  🤖 Geminiプロンプト作成 × 目視レビュー成果物
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                リニューアル推進にあたり作成したデザイン企画提案書（PPTX）および全画面レイアウト・コンテンツ要件定義書（XLSX）です。GitHubでオンライン閲覧、または直接ダウンロードしてご確認いただけます。
              </p>
            </div>

            {project.documentProcessNote && (
              <div className="mb-6 p-4 sm:p-5 bg-gradient-to-r from-purple-50/90 via-indigo-50/70 to-purple-50/90 border border-purple-200 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs">
                <div className="flex items-start gap-3">
                  <span className="text-lg leading-none mt-0.5">💡</span>
                  <div>
                    <span className="font-bold text-purple-950">
                      ドキュメント作成プロセス（Google Workspace × 生成AI活用・目視レビュー）:
                    </span>
                    <p className="mt-1 text-slate-700 leading-relaxed text-xs">
                      {project.documentProcessNote}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.documents.map((doc, docIndex) => (
                <div
                  key={docIndex}
                  className="bg-slate-50/90 border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-purple-300 transition-all flex flex-col justify-between shadow-2xs hover:shadow-sm"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
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

                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {doc.title}
                    </h3>

                    {doc.creationMethod && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-100/70 text-purple-900 border border-purple-200/90 text-[11px] font-semibold">
                        <span>✨</span>
                        <span>{doc.creationMethod}</span>
                      </div>
                    )}

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {doc.description}
                    </p>

                    <div className="mt-3.5 pt-3.5 border-t border-slate-200/80">
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

                  <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
                    <a
                      href={doc.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors shadow-2xs"
                    >
                      <span>{doc.githubButtonText || "GitHubで確認"}</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                    <a
                      href={resolveDocUrl(doc.downloadUrl)}
                      download={doc.filename}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors shadow-2xs"
                    >
                      <span>ダウンロード</span>
                      <span className="text-[10px]">↓</span>
                    </a>
                    {doc.extraAction && (
                      <a
                        href={doc.extraAction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-xs font-bold transition-colors shadow-2xs"
                      >
                        <span>{doc.extraAction.label}</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 制作プロセス（3ステップ） */}
        {project.creationSteps && project.creationSteps.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-bold">
                  PROCESS
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  制作の進め方（3ステップ）
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                要件整理からGitHub Issuesを活用したタスク管理、レスポンシブ実装、CI/CD自動デプロイまでのワークフローです。
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {project.creationSteps.map((step) => (
                <li
                  key={step.number}
                  className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-md">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* システム構成・公開フロー */}
        {project.flowSteps && project.flowSteps.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold">
                  CI/CD & ARCHITECTURE
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  システム構成・公開フロー
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                TypeScriptによる型チェックからViteによる本番ビルド、GitHub ActionsによるGitHub Pages自動公開までのアーキテクチャです。
              </p>
            </div>

            <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                      className={`h-full rounded-2xl border p-5 shadow-2xs ${toneBg}`}
                    >
                      <p className="text-xs font-semibold opacity-80">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1.5 text-base font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed opacity-90">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            {project.flowNote && (
              <p className="mt-5 border-l-2 border-emerald-500 pl-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                {project.flowNote}
              </p>
            )}
          </section>
        )}

        {/* ページ下部: 前後ナビゲーション ＆ 一覧へ戻るボタン */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {prevProject ? (
              <button
                onClick={() => onSelectProject(prevProject.id)}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 text-left transition-all hover:shadow-md cursor-pointer group"
              >
                <span className="text-xs text-slate-400 group-hover:text-indigo-600 transition-colors flex items-center gap-1 font-semibold">
                  <span>←</span>
                  <span>前の作品</span>
                </span>
                <h4 className="mt-1 font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate text-sm sm:text-base">
                  {prevProject.title}
                </h4>
              </button>
            ) : (
              <div></div>
            )}

            {nextProject ? (
              <button
                onClick={() => onSelectProject(nextProject.id)}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 text-right transition-all hover:shadow-md cursor-pointer group sm:ml-auto w-full"
              >
                <span className="text-xs text-slate-400 group-hover:text-indigo-600 transition-colors flex items-center justify-end gap-1 font-semibold">
                  <span>次の作品</span>
                  <span>→</span>
                </span>
                <h4 className="mt-1 font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate text-sm sm:text-base">
                  {nextProject.title}
                </h4>
              </button>
            ) : (
              <div></div>
            )}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onBackToList}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>← 制作実績一覧へ戻る</span>
            </button>
          </div>
        </section>
      </div>

      {/* スクリーンショット拡大モーダル */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/90">
              <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-[80%]">
                {selectedScreenshot.title}
              </h3>
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors text-sm font-bold cursor-pointer"
                aria-label="閉じる"
              >
                ✕
              </button>
            </div>
            <div className="p-3 sm:p-5 flex-1 overflow-auto flex items-center justify-center bg-slate-950/50">
              <img
                src={selectedScreenshot.src}
                alt={selectedScreenshot.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="p-4 border-t border-slate-800 bg-slate-950/90 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedScreenshot.caption}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
