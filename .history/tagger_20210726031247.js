
const NodeID3 = require('node-id3');
export class AudioEditor{

  constructor(url){
    this.url = url;
    this._ = (all)=>{
      return document.querySelectorAll(all);
    }
    this.tags = {
      title:'',
      artist:'',
      album:'',
      year:0,
      genre:'',
      composer:'',
      description:'',
      APIC:''
    }
  }
  // methods
  getEditor(){
    NodeID3.read(url,function(error,data){
      if (error) {
          console.error(error)
  
      } else {
        console.info(data)
       var that = this;
         that._('input').forEach((editor,index)=>{
           switch (index) {
            case 0:
              editor.value = (data.title == undefined)?"":data.title;
              Tags.title = editor.value
              editor.oninput = function(){
                Tags.title = this.value
              }
               break;
  
            case 1:
                editor.value = (data.artist == undefined)?"":data.artist;
                Tags.artist = editor.value
                editor.oninput = function(){
                  Tags.artist = this.value
                }
                 break;
            case 2:
              editor.value = (data.album == undefined?"":data.album);
              Tags.album = editor.value
              editor.oninput = function(){
                Tags.album = this.value
              }
               break;
  
             case 3:
              editor.value = (data.genre == undefined)?"":data.genre;
              Tags.genre = editor.value
  
              editor.oninput = function(){
                Tags.genre = this.value
              }
               break;
  
              case 4:
                editor.value = (data.year == undefined)?"":data.year;
              Tags.year = editor.value
                editor.oninput = function(){
                  Tags.year = this.value
                }
                 break;
  
             case 5:
                  editor.value = (data.composer == undefined)?"":data.composer;
              Tags.composer = editor.value
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
                    Tags.APIC = data.path;
                   
                  }
             default:
               break;
           }
         })
        that. _('.btn').forEach((btn,index)=>{
          // console.log(btn)
            switch (index) {
              case 0:
                btn.onclick = function(){
                  NodeID3.read(url,function(error,data){
                    // console.log()
                    var img = data.image.imageBuffer;
                    var base64String = '';
                    for (let index = 0; index < img.data.length; index++) {
                      base64String += String.fromCharCode(array[index]);
                    }
                    var bg = "data:image"+img.format+";base64"+window.btoa(base64String);
                    console.log(bg);
                      //  document.body.style.backgroundImage ="url("+data.image.imageBuffer+")";
                  })
                }
                break;
    
                case 1:
                  btn.onclick = function(){
                    NodeID3.Promise.write(Tags,url)
                  }
                  break;
            
              default:
                break;
            }
        })
      }
  })
  
  }
}
// var url = "../../Music/Goodlyfe - Ngamba.mp3";
// var _ = (all)=>{
//   return document.querySelectorAll(all);
// }
// let Tags = {
//   title:'',
//   artist:'',
//   album:'',
//   year:0,
//   genre:'',
//   composer:'',
//   description:'',
//   APIC:''
// }
