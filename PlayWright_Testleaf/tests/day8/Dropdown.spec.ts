import { chromium,test } from "@playwright/test";
test(`Test to handle drop down`, async ({page}) => {  //can call more than one page fixture
 
    //Browser Instance , Context and page is created
    // const BrowserInstance =await chromium.launch({headless: false, channel: "chrome"})
    // const BrowserContext= await BrowserInstance.newContext()
    // const page= await BrowserContext.newPage()
        
    //Go to the Expected page Salesforce
    await page.goto("http://leaftaps.com/opentaps/control/main")
    
    //Using CSS locators to locate the element(different ways)
    await page.locator('input[id="username"]').fill("demosalesmanager")
    await page.locator("#password").fill("crmsfa")
     

    await page.waitForTimeout(5000) //wait is implemented

    await page.locator(".decorativeSubmit").click()
    

    await page.waitForTimeout(5000)
    await page.locator("text=CRM/SFA").click()
    await page.getByRole('link' ,{name: 'Leads'}).click()
    await page.getByRole('link' ,{name: 'Create Lead'}).click()
    await page.locator("input[class='inputBox']").last().fill("TestLeaf")

    await page.locator("input[name='firstName']").last().fill("omayal")
    await page.locator("#createLeadForm_lastName").fill("kattiresan")
  ///select the source drop down
await page.selectOption("#createLeadForm_dataSourceId",{value:"LEAD_DIRECTMAIL"});
const dropdown=page.locator("#createLeadForm_dataSourceId>option")
const dropdowncount=await dropdown.count()
console.log(dropdowncount)
for(let index=0 ; index<dropdowncount;index++)
  {
console.log(await dropdown.nth(index).innerText())
  }
 
  const currency= page.locator("#createLeadForm_currencyUomId>option")
  const currencycount=await dropdown.count()
  console.log(currencycount)
  for(let i=0 ; i<currencycount;i++)
    {
  console.log(await currency.nth(i).innerText())
    }

})
