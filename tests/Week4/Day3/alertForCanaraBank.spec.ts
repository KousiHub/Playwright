import{test} from "@playwright/test";
test(`ALERTS FOR CANARA BANK`, async({page})=>{

    await page.goto("https://www.canarabank.bank.in/pages/net-banking");

    page.on("dialog",async(alert)=>{
        const message = alert.message();
        console.log("Alert message is ",message);

        const alertType = alert.type();
        console.log("Type of the alert is ",alertType);
        
        if(alertType === "confirm"){
            alert.accept(); 
            console.log("Alert accepted");                   
        }
        else{
            alert.dismiss();
            console.log("Alert dismissed");
        }
    }) 
    await page.getByRole(`link`, { name: "Net Banking- Login (Retail & Corporate) NEW about Always remember that information like password, PIN, TIN, etc are strictly confidential and are not known even to employees/service personnel of the Bank. You should therefore, never divulge such information even if asked for." }).click();
    console.log("We are in page, which had title =>",await page.title());      
    
    //await page.getByRole(`img`,{name:"Image"}).click();
    await page.locator(`//div[@class="close-btn"]`).click();
    await page.getByRole(`link`,{name: "Canara Card Tokenisation"}).click();
})

