const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 250,
    height: 300,
    resizable: false,
    transparent: true,
    frame: false,
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
