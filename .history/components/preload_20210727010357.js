const { ipcRenderer } = require('electron')
document.querySelector(".w3-button").addEventListener('click',function(){
       const reply = ipcRenderer.sendSync('sending-message','Where are you');
       document.querySelector('').innerHTML = `${reply}`;
},false);