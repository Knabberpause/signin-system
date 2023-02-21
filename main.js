const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 500,
    height: 500,
    autoHideMenuBar: true,
    minHeight: 350,
    minWidth:350,
    maxHeight:600,
    maxWidth:600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}


app.whenReady().then(createWindow)


