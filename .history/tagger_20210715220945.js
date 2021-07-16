const { Buffer } = require('buffer');
const NodeID3 = require('node-id3');
const nodemon = require('nodemon');
var file = '../../Music/Desiigner - Tiimmy Turner (Official Audio).mp3';
// NodeID3.read(file,function (error,tags) {
//     console.log(tags);
// })
const tags = {
    title: "Tomorrow",
    artist: "Kevin Penkin",
    album: "TVアニメ「メイドインアビス」オリジナルサウンドトラック",
    // APIC: "./example/mia_cover.jpg",
    TRCK: "27"
}
NodeID3.update(tags,file,function(error,buffer){
    console.log(buffer);
})
