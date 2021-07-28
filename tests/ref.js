
  // const fs = require('fs');
  // fs.readdir("../../Music/",(error,folder)=>{
  //   folder.forEach(data => console.log(data))
  // })
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


album:                "TALB"
bpm:                  "TBPM"
composer:             "TCOM"
genre:                "TCON"
copyright:            "TCOP"
date:                 "TDAT"
playlistDelay:        "TDLY"
encodedBy:            "TENC"
textWriter:           "TEXT"
fileType:             "TFLT"
time:                 "TIME"
contentGroup:         "TIT1"
title:                "TIT2"
subtitle:             "TIT3"
initialKey:           "TKEY"
language:             "TLAN"
length:               "TLEN"
mediaType:            "TMED"
originalTitle:        "TOAL"
originalFilename:     "TOFN"
originalTextwriter:   "TOLY"
originalArtist:       "TOPE"
originalYear:         "TORY"
fileOwner:            "TOWN"
artist:               "TPE1"
performerInfo:        "TPE2"    (album artist)
conductor:            "TPE3"
remixArtist:          "TPE4"
partOfSet:            "TPOS"
publisher:            "TPUB"
trackNumber:          "TRCK"
recordingDates:       "TRDA"
internetRadioName:    "TRSN"
internetRadioOwner:   "TRSO"
size:                 "TSIZ"
ISRC:                 "TSRC"
encodingTechnology:   "TSSE"
year:                 "TYER"
comment:              "COMM"
image:                "APIC"
unsynchronisedLyrics  "USLT"
userDefinedText       "TXXX"
popularimeter         "POPM"
private               "PRIV"
chapter               "CHAP"
tableOfContents       "CTOC"
commercialUrl         "WCOM"
copyrightUrl          "WCOP"
fileUrl               "WOAF"
artistUrl             "WOAR"
audioSourceUrl        "WOAS"
radioStationUrl       "WORS"
paymentUrl            "WPAY"
publisherUrl          "WPUB"
userDefinedUrl        "WXXX"
*/