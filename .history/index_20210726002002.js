const Axios = require('axios');
const cheerio = require("cheerio")
Axios.get('https://www.nowviba.com/music/pages/search.php?q=buligita').then((response)=> console.log(response.json())).catch((error)=>console.log("Error here "+error))