const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

async function captureNailsalon() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const assetsDir = path.resolve(__dirname, '../src/assets');
  const port = 9335;

  console.log('🌐 Starting Edge browser for Nailsalon captures...');
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
          browserWs.removeEventListener('message', handler);
          res(msg.result);
        }
      };
      const handler = (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === curId) {
          browserWs.removeEventListener('message', handler);
          res(msg.result);
        }
      };
      browserWs.addEventListener('message', handler);
      browserWs.send(JSON.stringify({ id: curId, method, params }));
    });
    await new Promise(r => browserWs.onopen = r);

    const tasks = [
      // 1. PC Main Homepage
      {
        url: 'https://nailsalon-inky.vercel.app/',
        outputPath: path.join(assetsDir, 'nailsalon-capture-pc.png'),
        legacyPath: path.join(assetsDir, 'nailsalon-capture.png'),
        width: 1280,
        height: 800,
        isMobile: false,
        waitMs: 3000
      },
      // 2. Mobile Main Homepage
      {
        url: 'https://nailsalon-inky.vercel.app/',
        outputPath: path.join(assetsDir, 'nailsalon-capture-mobile.png'),
        width: 390,
        height: 844,
        isMobile: true,
        waitMs: 3000
      },
      // 3. UI Shot: Men's Salon Page (/mens)
      {
        url: 'https://nailsalon-inky.vercel.app/mens',
        outputPath: path.join(assetsDir, 'nailsalon-ui-mens.png'),
        width: 1280,
        height: 800,
        isMobile: false,
        waitMs: 3000
      },
      // 4. UI Shot: Member MyPage (/mypage)
      {
        url: 'https://nailsalon-inky.vercel.app/mypage',
        outputPath: path.join(assetsDir, 'nailsalon-ui-mypage.png'),
        width: 1280,
        height: 800,
        isMobile: false,
        waitMs: 3000
      },
      // 5. UI Shot: Men's EC Shop (/mens/shop)
      {
        url: 'https://nailsalon-inky.vercel.app/mens/shop',
        outputPath: path.join(assetsDir, 'nailsalon-ui-shop.png'),
        width: 1280,
        height: 800,
        isMobile: false,
        waitMs: 3000
      }
    ];

    for (const task of tasks) {
      console.log(`\n📸 Capturing [${task.isMobile ? 'Mobile' : 'PC'}] ${task.url}...`);
      const { targetId } = await sendBrowser('Target.createTarget', { url: task.url });
      const pageWs = new WebSocket(`ws://127.0.0.1:${port}/devtools/page/${targetId}`);
      let pageId = 1;
      const sendPage = (method, params = {}) => new Promise(res => {
        const curId = pageId++;
        const handler = (e) => {
          const msg = JSON.parse(e.data);
          if (msg.id === curId) {
            pageWs.removeEventListener('message', handler);
            res(msg.result);
          }
        };
        pageWs.addEventListener('message', handler);
        pageWs.send(JSON.stringify({ id: curId, method, params }));
      });
      await new Promise(r => pageWs.onopen = r);

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

      // Wait for image loading
      try {
        await sendPage('Runtime.evaluate', {
          awaitPromise: true,
          expression: `
            new Promise((resolve) => {
              const check = () => {
                const imgs = Array.from(document.images);
                if (imgs.every(img => img.complete && (img.naturalWidth > 0 || !img.src))) {
                  resolve(true);
                } else {
                  setTimeout(check, 100);
                }
              };
              check();
              setTimeout(() => resolve(false), 8000);
            })
          `
        });
      } catch (e) {}

      await new Promise(r => setTimeout(r, task.waitMs || 2500));

      const { data } = await sendPage('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: false
      });

      const buf = Buffer.from(data, 'base64');
      fs.writeFileSync(task.outputPath, buf);
      console.log(`✓ Saved ${path.basename(task.outputPath)} (${buf.length} bytes)`);

      if (task.legacyPath) {
        fs.writeFileSync(task.legacyPath, buf);
        console.log(`✓ Saved legacy ${path.basename(task.legacyPath)}`);
      }

      pageWs.close();
      await sendBrowser('Target.closeTarget', { targetId });
    }

    browserWs.close();
    console.log('\n🎉 All Nailsalon captures saved successfully!');
  } finally {
    try {
      execSync(`taskkill /pid ${edgeProc.pid} /T /F`, { stdio: 'ignore' });
    } catch (e) {}
  }
}

captureNailsalon().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
