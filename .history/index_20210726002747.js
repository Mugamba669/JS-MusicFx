const Axios = require('axios');
const cheerio = require("cheerio")
Axios.get('https://www.nowviba.com/music/pages/search.php?q=movie').then((response)=> console.log(response.data)).catch((error)=>console.log("Error here "+error))