import { chromium } from 'playwright';

const BASE = 'http://localhost:4321';

(async () => {
  const browser = await chromium.launch({ headless: true });

  // Mobile - iPhone 14
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 });
  const mPage = await mobile.newPage();
  await mPage.goto(BASE, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await mPage.waitForTimeout(1500);
  await mPage.screenshot({ path: 'hero_mobile.png', clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('📱 Mobile hero → hero_mobile.png (390x844)');

  // Tablet - iPad
  const tablet = await browser.newContext({ viewport: { width: 768, height: 1024 }, deviceScaleFactor: 2 });
  const tPage = await tablet.newPage();
  await tPage.goto(BASE, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await tPage.waitForTimeout(1500);
  await tPage.screenshot({ path: 'hero_tablet.png', clip: { x: 0, y: 0, width: 768, height: 1024 } });
  console.log('📋 Tablet hero → hero_tablet.png (768x1024)');

  // Desktop - 1440p
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const dPage = await desktop.newPage();
  await dPage.goto(BASE, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await dPage.waitForTimeout(1500);
  await dPage.screenshot({ path: 'hero_desktop.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('🖥️  Desktop hero → hero_desktop.png (1440x900)');

  await browser.close();
  console.log('\nDone! Check the 3 screenshots to verify hero responsiveness.');
})();
