const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('🌐 Navigating to website...');
    await page.goto('https://websites-collections.vercel.app', { waitUntil: 'networkidle' });

    // Wait a bit for all styles to load
    await page.waitForTimeout(2000);

    // Take screenshot
    console.log('📸 Taking screenshot...');
    await page.screenshot({ path: 'vercel-live-screenshot.png', fullPage: true });
    console.log('✅ Screenshot saved as vercel-live-screenshot.png');

    // Check for theme colors in the page
    const primaryColor = await page.evaluate(() => {
      const root = document.documentElement;
      const styles = window.getComputedStyle(root);
      return styles.getPropertyValue('--primary').trim();
    });

    console.log(`\n🎨 Primary Color Value: ${primaryColor}`);

    // Check hero heading
    const heroText = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1 ? h1.textContent : 'Not found';
    });

    console.log(`📝 Hero Heading: ${heroText}`);

    // Check if the violet bloom text is present
    if (heroText.includes('Violet Bloom Theme Active')) {
      console.log('✅ DEPLOYMENT SUCCESSFUL! New text found - Vercel rebuilt with latest code');
    } else {
      console.log('❌ OLD VERSION STILL DEPLOYED - Hero text not updated yet');
    }

    // Check for violet color
    if (primaryColor.includes('112') || primaryColor.includes('#7033ff') || primaryColor.includes('rgb(112, 51, 255)')) {
      console.log('✅ VIOLET THEME DETECTED! Color is correct');
    } else {
      console.log(`⚠️  Color might not be violet yet: ${primaryColor}`);
    }

    // Get background color info
    const bgColor = await page.evaluate(() => {
      const section = document.querySelector('section');
      if (section) {
        const styles = window.getComputedStyle(section);
        return {
          bgColor: styles.backgroundColor,
          bgImage: styles.backgroundImage
        };
      }
      return null;
    });

    if (bgColor) {
      console.log(`\n🎨 Hero Section Background:`, bgColor);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();
