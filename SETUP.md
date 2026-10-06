# 🎯 池田遥香 ポートフォリオサイト

Java + AI エンジニア向けのモダンなポートフォリオサイト。
React 19 + TypeScript + Tailwind CSS で構築。

## 📋 セクション構成

- **Hero / プロフィール** - 自己紹介とCTA
- **スキル** - 技術スタック一覧
- **職務経歴** - キャリア情報
- **制作物** - プロジェクト紹介
- **システム構成図** - アーキテクチャの可視化
- **Contact** - お問い合わせ

## 🚀 セットアップ方法

### 1. プロフィール画像の配置

添付されたプロフィール画像を以下の場所に配置してください：

```
src/assets/profile.jpg
```

**重要**: 現在は `src/assets/profile.svg` というプレースホルダーが設定されています。
実物の画像に置き換える場合は `App.tsx` の import を update してください：

```typescript
// Before
import profileImage from "./assets/profile.svg";

// After
import profileImage from "./assets/profile.jpg";
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### 3. ビルド

```bash
npm run build
```

`dist/` ディレクトリに本番環境用ファイルが生成されます。

## 📤 GitHub Pages へのデプロイ

### 前提条件

- GitHub アカウント
- リポジトリ `ikeda-haruka.github.io` を作成済み

### デプロイ手順

1. **ローカルで初期化**

```bash
git init
git add .
git commit -m "Initial commit"
```

2. **リモートリポジトリを追加**

```bash
git remote add origin https://github.com/ikeda-haruka/ikeda-haruka.github.io.git
git branch -M main
git push -u origin main
```

3. **デプロイ**

```bash
npm run deploy
```

このコマンドは以下を実行します：

- `npm run build` - プロジェクトをビルド
- `gh-pages -d dist` - `dist/` フォルダを GitHub Pages に pushする

4. **確認**

数分後、`https://ikeda-haruka.github.io` でサイトが公開されます。

## 🛠️ 技術スタック

- **フレームワーク**: React 19
- **言語**: TypeScript 6.0
- **スタイル**: Tailwind CSS 4
- **ビルドツール**: Vite 8
- **デプロイ**: GitHub Pages

## 📁 プロジェクト構造

```
src/
├── components/
│   ├── Header.tsx           # ヘッダー/ナビゲーション
│   ├── Hero.tsx             # プロフィール（Hero セクション）
│   ├── Skills.tsx           # スキルセクション
│   ├── Experience.tsx       # 職務経歴セクション
│   ├── Projects.tsx         # 制作物セクション
│   ├── Architecture.tsx     # システム構成図
│   ├── Contact.tsx          # お問い合わせセクション
│   └── Footer.tsx           # フッター
├── assets/
│   ├── profile.svg          # プロフィール画像（プレースホルダー）
│   ├── profile.jpg          # 本物のプロフィール画像 （配置後）
│   └── ...
├── App.tsx                  # メインアプリケーション
├── main.tsx                 # エントリーポイント
├── index.css                # グローバルスタイル
└── ...
```

## ✏️ カスタマイズ方法

### プロフィール情報の更新

`src/components/Hero.tsx` を編集：

```typescript
-名前 - 説明文 - GitHub / メールアドレス;
```

### スキルの更新

`src/components/Skills.tsx` の `skillsData` 配列を編集

### 職務経歴の更新

`src/components/Experience.tsx` の `experienceData` 配列を編集

### 制作物の更新

`src/components/Projects.tsx` の `projectsData` 配列を編集

### システム構成図の更新

`src/components/Architecture.tsx` の SVG を修正

## 🎨 デザイン

- **カラースキーム**: モダン・ミニマル（黒/白/グレー）
- **背景**: グラデーション（グレー系）
- **アクセントカラー**: ブルー（`#3b82f6`）
- **フォント**: インターネット標準フォント（Segoe UI, Roboto など）
- **レスポンシブ**: モバイル・タブレット・デスクトップに対応

## 📝 注意事項

- SES案件のコードは社内ネットワークのため公開していません
- プロジェクトの詳細やコード例については メールでお問い合わせください
- プロフィール画像は高品質な正方形（JPG/PNG）を推奨

## 🔗 リンク

- **GitHub**: https://github.com/ikeda-haruka
- **メール**: ikedaharuka0215@gmail.com

## 📄 ライセンス

このポートフォリオサイトは個人利用を想定しています。
改用・配布は許可していません。

---

**最終更新**: 2025年10月
