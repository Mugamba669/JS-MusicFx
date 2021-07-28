const {app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    // frame:false,
    // resizable:false,
    alwaysOnTop:true,
    movable:false,
    maximizable:false,
    transparent:true,
    webPreferences: {
      preload: path.join(__dirname, '/tools/Eq.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('Eq.html')
  mainWindow.setIcon('./images/pAudio.jpeg')
}

// tag editor
const tagWindow = function(){
  new BrowserWindow({
   width:400,
   height:400,
   resizable:false,
   maximizable:false,
   webContents:{
     preload:path.join(__dirname,"./tagger.js")
   },
   loadFile:"tag.html",
   setIcon:'./images/pAudio.jpeg'
 })

 }
 let template = [{
   label:"Tags",
   submenu:[{
     label:"Edit Audio tags"
   },{
    label:"Check",
    role:"checkbox",
    checked:true
  },{
    label:"Check",
    role:"checkbox",
    checked:false
  }],
   click:function(){
     alert("me")
   }
 },{
  label:"Exit",
  accelerator:"Ctrl+x",
  role:"quit"
 }]

app.whenReady().then(()=>{
  let menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu)
  createWindow()
  tagWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0){
      createWindow()
      tagWindow()
    } 
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
