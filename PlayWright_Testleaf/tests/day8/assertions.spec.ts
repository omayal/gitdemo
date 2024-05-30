import { expect,test } from "@playwright/test";
test(`Test to assert the inputbox`, async ({page}) => {  //can call more than one page fixture
 
    //Browser Instance , Context and page is created
    // const BrowserInstance =await chromium.launch({headless: false, channel: "chrome"})
    // const BrowserContext= await BrowserInstance.newContext()
    // const page= await BrowserContext.newPage()
        
    //Go to the Expected page Salesforce
    await page.goto("https://leafground.com/input.xhtml")
    const typename=page.getByPlaceholder("Babu Manickam")
    await expect(typename).toBeEnabled(); //before entering something , checking if the text box is enabled
    await page.waitForTimeout(3000);
    typename.fill("omayal")
    const disabledTextbox =page.getByPlaceholder("disabled")  //this text should be disabnled//to learn disabled text box , we have it
    await expect(disabledTextbox).toBeDisabled()

    
    
})
