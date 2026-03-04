const playwright = require('playwright');
(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/');
  
  const evalLayout = await page.evaluate(() => {
    const brand = document.querySelector('.nav-brand').getBoundingClientRect();
    const links = document.querySelector('.nav-links').getBoundingClientRect();
    const lang = document.querySelector('.lang-selector').getBoundingClientRect();
    const container = document.querySelector('.nav-container').getBoundingClientRect();
    return {
      container: [container.x, container.width],
      brand: [brand.x, brand.width],
      links: [links.x, links.width],
      lang: [lang.x, lang.width]
    };
  });
  console.log(JSON.stringify(evalLayout, null, 2));
  await browser.close();
})();
