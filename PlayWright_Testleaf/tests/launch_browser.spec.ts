import { chromium , test } from "@playwright/test";
test("To launch Browser", async () =>{
    const BrowserInstance =await chromium.launch({headless: false, channel: "chrome"});
    const browsercontext=await BrowserInstance.newContext();
    const page=await browsercontext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
})