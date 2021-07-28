const Axios = require('axios');
const cheerio = require("cheerio")
Axios.get('https://www.forextradingbig.com/instaforex-broker-review/').then((response)=> console.log(response.data)).catch((error)=>console.log("Error here "+error))