import { expect, test } from "@playwright/test";
test(`Capture local storage to skip Salesforce login`, async ({ page }) => {
    await page.goto('https://login.salesforce.com/');
    await page.getByText("Username", { exact: true }).fill(`kousi84.444998fbbf33@agentforce.com`);
    await page.getByRole(`textbox`, { name: "Password" }).fill(`Samsung@1`);
    await page.getByRole(`button`, { name: "Log In" }).click();
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.context().storageState({path:"Data/login_SF.json"});
}
)