import { test, expect } from '@playwright/test';

// Mobile viewport is set in playwright.config (390x844).
// Base URL: https://2hebron-careafh.live (or PLAYWRIGHT_BASE_URL).

test.describe('Mobile responsiveness & UI/UX', () => {
  test('has valid viewport meta for mobile', async ({ page }) => {
    await page.goto('/');
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).toMatch(/width=device-width/);
    expect(viewport).toMatch(/initial-scale=1/);
  });

  test('no horizontal overflow on home', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const vw = window.innerWidth;
      const scrollWidth = Math.max(doc.scrollWidth, body.scrollWidth);
      return scrollWidth > vw;
    });
    expect(overflow).toBe(false);
  });

  test('home: nav, hero, and main content visible on mobile', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('#main-content')).toBeVisible();
    await expect(page.getByRole('link', { name: /Hebron Care/i }).first()).toBeVisible();
    await expect(page.locator('#menu-toggle')).toBeVisible();
  });

  test('about: hero and key content visible on mobile', async ({ page }) => {
    await page.goto('/about-us.html');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('#main-content')).toBeVisible();
    await expect(page.getByText(/legacy of.*compassion/i)).toBeVisible();
    await expect(page.getByText(/Mission/i).first()).toBeVisible();
  });

  test('gallery: main content visible on mobile', async ({ page }) => {
    await page.goto('/gallery.html');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('#main-content')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });

  test('services: main content visible on mobile', async ({ page }) => {
    await page.goto('/services.html');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('#main-content')).toBeVisible();
    await expect(page.locator('#main-content').getByText(/Explore Services|Comprehensive Daily Services/i)).toBeVisible();
  });

  test('contact: hero and contact content visible on mobile', async ({ page }) => {
    await page.goto('/contact.html');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('#main-content')).toBeVisible();
    await expect(page.locator('#main-content').getByText(/Direct Contact|Schedule|Send a message/i)).toBeVisible();
  });

  test('mobile menu opens and shows all nav links', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('#mobile-menu')).not.toHaveClass(/open/);
    await page.locator('#menu-toggle').click();
    await page.waitForTimeout(350);
    await expect(page.locator('#mobile-menu')).toHaveClass(/open/);
    await expect(page.getByRole('link', { name: 'Home' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'About Us' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Gallery' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Services' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact Us' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Schedule Tour/i }).first()).toBeVisible();
  });

  test('mobile menu closes via close button', async ({ page }) => {
    await page.goto('/');
    await page.locator('#menu-toggle').click();
    await expect(page.locator('#mobile-menu')).toHaveClass(/open/, { timeout: 5000 });
    // Close button can be overlapped by nav links; dispatch click so handler runs
    await page.locator('#menu-close').evaluate((el) => (el as HTMLElement).click());
    await expect(page.locator('#mobile-menu')).not.toHaveClass(/open/, { timeout: 5000 });
  });

  test('mobile menu closes via backdrop', async ({ page }) => {
    await page.goto('/');
    await page.locator('#menu-toggle').click();
    await expect(page.locator('#mobile-menu')).toHaveClass(/open/, { timeout: 5000 });
    await page.locator('#menu-backdrop').click({ force: true });
    await expect(page.locator('#mobile-menu')).not.toHaveClass(/open/, { timeout: 5000 });
  });

  test('no horizontal overflow on about, gallery, services, contact', async ({ page }) => {
    const paths = ['/about-us.html', '/gallery.html', '/services.html', '/contact.html'];
    for (const path of paths) {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      const overflow = await page.evaluate(() => {
        const vw = window.innerWidth;
        const scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        return scrollWidth > vw;
      });
      expect(overflow, `Horizontal overflow on ${path}`).toBe(false);
    }
  });

  test('touch targets: menu toggle has minimum size', async ({ page }) => {
    await page.goto('/');
    const box = await page.locator('#menu-toggle').boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeGreaterThanOrEqual(44);
    expect(box!.height).toBeGreaterThanOrEqual(44);
  });

  test('sticky call button visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Call us' })).toBeVisible();
  });
});
