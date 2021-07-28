
const NodeID3 = require('node-id3');
var url = "../../Music/Goodlyfe - Ngamba.mp3";

var _ = (all)=>{
  return document.querySelectorAll(all)
}
var q =  (selector)=>{
  return document.querySelector(selector);
}


let Tags = {
  title:'',
  artist:'',
  album:'',
  year:0,
  genre:'',
  composer:'',
  description:'',
  image: {
    mime: "",
    imageBuffer:""
  }
}
NodeID3.read(url,function(error,data){
    if (error) {
        console.error(error)
    } else {
        console.log(data)
       _('input').forEach((editor,index)=>{
         switch (index) {
          case 0:
            editor.value = (data.title == undefined)?"":data.title;
            editor.oninput = function(){
              Tags.title = this.value
            }
             break;

          case 1:
              editor.value = (data.artist == undefined)?"":data.artist;
              editor.oninput = function(){
                Tags.artist = this.value
              }
               break;
          case 2:
            editor.value = (data.album == undefined?"":data.album);
            editor.oninput = function(){
              Tags.album = this.value
            }
             break;

           case 3:
            editor.value = (data.genre == undefined)?"":data.genre;
            editor.oninput = function(){
              Tags.genre = this.value
            }
             break;

            case 4:
              editor.value = (data.year == undefined)?"":data.year;
              editor.oninput = function(){
                Tags.year = this.value
              }
               break;

           case 5:
                editor.value = (data.composer == undefined)?"":data.composer;
                editor.oninput = function(){
                  Tags.composer = this.value
                }
                 break;

             case 6:
                  editor.value = (data.description == undefined)?"":data.description;
                  editor.oninput = function(){
                    Tags.description = this.value
                  }
                   break;
              case 7:
                editor.onchange = function(e){
                  var data = e.currentTarget.files[0];
                  Tags.image.mime = data.type;
                  Tags.image.imageBuffer = data.path;
                  console.log(data)
                  
                    
                }
           default:
             break;
         }
       })
       _('.btn').forEach((btn,index)=>{
        console.log(btn)
          switch (index) {
            case 0:
              btn.onclick = function(){
                console.log()
              }
              break;
  
              case 1:
                btn.onclick = function(){
                  NodeID3.update(Tags,url)
                }
                break;
          
            default:
              break;
          }
      })
    }
})

  
// console.log(require('fs-web'))
NodeID3.write()
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