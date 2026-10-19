const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'projectsData.ts');
const content = fs.readFileSync(filePath, 'utf8');

const arrayStartToken = 'export const projectsData: Project[] = [';
const startIndex = content.indexOf(arrayStartToken);

if (startIndex === -1) {
  console.error('Could not find projectsData array declaration.');
  process.exit(1);
}

const header = content.slice(0, startIndex + arrayStartToken.length);
const rest = content.slice(startIndex + arrayStartToken.length);

// 最後の "];" を探す
const lastBracketIndex = rest.lastIndexOf('];');
if (lastBracketIndex === -1) {
  console.error('Could not find end of projectsData array.');
  process.exit(1);
}

const arrayBody = rest.slice(0, lastBracketIndex);
const footer = rest.slice(lastBracketIndex);

// 各オブジェクトの区切りを分割する
// 各プロジェクトはトップレベルの `  {\n` で始まり `  },\n` で終わる
const lines = arrayBody.split(/\r?\n/);

const projects = [];
let currentLines = [];
let braceDepth = 0;
let inProject = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!inProject) {
    if (line.trim() === '{') {
      inProject = true;
      braceDepth = 1;
      currentLines = [line];
    }
  } else {
    currentLines.push(line);
    for (let c of line) {
      if (c === '{') braceDepth++;
      else if (c === '}') braceDepth--;
    }
    if (braceDepth === 0) {
      // 1プロジェクト終了
      const projectText = currentLines.join('\n');
      const idMatch = projectText.match(/id:\s*"([^"]+)"/);
      const id = idMatch ? idMatch[1] : `unknown_${projects.length}`;
      projects.push({ id, text: projectText });
      inProject = false;
      currentLines = [];
    }
  }
}

console.log('Found projects:', projects.map(p => p.id));

// 実案件リスト
const clientProjectIds = ['chemical', 'sp-protein', 'biwakogym', 'flamenco-flyer', 'bank'];

// 目的の並び順
const targetOrder = [
  'chemical',
  'sp-protein',
  'biwakogym',
  'flamenco-flyer',
  'bank',
  'oloroso',
  'dental',
  'nurse',
  'nailsalon',
  'protein',
  'portfolio'
];

// 各プロジェクトのテキストを調整（実案件には isClientWork: true を付与）
const projectMap = new Map();
for (const p of projects) {
  let text = p.text;
  if (clientProjectIds.includes(p.id)) {
    if (!text.includes('isClientWork: true')) {
      // badgeType の次の行に isClientWork: true, を挿入
      text = text.replace(/(badgeType:\s*"[^"]+",)/, '$1\n    isClientWork: true,');
    }
  }
  // 末尾のカンマ確認
  text = text.trim();
  if (text.endsWith(',')) {
    text = text.slice(0, -1);
  }
  projectMap.set(p.id, text);
}

// targetOrder 順に並べる
const reorderedTexts = targetOrder.map(id => {
  const t = projectMap.get(id);
  if (!t) throw new Error(`Project ${id} not found in map`);
  return '  ' + t;
});

const newArrayBody = '\n' + reorderedTexts.join(',\n') + '\n';
const newContent = header + newArrayBody + footer;

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully reordered projects and added isClientWork flag!');
