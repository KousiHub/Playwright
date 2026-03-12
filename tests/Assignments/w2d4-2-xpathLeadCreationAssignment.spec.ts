
import{chromium,test,expect} from "@playwright/test"
test(`To create a Lead in Testleaf using XPATH`,async({page})=>{

    const companyName = `CTS`;
    const fName = `FNAME4`;
    const lName = `FNAME4`;
    const status = `Assigned`;

    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id="username"]`).fill(`Demosalesmanager`);
    await page.locator(`//input[@name="PASSWORD"]`).fill(`crmsfa`);
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//img[@src="/opentaps_images/integratingweb/crm.png"]`).click();    
    await page.locator(`//a[text()="Leads"]`).click();
    await page.locator(`//a[text()="Create Lead"]`).click();
    //Lead creation details
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(companyName);
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(fName);
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(lName);
    await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill(`Mrs`);
    await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill(`Manager`);
    await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill(`6000000`);
    await page.locator(`//input[@id="createLeadForm_departmentName"]`).fill(`BFS`);
    await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill(`9887654321`);
    await page.locator(`//input[@class="smallSubmit"]`).click();
    //Verification
    await expect(page.locator(`//span[@id="viewLead_companyName_sp"]`)).toContainText(companyName);
    await expect(page.locator(`//span[@id="viewLead_firstName_sp"]`)).toHaveText(fName);
    await expect(page.locator(`//span[@id="viewLead_lastName_sp"]`)).toContainText(lName);
    await expect(page.locator(`//span[@id="viewLead_statusId_sp"]`)).toContainText(status);
    const pageTitleAfterCreationUsingXPATH = await page.title();
    console.log("Page title after Lead creation is \""+pageTitleAfterCreationUsingXPATH+"\"");   
}
)
