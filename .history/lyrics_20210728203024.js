const { getLyrics } = require('genius-lyrics-api');
var options = {
    title:"Heartless",
    apiKey:'ZCQR4A3E2d6K5SWprAkjlbsN_Z0tbXCAtohJYIVAHbY651NGj-4SaXeQJF8GJhgH',
    artist:'The Weekend',
    optimizeQuery:true
}
getLyrics(options).then((lyrics) => console.log(lyrics));