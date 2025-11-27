const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('🌐 Navigating to localhost...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Wait for carousel to load
    await page.waitForTimeout(2000);

    // Check how many testimonial cards are visible in the testimonials section
    const testimonialCount = await page.evaluate(() => {
      const section = document.querySelector('section');
      if (!section) return 0;
      const cards = section.querySelectorAll('[class*="group"][class*="relative"][class*="p-6"]');
      return cards.length;
    });

    console.log(`📊 Visible testimonial cards: ${testimonialCount}`);

    if (testimonialCount === 2) {
      console.log('✅ SUCCESS! 2 testimonials are displayed side by side');
    } else if (testimonialCount === 1) {
      console.log('⚠️  Only 1 testimonial visible');
    } else {
      console.log(`⚠️  Unexpected number of testimonials: ${testimonialCount}`);
    }

    // Take screenshot
    console.log('📸 Taking screenshot...');
    await page.screenshot({ path: 'local-carousel-screenshot.png', fullPage: true });
    console.log('✅ Screenshot saved as local-carousel-screenshot.png');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();
