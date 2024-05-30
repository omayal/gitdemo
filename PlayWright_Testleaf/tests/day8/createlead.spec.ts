import { chromium,test } from "@playwright/test";
test(`Lauchbrowser for leaftaps`, async () => {

    //Browser Instance , Context and page is created
    const BrowserInstance =await chromium.launch({headless: false, channel: "chrome"})
    const BrowserContext= await BrowserInstance.newContext()
    const page= await BrowserContext.newPage()
        
    //Go to the Expected page Salesforce
    await page.goto("http://leaftaps.com/opentaps/control/main")
    
    //Using CSS locators to locate the element(different ways)
    //await page.locator('input[id="username"]').fill("demosalesmanager")
    await page.fill("#username","demosalesmanager")//can use this fill method //chaining of operation is not possible

   // await page.locator("#password").fill("crmsfa")
     await page.fill('#password',"crmsfa")

    await page.waitForTimeout(5000) //wait is implemented

    //await page.locator(".decorativeSubmit").click()
    await page.click(".decorativeSubmit")

    await page.waitForTimeout(5000)
    await page.locator("text=CRM/SFA").click()
    await page.getByRole('link' ,{name: 'Leads'}).click()
    await page.getByRole('link' ,{name: 'Create Lead'}).click()
    await page.locator("input[class='inputBox']").last().fill("TestLeaf")

    await page.locator("input[name='firstName']").last().fill("omayal")
    await page.locator("#createLeadForm_lastName").fill("kattiresan")
    await page.waitForTimeout(50000) //wait is implemented
    await page.locator("[name='submitButton']").click({timeout:15000})



   // To check the status
   const status = await page.locator("#viewLead_statusId_sp").innerText({timeout:40000});
   console.log(`The status is ${status}`);
})
