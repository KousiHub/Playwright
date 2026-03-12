import { test } from "@playwright/test";


test(`Playwright locators`, async ({ page }) => {


    await page.goto('https://login.salesforce.com/?locale=in')


    await page.getByRole(`textbox`, { name: "Username" }).fill(`ravindran.ramdas@testleaf.com`)
    await page.getByRole(`textbox`, { name: "Password" }).fill(`RaviSalesforce#1234`)
    await page.getByRole(`button`, { name: "Log In" }).click()
})