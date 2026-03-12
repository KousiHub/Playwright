import { expect, test } from "@playwright/test";
test.use({storageState:"Data/login_SF.json"})

test(`Test editing of Lead in Salesforce`, async ({ page }) => {
    await page.goto('https://orgfarm-8b83a5e0b2-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome');
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.getByRole("button",{name:"View All Applications"}).click();
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Sales");
    
    await page.locator(`(//p[@class="slds-truncate"][.//mark[text()="Sales"]])[3]`).click();
    await page.getByTitle("Leads",{exact:true}).click();
    await page.waitForLoadState('domcontentloaded');
    await page.locator(`(//span[@class="slds-checkbox_faux"])[2]`).click();
    await page.locator(`(//button[@class="slds-button slds-button_icon-border slds-button_icon-x-small"])[1]`).click();
    await page.locator(`//a[@title="Edit"]`).click();
    await page.locator(`//button[@aria-label="Salutation"]`).click();
    await page.locator(`//span[@title="Mr."]`).click();  
    await page.locator(`//input[@placeholder="Last Name"]`).fill("T Sarathy"); 
    await page.locator(`//input[@name="Company"]`).fill("Emp Provident Fund");
    await page.locator(`//button[@name="SaveEdit"]`).click();
    await expect(page.locator(`//a[@title="T Sarathy"]`)).toHaveText("T Sarathy");
})