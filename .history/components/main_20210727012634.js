// test app
const { BrowserWindow, app, ipcMain } = require('electron');
const path = require('path')
let mainWindow;
function createWindow(){
    mainWindow = new BrowserWindow({
        // title:"IPC Messaging",
        width:600,
        height:400,
        maximizable:false,
        resizable:false,
        alwaysOnTop:true,
        show:true,
        webPreferences:{
            preload:path.join(__dirname,"preload.js")
        }
    })
    mainWindow.loadURL('index.html');
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(()=>{
    createWindow();
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0){
          createWindow()
        } 
      })
})
ipcMain.on('synchronous-message',function(event){
    event.returnValue = "i heard you boss"
})