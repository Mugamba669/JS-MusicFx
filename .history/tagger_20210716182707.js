// // import * as MP3Tag   from './mp3tag.min.js';
// var loader = document.querySelector('#upload');
// loader.onchange = function () {
//     const reader = new FileReader()
//     reader.onload = function () {
//       const buffer = this.result
  
//       // MP3Tag Usage
//       const mp3tag = new MP3Tag(buffer)
//       mp3tag.read()
//       console.log(mp3tag.tags.v2)
//     }
  
//     if (this.files.length > 0) {
//       reader.readAsArrayBuffer(this.files[0])
//     }
//   }

const NodeID3 = require('node-id3');
var url = "../../Music/Busy Signal The Gambler - Official Visual [Reggae's Gone Country] - Kenny Rogers Rendition (320  kbps).mp3";
// NodeID3.read(url,function(error,data){
//     if (error) {
//         console.error(error)
//     } else {
//         console.log(data)
//     }
// })
// NodeID3.write()
console.log(NodeID3)