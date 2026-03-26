import { chromium } from 'playwright';

const BASE = 'http://localhost:4321';
const REFERENCE_PAGE = '/pricing/';
const TEST_PAGES = ['/privacy/', '/terms/'];

async function extractPageStructure(page, url) {
  await page.goto(`${BASE}${url}`, { waitUntil: 'domcontentloaded' });

  return await page.evaluate(() => {
    // Desktop nav links — get all links inside the pill nav container
    const pillContainer = document.querySelector('nav .rounded-full');
    const desktopNav = pillContainer
      ? [...pillContainer.querySelectorAll('a')].map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') }))
      : [];

    // Mobile nav links
    const mobileNav = [...document.querySelectorAll('#mobile-nav a')]
      .map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') }));

    // Has mobile overlay
    const hasMobileOverlay = !!document.getElementById('mobile-nav-overlay');

    // Nav style: check if pill nav exists (look for the backdrop-blur pill)
    const hasPillNav = !!document.querySelector('nav .rounded-full[class*="backdrop-blur"]');

    // Has old-style solid dark nav bar (the one with bg-[#2D2A26]/95)
    const navEl = document.querySelector('nav');
    const navClasses = navEl ? navEl.className : '';
    const hasOldNav = navClasses.includes('2D2A26') && navClasses.includes('border-b');

    // Logo text size
    const logoSpan = document.querySelector('a[aria-label*="Skagit River"] span');
    const logoClasses = logoSpan ? logoSpan.className : '';

    // CTA button (Schedule a Tour in nav)
    const allNavLinks = navEl ? [...navEl.querySelectorAll('a')] : [];
    const hasCTA = allNavLinks.some(a => a.textContent.includes('Schedule a Tour'));

    // Breadcrumb
    const hasBreadcrumb = !!document.querySelector('nav[aria-label="Breadcrumb"]');

    // Footer structure
    const footer = document.querySelector('footer');
    const footerClasses = footer ? footer.className : '';
    const footerLinks = footer ? [...footer.querySelectorAll('a:not([href*="tel:"])')].map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') })) : [];
    const hasFooterCTA = footer ? !!footer.querySelector('a[href*="tel:"]') : false;
    const hasFooterAddress = footer ? footer.textContent.includes('2120 Forest Dr') : false;
    const hasFooterLicense = footer ? footer.textContent.includes('758550') : false;
    const hasTakeAction = footer ? footer.textContent.includes('Take Action Today') : false;

    // Skip link
    const hasSkipLink = !!document.querySelector('.skip-link');

    // Copyright
    const copyrightText = document.querySelector('#copyright-year')?.parentElement?.textContent?.trim() || '';
    const hasEncodingArtifact = document.body.innerHTML.includes('Â©') || document.body.innerHTML.includes('â€');

    // prefers-reduced-motion
    const styles = [...document.querySelectorAll('style')].map(s => s.textContent).join('');
    const hasReducedMotion = styles.includes('prefers-reduced-motion');

    return {
      desktopNav,
      mobileNav,
      hasMobileOverlay,
      hasPillNav,
      hasOldNav,
      logoClasses,
      hasCTA,
      hasBreadcrumb,
      footerClasses: footerClasses.substring(0, 100),
      footerLinkCount: footerLinks.length,
      footerLinks,
      hasFooterCTA,
      hasFooterAddress,
      hasFooterLicense,
      hasTakeAction,
      hasSkipLink,
      copyrightText,
      hasEncodingArtifact,
      hasReducedMotion,
    };
  });
}

