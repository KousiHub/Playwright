import { expect, test } from "@playwright/test";

test(`Verify dynamic movie ticket booking flow in PVR Cinemas website`, async ({ page }) => {
    await page.goto('https://www.pvrcinemas.com/');
    await page.locator(`//input[@placeholder="Search for city"]`).click();
    await page.locator('img[src*="Chennai"]').click({ force: true });
    await page.locator(`//span[@class="cinemas-inactive" and text()="Cinema"]`).click();
    await page.locator(`//span[@class="p-dropdown-label p-inputtext p-placeholder" and text()="Select Cinema"]`).click();
    await page.getByText('INOX Luxe Phoenix Market City').click();
    await page.locator('li.p-dropdown-item', {hasText: 'Today, 6 Mar'}).click();
    await page.locator('li.p-dropdown-item', {hasText: 'MRITHYUNJAY'}).click();
    await page.locator('li.p-dropdown-item', {hasText: '10:10 PM'}).click();
    await page.getByRole("button",{name:"Submit"}).click();
    await page.getByRole("button",{name:"Accept"}).click();
    await page.locator(`//span[@id="EL.ELITE|I:3" and text()="3"]`).click();
    const seatNumber = page.locator(`//div[@class="seat-number"]/p`);
    await expect(seatNumber).toHaveText('I3');
    console.log("Verified the seat number and it is ",await seatNumber.textContent());    
    const totalPrice = page.locator('.grand-prices h6')
    await expect(totalPrice).toHaveText('242.61');
    console.log("Verified the total price it is ",await totalPrice.textContent());
    await expect(page).toHaveTitle('PVR Cinemas');
    console.log("Verified the page title");
    await page.getByRole("button",{name:"Proceed"}).click();

}
)