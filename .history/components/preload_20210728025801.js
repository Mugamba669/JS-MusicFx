const ipc = require('electron').ipcRenderer;
const { dialog } = require('electron')
const btn = document.querySelector("button");
btn.addEventListener('click',function(){
      dialog.showOpenDialog({
             title:"Select Tracks"
      })
},false);