// test app
const { BrowserWindow } = require('electron')
let mainWindow;
function createWindow(){
    mainWindow = new BrowserWindow({
        title:"IPC Messaging",
        width:600,
        height:600,
        maximizable:false,
        resizable:false,
        alwaysOnTop:true,
    })
}