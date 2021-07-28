const Axios = require('axios');
const cheerio = require("cheerio")
Axios.get('https://www.nowviba.com/music/pages/search.php?q=movie')
.then((response)=>{
    var html = response.data;
    console.log(html)
     //loading response data into a Cheerio instance
     const $ = cheerio.load(html);
    console.log($('a .searchrscontainer').text())
     //selecting the elements with the data
    //  const scrapedata = $("a", ".comment-bubble").text();
    //  const scrapedata = $("table").text();

 
     //outputting the scraped data
    //  console.log(scrapedata);
}).catch((error)=>console.log("Error here "+error))