const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

async function captureProteinPc() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const assetsDir = path.resolve(__dirname, '../src/assets');
  const targetPcPath = path.join(assetsDir, 'protein-capture-pc.png');
  const targetLegacyPath = path.join(assetsDir, 'protein-capture.png');

  console.log('🌐 Starting Edge browser for BERRY MILK PC capture...');
  const port = 9334;
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

    console.log('📸 Navigating to https://protein-sandy.vercel.app/ ...');
    const { targetId } = await sendBrowser('Target.createTarget', { url: 'https://protein-sandy.vercel.app/' });
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

    console.log('⏳ Waiting for all images including hero protein to fully decode...');
    await sendPage('Runtime.evaluate', {
      awaitPromise: true,
      expression: `
        new Promise((resolve) => {
          const check = () => {
            const heroImg = document.querySelector('.hero-v2__img-main');
            const allImages = Array.from(document.images);
            const isHeroReady = heroImg && heroImg.complete && heroImg.naturalWidth > 0;
            const areAllReady = allImages.every(img => img.complete);
            if (isHeroReady && areAllReady) {
              resolve(true);
            } else {
              setTimeout(check, 100);
            }
          };
          check();
          setTimeout(() => resolve(false), 10000);
        })
      `
    });

    // Additional buffer for animations to settle
    await new Promise(r => setTimeout(r, 1500));

    // Verify hero protein dimensions
    const verify = await sendPage('Runtime.evaluate', {
      expression: `(() => {
        const img = document.querySelector('.hero-v2__img-main');
        return img ? { complete: img.complete, naturalWidth: img.naturalWidth, rect: img.getBoundingClientRect() } : null;
      })()`,
      returnByValue: true
    });
    console.log('Hero protein status:', JSON.stringify(verify.result.value));

    // Capture screenshot
    const { data } = await sendPage('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });

    const buf = Buffer.from(data, 'base64');
    fs.writeFileSync(targetPcPath, buf);
    fs.writeFileSync(targetLegacyPath, buf);
    console.log(`✓ Successfully updated ${targetPcPath} (${buf.length} bytes)`);
    console.log(`✓ Successfully synced ${targetLegacyPath} (${buf.length} bytes)`);

    pageWs.close();
    await sendBrowser('Target.closeTarget', { targetId });
    browserWs.close();
  } finally {
    try {
      execSync(`taskkill /pid ${edgeProc.pid} /T /F`, { stdio: 'ignore' });
    } catch (e) {}
  }
}

captureProteinPc().catch(err => {
  console.error('Error capturing protein desktop:', err);
  process.exit(1);
});
