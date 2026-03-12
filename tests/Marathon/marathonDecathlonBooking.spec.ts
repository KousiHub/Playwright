import { expect, test } from "@playwright/test";

test(`Search product, apply filters, add to cart in Decathlon`, async ({ page }) => {
    await page.goto('https://www.decathlon.in/');
    await expect(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App");    
    await page.locator('(//span[@class="!mr-1"])[1]').click();
    const searchBox = page.locator('//input[@placeholder="Search For 60+ Sports and 6000+ Products"]');
    await searchBox.waitFor({ state: 'visible' });
    await searchBox.click();          
    await searchBox.fill('shoes');    
    await searchBox.press('Enter');
    const getpageTitle = await page.title();
    console.log(getpageTitle);
    expect(getpageTitle).toBe("Search | shoes");
    console.log("Page title verified");
    await page.locator(`//span[@class="aisRefinementListLabelText"and contains(text(),"Running")]`).click();
    const scrollDiv = page.locator('div.overflow-scroll.sbFNob.p-3');
    await scrollDiv.evaluate(el => el.scrollTop = 0);// Scroll the div to top
    const menOption = page.locator(`//span[@class="aisRefinementListLabelText"and contains(text(),"Men")]`);
    await menOption.click({ force: true });
    //await page.locator(`//span[@class="aisRefinementListLabelText"and text()="Uk 10.5 - eu 45 (4)	"]`).click();
    const scrollPanel = page.locator('(//ul[@class="lg:max-h-[200px] lg:overflow-y-auto lg:p-0"])[3]');
    await scrollPanel.evaluate(el => el.scrollTop = 0);
    await page.locator('//span[@class="aisRefinementListLabelText" and contains(normalize-space(text()), "Uk 10.5")]').click({ force: true });    
    await page.locator('img[alt="Sorting"]').nth(1).click();
    await page.locator('a', { hasText: 'Price: High to Low' }).click();
    await page.locator('ul.ais-InfiniteHits-list li.ais-InfiniteHits-item a').first().click();
    await page.locator('//div[contains(text(), "UK 10.5 - EU 45")]').click();
    await page.locator(`//span[text()="ADD TO CART"]`).click();
    await page.locator(`//p[text()="Cart"]`).click();
    const totalValue = page.locator(`(//p[@classname="font-semibold"])[2]`).textContent();
    console.log("Total cart value = ",await totalValue);    

}
)