#!/usr/bin/env node
const { closeIssue } = require('./github-api.cjs');

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
Usage:
  node scripts/close-issue.cjs <issueNumber> [comment]

Examples:
  node scripts/close-issue.cjs 13 "対応完了しました"
`);
    process.exit(0);
  }

  const issueNumber = parseInt(args[0], 10);
  if (isNaN(issueNumber)) {
    console.error('Error: Invalid issue number.');
    process.exit(1);
  }

  const comment = args.slice(1).join(' ') || '';

  try {
    await closeIssue({ issueNumber, comment });
  } catch (err) {
    console.error('Failed to close issue:', err.message);
    process.exit(1);
  }
}

main();
