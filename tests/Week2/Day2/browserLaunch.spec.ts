//browser
// browser context(lab) - window (invidual isolated profile + incognito window//Store any data)
// page


/* const browser = chromium.launch()
const context = browser.newContext()
const page = context.newPage() */

import { chromium,test } from "@playwright/test"

test(`Test to launch a browser`, async() => { // => fat arrow // it is called asynchronous arrow function

const browser = await chromium.launch()
const context = await browser.newContext()
const page =  await context.newPage()

//await page.goto(`http://leaftaps.com/opentaps/control/main`)
await page.goto(`http://google.com`)


await page.waitForTimeout(3000)

/* In await it returns promise 
The 3 stages of promise:
1. Pending
2. Resolve
3. Rejected  */


} )


/* Notes :
headed => with UI
headless => without UI */