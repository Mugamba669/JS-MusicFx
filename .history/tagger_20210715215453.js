const NodeID3 = require('node-id3');
var file = '../../Music/500 Veces ( 256kbps cbr ).mp3';
NodeID3.read(file,function (error,tags) {
    console.log(tags);
})
