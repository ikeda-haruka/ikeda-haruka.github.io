import { useState } from "react";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<"email" | "discord" | "crowdworks" | null>(null);

  const handleCopy = (text: string, field: "email" | "discord" | "crowdworks") => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 w-full">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
            <span>📫</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            お問い合わせ・連絡先
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Webサイト制作・UIデザインやバックエンド・API開発のご相談、技術的なご質問、コミュニティ交流など、どうぞお気軽にご連絡ください。
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {/* 1. Email */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white shrink-0 shadow-xs">
                  <svg
                    className="h-6 w-6"
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
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">メールアドレス</h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">Primary</span>
                  </div>
                  <p className="text-slate-700 text-sm font-mono mt-0.5">
                    ikedaharuka0215@gmail.com
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("ikedaharuka0215@gmail.com", "email")}
                className="w-full sm:w-auto px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs shrink-0"
              >
                {copiedField === "email" ? "コピーしました！" : "アドレスをコピー"}
              </button>
            </div>

            {/* 2. CrowdWorks */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#0083CA] text-white shrink-0 shadow-xs">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">クラウドワークス</h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sky-50 text-[#0083CA] border border-sky-200">お仕事依頼・仮払い対応</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-600">
                    <span>ワーカーID: <strong className="font-mono text-slate-900 font-semibold">7258993</strong></span>
                    <button
                      type="button"
                      onClick={() => handleCopy("7258993", "crowdworks")}
                      className="inline-flex items-center text-[10px] text-slate-500 hover:text-slate-800 font-medium px-1.5 py-0.5 rounded bg-slate-200/70 hover:bg-slate-300 transition-colors cursor-pointer"
                      title="ワーカーIDをコピー"
                    >
                      {copiedField === "crowdworks" ? "コピー済" : "IDコピー"}
                    </button>
                  </div>
                </div>
              </div>
              <a
                href="https://crowdworks.jp/public/employees/7258993?ref=share_url_wkprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-[#0083CA] hover:bg-[#006fae] text-white text-xs font-bold rounded-xl transition-all shadow-xs shrink-0 text-center"
              >
                プロフィール ↗
              </a>
            </div>

            {/* 3. Discord */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#5865F2] text-white shrink-0 shadow-xs">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">Discord</h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-[#5865F2] border border-indigo-200">コミュニティ・DM</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-600">
                    <span>ユーザー名: <strong className="font-mono text-slate-900 font-semibold">ikhr_0215</strong></span>
                    <span className="text-slate-300">|</span>
                    <span>表示名: <strong className="text-slate-900 font-semibold">ハル。</strong></span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("ikhr_0215", "discord")}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs shrink-0"
              >
                {copiedField === "discord" ? "コピーしました！" : "ユーザー名をコピー"}
              </button>
            </div>

            {/* 4. connpass */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#c53d43] text-white shrink-0 shadow-xs">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 16a6 6 0 1 1 0-12c2.08 0 3.95.83 5.31 2.19l-2.12 2.12A3 3 0 1 0 12 15a3 3 0 0 0 2.83-2H12v-3h5.83A6.002 6.002 0 0 1 12 18z"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">connpass</h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-[#c53d43] border border-rose-200">IT勉強会・イベント</span>
                  </div>
                  <p className="text-slate-600 text-xs mt-0.5">
                    アカウント名: <strong className="font-mono text-slate-900 font-semibold">ikhrWeb</strong>
                  </p>
                </div>
              </div>
              <a
                href="https://connpass.com/user/ikhrWeb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-[#c53d43] hover:bg-[#a82d33] text-white text-xs font-bold rounded-xl transition-all shadow-xs shrink-0 text-center"
              >
                プロフィール ↗
              </a>
            </div>

            {/* 5. GitHub */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-900 text-white shrink-0 shadow-xs">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">GitHub</h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">Repositories</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5">
                    アカウント名: <strong className="font-mono text-slate-900 font-semibold">ikeda-haruka</strong>
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/ikeda-haruka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-xs shrink-0 text-center"
              >
                プロフィール ↗
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              対応可能なお仕事・ご相談例
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-indigo-600 font-bold mr-1">✦</span>
                Webサイト・LP新規制作 / リニューアル
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-indigo-600 font-bold mr-1">✦</span>
                Next.js / ヘッドレスCMS（Decap/WP等）構築
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-indigo-600 font-bold mr-1">✦</span>
                Photoshop / Illustrator によるUI・素材デザイン
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-indigo-600 font-bold mr-1">✦</span>
                Java / SpringBoot による堅牢なAPI・システム開発
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-3 text-center sm:text-left">
              ※ メールでの直接ご相談・お取引のほか、クラウドワークスを通じた仮払い・契約にも柔軟に対応いたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
