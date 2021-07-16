const { Buffer } = require('buffer');
const NodeID3 = require('node-id3');
const nodemon = require('nodemon');
var file = '../../Music/Desiigner - Tiimmy Turner (Official Audio).mp3';

let tags = {
    title: "Timmy Tunner",
    artist: "Designer",
    album: "Panda",
    APIC: "../FeesApp/examples/assets/img/cover.jpg",
    TRCK: "20"
}
NodeID3.update(tags,file,function(error,buffer){
    console.log(buffer);
})
// updated tags
// NodeID3.read(file,function (error,tags) {
//     console.log("New Tags "+tags);
// })