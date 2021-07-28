// test app
const { BrowserWindow } = require('electron');
const path = require('path')
let mainWindow;
function createWindow(){
    mainWindow = new BrowserWindow({
        title:"IPC Messaging",
        width:600,
        height:600,
        maximizable:false,
        resizable:false,
        alwaysOnTop:true,
        webPreferences:{
            preload:path.join(__dirname,"")
        }
    })
    mainWindow.loadURL('index.html');
    mainWindow.webContents.openDevTools()
}