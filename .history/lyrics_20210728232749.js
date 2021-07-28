const { getLyrics ,getAlbumArt ,getSong } = require('genius-lyrics-api');
// retrive title and artist from 
var options = {
    title:"desipasito",
    apiKey:'6ggSONbH0WJb2wy9gkzjE80kWTpPn5N_CeKVQoAcSdfrGaMXQHFZ4ocksApJGdCY',
    artist:'louis fonsi',
    optimizeQuery:true
}
//   $("#lyrics-btn").click(function(){
//     getLyrics(options).then((lyrics) => $('.lyrics').text(lyrics));
//   })
// getAlbumArt(options).then((art)=> console.log(art))
getSong(options).then((song)=> console.log(song))