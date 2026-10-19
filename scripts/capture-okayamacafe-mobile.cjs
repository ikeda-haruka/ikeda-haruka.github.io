const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

async function captureLocalMobile() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const distDir = 'C:\\gitHub\\okayamaCafe\\dist';
  const outDir = path.resolve(__dirname, '../src/assets/okayamacafe');
  const targetMobilePath = path.join(outDir, 'okayamacafe-capture-mobile.png');

  // Simple static file server
  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/') reqPath = '/index.html';
    let filePath = path.join(distDir, reqPath);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(distDir, 'index.html');
    }
    const ext = path.extname(filePath);
    const mimeMap = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.svg': 'image/svg+xml',
      '.jpg': 'image/jpeg',
      '.png': 'image/png',
      '.webp': 'image/webp'
    };
    const contentType = mimeMap[ext] || 'application/octet-stream';
    try {
      const data = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch (e) {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  await new Promise(r => server.listen(8089, r));
  console.log('Server listening on http://127.0.0.1:8089');

  const port = 9336;
  const edgeProc = spawn(edgePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    '--force-device-scale-factor=2',
    '--hide-scrollbars',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const versionInfo = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${port}/json/version`, res => {
        let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
      }).on('error', reject);
    });

    const browserWs = new WebSocket(versionInfo.webSocketDebuggerUrl);
    let browserId = 1;
    const sendBrowser = (method, params = {}) => new Promise(res => {
      const curId = browserId++;
      const h = e => {
        const msg = JSON.parse(e.data);
        if (msg.id === curId) {
          browserWs.removeEventListener('message', h);
          res(msg.result);
        }
      };
      browserWs.addEventListener('message', h);
      browserWs.send(JSON.stringify({ id: curId, method, params }));
    });
    await new Promise(r => browserWs.onopen = r);

    const { targetId } = await sendBrowser('Target.createTarget', { url: 'http://127.0.0.1:8089/' });
    const pageWs = new WebSocket(`ws://127.0.0.1:${port}/devtools/page/${targetId}`);
    let pageId = 1;
    const sendPage = (method, params = {}) => new Promise(res => {
      const curId = pageId++;
      const h = e => {
        const msg = JSON.parse(e.data);
        if (msg.id === curId) {
          pageWs.removeEventListener('message', h);
          res(msg.result);
        }
      };
      pageWs.addEventListener('message', h);
      pageWs.send(JSON.stringify({ id: curId, method, params }));
    });
    await new Promise(r => pageWs.onopen = r);

    await sendPage('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });

    console.log('⏳ Waiting for React page to hydrate...');
    await new Promise(r => setTimeout(r, 3000));

    const { data: mobData } = await sendPage('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });
    const mobBuf = Buffer.from(mobData, 'base64');
    fs.writeFileSync(targetMobilePath, mobBuf);
    console.log(`✓ Saved Local Mobile capture to ${targetMobilePath} (${mobBuf.length} bytes)`);

    pageWs.close();
    await sendBrowser('Target.closeTarget', { targetId });
    browserWs.close();
  } finally {
    server.close();
    try {
      execSync(`taskkill /pid ${edgeProc.pid} /T /F`, { stdio: 'ignore' });
    } catch (e) {}
  }
}

captureLocalMobile().catch(err => {
  console.error('Error capturing local mobile:', err);
  process.exit(1);
});
