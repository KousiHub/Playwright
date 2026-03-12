import { expect, test } from "@playwright/test";
test.use({storageState:"Data/login_SF.json"})

test(`Test editing of Individuals in Salesforce`, async ({ page }) => {
    await page.goto('https://orgfarm-8b83a5e0b2-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome');
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.getByRole("button",{name:"View All Applications"}).click();
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Individuals");
    
    await page.locator(`//a[@data-label="Individuals"]`).click();
    await expect(page.getByRole(`link`,{name:"Pratab Prats"})).toHaveText("Pratab Prats");
    //const dropdown = page.locator('a[title="Show 2 more actions"]').first();
    const dropdown = page.locator(`(//tr//td[6])[1]`).click();
    //await dropdown.scrollIntoViewIfNeeded();
    //await dropdown.hover();
    //await dropdown.click({ force: true });     
    await page.getByRole(`menuitem`,{name:"Edit"}).last().click();
    await page.locator(`(//a[@class="select"])[1]`).click();
    await page.locator(`//a[@title="Mr."]`).click();
    await page.locator(`//input[@placeholder="First Name"]`).fill("Pratab");
    await page.locator(`//span[text()="Save"]`).click();
    await expect(page.locator(`//a[@title="Pratab Prats"]`)).toHaveText("Pratab Prats");
})