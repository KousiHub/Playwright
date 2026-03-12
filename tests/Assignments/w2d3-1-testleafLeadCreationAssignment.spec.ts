
import{chromium,test,expect} from "@playwright/test"
test(`To create a Lead in Testleaf using CSS locators`,async({page})=>{

    const companyName = `TCS`;
    const fName = `FNAME3`;
    const lName = `FNAME3`;
    const status = `Assigned`;


    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`[id="username"]`).fill(`Demosalesmanager`);
    await page.locator(`[id="password"]`).fill(`crmsfa`);
    await page.locator(`[class="decorativeSubmit"]`).click();

    //await page.locator(`img`).nth(2).click(); /opentaps_images/integratingweb/crm.png
    //await page.locator(`img[src="/opentaps_images/integratingweb/crm.png"]`).click();
    await page.getByRole(`link`,{name: "CRM/SFA"}).click();

    await page.locator(`a[href="/crmsfa/control/leadsMain"]`).click();
    await page.locator(`a[href="/crmsfa/control/createLeadForm"]`).click();

    //Lead creation details
    await page.locator(`[id="createLeadForm_companyName"]`).fill(companyName);
    await page.locator(`[id="createLeadForm_firstName"]`).fill(fName);
    await page.locator(`[id="createLeadForm_lastName"]`).fill(lName);
    await page.locator(`[id="createLeadForm_personalTitle"]`).fill(`Mr`);
    await page.locator(`[id="createLeadForm_generalProfTitle"]`).fill(`Manager`);
    await page.locator(`[id="createLeadForm_annualRevenue"]`).fill(`5000000`);
    await page.locator(`[id="createLeadForm_departmentName"]`).fill(`Health`);
    await page.locator(`[id="createLeadForm_primaryPhoneNumber"]`).fill(`9876543210`);
    await page.locator(`[class="smallSubmit"]`).click();

    //Verification
    await expect(page.locator(`[id="viewLead_companyName_sp"]`)).toContainText(companyName);
    await expect(page.locator(`[id="viewLead_firstName_sp"]`)).toHaveText(fName);
    await expect(page.locator(`[id="viewLead_lastName_sp"]`)).toContainText(lName);
    await expect(page.locator(`[id="viewLead_statusId_sp"]`)).toContainText(status);
    const pageTitleAfterCreationUsingCSS = await page.title();
    console.log("Page title after Lead creation is \""+pageTitleAfterCreationUsingCSS+"\"");
    
}
)
