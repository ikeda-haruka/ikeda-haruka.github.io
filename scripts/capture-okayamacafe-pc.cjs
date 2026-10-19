const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

async function captureLocalPc() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const distDir = 'C:\\gitHub\\okayamaCafe\\dist';
  const outDir = path.resolve(__dirname, '../src/assets/okayamacafe');
  const targetPcPath = path.join(outDir, 'okayamacafe-capture-pc.png');

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

  await new Promise(r => server.listen(8090, r));

  const port = 9337;
  const edgeProc = spawn(edgePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--window-size=1280,800',
    '--force-device-scale-factor=1',
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

    const { targetId } = await sendBrowser('Target.createTarget', { url: 'http://127.0.0.1:8090/' });
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
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });

    console.log('⏳ Waiting for React page to hydrate...');
    await new Promise(r => setTimeout(r, 3000));

    const { data: pcData } = await sendPage('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });
    const pcBuf = Buffer.from(pcData, 'base64');
    fs.writeFileSync(targetPcPath, pcBuf);
    console.log(`✓ Saved Local PC capture to ${targetPcPath} (${pcBuf.length} bytes)`);

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

captureLocalPc().catch(err => {
  console.error('Error capturing local PC:', err);
  process.exit(1);
});
