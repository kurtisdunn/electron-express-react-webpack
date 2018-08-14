// Basic init
const electron = require('electron');
const {app, BrowserWindow} = electron;
const server = require('./api/server.js');

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname);

// To avoid being garbage collected
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 850});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});
