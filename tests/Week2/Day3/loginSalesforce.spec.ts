
import { chromium, test } from "@playwright/test"
test(`Test to launch a browser`, async({page}) => { 
await page.goto(`https://login.salesforce.com/?locale=in`)
await page.locator(`[id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`);
await page.locator(`[id="password"]`).fill(`TestLeaf@2025`);
await page.locator(`[id="Login"]`).click();
//await page.locator(`#Login`).click();
await page.waitForTimeout(3000)
} )


