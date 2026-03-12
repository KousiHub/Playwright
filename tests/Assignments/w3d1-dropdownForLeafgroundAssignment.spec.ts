import{test} from "@playwright/test";
test(`Test for selecting dropdowns from Leaf ground and basic assert them`, async({page})=>{

    await page.goto(`https://leafground.com/select.xhtml`);

    //TO DIRECTLY SELECT THE DESIRED VALUE FROM THE DROPDOWN, IF WE KNOW THE VALUE
    await page.selectOption(`//select[@class="ui-selectonemenu"]`,{value:"Selenium"});
    
    //TO GET THE TOTAL NUMBER OF VALUES IN DD, USE page.locator
    const dropDownLocator = page.locator(`//select[@class="ui-selectonemenu"]`);
    const dropdownValuesCount = dropDownLocator.count;
    console.log("Total dropdown values for Favorite automation tool are "+ dropdownValuesCount);

    await page.selectOption(`//select[@class="ui-selectonemenu"]`,{value:"Playwright"});

    await page.selectOption(`//select[@id="j_idt87:country_input"]`,{value:"India"});
    await page.locator(`//label[@id="j_idt87:city_label"]`).nth(1).click();
}
)