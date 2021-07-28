const Axios = require('axios');
const cheerio = require("cheerio");
var data = {
    title:"",
    artist:"",
    cover:""
}
Axios.get('https://www.nowviba.com/music/pages/search.php?q=Fik Fameica')
.then((response)=>{
    var html = response.data;
    // console.log(html)
     //loading response data into a Cheerio instance
     const $ = cheerio.load(html);
    console.log($('.searchrscontainer-song').html())
    console.log($('.searchrscontainer-musician').html())
    
     //selecting the elements with the data
    //  const scrapedata = $("a", ".comment-bubble").text();
    //  const scrapedata = $("table").text();

 
     //outputting the scraped data
    //  console.log(scrapedata);
}).catch((error)=>console.log("Error here "+error))