const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://webcode.me');
  await page.pdf({ path: 'webcode.pdf', format: 'a5' });

  await browser.close();
})();

// file pdf akan tergenerate