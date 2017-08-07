const electron = require('electron')
const path = require('path')
const url = require('url')
const { app, BrowserWindow } = electron

let mainWindow
let isDevelopment = process.env.NODE_ENV === 'development'

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    y: 0,
    icon: path.join(__dirname, 'assets/icon/png/64x64.png')
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './app/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  if (isDevelopment) mainWindow.webContents.openDevTools({ mode: 'bottom' })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
