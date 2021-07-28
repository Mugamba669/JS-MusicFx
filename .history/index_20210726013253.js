// const Axios = require('axios');
// const cheerio = require("cheerio");
// var data = {
//     title:"",
//     artist:"",
//     cover:""
// }
// Axios.get('https://www.nowviba.com/music/pages/search.php?q=ffe')
// .then((response)=>{
//     var html = response.data;
   
//      const $ = cheerio.load(html);
//     console.log($('.searchrscontainerpic').text())
//     // console.log($('.searchrscontainer-musician').html())
    
//      //selecting the elements with the data
//     //  const scrapedata = $("a", ".comment-bubble").text();
//     //  const scrapedata = $("table").text();

 
//      //outputting the scraped data
//     //  console.log(scrapedata);
// }).catch((error)=>console.log("Error here "+error))

const puppeteer = require ('puppeteer');

//initiating Puppeteer
puppeteer
  .launch ()
  .then (async browser => {
  
    //opening a new page and navigating to Reddit
    const page = await browser.newPage ();
    await page.goto ('https://www.reddit.com/r/scraping/');
    await page.waitForSelector ('body');
  
    //manipulating the page's content
    let grabPosts = await page.evaluate (() => {
    let allPosts = document.body.querySelectorAll ('.Post');
      
    //storing the post items in an array then selecting for retrieving content
    scrapeItems = [];
    allPosts.forEach (item => {
      let postTitle = item.querySelector ('h3').innerText;
      let postDescription = '';
        try {
          postDescription = item.querySelector ('p').innerText;
        } catch (err) {}
        scrapeItems.push ({
          postTitle: postTitle,
          postDescription: postDescription,
        });
      });
      let items = {
        "redditPosts": scrapeItems,
      };
      return items;
    });
    //outputting the scraped data
    console.log (grabPosts);
    //closing the browser
    await browser.close ();
  })
  //handling any errors
  .catch (function (err) {
    console.error (err);
  });