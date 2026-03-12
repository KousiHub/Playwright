
/* 📝 Assignment Requirements

Write a Playwright test that performs the following steps:

🔹 

🔹 Part 2: Validate a Disabled Textbox
Locate the textbox with placeholder "Disabled".
Assert that it is disabled using:
await expect(locator).toBeDisabled()

🔹 Part 3: Validate an Enabled Textbox
Locate another textbox (example: the one with placeholder "Type your name").
Assert that it is enabled using:
await expect(locator).toBeEditable()
Type your name into the textbox.

🔹 Part 4: Soft Assertion Practice
Pick a textbox that is not disabled.
Use:
await expect.soft(locator).toBeDisabled()
Observe the test result and understand how soft assertions behave.

🔹 Part 5: Fill Data
Choose a textbox (any enabled one).
Clear existing text using .fill()
Enter a new value (Ex: "Playwright Learning")
 */

import { expect, test } from "@playwright/test";
test(`Learning Assertions`, async ({ page }) => {
    
    //Part 1: Navigate to the page, Launch Playwright test. Navigate to the page:https://leafground.com/input.xhtml
    await page.goto('https://leafground.com/input.xhtml')
     //Part 2: Locate the textbox with placeholder "Disabled". Assert that it is disabled using:await expect(locator).toBeDisabled()
    await expect(page.locator('//input[@placeholder="Disabled"]')).toBeDisabled();

    //Part 3: Validate Textbox ("with placeholder=>Type your name"). Assert and Type your name into the textbox.
    await expect(page.locator('//input[@placeholder="Babu Manickam"]')).toBeEditable();
    await page.locator('//input[@placeholder="Babu Manickam"]').fill('Divya');

    //Part 4: Soft Assertion =>Pick a textbox that is not disabled, Observe the test result and behaviour.
    await expect.soft(page.locator(`//input[@id="j_idt88:j_idt95"]`)).toBeDisabled();

    //Part 5: Fill Data, Choose a textbox (any enabled one).Clear existing text and Enter a new value (Ex: "Playwright Learning")
    await expect(page.locator(`//input[@id="j_idt88:j_idt97"]`)).toBeEnabled();
    await page.locator(`//input[@id="j_idt88:j_idt97"]`).clear();
    await page.locator(`//input[@id="j_idt88:j_idt97"]`).fill("Playwright Learning is great");

    }
)