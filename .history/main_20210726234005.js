const {app, BrowserWindow, Menu, shell, ipcRenderer, dialog, ipcMain } = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    // frame:false,
    // resizable:false,
    // movable:false,
    // maximizable:false,
    // transparent:true,
    webPreferences: {
      preload: path.join(__dirname, '/tools/Eq.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('Eq.html')
  mainWindow.setIcon('./images/pAudio.jpeg')
  mainWindow.webContents.openDevTools()
}

// tag editor
const tagWindow = function(){
 let tagger = new BrowserWindow({
   width:600,
   height:600,
   maximizable:true,
   webPreferences:{
     preload:path.join(__dirname,"/tagger.js")
   },
 })
tagger.loadFile("tag.html");
tagger.autoHideMenuBar = true;
tagger.webContents.openDevTools()
 }
 let template = [{
   label:"Tags",
   submenu:[{
     label:"Edit Audio tags",
     click:function(){
      tagWindow();
    }
   },{
    label:"Load Web Version",
    accelerator:"Alt+W",
    click:function(){
      shell.showItemInFolder('/')
    },
    
  },{
    label:"Reload",
    role:"reload",
    accelerator:"Ctrl+R"
  },{
    label:"DevOtions",
    accelerator:"F12",
    role:'toogleDevTools'
   }],
   
 },{
   label:"Import",
   submenu:[{
      label:"Load one file",
      accelerator:"Ctl+D",
      click:function(){
       dialog.showOpenDialog({
         title:"Select Track",
         properties:['openFile'],
         defaultPath:"~/Music/",
         filters:[{name:'Audio',extensions:["mp3","wav","mpeg","m4a"]}],
         buttonLabel:"select"
       },function(files){
         console.log(files)
       })
      }
   },{
     label:"Load multiple files",
     click:()=>{
       dialog.showOpenDialog(new BrowserWindow({
         alwaysOnTop:true,
         title:"Selected Files",
         width:400,
         height:400,
         autoHideMenuBar:true,
         maximizable:false,
         resizable:false,
        webPreferences:{
          preload:path.join(__dirname,"/index.html")
        }
        }).loadURL("index.html"),{
         properties:["multiSelections"],
         defaultPath:"~/Music/",
         filters:[{name:"Audio",extensions:["mp3","wav","m4a","mpeg"]}]
       },function(files){
         console.log(files)
       })
     }
   }]
 }];

app.whenReady().then(()=>{
  let menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu)
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0){
      createWindow()
    } 
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
