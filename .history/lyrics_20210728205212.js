const { getLyrics } = require('genius-lyrics-api');
var options = {
    title:"Heartless",
    apiKey:'6ggSONbH0WJb2wy9gkzjE80kWTpPn5N_CeKVQoAcSdfrGaMXQHFZ4ocksApJGdCY',
    artist:'The Weekend',
    optimizeQuery:true
}
getLyrics(options).then((lyrics) => $('.lyrics').text(lyrics));
