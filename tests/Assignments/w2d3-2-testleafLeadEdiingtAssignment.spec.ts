import{chromium,test,expect} from "@playwright/test"
test(`To edit a Lead in Testleaf using CSS locators`,async({page})=>{

    const companyName = `COGNIZANT`;
    const fName = `FNAME1`;
    const lName = `FNAME1`;
    const status = `Assigned`;


    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`[id="username"]`).fill(`Demosalesmanager`);
    await page.locator(`[id="password"]`).fill(`crmsfa`);
    await page.locator(`[class="decorativeSubmit"]`).click();

    await page.getByRole(`link`,{name: "CRM/SFA"}).click();

    await page.locator(`a[href="/crmsfa/control/leadsMain"]`).filter({hasText: `Leads`}).click();
    await page.locator(`a[href="/crmsfa/control/findLeads"]`).filter({hasText: `Find Leads`}).click();

    await page.locator(`[id="ext-gen248"]`).fill(`FNAME2`);
    await page.locator(`[id="ext-gen334"]`).filter({hasText: `Find Leads`}).click();
    await page.locator(`table.x-grid3-row-table`).first().locator(`tbody tr:first-child td:first-child a`).click();
    
    //Edit Lead details
    await page.locator('[class="subMenuButton"]:nth-of-type(3)').click();
    await page.locator(`[id="updateLeadForm_companyName"]`).fill(`CTS2`);
    await page.locator(`[id="updateLeadForm_annualRevenue"]`).fill(`55000000`);
    await page.locator(`[id="updateLeadForm_departmentName"]`).fill(`LIFESCIENCES`);
    await page.locator(`[id="updateLeadForm_description"]`).fill(`Updating descriptions of an employee`);
    await page.locator(`input[type="submit"][name="submitButton"][value="Update"]`).click();
    
    await page.waitForTimeout(3000)
    const pageTitleAfterEditingUsingCSS = await page.title();
    console.log("Title of the page after editing is \"" + pageTitleAfterEditingUsingCSS +"\""); 
}
)