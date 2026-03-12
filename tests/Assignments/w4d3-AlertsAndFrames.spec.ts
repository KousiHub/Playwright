import{expect, test} from "@playwright/test";
test(`Automating Alert & Frame Interactions`, async({page})=>{

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm"); 
    const frameLocator = page.frameLocator(`#iframeResult`);
    page.on("dialog",async(alert)=>{
        
        const alertMessage = alert.message();
        console.log("Alert message is =>",alertMessage);
        
        const alertType = alert.type();
        console.log("Type of the alert is =>",alertType);

        if(alertType === "confirm"){
            alert.accept();
        }
        else{
            alert.dismiss();
        }
    }
    )
    const buttonToClick = frameLocator.locator(`//button[text()="Try it"]`);
    await buttonToClick.click();
    await expect(frameLocator.locator(`//p[text()="You pressed OK!"]`)).toHaveText("You pressed OK!");
}
)