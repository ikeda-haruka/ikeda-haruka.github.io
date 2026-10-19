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
                Available for Web Design, FDE & AI Engineering
              </span>
            </div>

            {/* 大見出し */}
            <div>
              <p className="text-sm sm:text-base font-bold text-indigo-600 tracking-widest uppercase mb-2">
                WEB Designer / Full-stack & AI Engineer (FDE)
              </p>
              <h1 className="text-[25px] sm:text-[34px] lg:text-[40px] xl:text-[48px] font-extrabold text-slate-900 tracking-tight leading-[1.3] sm:leading-[1.25]">
                <span className="block">洗練された<span className="gradient-text">Web & AI体験</span>を、</span>
                <span className="block mt-1 sm:mt-1.5">デザインと仕様駆動技術で形に。</span>
              </h1>
            </div>

            {/* リード文 */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              大手化学メーカーでのSpecKit仕様駆動開発PoC主導（AI/FDE）や金融決済システム、2名体制での商用ブランドLP・Webサイト共同開発、クライアント直接依頼のイベントDTPなど、<strong className="text-slate-900 font-semibold">実際の開発現場に深く参画した豊富な実務実績</strong>を基盤に、洗練されたWeb体験からエンタープライズシステムまでワンストップで形にします。
            </p>

            {/* 技術ハイライトピル */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              {[
                "実務・参画案件 多数",
                "SpecKit / 仕様駆動開発",
                "AI Engineer / FDE",
                "Next.js / React",
                "TypeScript",
                "Java / SpringBoot 3",
                "Vue.js",
                "UI/UX & Figma",
                "Adobe Photoshop & Illustrator",
                "IMDS / エンタープライズ",
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
                <span>実務参画実績を見る</span>
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
                      WEB Designer & AI Engineer (FDE)
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">専門領域</span>
                    <span className="font-bold text-slate-800">
                      実務参画・Webデザイン & AI/FDE
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">得意スタック</span>
                    <span className="font-bold text-slate-800">
                      SpecKit / Java 21 / Next.js / Vue
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">公認資格</span>
                    <span className="font-bold text-slate-800">
                      Adobe Photoshop & Illustrator
                    </span>
                  </div>
                </div>

                {/* 代表実績のクイックバッジ（実務参画案件優先） */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Featured Client Works</span>
                    <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200 font-extrabold">
                      実務参画
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {/* 1. 化学物質管理システム */}
                    <div
                      onClick={onExploreWorks}
                      className="p-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/90 rounded-xl flex items-center justify-between hover:border-emerald-400 transition-all cursor-pointer group shadow-2xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🧪</span>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            化学物質管理システム
                          </div>
                          <div className="text-[10px] text-slate-500">
                            SpecKit仕様駆動開発PoC / FDE実務
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-emerald-600 font-bold group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </div>

                    {/* 2. SPプロテイン */}
                    <div
                      onClick={onExploreWorks}
                      className="p-2.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/90 rounded-xl flex items-center justify-between hover:border-amber-400 transition-all cursor-pointer group shadow-2xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🥛</span>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                            SPURT PROTEIN 公式LP
                          </div>
                          <div className="text-[10px] text-slate-500">
                            2名共同開発 / D2CブランドLP実務
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-amber-600 font-bold group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </div>

                    {/* 3. BIWAKO GYM */}
                    <div
                      onClick={onExploreWorks}
                      className="p-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/90 rounded-xl flex items-center justify-between hover:border-blue-400 transition-all cursor-pointer group shadow-2xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🏋️</span>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                            BIWAKO GYM
                          </div>
                          <div className="text-[10px] text-slate-500">
                            2名共同開発 / ジム公式WEB実務
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </div>

                    {/* 4. フラメンコ＆音楽イベントフライヤー */}
                    <div
                      onClick={onExploreWorks}
                      className="p-2.5 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200/90 rounded-xl flex items-center justify-between hover:border-rose-400 transition-all cursor-pointer group shadow-2xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">💃</span>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                            フラメンコ公式フライヤー＆SNS
                          </div>
                          <div className="text-[10px] text-slate-500">
                            クライアントワーク / A4印刷＆SNS広報
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-rose-600 font-bold group-hover:translate-x-0.5 transition-transform">
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
