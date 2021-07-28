const { ipcRenderer } = require('electron')
document.querySelector(".w3-button").addEventListener('click',function(){
        ipcRenderer.sendSync('sending-message','Where are you')
},false);