import { test, expect } from '@playwright/test';

test.describe('Why Choose Us Section', () => {
  test('should display redesigned section with modern cards', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Wait for the Why Choose section to be visible
    const whyChooseSection = page.locator('section[data-section="why-choose"]');
    await expect(whyChooseSection).toBeVisible();
    
    // Take full page screenshot
    await page.screenshot({ 
      path: 'screenshots/full-page.png', 
      fullPage: true 
    });
    
    // Take screenshot of just the Why Choose section
    await whyChooseSection.screenshot({ 
      path: 'screenshots/why-choose-section.png' 
    });
    
    // Scroll to the section to ensure it's in view
    await whyChooseSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000); // Wait for animations
    
    // Take screenshot after scroll
    await whyChooseSection.screenshot({ 
      path: 'screenshots/why-choose-scrolled.png' 
    });
    
    // Test hover effects on cards
    const firstCard = whyChooseSection.locator('.group').first();
    await firstCard.hover();
    await page.waitForTimeout(500);
    
    // Screenshot with hover effect
    await whyChooseSection.screenshot({ 
      path: 'screenshots/why-choose-hover.png' 
    });
    
    // Verify cards are visible
    const cards = whyChooseSection.locator('.group');
    await expect(cards).toHaveCount(3);
    
    // Verify icons are present
    const icons = whyChooseSection.locator('svg');
    await expect(icons.first()).toBeVisible();
    
    // Verify CTA button is visible
    const ctaButton = whyChooseSection.locator('a[href="/contact"]');
    await expect(ctaButton).toBeVisible();
    
    console.log('✅ All screenshots captured successfully!');
  });
});

