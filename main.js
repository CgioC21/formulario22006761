const {app, BrowserWindow, ipcMain} = require("electron");
const path = require('path')

let ventana;

function createWindow(){
    ventana = new BrowserWindow({
        width: 550,
        height: 675,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventana.loadFile("index.html")
}

let ventana2;

function createWindow2(){
    ventana2 = new BrowserWindow({
        width: 550,
        height: 675,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventana2.loadFile("segundo.html")
}


ipcMain.on('inicio-sesion',function(event,args){
    console.log(args)

    createWindow2()
    ventana2.webContents.on('did-finish-load',function(){
        ventana2.webContents.send('bienvenido-usuario',args)
    })    
})


app.whenReady().then(createWindow)