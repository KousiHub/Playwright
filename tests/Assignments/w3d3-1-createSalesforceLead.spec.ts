import { expect, test } from "@playwright/test";
test.use({storageState:"Data/login_SF.json"})

test(`Test creation of Lead in Salesforce`, async ({ page }) => {
    await page.goto('https://orgfarm-8b83a5e0b2-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome');
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.getByRole("button",{name:"View All Applications"}).click();
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Sales");
    
    await page.locator(`(//p[@class="slds-truncate"][.//mark[text()="Sales"]])[3]`).click();
    await page.getByTitle("Leads",{exact:true}).click();
    await page.waitForLoadState('domcontentloaded');
    //await page.getByRole(`button`,{name:"New"}).click();
    await page.locator('button[name="New"][type="button"]').click();
    await page.locator('button[role="combobox"][aria-label="Salutation"]').click();
    await page.locator(`//span[@title="Ms." and text()="Ms."]`).click();
    await page.getByRole('textbox', { name: "Last Name" }).fill("Sarathy");
    await page.getByRole('textbox', { name: "Company" }).fill("EPF");
    await page.locator(`//button[@name="SaveEdit" and text()="Save"]`).click();
    await expect(page.locator(`//lightning-formatted-name[text()="Ms.  Sarathy"]`)).toHaveText("Ms.  Sarathy");
})