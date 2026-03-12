import { expect, test } from "@playwright/test";
test.use({storageState:"Data/login_SF.json"})

test(`Skip Login in Salesforce`, async ({ page }) => {
    await page.goto('https://orgfarm-8b83a5e0b2-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome');
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.getByRole("button",{name:"View All Applications"}).click();
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads");
    await page.waitForTimeout(3000)
})