const Axios = require('axios');
const cheerio = require("cheerio");
var data = {
    title:"",
    artist:"",
    cover:""
}
Axios.get('https://www.nowviba.com/music/pages/search.php?q=ffe')
.then((response)=>{
    var html = response.data;
   
     const $ = cheerio.load(html);
    console.log($('.searchrscontainerpic').text())
    // console.log($('.searchrscontainer-musician').html())
    
     //selecting the elements with the data
    //  const scrapedata = $("a", ".comment-bubble").text();
    //  const scrapedata = $("table").text();

 
     //outputting the scraped data
    //  console.log(scrapedata);
}).catch((error)=>console.log("Error here "+error))

const MusixMatch = require('musixmatch')
console.log(MusixMatch)