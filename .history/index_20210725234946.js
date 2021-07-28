const Axios = require('axios');
const cheerio = require("cheerio")
Axios.get('').then((response)=> console.log(response.html()))