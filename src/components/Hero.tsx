interface HeroProps {
  profileImage: string;
}

export default function Hero({ profileImage }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src={profileImage}
            alt="池田遥香"
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          池田 遥香
        </h1>

        <div className="text-xl sm:text-2xl text-gray-300 mb-2">
          Java + AI エンジニア
        </div>

        <div className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          <p>
            決済システムから化学物質管理まで、様々な業務システムの開発・運用に携わってきました。
          </p>
          <p className="mt-2">
            Java/SpringBoot、機械学習、SpecKit による仕様駆動開発など、
            企業の技術課題を解決するエンジニアです。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://github.com/ikeda-haruka"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:ikedaharuka0215@gmail.com"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
          >
            メールで連絡
          </a>
        </div>

        <div className="flex justify-center mb-16">
          <svg
            className="w-6 h-6 text-gray-400 animate-bounce"
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
