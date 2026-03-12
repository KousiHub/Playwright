import{test,expect} from "@playwright/test";
test(`To assert auto-waiting features for handling dynamic content`, async({page})=> {

    await page.goto("https://leafground.com/waits.xhtml");
    const clickButton1 = page.locator('(//span[@class="ui-button-text ui-c" and text()="Click"])[1]');
    const hereButton = page.locator('//span[@class="ui-button-text ui-c" and text()="I am here"]');
    await clickButton1.click();
    await expect(hereButton).toBeVisible({timeout:10000});

    const clickButton2 = page.locator('(//span[@class="ui-button-text ui-c" and text()="Click"])[2]');
    const hideButton = page.locator('//span[@class="ui-button-text ui-c" and text()="I am about to hide"]');
    await clickButton2.click();
    await expect(hideButton).toBeHidden();

    const firstButton = page.locator('//span[@class="ui-button-text ui-c" and text()="Click First Button"]');
    const secondButton = page.locator('//span[@class="ui-button-text ui-c" and text()="Click Second"]');
    await firstButton.click();
    await expect(secondButton).toBeEnabled();

    const clickButton3 = page.locator(`(//span[@class="ui-button-text ui-c" and text()="Click"])[3]`);
    const changeTextButton = page.locator(`//span[@class="ui-button-text ui-c" and text()="I am going to change!"]`);
    await clickButton3.click();
    await expect(changeTextButton).toHaveText("I am going to change!")

})