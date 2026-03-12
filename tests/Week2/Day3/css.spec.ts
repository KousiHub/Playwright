

import { chromium, test } from "@playwright/test"

test(`Test to launch a browser`, async({page}) => { 

await page.goto(`http://leaftaps.com/opentaps/control/main`)
//await page.goto(`http://google.com`)

await page.locator(`[id="username"]`).fill(`demoID`);
//await page.locator('#username`).fill(`demoID`); // instead of [id="username"], we can use #username//applicable only for ID
//Locator using input tag: count how many input tags are there in DOM and we can use the count
//await page.locator(`input`).nth(0).fill(`demoID`);
//await page.locator(`input`).first.fill(`demoID`);//Since this is the last input tag, we can use this also

await page.locator(`[id="password"]`).fill(`123456`);
//await page.locator('#password`).fill(`123456`);
//await page.locator(`input`).nth(1).fill(`123456`);

await page.locator(`[class="decorativeSubmit"]`).click();

//await page.locator(`."decorativeSubmit`).click; //instead of [class="decorativeSubmit"], we can use .decorativeSubmit
//await page.locator(`input`).nth(3).fill(demoID);
//await page.locator(`input`).last.fill(demoID);//Since this is the last input tag, we can use this also

await page.waitForTimeout(3000)


} )


