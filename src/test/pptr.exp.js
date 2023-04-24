const puppeteer = require('puppeteer');
// import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // GO TO REACT WEBSITE
  await page.goto('http://localhost:3000');

  // Set screen size
  await page.setViewport({width: 720, height: 480});

  // TAKE SCREENSHOT!
  await page.screenshot({
    path: "s1.jpg",
    type: "jpeg"
  });

  // CLICK ON "LIST"
  const searchResultSelector = "a[href='/list']";
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // TAKE SCREENSHOT!
  await page.screenshot({
    path: "s2.jpg",
    type: "jpeg"
  });

  // TYPE INTO INPUT
  await page.type('input', 'Puppeteer was here!');

  // TAKE SCREENSHOT!
  await page.screenshot({
    path: "s3.jpg",
    type: "jpeg"
  });

  await browser.close();

})();