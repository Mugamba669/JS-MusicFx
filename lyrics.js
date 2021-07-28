const { getLyrics ,getAlbumArt ,getSong, getSongById } = require('genius-lyrics-api');
// retrive title and artist from 

  $("#lyrics-btn").click(function(){
      console.log($('.lyric-title').text())
    var options = {
        title:$('.lyric-title').text(),
        apiKey:'6ggSONbH0WJb2wy9gkzjE80kWTpPn5N_CeKVQoAcSdfrGaMXQHFZ4ocksApJGdCY',
        artist:$('.lyric-artist').text(),
        optimizeQuery:true
    }
    getLyrics(options).then((lyrics) => $('.lyrics').text(lyrics));
  })
// getAlbumArt(options).then((art)=> console.log(art))
// getSong(options).then((song)=> console.log(song))
