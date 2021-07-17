// import * as Mp3Tag   from './node_modules/mp3tag.js/src/mp3tag';
var loader = document.querySelector('#upload');
loader.onchange = function(){
    var reader = new FileReader();
    reader.onload = function(e){
        var buffer = e.target.result;
        var tags = new MP3Tag(buffer);
        console.log(tags)
    }
}
var tags = new MP3Tag();
console.log(tags)