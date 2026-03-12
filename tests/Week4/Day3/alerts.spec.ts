import{test} from "@playwright/test";
test(`Learn ALERTS using page.on`, async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml");

    page.on("dialog",async(alert)=>{
        const message = alert.message();
        console.log(message);

        const alertType = alert.type();
        console.log("Type of the alert = ",alertType);
        
        if(alertType === "confirm"){
            alert.accept();        
        }

        else if(alertType === "prompt"){
            alert.accept("Testleaf");        
        }

        else
            alert.dismiss();

    })
    await page.locator(`(//span[text()="Show"])[1]`).click();//Simple Alert
    await page.waitForTimeout(3000);//Alerts are very very fast, so to observe, we can have timeputs

    await page.locator(`(//span[text()="Show"])[2]`).click();//Confirm Alert
    await page.waitForTimeout(3000);

    await page.locator(`(//span[text()="Show"])[5]`).click();//Prompt Alert
    await page.waitForTimeout(3000);        
    
})

