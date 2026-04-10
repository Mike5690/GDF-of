const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  // 模拟手机端 Viewport
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
  });
  const page = await context.newPage();
  // 打开英文页面
  await page.goto('http://localhost:5173/?lang=en');
  
  // 等待渲染
  await page.waitForTimeout(2000);
  
  // 注入脚本查询样式
  const data = await page.evaluate(() => {
    const bar = document.querySelector('.announcement-bar');
    const track = document.querySelector('.announcement-track');
    
    if (!bar || !track) return { error: "Elements not found" };
    
    const barRect = bar.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    const trackStyle = window.getComputedStyle(track);
    const firstItem = document.querySelector('.announcement-item');
    const itemStyle = firstItem ? window.getComputedStyle(firstItem) : null;
    
    return {
      bar: { display: window.getComputedStyle(bar).display, width: barRect.width, height: barRect.height, zIndex: window.getComputedStyle(bar).zIndex },
      track: { display: trackStyle.display, width: trackRect.width, height: trackRect.height, transform: trackStyle.transform },
      itemDisplay: itemStyle ? itemStyle.display : 'none',
    };
  });
  
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
