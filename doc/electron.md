npm install electron --save-dev
npm install -g electron

DEBUG:
npm install --save-dev devtron
npm install --save electron-debug
Usage
    const {app, BrowserWindow} = require('electron');
    require('electron-debug')({showDevTools: true});
    let win;
    app.on('ready', () => {
        win = new BrowserWindow();
    });

PACKAGE:
npm install electron-packager -g
electron-packager . --platform=win32 --arch=x64