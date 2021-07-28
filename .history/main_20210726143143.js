const {app, BrowserWindow, Menu, shell } = require('electron')
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
      preload: path.join(__dirname, '/index.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  mainWindow.setIcon('./images/pAudio.jpeg')
  mainWindow.webContents.openDevTools()
}

// tag editor
const tagWindow = function(){
 let tagger = new BrowserWindow({
   width:600,
   height:600,
  //  alwaysOnTop:true,
  //  resizable:false,
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
      // alert("me")
      tagWindow();
    }
   },{
    label:"Load Web Version",
    accelerator:"Alt+W",
    click:function(){
      shell.showItemInFolder($HOME)
    },
    
  },{
    label:"Reload",
    role:"reload",
    accelerator:"Ctrl+R"
  },{
    label:"DevOtions",
    accelerator:"F12",
    role:'openDevTools'
   }],
   
 }]

app.whenReady().then(()=>{
  let menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu)
  createWindow()
  // tagWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0){
      createWindow()
      // tagWindow()
    } 
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
