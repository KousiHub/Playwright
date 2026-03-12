import{expect, test} from "@playwright/test";
test(`Interact with webelements using iFrames`, async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml"); 
    const frameLocator = page.frameLocator(`[src="default.xhtml"]`);
    const buttonToClick = frameLocator.locator(`#Click`);
    await buttonToClick.click();
    await expect(buttonToClick).toHaveText("Hurray! You Clicked Me.");
    
    const allFramesCount = page.frames().length;
    console.log("Total number of frames inside are = ",allFramesCount);

    const nestedFrame = page.frameLocator(`//iframe[@src="page.xhtml"]`).frameLocator(`//iframe[@name="frame2"]`);
    const buttonInNestedFrame = nestedFrame.locator(`//button[@id="Click"]`);
    await buttonInNestedFrame.click(); 
    await expect(buttonInNestedFrame).toHaveText("Hurray! You Clicked Me.");
})