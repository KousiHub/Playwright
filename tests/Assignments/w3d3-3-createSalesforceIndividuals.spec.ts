import { expect, test } from "@playwright/test";
test.use({storageState:"Data/login_SF.json"})

test(`Test creation of Individuals in Salesforce`, async ({ page }) => {
    await page.goto('https://orgfarm-8b83a5e0b2-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome');
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.getByRole("button",{name:"View All Applications"}).click();
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Individuals");
    
    await page.locator(`//a[@data-label="Individuals"]`).click();
    //****USE THE BELOW WHEN THE PAGE DISPLAYS "INDIVIDUALS DROPDOWN" ON A TITLE BAR INSTEAD OF A "NEW BUTTON"****
    /*await page.locator(`//a[@title="Individuals"]`).click();
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole(`button`,{name:"Individuals List"}).click();
    await page.locator(`//span[text()="New Individual"]`).click();
    */
   await page.getByRole(`button`,{name:"New"}).click();
   await page.getByRole(`textbox`,{name:"Last Name *"}).fill("Prats");
   await page.getByRole(`button`,{name:"Save"}).last().click();
   await expect(page.locator(`//span[@class="uiOutputText" and text()="Prats"]`)).toHaveText("Prats");
})