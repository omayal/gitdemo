import {chromium,Browser,BrowserContext,Page} from "playwright"
async function performAction(url:string,action:'title'|'screenshot'  ): Promise<string|void>{      ///string is datatype that will be returned if resolved , if promise failed need not return anything -so void used

const browser1:Browser=await chromium.launch({headless:false})
const BrowserContext1:BrowserContext=await browser1.newContext()
const page1:Page=await BrowserContext1.newPage()
await page1.goto(url)
if(action === 'screenshot')
    {
        const screenshotpath='screenshot.png'
        await page1.screenshot({path:screenshotpath});
        await browser1.close()
        return `screenshot saved as  $(screenshotpath)`
    }
else if(action ==='title')
    {
        const title=await page1.title()
        await browser1.close()
        return `title of the page is  $(title)`
    }
else{
    await browser1.close()  ///any failure 
}

}

async function runTest()
{
    const screenshotresult=await performAction("https://www.amazon.in/","screenshot")
    console.log(screenshotresult)
    const titleResult=await performAction("https://www.amazon.in/","title")
    console.log(titleResult)
}

//await performAction("https://www.amazon.in/","screenshot")  ==>this can be separately called
runTest()

