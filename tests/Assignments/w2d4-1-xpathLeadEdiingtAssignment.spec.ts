import{chromium,test,expect} from "@playwright/test"
test(`To edit a Lead in Testleaf using XPATH`,async({page})=>{

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`//input[@id="username"]`).fill(`Demosalesmanager`);
    await page.locator(`//input[@name="PASSWORD"]`).fill(`crmsfa`);
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//img[@src="/opentaps_images/integratingweb/crm.png"]`).click();

    await page.locator(`//a[text()="Leads"]`).click();
    await page.locator(`//a[text()="Find Leads"]`).click();

    await page.locator(`(//input[@name="firstName"])[3]`).fill(`FNAME4`);
    await page.locator(`//button[text()="Find Leads"]`).click();
    
    //TABLE LOCATOR
    await page.locator('(//table[contains(@class,"x-grid3-row-table")])[1]/tbody/tr[1]/td[3]//a').click();
    //Edit Lead details
    await page.locator('(//a[@class="subMenuButton"])[3] |//a[text()="Edit"]').click();
    await page.locator(`//input[@id="updateLeadForm_companyName"]`).fill(`CTS2`);
    await page.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill(`55000000`);
    await page.locator(`//input[@id="updateLeadForm_departmentName"]`).fill(`LIFESCIENCES`);
    await page.locator(`//textarea[@id="updateLeadForm_description"]`).fill(`Updating descriptions of an employee`);
    await page.locator(`(//input[@class="smallSubmit"])[1]`).click();

    await page.waitForTimeout(1000)
    const pageTitleAfterEditingUsingXPATH = await page.title();
    console.log("Title of the page after editing is \"" + pageTitleAfterEditingUsingXPATH +"\""); 
}
)