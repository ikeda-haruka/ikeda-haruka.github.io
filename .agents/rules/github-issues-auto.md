---
description: Automatically create GitHub Issues for user requests and track development tasks
globs: ["**/*"]
---

# GitHub Issues 自動タスク追加ルール

ユーザーから開発・改修・デザイン変更・ドキュメント追加などのリクエストを受け取った際は、以下のルールを自動的に適用してください。

1. **自動起票の実行**:
   ユーザーのリクエスト内容を明確なタイトルとタスクリスト（Markdown）にまとめ、`node scripts/create-issue.cjs` を実行してGitHub Issuesにチケットを即座に作成する。
   - ラベル例: `enhancement`, `bug`, `design`, `documentation`, `refactor`
2. **Issue番号の明記**:
   ユーザーへの回答時に、起票したGitHub Issueの番号とリンク（`#11` など）を案内する。
3. **完了時のクローズ**:
   作業が完了した際はコミットメッセージに `Closes #XX` を含めるか、Issueを完了状態（closed/completed）に更新する。
