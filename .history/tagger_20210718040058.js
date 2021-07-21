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

// const NodeID3 = require('node-id3');
// var url = "/home/mugamba/Music/Busy Signal The Gambler - Official Visual [Reggae's Gone Country] - Kenny Rogers Rendition (320  kbps).mp3";
// NodeID3.read(url,function(error,data){
//     if (error) {
//         console.error(error)
//     } else {
//         console.log(data)
//     }
// })
// console.log(require('fs-web'))
// NodeID3.write()
/* 
Tags
        album:
        bpm:
        composer:
        genre:
        copyright:
        date:
        playlistDelay:
        encodedBy:
        textWriter:
        fileType:
        time:
        contentGroup:
        title:
        subtitle:
        initialKey:
        language:
        length:
        mediaType:
        originalTitle:
        originalFilename:
        originalTextwriter:
        originalArtist:
        originalYear:
        fileOwner:
        artist:
        performerInfo: // (album artist)
        conductor:
        remixArtist:
        partOfSet:
        publisher:
        trackNumber:
        recordingDates:
        internetRadioName:
        internetRadioOwner:
        size:
        ISRC:
        encodingTechnology:
        year:

        comment: {
  language: "eng",
  text: "mycomment"
}
unsynchronisedLyrics: {
  language: "eng",
  text: "lyrics"
}
userDefinedText: [{
  description: "txxx name",
  value: "TXXX value text"
}, {
  description: "txxx name 2",
  value: "TXXX value text 2"
}] // Care, update doesn't delete non-passed array items!
image: {
  mime: "image/png",
  type: {
    id: 3,
    name: "front cover
  }, // See https://en.wikipedia.org/wiki/ID3#ID3v2_embedded_image_extension
  description: "image description",
  imageBuffer: (file buffer)
},
popularimeter: {
  email: "mail@example.com",
  rating: 192,  // 1-255
  counter: 12
},
private: [{
  ownerIdentifier: "AbC",
  data: "asdoahwdiohawdaw"
}, {
  ownerIdentifier: "AbCSSS",
  data: Buffer.from([0x01, 0x02, 0x05])
}],
chapter: [{
  elementID: "Hey!", // THIS MUST BE UNIQUE!
  startTimeMs: 5000,
  endTimeMs: 8000,
  startOffsetBytes: 123, // OPTIONAL!
  endOffsetBytes: 456,   // OPTIONAL!
  tags: {                // OPTIONAL
    title: "abcdef",
    artist: "akshdas"
  }
}],
tableOfContents: [{
  elementID: "toc1",    // THIS MUST BE UNIQUE!
  isOrdered: false,     // OPTIONAL, tells a player etc. if elements are in a specific order
  elements: ['chap1'],  // OPTIONAL but most likely needed, contains the chapter/tableOfContents elementIDs
  tags: {               // OPTIONAL
    title: "abcdef"
  }  
}],
commercialUrl: ["commercialurl.com"], // array or single string
copyrightUrl: "example.com",
fileUrl: "example.com",
artistUrl: ["example.com"], // array or single string
audioSourceUrl: "example.com",
radioStationUrl: "example.com",
paymentUrl: "example.com",
publisherUrl: "example.com",
userDefinedUrl: [{
  description: "URL description"
  url: "https://example.com/"
}] 
*/

// import * as fs from "./node_modules/fs-web/dist/fs.js"

// // const file = new fs()
// console.log(fs)
// import * as fs from 'fs-web';
 
// fs.readFile('foo/some-file.txt', 'foo')
//   .then(function(){
//     return fs.readdir('foo');
//   })
//   .then(function(files){
//     files // -> [ {some-file.txt} ]
//   });
// import { writeFile } from 'fs-web';
// console.log(writeFile)
// console.log(fetch('https://www.nowviba.com/music/pages/search.php?q=Buligita'))
await fetch('./Eq.html').then(response => response.json())
.then(data => console.log(data))
.catch((e)=> console.log(e));
