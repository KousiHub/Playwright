

import { expect, test } from "@playwright/test";
test(`Learn to handle dropdowns`, async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main')
    //Asserting a textbox webelement => locator based assertion
    await expect(page.locator('//input[@id="username"]')).toBeEditable() // Locator based assertions --> autoretry assertions
    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    //Asserting a button webelement =>locator based assertion
    await expect(page.locator(`//input[@class="decorativeSubmit"]`)).toBeEnabled() // Locator based assertions --> autoretry assertions
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//a[contains(text(),"CRM")]`).click();
    await page.locator(`//a[text()="Leads"]`).click();
    await page.locator(`//a[text()="Create Lead"]`).click();
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`Testleaf`);
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`Ravindran`);
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(`R`); // text box, button.. 
    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{value:"LEAD_DIRECTMAIL"})    //dropdown element that is present in select tag
  //  await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:"Direct Mail"})    //dropdown element that is present in select tag
  //  await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{index:3})    //dropdown element that is present in select tag
 /* Notes:
Step1 : Identify the drop down from the page
Step2 :  Identify the dropdown value through value attribute, label, index*/
    const dropdown = page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`);//-> hold 13 webelements/ locator objects
  //Internally dropdown => object of webelements []
  const dropdownCount = await dropdown.count();
  expect(dropdownCount).toBeGreaterThan(10); // Generic asertions it is comparing / asserting/ validating values
  console.log(`No. of values in the dropdown is ${dropdownCount}`);
  // console.log(await dropdown.nth(0).innerText());// blank
  // console.log(await dropdown.nth(1).innerText());// Cold call
  //  console.log(await dropdown.nth(2).innerText());// Conference
  for (let index = 0; index < dropdownCount; index++) { // index<13, -> 0<13, 1<13,...
   
    console.log(await dropdown.nth(index).innerText());
  }
    await page.waitForTimeout(3000)
    await page.locator("//input[@class='smallSubmit']").click();
    const statusText = await page.locator(`//span[@id="viewLead_statusId_sp"]`).innerText();
    console.log(`The status of lead creation is ${statusText}`);
    expect(statusText).toContain("Assigned")
})

