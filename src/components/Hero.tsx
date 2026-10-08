interface HeroProps {
  profileImage: string;
  onExploreWorks?: () => void;
  onContactClick?: () => void;
}

export default function Hero({
  profileImage,
  onExploreWorks,
  onContactClick,
}: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 背景の装飾光グラデーション */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-400/20 via-indigo-400/20 to-purple-400/20 blur-3xl pointer-events-none rounded-full -z-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300/15 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* 左カラム: コピー & 説明 & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* ステータスバッジ */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                Available for Web Design & Development
              </span>
            </div>

            {/* 大見出し */}
            <div>
              <p className="text-sm sm:text-base font-bold text-indigo-600 tracking-widest uppercase mb-2">
                Web Designer & Frontend Engineer
              </p>
              <h1 className="text-[25px] sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.3] sm:leading-[1.15]">
                <span className="inline-block">洗練された<span className="gradient-text">Web体験</span>を、</span>
                <br className="hidden sm:inline" />
                <span className="inline-block">デザインと技術で形に。</span>
              </h1>
            </div>

            {/* リード文 */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Next.jsやDecap CMS、WordPressによるモダンなWebサイト制作から、Photoshop/Illustratorを用いたUI/UXデザイン、金融・大規模業務システムで培った堅牢な設計・実装まで。
              <br className="hidden sm:inline" />
              美しさと使いやすさ、そして信頼性を兼ね備えたWeb体験をワンストップで実現します。
            </p>

            {/* 技術ハイライトピル */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              {[
                "Next.js / React",
                "TypeScript",
                "Tailwind CSS",
                "Decap CMS",
                "WordPress",
                "UI/UX Design",
                "Adobe Photoshop & Illustrator",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/70 border border-slate-200 text-slate-700 text-xs font-medium rounded-full shadow-2xs backdrop-blur-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAボタングループ */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                type="button"
                onClick={onExploreWorks}
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm tracking-wide rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>制作実績を見る</span>
                <span className="text-xs">↓</span>
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm tracking-wide rounded-xl shadow-xs hover:border-slate-400 transition-all cursor-pointer"
              >
                お問い合わせ
              </button>

              <a
                href="https://github.com/ikeda-haruka"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>

          {/* 右カラム: クリエイティブビジュアルカード */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* カード本体 */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={profileImage}
                      alt="池田遥香"
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-indigo-200 shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">池田 遥香</h3>
                    <p className="text-xs font-semibold text-indigo-600 mt-0.5">
                      Haruka Ikeda
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Web Creator & Engineer
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">制作領域</span>
                    <span className="font-bold text-slate-800">
                      モダンWeb制作・UIデザイン
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">得意スタック</span>
                    <span className="font-bold text-slate-800">
                      Next.js / Headless CMS / Tailwind
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">公認資格</span>
                    <span className="font-bold text-slate-800">
                      Adobe Photoshop & Illustrator
                    </span>
                  </div>
                </div>

                {/* 代表実績のクイックバッジ */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Featured Works
                  </div>
                  <div className="flex flex-col gap-2">
                    <div
                      onClick={onExploreWorks}
                      className="p-2.5 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl flex items-center justify-between hover:border-purple-300 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🌹</span>
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-purple-700 transition-colors">
                            Estudio Oloroso
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Next.js + Decap CMS
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-purple-600 font-bold group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </div>

                    <div
                      onClick={onExploreWorks}
                      className="p-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl flex items-center justify-between hover:border-blue-300 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🏋️</span>
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                            BIWAKO GYM
                          </div>
                          <div className="text-[10px] text-slate-500">
                            2名共同開発 / ジム公式WEB
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 背景の装飾アクセント */}
              <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
