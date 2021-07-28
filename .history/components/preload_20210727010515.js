const { ipcRenderer } = require('electron')
document.querySelector(".w3-button").addEventListener('click',function(){
       const reply = ipcRenderer.sendSync('synchronous-message','Where are you');
       document.querySelector('p').innerHTML = `${reply}`;
},false);