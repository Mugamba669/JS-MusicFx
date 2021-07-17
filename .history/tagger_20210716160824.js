import * as MP3Tag   from './mp3tag.min.js';
var loader = document.querySelector('#upload');
loader.onchange = function () {
    const reader = new FileReader()
    reader.onload = function () {
      const buffer = this.result
  
      // MP3Tag Usage
      const mp3tag = new MP3Tag(buffer)
      mp3tag.read()
      console.log(mp3tag.tags.v2)
    }
  
    if (this.files.length > 0) {
      reader.readAsArrayBuffer(this.files[0])
    }
  }
