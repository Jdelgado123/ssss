const { app, ipcMain } = require('electron')
const {createWindowMain} = require('./main')

app.whenReady().then(createWindowMain)

/*ipcMain.handle('newMatricula',(event,arg)=>{
    newMatricula(arg)
})
ipcMain.handle('getRegistros',()=>{
    getRegistros()
})
*/


