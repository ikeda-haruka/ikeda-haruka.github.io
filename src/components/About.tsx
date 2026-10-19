import RevealOnScroll from "./motion/RevealOnScroll";
import TiltCard from "./motion/TiltCard";

interface AboutProps {
  onContactClick?: () => void;
}

export default function About({ onContactClick }: AboutProps) {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-100/30 via-indigo-100/30 to-rose-100/30 blur-3xl rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクション見出し */}
        <RevealOnScroll direction="up" delay={50} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-bold mb-4 shadow-2xs">
            <span>🌱</span>
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            自己紹介・歩んできた道
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            理系物理専攻からスペイン語専攻、デザイン、そしてエンジニアへ。好奇心と行動力を行動の原動力に、未知の領域に挑み続けてきた背景と大切にしている想いをご紹介します。
          </p>
        </RevealOnScroll>

        {/* 人柄・コアハイライト（3つの特徴バッジカード） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* 1. 性格 */}
          <RevealOnScroll direction="up" delay={100} className="h-full">
            <TiltCard maxTilt={5} className="h-full">
              <div className="h-full bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-white p-6 rounded-2xl border border-amber-200/70 shadow-xs relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl mb-4">
                  🔥
                </div>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  Personality
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  ほんわかの中に、熱い魂
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  親しみやすく柔らかな雰囲気の中に、ものづくりへの熱い情熱と探求心を秘めています。どんな課題にも粘り強く向き合います。
                </p>
              </div>
            </TiltCard>
          </RevealOnScroll>

          {/* 2. 強み */}
          <RevealOnScroll direction="up" delay={200} className="h-full">
            <TiltCard maxTilt={5} className="h-full">
              <div className="h-full bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-white p-6 rounded-2xl border border-indigo-200/70 shadow-xs relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center text-2xl mb-4">
                  🚀
                </div>
                <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider block mb-1">
                  Strong Point
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  好奇心の塊 & 行動力
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  興味を持ったことには「とりあえずやってみよう！」と即座に行動へ移すフットワークの軽さと貪欲な学習意欲が最大の武器です。
                </p>
              </div>
            </TiltCard>
          </RevealOnScroll>

          {/* 3. 人との縁 */}
          <RevealOnScroll direction="up" delay={300} className="h-full">
            <TiltCard maxTilt={5} className="h-full">
              <div className="h-full bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-white p-6 rounded-2xl border border-emerald-200/70 shadow-xs relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-2xl mb-4">
                  🤝
                </div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  Core Value
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  人とのご縁に感謝を込めて
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  年齢や性別を問わず友人に恵まれ、人との出会いや信頼関係を何よりも大切にしています。チームやクライアントとの協調性も長所です。
                </p>
              </div>
            </TiltCard>
          </RevealOnScroll>
        </div>

        {/* 詳細ストーリーカード（セクション別タイムライン風レイアウト） */}
        <div className="space-y-8">
          {/* セクション 1: 学生時代・スペイン語専攻への転身 */}
          <RevealOnScroll direction="up" delay={50}>
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    01
                  </span>
                  <div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                      Background & Education
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      理系物理専攻から外国語学部へ、0から言語を学んだ原体験
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-medium bg-white px-3 py-1.5 rounded-full border border-slate-200 self-start md:self-auto">
                  京都産業大学 外国語学部 ヨーロッパ言語学科 スペイン語専攻 卒業
                </span>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  高校は地元の普通科高校に通い、理系クラスにて物理専攻をしていました。
                </p>
                <p>
                  高校生の当時、「英語以外にももう1つ得意な言語があった方が良い」という内容をテレビで目にしたこと、そして英語への苦手意識があったことから、「他の言語で得意なものを持っておきたい」という強い気持ちが芽生えました。
                  そこで、日本人が発音しやすく文法体系が整っており、世界中に話者数の多い<strong className="text-slate-900 font-bold bg-amber-100/60 px-1 py-0.5 rounded">スペイン語を専攻したい</strong>と思うようになりました。
                </p>
                <p>
                  高校3年生で大学受験が間近に迫っている時期でしたが、当時の担任の先生と理系の自分でも通える外国語学部を一緒に探し、国数英の3科目で受験に挑戦。無事に<strong className="text-slate-900 font-bold">京都産業大学 外国語学部 ヨーロッパ言語学科 スペイン語専攻</strong>へ入学し、卒業しました。
                </p>

                {/* 語学から技術キャッチアップ力へのシナジー */}
                <div className="mt-6 p-4 sm:p-5 bg-white rounded-2xl border border-indigo-100 shadow-2xs flex items-start gap-3.5">
                  <span className="text-xl shrink-0 mt-0.5">💡</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-indigo-900 mb-1">
                      語学学習の継続が、WEB業界での「最新技術キャッチアップ力」の基盤に
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      外国語学部に入って本当に良かったと感じているのは、全く未知の言語に対して必死に食らいつき、毎日コツコツ予習・復習を積み重ねて身につけていった経験です。この徹底した学習習慣が、日進月歩で移り変わるWEB業界において<strong className="text-slate-900 font-semibold">「最新情報を常にキャッチアップして自分のものにしていく力」</strong>へと直結しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* セクション 2: デザインからエンジニア、そしてフリーランスへ */}
          <RevealOnScroll direction="up" delay={50}>
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    02
                  </span>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      Career Journey & Independence
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      デザインからエンジニアへ、そしてフリーランスとしての独立
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-medium bg-white px-3 py-1.5 rounded-full border border-slate-200 self-start md:self-auto">
                  デザイン学習 → SES研修 → フリーランスSE
                </span>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  WEB業界に入ったきっかけは、デザインに関する勉強でした。
                  AdobeのPhotoshopやIllustratorを使用したバナーやDTPデザインの制作方法からスタートし、HTMLやCSS、jQueryによるWebコーディング、そしてWordPressでのCMS構築という順序で段階的にスキルを深めていきました。
                </p>
                <p>
                  その学習の過程で「自らの手でコードを書いて動かす楽しさ」に目覚め、ご縁があって「SESエンジニアとして働いてみませんか」とお誘いをいただきました。充実したカリキュラム研修を受けた後、システムエンジニアとしてのキャリアを本格的に歩み始めました。
                </p>

                {/* フリーランスへの転身と大切にしている想い */}
                <div className="mt-6 p-5 sm:p-6 bg-gradient-to-r from-blue-50/90 via-indigo-50/70 to-slate-50 rounded-2xl border border-blue-200/90 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                    <span>🌿</span>
                    <span>ライフスタイルの変化に備え、働き方の選択肢を自ら広げる選択</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    元々はSESエンジニアとして働いていましたが、将来の母親の介護や、旦那さん・子どもとの生活というライフスタイルの変化を見据え、「今のうちから自分で働き方や収入の選択肢を広げていこう」という想いが強くなりました。
                    自身のこれからの生き方や理想の働き方について真剣に悩み、深く向き合った末に、<strong className="text-slate-900 font-bold bg-white/80 px-1.5 py-0.5 rounded border border-blue-200">フリーランスのシステムエンジニアとして独立</strong>する道を選びました。
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    将来子どもができたり、自身の親や結婚相手の親の介護が必要になったりしたときにも、<strong className="text-indigo-900 font-bold underline decoration-indigo-400 decoration-2 underline-offset-2">大切な人との時間を何よりも大切にしながら、場所や時間に縛られずに自由に働ける環境</strong>をつくっていきたいと思っています。
                  </p>
                </div>

                {/* なぜエンジニアがLP制作やデザインにも取り組むのか（今後のキャリア・制作方針） */}
                <div className="mt-4 p-5 sm:p-6 bg-gradient-to-br from-violet-50/80 via-purple-50/40 to-white rounded-2xl border border-violet-200/90 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-violet-950 font-bold text-sm">
                    <span>💡</span>
                    <span>なぜエンジニアでありながら、今またLP制作やデザインにも取り組むのか？</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    「なぜエンジニアなのに、またLP制作やデザインもしようとしているのか？」と訊かれることがあります。
                    実はAdobe認定資格を保持しており、ソフトの利用料の兼ね合いから有料プランを一時的に解除していましたが、資格勉強や実践で得た知識・スキルを眠らせておくのは非常にもったいないと感じていました。
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    現在はPhotoshopやIllustratorなどのAdobeソフトに加え、CanvaやFigmaもフル活用しながら、バナーデザインやWebサイト・LP制作の実績と経験を積み、将来に向けて<strong className="text-slate-900 font-bold bg-white/80 px-1.5 py-0.5 rounded border border-violet-200">「収入の柱と働き方の選択肢」</strong>を増やしておきたいと考えています。
                  </p>
                  <div className="p-3.5 bg-white/95 rounded-xl border border-violet-100 flex items-start gap-3">
                    <span className="text-base sm:text-lg">🤖</span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong className="text-violet-900 font-bold">AIを活用したWebデザインの積極的インプット＆実践：</strong>
                      <br className="hidden sm:inline" />
                      私がデザインの勉強をしていた当時は無かった「AI活用によるWebデザイン」を積極的に知識吸収・実践しています。AIの即応性とデザインの基礎知識、そしてエンジニアとしての確かな実装力を融合させ、効率良く高品質な成果物を生成・修正できる体制を整えています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* セクション 3: 性格・強みとメッセージ */}
          <RevealOnScroll direction="up" delay={50}>
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    03
                  </span>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                      Message & Personality
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      性格・人柄と、これからの可能性に向けて
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-medium bg-white px-3 py-1.5 rounded-full border border-slate-200 self-start md:self-auto">
                  好奇心・行動力・人とのご縁
                </span>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                      <span className="text-amber-500">✨</span>
                      <span>性格 & 強み</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      性格としては、ほんわかとした親しみやすい性格の中に熱い魂を燃やしています。
                      興味を持ったことに対して、<strong className="text-slate-900 font-semibold">「とりあえずやってみよう」と躊躇なく行動に移せる好奇心の塊</strong>であるところが大きな強みです。
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                      <span className="text-emerald-500">🤝</span>
                      <span>長所（人との縁）</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      人との縁を大事にできることが長所だと周りからもよく言われます。友人は年齢・性別を問わずおり、「いつも本当に周りのご縁に恵まれている」と常日頃から感謝の気持ちを抱いています。
                    </p>
                  </div>
                </div>

                {/* 結びのメッセージ & 面談CTA */}
                <div className="mt-6 p-6 sm:p-7 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 rounded-3xl text-white shadow-md text-center space-y-4">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-xs rounded-full text-xs font-bold text-indigo-100 tracking-wider">
                    LOOKING FORWARD TO WORKING TOGETHER
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold leading-snug">
                    自身の行動力を活かして、これからさらに可能性を広げていけると思っています。
                    <br className="hidden sm:inline" />
                    是非1度、面談の機会をいただけたら嬉しいです。どうぞよろしくお願いいたします。
                  </h4>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={onContactClick}
                      className="px-8 py-3.5 bg-white hover:bg-slate-50 text-indigo-700 font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>面談・お仕事のご相談はこちら</span>
                      <span className="text-xs">↓</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
