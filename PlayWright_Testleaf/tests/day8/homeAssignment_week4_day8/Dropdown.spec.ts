/*1. Navigate to http://leaftaps.com/opentaps/control/main
2. Enter the username and password
3. Click Login
4. Click CRM/SFA
5. Click Leads
6. Click Create Leads
7. Fill all the mandatory fields such as Company name, First name and Last name
8. Select Direct Mail from the Source dropdown using label
9. Select Demo Marketing Campaign from the Marketing Campaign dropdown using value 
10. Get the count and print all the values in the Marketing Campaign dropdown
11. Select General Services from the Industry dropdown using index 
12. Select INR from the Preferred Currency dropdown
13. Select India from the Country dropdown
14. Select any state from the State dropdown 
15. Get the count of all states and print the values in the console
16. Click Create Lead*/

import { chromium,test } from "@playwright/test";
test(`Test to handle drop down`, async ({}) => {  //can call more than one page fixture
 
    //Browser Instance , Context and page is created
    const BrowserInstance =await chromium.launch({headless: false, channel: "chrome"})
    const BrowserContext= await BrowserInstance.newContext()
    const page= await BrowserContext.newPage()
        
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

// Enter company name
await page.locator("input[class='inputBox']").nth(0).fill("Testleaf");


// Enter firstname
await page.locator("input[name='firstName']").last().fill("omayal");


//Enter lastname
await page.locator("#createLeadForm_lastName").fill("kattiresan");

await page.selectOption("#createLeadForm_dataSourceId", {label: "Direct Mail"}); //visible text

//Select Demo Marketing Campaign from the Marketing Campaign dropdown using value 
await page.selectOption("#createLeadForm_marketingCampaignId", {value: "DEMO_MKTG_CAMP"}); 

//Get the count and print all the values in the Marketing Campaign dropdown 
const marketingdropdown = page.locator("#createLeadForm_marketingCampaignId>option"); 
const marketingcount = await marketingdropdown.count(); 
console.log(`No. of values in Marketing dropdown is ${marketingcount}`); 

for (let i = 0; i < marketingcount; i++) {
    console.log(await marketingdropdown.nth(i).innerText()); //using nth and inner text function 
}

//Select General Services from the Industry dropdown using index
await page.selectOption('#createLeadForm_industryEnumId', {value: "IND_GEN_SERVICES"});

//. Select INR from the Preferred Currency dropdown

await page.selectOption("#createLeadForm_currencyUomId", {value: "INR"});

//Select India from the Country dropdown
await page.selectOption("#createLeadForm_generalCountryGeoId", {label: "India"});
const countryselected = await page.locator("#createLeadForm_generalCountryGeoId").innerText()
console.log(`selected country is ${countryselected}`)



//Select any state from the State dropdown 
await page.selectOption("#createLeadForm_generalStateProvinceGeoId", {index: 16}); 

const statedropdown = page.locator("#createLeadForm_generalStateProvinceGeoId>option") 
const statecount = await statedropdown.count(); 
console.log(`states in the selected country is ${statecount}`); 

for (let j = 0; j < statecount; j++) {
    console.log(await statedropdown.nth(j).innerText());
}

})
