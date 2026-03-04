const playwright = require('playwright');
(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/');
  const brand = await page.locator('.nav-brand').boundingBox();
  const links = await page.locator('.nav-links').boundingBox();
  const lang = await page.locator('.lang-selector').boundingBox();
  const container = await page.locator('.nav-container').boundingBox();
  console.log('Container:', container);
  console.log('Brand:', brand);
  console.log('Links:', links);
  console.log('Lang:', lang);
  await browser.close();
})();
