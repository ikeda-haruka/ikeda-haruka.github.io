import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ikedaharuka0215@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">お問い合わせ</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
          <p className="text-gray-300 text-center mb-8">
            プロジェクト相談、技術的な質問、または採用に関するお話など、
            お気軽にお問い合わせください。
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">メール</h3>
                <p className="text-gray-400">ikedaharuka0215@gmail.com</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors"
              >
                {copied ? "コピーしました" : "コピー"}
              </button>
            </div>

            {/* GitHub */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-700">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">GitHub</h3>
                <a
                  href="https://github.com/ikeda-haruka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  github.com/ikeda-haruka
                </a>
              </div>
            </div>

            {/* LinkedIn (optional) */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">実績・評価</h3>
                <p className="text-gray-400">
                  過去のプロジェクト成果などについては、メールでお問い合わせください
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              フォローアップリクエスト
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                ✓
                決済システム、化学物質管理システムなどの大規模エンタープライズシステム開発実績があります
              </p>
              <p>✓ SpringBoot、Vue.js によるモダン技術スタックへの移行経験</p>
              <p>✓ SpecKit による仕様駆動開発の PoC 実施</p>
              <p>✓ オンプレミス → IaaS クラウドリフト検討中</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
