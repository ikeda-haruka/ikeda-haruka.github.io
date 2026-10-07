interface HeroProps {
  profileImage: string;
}

export default function Hero({ profileImage }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src={profileImage}
            alt="池田遥香"
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
          池田 遥香
        </h1>

        <div className="text-xl sm:text-2xl text-slate-700 mb-2 font-semibold">
          フルスタックエンジニア
        </div>

        <div className="text-slate-600 text-lg mb-8 max-w-3xl mx-auto">
          <p>
            Vue.js・Next.jsなどのフロントエンドから、バックエンド、API連携、WordPressによるCMS構築まで幅広く対応します。
          </p>
          <p className="mt-2">
            AI活用やレガシーシステムのモダナイゼーション、外部サービス連携も含め、企画から開発・運用まで一貫して支援します。
          </p>
          <p className="mt-2">
            できるだけ低予算で継続運用できるWebサイト・Webアプリの構成や運用方法をご提案します。GitHub
            CopilotやChatGPTを活用したAI開発の導入・活用についても、ご要望に合わせて解決策を提示します。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://github.com/ikeda-haruka"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
          >
            GitHub
          </a>
          <a
            href="mailto:ikedaharuka0215@gmail.com"
            className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded-lg transition-colors"
          >
            メールで連絡
          </a>
        </div>

        <div className="flex justify-center mb-16">
          <svg
            className="w-6 h-6 text-slate-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
