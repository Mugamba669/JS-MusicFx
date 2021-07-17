// import * as Mp3Tag   from './node_modules/mp3tag.js/src/mp3tag';
var loader = document.querySelector('#upload');
loader.onchange = function () {
    const reader = new FileReader()
    reader.onload = function () {
      const buffer = this.result
  
      // MP3Tag Usage
      const mp3tag = new MP3Tag(buffer)
      mp3tag.read()
      console.log(mp3tag)
    }
  
    if (this.files.length > 0) {
      reader.readAsArrayBuffer(this.files[0])
    }
  }
