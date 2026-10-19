const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

async function captureOkayamaCafe() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const outDir = path.resolve(__dirname, '../src/assets/okayamacafe');
  const targetPcPath = path.join(outDir, 'okayamacafe-capture-pc.png');
  const targetMobilePath = path.join(outDir, 'okayamacafe-capture-mobile.png');

  console.log('🌐 Starting Edge browser for OKAYAMA CAFE capture...');
  const port = 9335;
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

    console.log('📸 Navigating to https://okayama-cafe.infinityfreeapp.com/ ...');
    const { targetId } = await sendBrowser('Target.createTarget', { url: 'https://okayama-cafe.infinityfreeapp.com/' });
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

    // 1. PC Capture
    await sendPage('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });

    console.log('⏳ Waiting for page to load...');
    await new Promise(r => setTimeout(r, 6000));

    const titleRes = await sendPage('Runtime.evaluate', { expression: 'document.title' });
    console.log('Page title:', titleRes.result.value);

    const { data: pcData } = await sendPage('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });
    const pcBuf = Buffer.from(pcData, 'base64');
    fs.writeFileSync(targetPcPath, pcBuf);
    console.log(`✓ Saved PC capture to ${targetPcPath} (${pcBuf.length} bytes)`);

    // 2. Mobile Capture
    await sendPage('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 2000));

    const { data: mobData } = await sendPage('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });
    const mobBuf = Buffer.from(mobData, 'base64');
    fs.writeFileSync(targetMobilePath, mobBuf);
    console.log(`✓ Saved Mobile capture to ${targetMobilePath} (${mobBuf.length} bytes)`);

    pageWs.close();
    await sendBrowser('Target.closeTarget', { targetId });
    browserWs.close();
  } finally {
    try {
      execSync(`taskkill /pid ${edgeProc.pid} /T /F`, { stdio: 'ignore' });
    } catch (e) {}
  }
}

captureOkayamaCafe().catch(err => {
  console.error('Error capturing okayama cafe:', err);
  process.exit(1);
});
