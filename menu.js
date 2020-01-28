'use strict';
const path = require('path');
const fs = require('fs');
const {app, Menu, shell, dialog} = require('electron');

let mainWindow;

const openFile = () => {
    const result = dialog.showOpenDialogSync({properties:['openFile']});
    if(result) {
        const path = result[0];
        console.log('open ' + path);
    }
};

const template = [
    {
        role: 'fileMenu',
        submenu: [
            {
                label: 'Open file...',
                accelerator: 'Control+O',
                click() {
                    openFile();
                }
            }
        ]
    }
];

module.exports = function(window) {
    mainWindow = window;
    return Menu.buildFromTemplate(template);
};
