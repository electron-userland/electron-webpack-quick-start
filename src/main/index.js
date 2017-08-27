'use strict'

import { app, BrowserWindow } from 'electron'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Global reference to mainWindow
// Neccessary to prevent win from being garbage collected
let mainWindow

function createMainWindow () {
  // Construct new BrowserWindow
  let win = new BrowserWindow()

  // Set url for `win`
    // points to `webpack-dev-server` in development
    // points to `index.html` in production
  let url = isDevelopment
    ? 'http://localhost:9080'
    : `file://${__dirname}/index.html`

  if (isDevelopment) win.webContents.openDevTools()

  win.loadURL(url)

  win.on('closed', () => {
    mainWindow = null
  })

  return win
}

// Quit application when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications to stay open
  // until the user explicitly quits
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  // On macOS it is common to re-create a window
  // even after all windows have been closed
  if (mainWindow === null) mainWindow = createMainWindow()
})

// Create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
})
