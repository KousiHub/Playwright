import{test} from "@playwright/test";
test(`Learn MULTIPLE WINDOWS HANDLING`, async({page,context})=>{

    await page.goto("https://leafground.com/window.xhtml");

    await Promise.all([context.waitForEvent("page"),page.getByText("Open Multiple",{exact:true}).click()]);
    
    //1st WAY => Destructuring way. Here context.pages() returns all open pages in the context for us to access
    const [parentPage,childPage1,childPage2] = context.pages();
    await page.waitForLoadState("domcontentloaded");
    console.log("Title of parent page =>", await parentPage.title());
    console.log("Title of child1 page =>", await childPage1.title());
    console.log("Title of child2 page =>", await childPage2.title());

    //2nd WAY => USING ARRAY INDEX HANDLE PAGES
    //If we need to get the pages in array and hendle them through index
    const allPages = context.pages();
    await page.waitForLoadState("domcontentloaded");
    console.log("Title of parent page via index postion =>", await allPages[0].title());
    console.log("Title of child1 page via index postion =>", await allPages[1].title());
    console.log("Title of child2 page via index postion =>", await allPages[2].title());
    

})

