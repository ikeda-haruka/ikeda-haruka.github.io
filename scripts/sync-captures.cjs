#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const http = require('http');
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

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureWithCDP(edgePath, tasks) {
  const port = 9222;
  console.log('🌐 Starting Edge browser with remote debugging port ' + port + '...');

  const edgeProc = spawn(edgePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--hide-scrollbars',
    '--disable-gpu',
    'about:blank'
  ]);

  await wait(2000);

  try {
    // 1. Get browser WebSocket debugger URL
    const versionInfo = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${port}/json/version`, res => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const browserWs = new WebSocket(versionInfo.webSocketDebuggerUrl);
    let browserId = 1;
    const sendBrowser = (method, params = {}) => new Promise((resolve) => {
      const curId = browserId++;
      const handler = (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === curId) {
          browserWs.removeEventListener('message', handler);
          resolve(msg.result);
        }
      };
      browserWs.addEventListener('message', handler);
      browserWs.send(JSON.stringify({ id: curId, method, params }));
    });

    await new Promise(r => browserWs.onopen = r);

    // 2. Process each capture task
    for (const task of tasks) {
      console.log(`\n📸 Capturing [${task.isMobile ? 'Mobile' : 'PC'} ${task.width}x${task.height}] ${task.url}...`);
      
      const { targetId } = await sendBrowser('Target.createTarget', { url: task.url });
      const pageWs = new WebSocket(`ws://127.0.0.1:${port}/devtools/page/${targetId}`);
      let pageId = 1;
      const sendPage = (method, params = {}) => new Promise((resolve) => {
        const curId = pageId++;
        const handler = (e) => {
          const msg = JSON.parse(e.data);
          if (msg.id === curId) {
            pageWs.removeEventListener('message', handler);
            resolve(msg.result);
          }
        };
        pageWs.addEventListener('message', handler);
        pageWs.send(JSON.stringify({ id: curId, method, params }));
      });

      await new Promise(r => pageWs.onopen = r);

      // Emulation: set exact device metrics
      await sendPage('Emulation.setDeviceMetricsOverride', {
        width: task.width,
        height: task.height,
        deviceScaleFactor: task.isMobile ? 2 : 1,
        mobile: task.isMobile
      });

      if (task.isMobile) {
        await sendPage('Emulation.setUserAgentOverride', {
          userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
        });
      }

      // Wait for page rendering and animations
      await wait(task.waitMs || (task.isMobile ? 2500 : 2000));

      // Capture screenshot
      const { data } = await sendPage('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: task.width, height: task.height, scale: 1 }
      });

      fs.writeFileSync(task.outputPath, Buffer.from(data, 'base64'));
      console.log(`✓ Saved ${path.basename(task.outputPath)} (${fs.statSync(task.outputPath).size} bytes)`);

      // Close page target
      pageWs.close();
      await sendBrowser('Target.closeTarget', { targetId });
    }

    browserWs.close();
  } finally {
    if (process.platform === 'win32') {
      try {
        execSync(`taskkill /pid ${edgeProc.pid} /T /F`, { stdio: 'ignore' });
      } catch (e) {}
    } else {
      edgeProc.kill();
    }
  }
}

async function main() {
  const edgePath = findEdgeBinary();
  const assetsDir = path.resolve(__dirname, '../src/assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  console.log('🚀 Starting CDP-powered automated screen capture synchronization...\n');

  // 1. Build and launch local Vite preview server for self-portfolio
  console.log('📦 Building portfolio for preview capture...');
  execSync('npm run build', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });

  console.log('🌐 Starting Vite preview server...');
  const preview = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    shell: true,
    cwd: path.resolve(__dirname, '..'),
    stdio: 'ignore'
  });

  await wait(3000);

  try {
    const portfolioPc = path.join(assetsDir, 'portfolio-capture-pc.png');
    const portfolioMobile = path.join(assetsDir, 'portfolio-capture-mobile.png');
    const portfolioLegacy = path.join(assetsDir, 'portfolio-capture.png');

    const olorosoPc = path.join(assetsDir, 'oloroso-capture-pc.png');
    const olorosoMobile = path.join(assetsDir, 'oloroso-capture-mobile.png');
    const olorosoLegacy = path.join(assetsDir, 'oloroso-capture.png');

    const biwakoPc = path.join(assetsDir, 'biwakogym-capture-pc.png');
    const biwakoMobile = path.join(assetsDir, 'biwakogym-capture-mobile.png');
    const biwakoLegacy = path.join(assetsDir, 'biwakogym-capture.png');

    const tasks = [
      // Portfolio
      { url: 'http://localhost:4173', outputPath: portfolioPc, width: 1280, height: 800, isMobile: false },
      { url: 'http://localhost:4173', outputPath: portfolioMobile, width: 390, height: 844, isMobile: true, waitMs: 2500 },
      // Estudio Oloroso
      { url: 'https://oloroso.vercel.app/', outputPath: olorosoPc, width: 1280, height: 800, isMobile: false },
      { url: 'https://oloroso.vercel.app/', outputPath: olorosoMobile, width: 390, height: 844, isMobile: true, waitMs: 3000 },
      // BIWAKO GYM
      { url: 'https://biwakogym.com/', outputPath: biwakoPc, width: 1280, height: 800, isMobile: false },
      { url: 'https://biwakogym.com/', outputPath: biwakoMobile, width: 390, height: 844, isMobile: true, waitMs: 3000 },
    ];

    await captureWithCDP(edgePath, tasks);

    // Sync legacy files
    fs.copyFileSync(portfolioPc, portfolioLegacy);
    fs.copyFileSync(olorosoPc, olorosoLegacy);
    fs.copyFileSync(biwakoPc, biwakoLegacy);

    console.log('\n🎉 All screen captures successfully synchronized with true mobile emulation!');
  } finally {
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
