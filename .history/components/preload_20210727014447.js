const ipc = require('electron').ipcRenderer;
var btn = document.querySelector("button");
btn.addEventListener('click',function(){
       const reply = ipc.sendSync('synchronous-message','Where are you');
       document.querySelector('p').innerHTML = `${reply}`;
},false);