function compareStructures(refUrl, refData, testUrl, testData) {
  const issues = [];
  const passes = [];

  // Nav pill style
  if (refData.hasPillNav === testData.hasPillNav) {
    passes.push('Pill nav style matches');
  } else {
    issues.push(`Nav style mismatch: reference has pill nav=${refData.hasPillNav}, ${testUrl} has ${testData.hasPillNav}`);
  }

  // Old nav gone
  if (!testData.hasOldNav) {
    passes.push('Old solid dark nav removed');
  } else {
    issues.push(`${testUrl} still has old-style solid dark nav bar`);
  }

  // Desktop nav link count
  if (refData.desktopNav.length === testData.desktopNav.length) {
    passes.push(`Desktop nav link count matches (${refData.desktopNav.length})`);
  } else {
    issues.push(`Desktop nav links: reference has ${refData.desktopNav.length}, ${testUrl} has ${testData.desktopNav.length}`);
  }

  // Desktop nav links content
  const refNavTexts = refData.desktopNav.map(l => l.text).sort().join(',');
  const testNavTexts = testData.desktopNav.map(l => l.text).sort().join(',');
  if (refNavTexts === testNavTexts) {
    passes.push('Desktop nav link labels match');
  } else {
    issues.push(`Desktop nav labels differ:\n  Reference: ${refNavTexts}\n  ${testUrl}: ${testNavTexts}`);
  }

  // Mobile nav
  if (refData.mobileNav.length === testData.mobileNav.length) {
    passes.push(`Mobile nav link count matches (${refData.mobileNav.length})`);
  } else {
    issues.push(`Mobile nav links: reference has ${refData.mobileNav.length}, ${testUrl} has ${testData.mobileNav.length}`);
  }

  // Mobile overlay
  if (refData.hasMobileOverlay === testData.hasMobileOverlay) {
    passes.push('Mobile nav overlay present');
  } else {
    issues.push(`Mobile overlay mismatch: reference=${refData.hasMobileOverlay}, ${testUrl}=${testData.hasMobileOverlay}`);
  }

  // CTA button
  if (refData.hasCTA === testData.hasCTA) {
    passes.push('Schedule a Tour CTA present');
  } else {
    issues.push(`CTA button mismatch: reference=${refData.hasCTA}, ${testUrl}=${testData.hasCTA}`);
  }

  // Breadcrumb
  if (refData.hasBreadcrumb === testData.hasBreadcrumb) {
    passes.push('Breadcrumb navigation present');
  } else {
    issues.push(`Breadcrumb mismatch: reference=${refData.hasBreadcrumb}, ${testUrl}=${testData.hasBreadcrumb}`);
  }

  // Footer CTA
  if (refData.hasFooterCTA === testData.hasFooterCTA) {
    passes.push('Footer phone CTA present');
  } else {
    issues.push(`Footer CTA mismatch: reference=${refData.hasFooterCTA}, ${testUrl}=${testData.hasFooterCTA}`);
  }

  // Footer address
  if (refData.hasFooterAddress === testData.hasFooterAddress) {
    passes.push('Footer address present');
  } else {
    issues.push(`Footer address mismatch: reference=${refData.hasFooterAddress}, ${testUrl}=${testData.hasFooterAddress}`);
  }

  // Footer license
  if (refData.hasFooterLicense === testData.hasFooterLicense) {
    passes.push('Footer DSHS license present');
  } else {
    issues.push(`Footer license mismatch: reference=${refData.hasFooterLicense}, ${testUrl}=${testData.hasFooterLicense}`);
  }

  // Take Action section
  if (refData.hasTakeAction === testData.hasTakeAction) {
    passes.push('Take Action Today section present');
  } else {
    issues.push(`Take Action section mismatch: reference=${refData.hasTakeAction}, ${testUrl}=${testData.hasTakeAction}`);
  }

  // Footer link count
  if (refData.footerLinkCount === testData.footerLinkCount) {
    passes.push(`Footer link count matches (${refData.footerLinkCount})`);
  } else {
    issues.push(`Footer links: reference has ${refData.footerLinkCount}, ${testUrl} has ${testData.footerLinkCount}`);
  }

  // Encoding artifacts
  if (!testData.hasEncodingArtifact) {
    passes.push('No encoding artifacts');
  } else {
    issues.push(`${testUrl} still has encoding artifacts (Â© or â€)`);
  }

  // Reduced motion
  if (testData.hasReducedMotion) {
    passes.push('prefers-reduced-motion support present');
  } else {
    issues.push(`${testUrl} missing prefers-reduced-motion support`);
  }

  // Skip link
  if (testData.hasSkipLink) {
    passes.push('Skip link present');
  } else {
    issues.push(`${testUrl} missing skip link`);
  }

  return { issues, passes };
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log('='.repeat(70));
  console.log('PLAYWRIGHT UI CONSISTENCY VERIFICATION');
  console.log('='.repeat(70));
  console.log(`\nReference page: ${REFERENCE_PAGE}`);
  console.log(`Test pages: ${TEST_PAGES.join(', ')}\n`);

  // Get reference structure
  console.log(`Extracting structure from ${REFERENCE_PAGE}...`);
  const refData = await extractPageStructure(page, REFERENCE_PAGE);

  let totalIssues = 0;
  let totalPasses = 0;

  for (const testUrl of TEST_PAGES) {
    console.log(`\n${'─'.repeat(70)}`);
    console.log(`Testing: ${testUrl}`);
    console.log('─'.repeat(70));

    const testData = await extractPageStructure(page, testUrl);
    const { issues, passes } = compareStructures(REFERENCE_PAGE, refData, testUrl, testData);

    for (const p of passes) {
      console.log(`  ✅ ${p}`);
    }
    for (const i of issues) {
      console.log(`  ❌ ${i}`);
    }

    totalPasses += passes.length;
    totalIssues += issues.length;

    console.log(`\n  Result: ${passes.length} passed, ${issues.length} issues`);
  }

  // Also take screenshots for visual comparison
  console.log(`\n${'─'.repeat(70)}`);
  console.log('Taking screenshots for visual comparison...');
  console.log('─'.repeat(70));

  for (const url of [REFERENCE_PAGE, ...TEST_PAGES]) {
    await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle', timeout: 10000 }).catch(() => {});
    const name = url.replace(/\//g, '_').replace(/^_|_$/g, '') || 'home';

    // Full page screenshot
    await page.screenshot({ path: `screenshot_full_${name}.png`, fullPage: true });

    console.log(`  📸 ${url} → screenshot_full_${name}.png`);
  }

  console.log(`\n${'='.repeat(70)}`);
  console.log(`TOTAL: ${totalPasses} passed, ${totalIssues} issues`);
  console.log(`VERDICT: ${totalIssues === 0 ? '✅ ALL CONSISTENT' : '❌ INCONSISTENCIES FOUND'}`);
  console.log('='.repeat(70));

  await browser.close();
})();
