const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('Starting browser...');
  const browser = await chromium.launch();

  try {
    // Light mode screenshot
    console.log('Capturing light mode screenshot...');
    const lightContext = await browser.newContext({
      colorScheme: 'light'
    });
    const lightPage = await lightContext.newPage();
    await lightPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await lightPage.screenshot({ path: './light-mode.png', fullPage: true });
    console.log('Light mode screenshot saved to: ./light-mode.png');
    await lightContext.close();

    // Dark mode screenshot
    console.log('Capturing dark mode screenshot...');
    const darkContext = await browser.newContext({
      colorScheme: 'dark'
    });
    const darkPage = await darkContext.newPage();
    await darkPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await darkPage.screenshot({ path: './dark-mode.png', fullPage: true });
    console.log('Dark mode screenshot saved to: ./dark-mode.png');
    await darkContext.close();

    console.log('Screenshots completed successfully!');
  } catch (error) {
    console.error('Error taking screenshots:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
