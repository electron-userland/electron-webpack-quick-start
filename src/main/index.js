'use strict'

import { app, BrowserWindow } from 'electron'

const isDevelopment = process.env.NODE_ENV !== 'production'

let mainWindow

function createMainWindow () {
  let win = new BrowserWindow()
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

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) mainWindow = createMainWindow()
})

app.on('ready', () => {
  mainWindow = createMainWindow()
})
