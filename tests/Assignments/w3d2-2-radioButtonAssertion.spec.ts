import{test,expect} from "@playwright/test";
test(`To assert radio button in Testleaf application`, async({page})=> {

    await page.goto("https://leafground.com/radio.xhtml");
    
    await expect(page.getByLabel("Safari").nth(1)).toBeChecked();

    await page.getByText("Chrome",{exact:true}).nth(0).click();
    await expect(page.getByText("Chrome",{exact:true}).nth(0)).toBeChecked();

    await page.getByText("Chennai",{exact:true}).click();
    await expect(page.getByText("Chennai",{exact:true})).toBeChecked();

    await(expect(page.getByLabel("21-40 Years")).toBeChecked());
    await page.waitForTimeout(3000)

})