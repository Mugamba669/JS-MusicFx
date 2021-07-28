const {app, BrowserWindow , Menu } = require('electron')
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
  // mainWindow.autoHideMenuBar = true;
  // mainWindow.
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}
let template = [
  {
    label :"Settings",
  },{
    label:"Visualizers"
  }
]

app.whenReady().then(() => {
const menue = new Menu.buildFromTemplate(template)

  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})