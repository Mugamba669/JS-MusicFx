const { getLyrics } = require('genius-lyrics-api');
var options = {
    title:"Heartless",
    apiKey:'opD3U2bdGUVFn8BIJzcktbc9iZGH7sGS5f6hie_4Nh2y689wY9D-hc5yLr9VAQE_eXFoBDseBlO76yj0bISYsQ',
    artist:'The Weekend',
    optimizeQuery:true
}
getLyrics(options).then((lyrics) => console.log(lyrics));