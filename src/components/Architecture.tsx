export default function Architecture() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">システム構成図</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* 化学物質管理システム構成図 */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            化学物質管理システム（現在）
          </h3>
          <div className="bg-gray-900 rounded p-6 overflow-x-auto">
            <div className="min-w-max">
              <svg
                viewBox="0 0 1000 600"
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Frontend */}
                <rect
                  x="50"
                  y="50"
                  width="200"
                  height="100"
                  fill="#1e40af"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="150"
                  y="105"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  Vue.js / React
                </text>
                <text
                  x="150"
                  y="125"
                  textAnchor="middle"
                  fill="#e0e7ff"
                  className="text-xs"
                >
                  TypeScript SPA
                </text>

                {/* API Gateway */}
                <rect
                  x="350"
                  y="50"
                  width="200"
                  height="100"
                  fill="#7c3aed"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="450"
                  y="105"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  SpringBoot 3
                </text>
                <text
                  x="450"
                  y="125"
                  textAnchor="middle"
                  fill="#e9d5ff"
                  className="text-xs"
                >
                  REST API / Tomcat 11
                </text>

                {/* Database */}
                <rect
                  x="650"
                  y="50"
                  width="200"
                  height="100"
                  fill="#dc2626"
                  stroke="#f87171"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="750"
                  y="105"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  Oracle Database
                </text>
                <text
                  x="750"
                  y="125"
                  textAnchor="middle"
                  fill="#fee2e2"
                  className="text-xs"
                >
                  化学物質データベース
                </text>

                {/* Lines */}
                <line
                  x1="250"
                  y1="100"
                  x2="350"
                  y2="100"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <line
                  x1="550"
                  y1="100"
                  x2="650"
                  y2="100"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* External Systems */}
                <text
                  x="150"
                  y="230"
                  fill="white"
                  className="font-bold text-sm"
                >
                  外部連携
                </text>

                {/* JAMP */}
                <rect
                  x="50"
                  y="260"
                  width="150"
                  height="80"
                  fill="#059669"
                  stroke="#10b981"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="127"
                  y="310"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  JAMP
                </text>
                <text
                  x="127"
                  y="330"
                  textAnchor="middle"
                  fill="#d1fae5"
                  className="text-xs"
                >
                  （chemSHERPA）
                </text>

                {/* CMP */}
                <rect
                  x="260"
                  y="260"
                  width="150"
                  height="80"
                  fill="#059669"
                  stroke="#10b981"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="337"
                  y="310"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  CMP
                </text>
                <text
                  x="337"
                  y="330"
                  textAnchor="middle"
                  fill="#d1fae5"
                  className="text-xs"
                >
                  （新標準）
                </text>

                {/* ユーザー企業 */}
                <rect
                  x="470"
                  y="260"
                  width="180"
                  height="80"
                  fill="#2563eb"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="560"
                  y="310"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  ユーザー企業
                </text>
                <text
                  x="560"
                  y="330"
                  textAnchor="middle"
                  fill="#dbeafe"
                  className="text-xs"
                >
                  Web ブラウザアクセス
                </text>

                {/* SpecKit */}
                <rect
                  x="720"
                  y="260"
                  width="150"
                  height="80"
                  fill="#8b5cf6"
                  stroke="#c4b5fd"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="795"
                  y="310"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  SpecKit
                </text>
                <text
                  x="795"
                  y="330"
                  textAnchor="middle"
                  fill="#ede9fe"
                  className="text-xs"
                >
                  仕様駆動開発
                </text>

                {/* Connect to API */}
                <line
                  x1="127"
                  y1="260"
                  x2="450"
                  y2="150"
                  stroke="#9ca3af"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <line
                  x1="337"
                  y1="260"
                  x2="450"
                  y2="150"
                  stroke="#9ca3af"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <line
                  x1="560"
                  y1="260"
                  x2="450"
                  y2="150"
                  stroke="#9ca3af"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />

                {/* Deployment */}
                <text
                  x="100"
                  y="420"
                  fill="white"
                  className="font-bold text-sm"
                >
                  デプロイト
                </text>

                <rect
                  x="50"
                  y="450"
                  width="160"
                  height="80"
                  fill="#1e293b"
                  stroke="#64748b"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="130"
                  y="500"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  オンプレミス
                </text>
                <text
                  x="130"
                  y="520"
                  textAnchor="middle"
                  fill="#cbd5e1"
                  className="text-xs"
                >
                  (Tomcat 11 + Oracle)
                </text>

                <rect
                  x="270"
                  y="450"
                  width="160"
                  height="80"
                  fill="#1e293b"
                  stroke="#64748b"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="350"
                  y="500"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  IaaS (検証中)
                </text>
                <text
                  x="350"
                  y="520"
                  textAnchor="middle"
                  fill="#cbd5e1"
                  className="text-xs"
                >
                  クラウドリフト予定
                </text>

                {/* Arrow marker */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#9ca3af" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* 銀行系決済システム構成図 */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">
            銀行系決済システム（実績）
          </h3>
          <div className="bg-gray-900 rounded p-6 overflow-x-auto">
            <div className="min-w-max">
              <svg
                viewBox="0 0 1000 500"
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Client */}
                <rect
                  x="50"
                  y="50"
                  width="180"
                  height="80"
                  fill="#2563eb"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="140"
                  y="100"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  企業ユーザー
                </text>
                <text
                  x="140"
                  y="120"
                  textAnchor="middle"
                  fill="#dbeafe"
                  className="text-xs"
                >
                  Web / API クライアント
                </text>

                {/* Application Server */}
                <rect
                  x="310"
                  y="50"
                  width="180"
                  height="80"
                  fill="#7c3aed"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="400"
                  y="100"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  Java 8 / Tomcat
                </text>
                <text
                  x="400"
                  y="120"
                  textAnchor="middle"
                  fill="#e9d5ff"
                  className="text-xs"
                >
                  決済エンジン
                </text>

                {/* Database */}
                <rect
                  x="570"
                  y="50"
                  width="180"
                  height="80"
                  fill="#dc2626"
                  stroke="#f87171"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="660"
                  y="100"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  Oracle Database
                </text>
                <text
                  x="660"
                  y="120"
                  textAnchor="middle"
                  fill="#fee2e2"
                  className="text-xs"
                >
                  振込・明細データ
                </text>

                {/* Batch Jobs */}
                <rect
                  x="830"
                  y="50"
                  width="150"
                  height="80"
                  fill="#8b5cf6"
                  stroke="#c4b5fd"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="905"
                  y="100"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-sm"
                >
                  Hulft / Batch
                </text>
                <text
                  x="905"
                  y="120"
                  textAnchor="middle"
                  fill="#ede9fe"
                  className="text-xs"
                >
                  定期実行
                </text>

                {/* Connection lines */}
                <line
                  x1="230"
                  y1="90"
                  x2="310"
                  y2="90"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead2)"
                />
                <line
                  x1="490"
                  y1="90"
                  x2="570"
                  y2="90"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead2)"
                />
                <line
                  x1="750"
                  y1="90"
                  x2="830"
                  y2="90"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead2)"
                />

                {/* Network Path */}
                <text
                  x="100"
                  y="200"
                  fill="white"
                  className="font-bold text-sm"
                >
                  ネットワーク・インフラ
                </text>

                <rect
                  x="50"
                  y="230"
                  width="140"
                  height="70"
                  fill="#1e293b"
                  stroke="#64748b"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="120"
                  y="270"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-xs"
                >
                  プロキシ
                </text>

                <rect
                  x="240"
                  y="230"
                  width="140"
                  height="70"
                  fill="#1e293b"
                  stroke="#64748b"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="310"
                  y="270"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-xs"
                >
                  SVN リポジトリ
                </text>

                <rect
                  x="430"
                  y="230"
                  width="140"
                  height="70"
                  fill="#1e293b"
                  stroke="#64748b"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="500"
                  y="270"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-xs"
                >
                  監視・疎通確認
                </text>

                <rect
                  x="620"
                  y="230"
                  width="140"
                  height="70"
                  fill="#1e293b"
                  stroke="#64748b"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="690"
                  y="270"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-xs"
                >
                  サーバー室
                </text>

                {/* Processing */}
                <text
                  x="100"
                  y="360"
                  fill="white"
                  className="font-bold text-sm"
                >
                  主要機能
                </text>

                <rect
                  x="50"
                  y="380"
                  width="180"
                  height="60"
                  fill="#059669"
                  stroke="#10b981"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="140"
                  y="410"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-xs"
                >
                  大量明細取得
                </text>

                <rect
                  x="280"
                  y="380"
                  width="180"
                  height="60"
                  fill="#059669"
                  stroke="#10b981"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="370"
                  y="410"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-xs"
                >
                  即日振込実行
                </text>

                <rect
                  x="510"
                  y="380"
                  width="180"
                  height="60"
                  fill="#059669"
                  stroke="#10b981"
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x="600"
                  y="410"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-xs"
                >
                  24/7 運用
                </text>

                <defs>
                  <marker
                    id="arrowhead2"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#9ca3af" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
