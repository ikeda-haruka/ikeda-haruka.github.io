#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');

function findEdgeBinary() {
  const possiblePaths = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\Application\\msedge.exe',
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('Microsoft Edge binary not found.');
}

function captureUrl(edgePath, url, outputPath, width, height, waitMs = 3000) {
  return new Promise((resolve, reject) => {
    console.log(`📸 Capturing [${width}x${height}] ${url} -> ${path.basename(outputPath)}...`);
    const args = [
      '--headless',
      '--disable-gpu',
      `--window-size=${width},${height}`,
      `--screenshot=${outputPath}`,
      url
    ];

    const proc = spawn(edgePath, args, { stdio: 'inherit' });
    proc.on('close', (code) => {
      if (code === 0 && fs.existsSync(outputPath)) {
        console.log(`✓ Saved ${outputPath} (${fs.statSync(outputPath).size} bytes)`);
        resolve();
      } else {
        reject(new Error(`Failed to capture ${url} (exit code ${code})`));
      }
    });
  });
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const edgePath = findEdgeBinary();
  const assetsDir = path.resolve(__dirname, '../src/assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  console.log('🚀 Starting automated screen capture synchronization...\n');

  // 1. Build and launch local Vite preview server for self-portfolio
  console.log('📦 Building portfolio for preview capture...');
  execSync('npm run build', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });

  console.log('🌐 Starting Vite preview server...');
  const preview = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    shell: true,
    cwd: path.resolve(__dirname, '..'),
    stdio: 'ignore'
  });

  // Wait for preview server to be ready
  await wait(3000);

  try {
    // A. Portfolio captures (Local latest build)
    const portfolioPc = path.join(assetsDir, 'portfolio-capture-pc.png');
    const portfolioMobile = path.join(assetsDir, 'portfolio-capture-mobile.png');
    const portfolioLegacy = path.join(assetsDir, 'portfolio-capture.png');

    await captureUrl(edgePath, 'http://localhost:4173', portfolioPc, 1280, 800);
    await captureUrl(edgePath, 'http://localhost:4173', portfolioMobile, 390, 844);
    // Copy PC to legacy path for backward compatibility
    fs.copyFileSync(portfolioPc, portfolioLegacy);

    // B. Estudio Oloroso captures
    const olorosoPc = path.join(assetsDir, 'oloroso-capture-pc.png');
    const olorosoMobile = path.join(assetsDir, 'oloroso-capture-mobile.png');
    const olorosoLegacy = path.join(assetsDir, 'oloroso-capture.png');

    await captureUrl(edgePath, 'https://oloroso.vercel.app/', olorosoPc, 1280, 800);
    await captureUrl(edgePath, 'https://oloroso.vercel.app/', olorosoMobile, 390, 844);
    fs.copyFileSync(olorosoPc, olorosoLegacy);

    // C. BIWAKO GYM captures
    const biwakoPc = path.join(assetsDir, 'biwakogym-capture-pc.png');
    const biwakoMobile = path.join(assetsDir, 'biwakogym-capture-mobile.png');
    const biwakoLegacy = path.join(assetsDir, 'biwakogym-capture.png');

    await captureUrl(edgePath, 'https://biwakogym.com/', biwakoPc, 1280, 800);
    await captureUrl(edgePath, 'https://biwakogym.com/', biwakoMobile, 390, 844);
    fs.copyFileSync(biwakoPc, biwakoLegacy);

    console.log('\n🎉 All screen captures successfully synchronized!');
  } finally {
    // Kill preview process
    if (process.platform === 'win32') {
      try {
        execSync(`taskkill /pid ${preview.pid} /T /F`, { stdio: 'ignore' });
      } catch (e) {}
    } else {
      preview.kill();
    }
  }
}

main().catch(err => {
  console.error('\n❌ Capture sync error:', err);
  process.exit(1);
});
