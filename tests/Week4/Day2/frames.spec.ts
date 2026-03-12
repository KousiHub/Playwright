import{test} from "@playwright/test";
test(`Learn frames using playwright`, async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");
    const allFrames = page.frames();//predefined method to get frame objects present in the page
    console.log(allFrames.length);//[frame1, frame2, ..]
    for(let tempVal of allFrames){ 
    //USING FOR.. ALL, because we dont know the exact length and we dont have any particular condition and we need to apply certain manipulations for all items
    //  it is faster and efficient
        const title = await tempVal.title();
        console.log(`Title of the frames are ${title}`);
        
    }
})

