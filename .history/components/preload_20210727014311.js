const ipc = require('electron').ipcRenderer;
document.querySelector(".w3-button").addEventListener('click',function(){
       const reply = ipc.sendSync('synchronous-message','Where are you');
       document.querySelector('p').innerHTML = `${reply}`;
},false);