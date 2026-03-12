import{test,expect} from "@playwright/test";
test(`To assert button in Testleaf application`, async({page})=> {

    await page.goto("https://leafground.com/button.xhtml");
    const buttonPageTitle = page.title();   
    await page.locator(`//span[text() = "Click"]`).click();
    await expect(page).not.toHaveTitle(buttonPageTitle.toString());
    await page.goBack();
    await expect(page.locator(`//h5[contains(text(), "Confirm if the button is disabled.")]/following::span[text()="Disabled"]`)).toBeDisabled();
})