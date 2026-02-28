const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const verificationDir = '/home/jules/verification';
  if (!fs.existsSync(verificationDir)) {
    fs.mkdirSync(verificationDir, { recursive: true });
  }

  try {
    console.log('Navigating to contact page...');
    await page.goto('http://localhost:5173/contact');

    // Wait for the form to appear
    await page.waitForSelector('form');

    // Take a screenshot of the contact page
    const contactPath = path.join(verificationDir, 'contact_page.png');
    await page.screenshot({ path: contactPath, fullPage: true });
    console.log(`Saved screenshot to ${contactPath}`);

    console.log('Navigating to home page...');
    await page.goto('http://localhost:5173/');

    // Wait for the newsletter section to appear
    await page.waitForSelector('input[type="email"]');

    // Take a screenshot of the home page
    const homePath = path.join(verificationDir, 'home_page_newsletter.png');
    await page.screenshot({ path: homePath, fullPage: true });
    console.log(`Saved screenshot to ${homePath}`);

  } catch (error) {
    console.error('Error during verification:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
