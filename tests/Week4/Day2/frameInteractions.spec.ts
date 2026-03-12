import{test} from "@playwright/test";
test(`Interact with frames using URL`, async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml"); 
    //.frames() => returns total num of frames in a url
    //.frame() => returns a frame matching to the specified locator url or name
    const frameURL = page.frame({url:"https://leafground.com/default.xhtml"});
    await frameURL?.locator(`#Click`).click();//Here "?."" comes when we type frameURL.locator => this is optional chaining => 
    // similar to if..else, but handles only if .. part and not else part
    //so if frame is present in DOM, it clicks that element specified inside that frame, 
    // but when frame is not present, it will return "undefined" instead of throwing error. It is safely error handled
})

test(`Interact with frames using NAME`, async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml");
    const frameNAME = page.frame({name:"frame2"});//This particular frame is a nested frame. i.e=> inside another frame. 
    // But since it has unique name attribut, PLAYWRIGHT allows us to directy access it using the name
    await frameNAME?.locator(`#Click`).click();      
})

//THIS IS THE RECOMMENDED WAY OF ACCESSING A FRAME
test(`Interact with frames using FRAME LOCATOR`, async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml");
    const frameLocator = page.frameLocator(`[src="default.xhtml"]`);
    await frameLocator?.locator(`#Click`).click(); 
    await page.waitForTimeout(3000); //alt+shift+f     
})

//NESTED FRAMES
test.only(`Interact with frames using NESTED FRAMES`, async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml");
    const frame_outerFrame = page.frameLocator(`[src="default.xhtml"]`);
    const frame_innerFrame = frame_outerFrame.frameLocator(`[src="framebutton.xhtml"]`);
    await frame_innerFrame.locator(`#Click`).click(); 
    await page.waitForTimeout(3000); //alt+shift+f     
})