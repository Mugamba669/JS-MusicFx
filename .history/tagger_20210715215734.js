const NodeID3 = require('node-id3');
var file = '../../Music/Desiigner - Tiimmy Turner (Official Audio).mp3';
NodeID3.read(file,function (error,tags) {
    console.log(tags);
})
