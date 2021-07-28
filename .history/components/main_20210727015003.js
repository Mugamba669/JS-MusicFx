// test app
const { BrowserWindow, app, ipcMain } = require('electron');
const ipc = require('electron').ipcMain;
const path = require('path');

function createWindow(){
  const   mainWindow = new BrowserWindow({
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
    mainWindow.loadFile('index.html');
    // mainWindow.webContents.openDevTools()
}
ipc.on('synchronous-message',function(event,arg){
    event.returnValue = "i heard you boss";
})
app.whenReady().then(()=>{
    createWindow();
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0){
          createWindow()
        } 
      })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })
  


