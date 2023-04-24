import puppeteer from "puppeteer";
jest.setTimeout(10000);

test("Input field contains hello world", async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    // GO TO REACT WEBSITE
    await page.goto('http://localhost:3000');
  
    // Set screen size
    await page.setViewport({width: 720, height: 480});

    // CLICK ON "LIST"
    const searchResultSelector = "a[href='/list']";
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    // TYPE INTO INPUT
    await page.type('input', 'hello world');

    const content = await page.content();
    expect(content).toContain("hello world");

    await browser.close();    



});
