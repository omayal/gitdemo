import { chromium , test } from "@playwright/test";
test(`To launch Browser`, async () =>{
    const BrowserInstance =await chromium.launch({headless: false, channel: "chrome"});

    const browsercontext1=await BrowserInstance.newContext();
    const page1=await browsercontext1.newPage();
    await page1.goto("http://leaftaps.com/opentaps/control/main");
    const title1=await page1.title()
    console.log(`title of the page is ${title1}`);
    await page1.waitForTimeout(5000)

    const page2=await browsercontext1.newPage();
    await page2.goto("https://www.google.com/");
    const title2=await page2.title()
    console.log(`title of the page is ${title2}`);
    await page2.waitForTimeout(5000)

    const browsercontext2=await BrowserInstance.newContext();
    const page3=await browsercontext2.newPage();
    await page3.goto("https://www.google.com/");
    const title3=await page3.title()
    console.log(`title of the page is ${title3}`);
    await page3.waitForTimeout(30000)

    const page4=await browsercontext2.newPage();
    await page4.goto("https://www.google.com/");
    const title4=await page3.title()
    console.log(`title of the page is ${title4}`);
    await page4.waitForTimeout(5000)
})