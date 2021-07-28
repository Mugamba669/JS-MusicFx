// test app
const { BrowserWindow, app, ipcMain } = require('electron');
const path = require('path');

function createWindow(){
  const   mainWindow = new BrowserWindow({
        // title:"IPC Messaging",
        // width:600,
        // height:400,
        // maximizable:false,
        // resizable:false,
        // alwaysOnTop:true,
        // show:true,
        webPreferences:{
            preload:path.join(__dirname,"renderer.js")
        }
    })
    mainWindow.loadFile('index.html');
    // mainWindow.webContents.openDevTools()
}
ipcMain.on('synchronous-message',function(event){
    event.returnValue = "i heard you boss"
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
  


