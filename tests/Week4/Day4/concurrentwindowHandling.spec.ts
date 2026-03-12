import{test} from "@playwright/test";
test(`Learn CONCURRENT WINDOWS HANDLING using PROMISE.ALL`, async({page,context})=>{

    await page.goto("https://www.flipkart.com");

    const searchBox = page.locator(`//input[@placeholder="Search for Products, Brands and More"]`).first();
    await searchBox.fill("phone");
    await searchBox.press("Enter");

    //  work of "waitForEvent" is to capture the page and click the product that goes to the second page
    //USING Promise.ALL() => captures both the event and triggers it in a single line without any delay in a CONCURRENT WAY
    const [childPage] = await Promise.all([context.waitForEvent("page"),page.locator(`//div[text()="CMF by Nothing Phone 2 Pro (Light Green, 256 GB)"]`).click()]);

    await childPage.waitForLoadState("domcontentloaded");//WAIT UNTIL THE CONTENT OF THE DOM IS LOADED COMPLETELY TO CAPTURE THE TITLE
    console.log("Title of the new page is => ",await childPage.title());
    console.log("Title of the parent page is =>", await page.title());
    
    await page.bringToFront(); // Controls goes to the Parent page, and then click something else in parent page
    await page.locator(`//span[text()="Electronics"]`).click();    
    console.log("Navigating back just to view the Parent page back and click on Electronics tab");

    await childPage.bringToFront();
    const mobileName = await childPage.locator(`//div[text()="CMF by Nothing"]`).innerText();
    const mobilePrice = await childPage.locator(`(//div[text()="₹20,999"])[2]`).innerText();
    console.log("Navigating again to view the Child page and to print the below:");
    console.log("Name of the mobile phone selected is =>",mobileName);
    console.log("Price of the mobile phone selected is =>",mobilePrice);
    
})

