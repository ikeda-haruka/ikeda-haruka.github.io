import { useMemo, useState } from "react";
import { projectsData } from "../data/projectsData";
import RevealOnScroll from "./motion/RevealOnScroll";
import CountUp from "./motion/CountUp";
import TiltCard from "./motion/TiltCard";

type FilterType = "all" | "web" | "graphic" | "client";

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleProjectClick = (projectId: string) => {
    onSelectProject(projectId);
  };

  // フィルタリング ＆ キーワード検索（リアルタイムAND検索）
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // 1. カテゴリフィルター
      let matchesCategory = true;
      if (activeFilter === "web") {
        matchesCategory =
          project.category === "portfolio" || project.category === "client_web";
      } else if (activeFilter === "graphic") {
        matchesCategory =
          project.category === "graphic" || project.category === "client_graphic";
      } else if (activeFilter === "client") {
        matchesCategory =
          project.category === "client_web" ||
          project.category === "client_enterprise" ||
          project.category === "client_graphic";
      }

      if (!matchesCategory) return false;

      // 2. キーワード検索（スペース区切りの全ワードを含むAND検索）
      if (!searchQuery.trim()) return true;

      const keywords = searchQuery
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(Boolean);

      const searchableText = [
        project.title,
        project.subtitle,
        project.description,
        project.overview,
        project.purpose || "",
        ...(project.role || []),
        ...project.technologies,
        ...project.features,
      ]
        .join(" ")
        .toLowerCase();

      return keywords.every((kw) => searchableText.includes(kw));
    });
  }, [activeFilter, searchQuery]);

  const counts = useMemo(() => {
    const web = projectsData.filter(
      (p) => p.category === "portfolio" || p.category === "client_web"
    ).length;
    const graphic = projectsData.filter(
      (p) => p.category === "graphic" || p.category === "client_graphic"
    ).length;
    const client = projectsData.filter(
      (p) =>
        p.category === "client_web" ||
        p.category === "client_enterprise" ||
        p.category === "client_graphic"
    ).length;
    return { all: projectsData.length, web, graphic, client };
  }, []);

  const handleResetFilters = () => {
    setActiveFilter("all");
    setSearchQuery("");
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクション見出し */}
        <RevealOnScroll direction="up" delay={50} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-bold mb-4 shadow-2xs">
            <span>✨</span>
            <span>PORTFOLIO & WORKS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            <span className="inline-block">制作実績・</span>
            <span className="inline-block">開発プロジェクト</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            大手化学メーカーでのSpecKit仕様駆動開発PoC（AI/FDE）や金融決済システム、商用ブランドLP共同開発、クライアント直接依頼のイベントDTPなど、<strong className="text-slate-900 font-bold underline decoration-amber-400 decoration-2 underline-offset-4">実際に参画・受託した実務案件を最優先で掲載</strong>しています。各作品カードの「詳細を見る」から、制作目的・担当範囲・使用技術・工夫点・アーキテクチャ・実機画面を詳しくご覧いただけます。
          </p>
        </RevealOnScroll>

        {/* 検索・絞り込みコントロールバー */}
        <RevealOnScroll direction="up" delay={150} className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm mb-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* カテゴリ切り替えタブ */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 w-full md:w-auto">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === "all"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                すべて (<CountUp end={counts.all} duration={1000} />)
              </button>
              <button
                onClick={() => setActiveFilter("client")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === "client"
                    ? "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-sm"
                    : "bg-amber-50 text-amber-900 border border-amber-200/90 hover:bg-amber-100/80"
                }`}
              >
                <span>★</span>
                <span>参画・実務案件 (<CountUp end={counts.client} duration={1000} />)</span>
              </button>
              <button
                onClick={() => setActiveFilter("web")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === "web"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                Webサイト制作 (<CountUp end={counts.web} duration={1000} />)
              </button>
              <button
                onClick={() => setActiveFilter("graphic")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === "graphic"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                グラフィック/DTP (<CountUp end={counts.graphic} duration={1000} />)
              </button>
            </div>

            {/* キーワード検索入力欄 */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <span className="text-sm">🔍</span>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="作品名・技術・キーワードで検索..."
                className="w-full pl-9 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  title="検索条件をクリア"
                  aria-label="検索クリア"
                >
                  <span className="w-4 h-4 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-[10px] font-bold">
                    ✕
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* 検索ステータスバッジ */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <div>
              {searchQuery ? (
                <span>
                  「<strong className="text-slate-800">{searchQuery}</strong>」の検索結果:{" "}
                  <strong className="text-indigo-600 font-bold">{filteredProjects.length}</strong> 件
                </span>
              ) : (
                <span>
                  表示中:{" "}
                  <strong className="text-slate-800 font-bold">{filteredProjects.length}</strong> 件 / 全{" "}
                  {projectsData.length} 件
                </span>
              )}
            </div>
            {(searchQuery || activeFilter !== "all") && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-indigo-600 hover:text-indigo-800 font-bold hover:underline cursor-pointer"
              >
                フィルターをリセット
              </button>
            )}
          </div>
        </RevealOnScroll>

        {/* 検索結果ゼロ時のEmpty State */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center text-2xl text-slate-400">
              🔍
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              条件に一致する作品が見つかりませんでした
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
              検索キーワードを変更するか、フィルター条件をリセットしてお試しください。
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer"
            >
              検索条件をリセット
            </button>
          </div>
        ) : (
          /* 作品一覧グリッド（カード型レイアウト・コンパクト化） */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => {
              const displayImage =
                project.imagePc || project.image || project.screenshots?.[0]?.src;

              return (
                <RevealOnScroll
                  key={project.id}
                  direction="up"
                  delay={(index % 6) * 75}
                  className="h-full"
                >
                  <TiltCard maxTilt={3.5} className="h-full">
                    <article
                      className={`h-full bg-white rounded-3xl overflow-hidden border transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col group ${
                        project.isClientWork
                          ? "border-amber-300/80 hover:border-amber-500 ring-1 ring-amber-200/60"
                          : "border-slate-200/90 hover:border-indigo-400"
                      }`}
                    >
                  {/* カード上部: サムネイル画像プレビュー */}
                  <div
                    onClick={() => handleProjectClick(project.id)}
                    className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer group/thumb"
                  >
                    {displayImage ? (
                      <img
                        src={displayImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover/thumb:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-400 bg-gradient-to-br from-slate-900 to-slate-950">
                        <span className="text-3xl mb-2">💻</span>
                        <span className="text-xs font-mono">{project.title}</span>
                      </div>
                    )}

                    {/* ホバー時オーバーレイ */}
                    <div className="absolute inset-0 bg-slate-950/0 group-hover/thumb:bg-slate-950/40 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/thumb:opacity-100 bg-white/95 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-xl transition-all duration-200 flex items-center gap-1.5">
                        <span>専用詳細ページを見る</span>
                        <span>→</span>
                      </span>
                    </div>

                    {/* バッジ（左上） */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                      {project.isClientWork && (
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md flex items-center gap-1 border border-amber-300/40">
                          <span>★</span>
                          <span>実務・参画案件</span>
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-xs ${
                          project.badgeType === "client_enterprise"
                            ? "bg-slate-900/90 text-white border border-slate-700/80"
                            : project.badgeType === "client_graphic"
                            ? "bg-amber-600/90 text-white"
                            : project.badgeType === "graphic"
                            ? "bg-amber-500/90 text-white"
                            : project.badgeType === "portfolio"
                            ? "bg-purple-600/90 text-white"
                            : project.badgeType === "client_web"
                            ? "bg-blue-600/90 text-white"
                            : "bg-slate-700/90 text-white"
                        }`}
                      >
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* LIVEマーク / Figmaマーク（右上） */}
                    <div className="absolute top-3 right-3 z-10 pointer-events-none flex items-center gap-1">
                      {project.figmaUrl && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0ACF83] text-white flex items-center gap-1 shadow-xs">
                          <span>Figma</span>
                        </span>
                      )}
                      {project.demo && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/95 text-white flex items-center gap-1 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          <span>LIVE</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* カード本文 */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* タイトル ＆ サブタイトル */}
                      <h3
                        onClick={() => handleProjectClick(project.id)}
                        className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer leading-snug line-clamp-2"
                        title={project.title}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-indigo-600 font-semibold mt-1 line-clamp-1">
                        {project.subtitle}
                      </p>

                      {/* 制作目的（Why）要約 */}
                      {project.purpose && (
                        <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                          <span className="font-bold text-slate-800 text-[11px] block mb-0.5 flex items-center gap-1">
                            <span>🎯</span>
                            <span>制作目的:</span>
                          </span>
                          <p className="line-clamp-2">{project.purpose}</p>
                        </div>
                      )}

                      {/* 担当範囲タグ */}
                      {project.role && project.role.length > 0 && (
                        <div className="mt-3.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                            担当範囲:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {project.role.slice(0, 3).map((r, rIdx) => (
                              <span
                                key={rIdx}
                                className="px-2 py-0.5 bg-indigo-50/80 text-indigo-700 rounded-md text-[11px] font-medium border border-indigo-100"
                              >
                                {r}
                              </span>
                            ))}
                            {project.role.length > 3 && (
                              <span className="px-1.5 py-0.5 text-slate-400 text-[10px]">
                                +{project.role.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* 工夫点（抜粋1〜2点） */}
                      {project.features && project.features.length > 0 && (
                        <div className="mt-3.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                            工夫した点:
                          </span>
                          <ul className="space-y-1">
                            {project.features.slice(0, 2).map((feat, fIdx) => (
                              <li
                                key={fIdx}
                                className="text-xs text-slate-700 flex items-start line-clamp-1"
                              >
                                <span className="text-indigo-500 font-bold mr-1.5 shrink-0 text-[11px]">
                                  ✦
                                </span>
                                <span className="truncate">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* 主要技術タグ */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-1.5 py-0.5 text-slate-400 text-[10px]">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* カードフッター: 詳細ページへの遷移 ＆ クイックアクション */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleProjectClick(project.id)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer"
                      >
                        <span>専用詳細ページを見る</span>
                        <span>→</span>
                      </button>

                      <div className="flex items-center gap-1">
                        {project.figmaUrl && (
                          <a
                            href={project.figmaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-2 rounded-xl bg-[#0ACF83]/15 hover:bg-[#0ACF83]/25 text-[#058452] transition-colors text-xs font-bold"
                            title="Figmaでデザインを見る"
                          >
                            Figma
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors text-xs font-bold"
                            title="LIVEサイトを開く"
                          >
                            ↗
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors text-xs font-bold"
                            title="GitHubリポジトリを開く"
                          >
                            Git
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </RevealOnScroll>
          );
        })}
          </div>
        )}
      </div>
    </section>
  );
}
