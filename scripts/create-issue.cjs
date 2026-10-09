#!/usr/bin/env node
const { createIssue } = require('./github-api.cjs');

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
Usage:
  node scripts/create-issue.cjs <title> [body] [--labels <label1,label2>] [--close]

Examples:
  node scripts/create-issue.cjs "[feat] お問い合わせフォームバリデーション追加" "メールアドレス形式チェックを実装" --labels "enhancement"
  node scripts/create-issue.cjs "[fix] モバイルメニューの開閉アニメーション修正" --close
`);
    process.exit(0);
  }

  let title = '';
  let body = '';
  let labels = [];
  let close = false;

  let isBodyNext = false;
  let isLabelsNext = false;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--close') {
      close = true;
    } else if (arg === '--labels') {
      isLabelsNext = true;
    } else if (isLabelsNext) {
      labels = arg.split(',').map(l => l.trim()).filter(Boolean);
      isLabelsNext = false;
    } else if (!title) {
      title = arg;
    } else if (!body) {
      body = arg;
    } else {
      body += '\n' + arg;
    }
  }

  if (!title) {
    console.error('Error: Issue title is required.');
    process.exit(1);
  }

  try {
    const issue = await createIssue({
      title,
      body: body || `## 概要\n${title}\n\n## ステータス\n${close ? '✅ 完了' : '進行中 / 未完了'}`,
      labels,
      close
    });
    console.log(`\n🎉 Success! View issue at: ${issue.html_url}`);
  } catch (err) {
    console.error('Failed to create issue:', err.message);
    process.exit(1);
  }
}

main();
