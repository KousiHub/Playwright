import{test} from "@playwright/test";
test(`Learn WINDOWS HANDLING using context.waitForEvent`, async({page,context})=>{

    await page.goto("https://www.flipkart.com");

    const searchBox = page.locator(`//input[@placeholder="Search for Products, Brands and More"]`).first();
    await searchBox.fill("phone");
    await searchBox.press("Enter");

    const newPage = context.waitForEvent("page"); //This is the listener
    //  work of "waitForEvent" is to capture the page, so "await" will be resolved only after the below page is clicked. 
    // Thats why we are not giving in the "const" statement, and we should give await after click() of below page
    await page.locator(`//div[text()="CMF by Nothing Phone 2 Pro (Light Green, 256 GB)"]`).click();//product button on parent page
    const childPage = await newPage;
    await childPage.waitForLoadState("domcontentloaded");//WAIT UNTIL THE CONTENT OF THE DOM IS LOADED COMPLETELY TO CAPTURE THE TITLE
    console.log("Title of the new page is => ",await childPage.title());
    console.log("Title of the parent page is =>", await page.title());
    
    
})

