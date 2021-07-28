// test app
const { BrowserWindow, app, Menu, dialog } = require('electron');
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
   const menu =  Menu.buildFromTemplate([{
      label:"Open files",
      click:function(){
        dialog.showOpenDialog(mainWindow,{
          defaultPath:"~/Music/",
          properties:['openFile'],
          filter:{name:"Audio",extensions:["mp3","m4a"]}
        },function(files){
          console.log(files)
        })
      }
    }]);
    
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
  


