/*
Precondition:
- Launch Chromium in non-headless mode
- Create a new browser context.
- Open a new page within the browser context.
- Load the url https://login.salesforce.com/
- Use your Salesforce credentials that you’ve created
Requirements:
- Enter the username.
- Enter the password.
- Click the Login button.
- Wait for 10 seconds
- Print the page title and the current url of the page
- Close the browser
*/

import { chromium,test } from "@playwright/test";
test(`Lauchbrowser for salesforce`, async () => {

    //Browser Instance , Context and page is cd created
    const BrowserInstance =await chromium.launch({headless: false, channel: "chrome"})
    const BrowserContext= await BrowserInstance.newContext()
    const page= await BrowserContext.newPage()
        
    //Go to the Expected page Salesforce
    await page.goto("https://login.salesforce.com/")
    
    //Using CSS locators to locate the element(different ways)
    await page.locator('input[id="username"]').fill("omayallearng@gmail.com")
    await page.locator("#password").fill("Hooded@2")
    await page.waitForTimeout(5000) //wait is implemented
    await page.locator("#Login").click()
    await page.waitForTimeout(5000)

    //Printing the title   
    const title=await page.title()
    console.log(`title of the page is ${title}`);
    //Pprinting the URl
    const url= page.url()
    console.log(`url of the page is ${url}`)
 

    })