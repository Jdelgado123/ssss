const {BrowserWindow, Notification} = require('electron')
const {getConnection} = require('./database')
const path = require('path')

let window;

function createWindowMain() {
    window = new BrowserWindow({
        width: 1100,
        height: 800,
        icon: path.join(__dirname, 'assets/icons/png/icon.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'app.js')
        }
    })
    window.setMenuBarVisibility(false);
    window.loadFile('./src/Maingozu.html');
    
}




//Nuevo registro
/*async function newMatricula(arg){
    const conn = await getConnection()
    conn.query("SELECT * FROM matricula WHERE matricula = ?",[arg.matricula],(error,results)=>{
        if(error) console.log(error)

        if (results.length > 0) {
            conn.query("INSERT INTO registro (matricula,mecanico,fecha_registro,descripcion) VALUES (?,?,?,?)",[arg.matricula,arg.mecanico,arg.date,arg.descripcion],(error,results)=>{
                if (error) console.log(error)

                if(results){
                    new Notification({
                        title:"Nueva Registro",
                        body:"Registro agregado a matricula "+arg.matricula
                    }).show()
                }
            })
        }else{
            conn.query("INSERT INTO matricula (matricula) VALUES (?)",[arg.matricula],(error,results)=>{
                if(error){console.log(error)}
                
                new Notification({
                    title:"Nueva Matricula",
                    body:"Matricula creada correctamente"
                }).show()

                if(results){
                    conn.query("INSERT INTO registro (matricula,mecanico,fecha_registro,descripcion) VALUES (?,?,?,?)",[arg.matricula,arg.mecanico,arg.date,arg.descripcion],(error,results)=>{
                        if (error) console.log(error)
        
                        if(results){
                            new Notification({
                                title:"Nueva Registro",
                                body:"Registro agregado a matricula "+arg.matricula
                            }).show()
                        }
                    })   
                }
            })
        }
    }) 
}*/

//Obtener Registros anteriores
/*async function getRegistros(){
    const conn = await getConnection()
    conn.query("SELECT * FROM registro ORDER BY fecha_registro DESC",(error,results)=>{
        if (error) {
            console.log(error)
        }
        window.webContents.send('datosRegistros',results)
    })
}*/

module.exports = {
    createWindowMain,
    //newMatricula,
    //getRegistros,
}