
import { test, expect, chromium, webkit } from "@playwright/test"

test(`Test to launch chrome browser and verify the page title and URL`,async() =>{

    const browser1 = await chromium.launch({channel: 'msedge'});
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();
    const urlGiven = `https://www.redbus.in/`;
    const titleGiven = 'Redbus';
    
    await page1.goto(urlGiven);
    const title1 = await page1.title();
    const url1 = await page1.url();

    console.log("Begining of 1st TASK");

    if(urlGiven === url1){
        console.log("The URL retrieved is "+url1+ "which is same a given url"+urlGiven);
        
    }

    if(titleGiven === title1){
        console.log("The title retrieved is "+title1+ "which is same a given title => "+titleGiven);
        
    }
    else {
        console.log("Sorry, the title retrieved is not as expected, but it is => "+title1);
        
    }
    console.log("End of 1st TASK");
})
    //2nd browser with new URL
test(`Test to launch webkit browser and verify the page title and URL`,async() =>{

    const browser2 = await webkit.launch();
    const context2 = await browser2.newContext();
    const page2 = await context2.newPage();
    const url2Given = `https://www.flipkart.com/`;
    const title2Given = 'Flipkart';
    
    await page2.goto(url2Given);
    const title2 = await page2.title();
    const url2 = await page2.url();

    console.log("Begining of 2nd TASK");

    if(url2Given === url2){
        console.log("The URL retrieved is "+url2+ "which is same a given url"+url2Given);
        
    }

    if(title2Given === title2){
        console.log("The title retrieved is "+title2+ "which is same a given title => "+title2Given);
        
    }
    else {
        console.log("Sorry, the title retrieved is not as expected, but it is => "+title2);
        
    }
    console.log("End of 2nd TASK");
})