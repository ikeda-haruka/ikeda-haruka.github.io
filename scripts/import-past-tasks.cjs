const { createIssue } = require('./github-api.cjs');

const pastTasks = [
  {
    title: "[feat] フラメンコスタジオ「Estudio Oloroso」WEBサイト制作実績の追加",
    labels: ["enhancement", "portfolio"],
    close: true,
    body: `## 概要
フラメンコスタジオ「Estudio Oloroso」のWebサイト制作・フロントエンド開発実績をポートフォリオに追加。

## 実施内容
- [x] プロジェクトデータ（タイトル、概要、詳細、技術スタック）の定義
- [x] 管理画面（Decap CMS / /admin/）のスクリーンショットギャラリー（5枚）および拡大モーダル表示機能の実装
- [x] ブラウザモック形式のファーストビュー画面キャッチの掲載
- [x] Vercel公開リンクおよびGitHubリポジトリリンクの連携

## 関連技術
Next.js (App Router), TypeScript, Tailwind CSS, Decap CMS, Vercel

## ステータス
✅ 対応完了（GitHub Pages反映済）`
  },
  {
    title: "[feat] 制作実績一覧のカテゴリ分離とフィルター機能の実装",
    labels: ["enhancement", "UI/UX"],
    close: true,
    body: `## 概要
ポートフォリオ実績用制作物（自主制作）と参画案件（クライアントワーク）を明確に区別し、閲覧者が目的に応じて絞り込めるタブフィルターを実装。

## 実施内容
- [x] プロジェクトカテゴリの定義（portfolio, client_web, client_enterprise）
- [x] タブ切り替えUI（すべて、Webサイト制作、自主制作物、参画案件）の実装
- [x] 各カテゴリの件数バッジ表示
- [x] 守秘義務に関する留意事項バナーの設置

## 関連技術
React, TypeScript, Tailwind CSS

## ステータス
✅ 対応完了（GitHub Pages反映済）`
  },
  {
    title: "[feat] 「BIWAKO GYM」WEBサイト共同開発実績の追加",
    labels: ["enhancement", "client-work"],
    close: true,
    body: `## 概要
滋賀県草津市のトレーニング＆コンディショニングジム「BIWAKO GYM」の公式Webサイト共同開発（2名体制）実績を参画案件に追加。

## 実施内容
- [x] 店舗ファーストビュー画面キャッチ画像の追加・最適化
- [x] 2名共同開発体制における役割、担当領域、制作概要の記載
- [x] Schema.org（HealthClub）構造化マークアップや地域SEO（MEO）施策の記載
- [x] 実サイト（https://biwakogym.com/）への外部リンク設置

## 関連技術
HTML5, CSS3, JavaScript, レスポンシブWebデザイン, JSON-LD, SEO

## ステータス
✅ 対応完了（GitHub Pages反映済）`
  },
  {
    title: "[docs] 「Estudio Oloroso」設計・提案ドキュメント公開とダウンロード機能の実装",
    labels: ["documentation", "portfolio"],
    close: true,
    body: `## 概要
Webサイトリニューアル推進にあたり作成したデザイン企画提案書（PPTX）および全画面レイアウト・コンテンツ要件定義書（XLSX）をポートフォリオ上で閲覧・ダウンロードできるように実装。

## 実施内容
- [x] docs配下の資料配置（デザインプレビュー＆リニューアル構成案.pptx、レイアウト構成・コンテンツ一覧.xlsx）
- [x] ドキュメントカードUIの設計（フォーマット、ファイルサイズ、主要ポイント一覧）
- [x] GitHubオンライン閲覧リンクおよびワンクリックダウンロードボタンの設置
- [x] ViteのBaseパスマッピングに対応したダウンロードURLリゾルバーの実装

## 関連技術
PowerPoint (PPTX), Excel (XLSX), Vite, React

## ステータス
✅ 対応完了（GitHub Pages反映済）`
  },
  {
    title: "[docs] 「Estudio Oloroso」要件定義のGitHub Issues移行とチケット駆動開発アピールの追加",
    labels: ["documentation", "project-management"],
    close: true,
    body: `## 概要
初期Excel定義書の記載内容をGitHub Issuesへチケット化し、アジャイルなタスク管理へ移行した経緯をポートフォリオに記載。GitHub Issuesを活用したタスク管理能力をアピール。

## 実施内容
- [x] docs/oldへの初期Excelファイル移動に伴うパス更新とアーカイブ保管理由の記載
- [x] GitHub Issuesへのタスク移行に関する説明文およびハイライトバナーの追加
- [x] GitHub Issues（https://github.com/ikeda-haruka/oloroso/issues）へのリンクボタン設置
- [x] 初期要件の設計根拠としてdocs/old資料のダウンロード継続提供

## 関連技術
GitHub Issues, チケット駆動開発, 要件定義, プロジェクト管理

## ステータス
✅ 対応完了（GitHub Pages反映済）`
  },
  {
    title: "[design] ポートフォリオ全体のUI/UXモダン化",
    labels: ["UI/UX", "design"],
    close: true,
    body: `## 概要
格式ばったデザインから脱却し、モダンなWebサイト制作ができるデザイナー＆エンジニアであることを視覚的に伝えるレイアウト・スタイリングに刷新。

## 実施内容
- [x] 背景へのソフトなラジアルグラデーション光演出の導入
- [x] グラスモーフィズム（backdrop-blur、ガラス質感ボーダー）コンポーネントの実装
- [x] グラデーションテキスト、洗練された配色パレット（スレート×インディゴ×パープル）の適用
- [x] カードのシャドウ、ホバーアニメーション、モダンタイポグラフィ（Plus Jakarta Sans / Noto Sans JP）の整備

## 関連技術
Tailwind CSS, グラスモーフィズム, UI/UXデザイン, CSSアニメーション

## ステータス
✅ 対応完了（GitHub Pages反映済）`
  },
  {
    title: "[fix] 大画面モニター（ワイド・WQHD）における中央揃えレイアウト崩れの修正",
    labels: ["bug", "css"],
    close: true,
    body: `## 概要
大画面モニター（2560px等）で閲覧した際に、Hero以外のセクション（ヘッダー、制作実績、スキル、経歴等）が画面左端に張り付いてしまう不具合を修正。

## 原因
\`src/index.css\` に定義されていたレイヤー外の全要素リセット \`* { margin: 0; }\` が、Tailwind CSS v4の \`@layer utilities\` にある \`.mx-auto\`（\`margin-inline: auto\`）をCSSカスケードレイヤーの仕様により上書きしていたため。

## 実施内容
- [x] \`src/index.css\` から競合していた全要素リセットブロックを削除
- [x] 各セクション（Header, Projects, Skills, Architecture, Experience, Contact, Footer）のコンテナに \`w-full\` を明示
- [x] 2560px環境でのDOM測定を行い、全セクションの完全な左右均等中央揃え（x=685px）を確認

## 関連技術
CSS Cascade Layers, Tailwind CSS v4, レスポンシブデザイン

## ステータス
✅ 対応完了（GitHub Pages反映済）`
  },
  {
    title: "[refactor] 「このポートフォリオの制作と公開」を制作実績（自主制作物）へ統合",
    labels: ["refactor", "portfolio"],
    close: true,
    body: `## 概要
システム構成セクション内にあった「このポートフォリオの制作と公開」を、制作実績（自主制作物・Webサイト制作）の独立した実績カードとして統合。

## 実施内容
- [x] 実績データに「エンジニアポートフォリオ（ikeda-haruka.github.io）」を追加
- [x] ファーストビューの実画面からブラウザモック用画面キャッチ画像を生成・掲載
- [x] 制作の進め方（3ステップ）およびCI/CD自動デプロイフロー（4ステップ色分けブロック）をカード内に内包
- [x] システム構成セクションを業務システム（化学物質管理・銀行決済）のアーキテクチャ実績に特化
- [x] ヘッダーナビゲーション表記を「システム構成」へ整理

## 関連技術
React 19, TypeScript, Tailwind CSS, Vite, GitHub Pages, GitHub Actions (CI/CD)

## ステータス
✅ 対応完了（GitHub Pages反映済）`
  },
  {
    title: "[docs] 「Estudio Oloroso」設計資料におけるGeminiプロンプト作成および目視レビュー成果物の明記",
    labels: ["documentation", "AI"],
    close: true,
    body: `## 概要
フラメンコスタジオ「Estudio Oloroso」の設計・提案ドキュメント（企画提案書・画面要件定義）について、Google Workspace上でGeminiプロンプトを活用して作成し、目視確認・詳細レビューを行って仕上げた成果物である旨を明記。

## 実施内容
- [x] ドキュメントセクション見出しに「🤖 Geminiプロンプト作成 × 目視レビュー成果物」バッジを追加
- [x] ドキュメント作成プロセスの説明ハイライトバナーを設置
- [x] PPTXおよびXLSXの各カードに作成方法バッジ（✨ Googleスライド/スプレッドシート × Geminiプロンプト作成 ＋ 目視レビュー）を追加
- [x] 各ドキュメントの説明文・主要記載項目にAI活用と品質レビュー体制を明記

## 関連技術
Gemini, Googleスプレッドシート, Googleスライド, プロンプトエンジニアリング, ドキュメントレビュー

## ステータス
✅ 対応完了（GitHub Pages反映済）`
  },
  {
    title: "[fix] スマホ（iPhone）閲覧時における大見出しのフォントサイズと改行位置の最適化",
    labels: ["bug", "mobile", "UI/UX"],
    close: true,
    body: `## 概要
iPhone等のスマートフォンで閲覧した際に、大見出しの文字サイズが大きすぎて「ト」や「を、」「に。」などの文字・助詞が1文字だけ次行に落ちて不自然に分割される現象を解消。

## 実施内容
- [x] ファーストビュー大見出し（h1）のスマホ文字サイズを \`text-[25px]\` に最適化
- [x] \`inline-block\` による意味単位のグループ化を適用し、スマホ画面で美しい2行配置に統一
- [x] セクション見出し（h2: 制作実績・参画プロジェクト等）のスマホ文字サイズを \`text-2xl\` に調整し、\`inline-block\` で単語分割を防止
- [x] プロジェクトカードタイトルの文字サイズ調整およびリード文の行間・サイズ微調整
- [x] iPhone（390px幅）エミュレーションによるスクリーンショット検証の実施

## 関連技術
モバイルレスポンシブ, 日本語タイポグラフィ, 禁則処理, Tailwind CSS

## ステータス
✅ 対応完了（GitHub Pages反映済）`
  }
];

async function main() {
  console.log(`Starting import of ${pastTasks.length} past tasks to GitHub Issues...`);
  for (let i = 0; i < pastTasks.length; i++) {
    const task = pastTasks[i];
    try {
      await createIssue({
        title: task.title,
        body: task.body,
        labels: task.labels,
        close: task.close
      });
      // 短い待機を入れてRate limit対策
      await new Promise(r => setTimeout(r, 600));
    } catch (err) {
      console.error(`Failed to create task ${i + 1}:`, err.message);
    }
  }
  console.log('All past tasks imported successfully!');
}

main();
