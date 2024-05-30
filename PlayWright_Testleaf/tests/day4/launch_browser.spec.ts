import { chromium , firefox, test } from "@playwright/test";
test(`To launch Browser`, async () =>{
    const BrowserInstance =await chromium.launch({headless: false, channel: "chrome"});
    const browsercontext=await BrowserInstance.newContext();
    const page=await browsercontext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    

    await page.close()
    await browsercontext.close()
    await BrowserInstance.close()
})
test(`To launch EdgeBrowser`, async () =>{
    const BrowserInstance =await chromium.launch({headless: false, channel: "msedge"});
    const browsercontext=await BrowserInstance.newContext();
    const page=await browsercontext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const title=await page.title()
    console.log(`title of the page is ${title}`);
    const url=page.url()
    console.log(`url of the page is ${url}`)
    await page.waitForTimeout(5000)

})
test(`To launch FireFox browser`, async () =>{
    const BrowserInstance =await firefox.launch({headless: false, channel: "firefox"});
    const browsercontext=await BrowserInstance.newContext();
    const page=await browsercontext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const title=await page.title()
    console.log(`title of the page is ${title}`);
    const url=page.url()
    console.log(`url of the page is ${url}`)
    await page.waitForTimeout(5000)


})