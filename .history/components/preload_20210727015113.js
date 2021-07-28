const ipc = require('electron').ipcRenderer;
const btn = document.querySelector("button");
btn.addEventListener('click',function(){
       const reply = ipc.sendSync('synchronous-message','Where are you');
       document.querySelector('p').innerHTML = `${reply}`;
},false);