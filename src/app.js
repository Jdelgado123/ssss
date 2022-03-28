const {ipcRenderer} =require('electron');
const {jsPDF} = require('jspdf');

const fonts = require('./fonts')
const {content} = require('./content')
const style = require("./style")
const PdfPrinter = require('pdfmake');
const fs = require("fs");


let docDefinition = {
    content: content,
    styles: style
}

const printer = new PdfPrinter(fonts);

let pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("pdfs/pdftest1.pdf"));
pdfDoc.end();




let body,datos;
let fecha = new Date();

document.addEventListener('DOMContentLoaded', function(){
    body = document.getElementById('body') 
})

window.onload = function(){
    const nuevaMatricula = document.getElementById("nuevaMatricula")
    const historial = document.getElementById("historial")
    const box_search=document.getElementById('box-search')

    //nuevaMatricula.onclick = function(){
    //    box_search.style.display="none"

    //    Guardarpdf()
        
        //createNuevaMatricula()
        
    //}
    //historial.onclick = function(){
    //    box_search.style.display="block"
        //ipcRenderer.invoke('getRegistros')
    //}
}

/*
async function createNuevaMatricula(){
    body.innerHTML =`
    <div class="content">
            <h1 class="logo">Registros <span>Us</span></h1>
            <div class="contact-wrapper animated bounceInUp">
                <div class="contact-form">
                    <h3>Crear Matricula/Crear Registro</h3>
                    <form>
                        <p>
                            <label>Matricula</label>
                            <input id="matricula" type="text" name="fullname">
                        </p>
                        <p>
                            <label>Mecanico</label>
                            <input id="mecanico" type="tel" name="phone">
                        </p>
                        <p>
                            <label>Fecha Registro</label>
                            <input id="date" type="date" name="affair">
                        </p>
                        <p class="block">
                           <label>Descripcion/Trabajo</label> 
                            <textarea id="descripcion" name="message" rows="2"></textarea>
                        </p>
                        <p class="block">
                            <button id="registro">
                                Registrar
                            </button>
                        </p>
                    </form>
                </div>    
            </div>
        </div>`
        
        const registro = document.getElementById('registro')

        const mecanico = document.getElementById('mecanico')
        const matricula = document.getElementById('matricula')
        const descripcion = document.getElementById('descripcion')
        const date = document.getElementById('date')

        registro.onclick= function(e){
            e.preventDefault()
            let datos ={matricula:matricula.value,mecanico:mecanico.value,descripcion:descripcion.value,date:date.value+""}

            ipcRenderer.invoke('newMatricula',datos)
            mecanico.value=""
            matricula.value=""
            date.value=""
            descripcion.value=""
        }
        
}
*/


//Listar los datos de la base de datos
/*ipcRenderer.on('datosRegistros',(event,args)=>{
    let template ='<div class="col-12 ps-4 scrollTbl" >'
    datos=args
    
    datos.forEach((element,index) => {
        if(index<=50)
        template+=`
        <div class="Select row" id="${element.id_registro}">
        <div class="col-12 mrg" id="showReqRev">
                    <div class="row navSuccess">
                        <div class="col-2 borderR">
                            <p class=" mt-4 mb-4 limitFech">${element.matricula}</p>
                        </div>
                        <div class="col-2">
                            <p class=" mt-4 mb-4">Mecanico:${element.mecanico}</p>
                        </div>
                        <div class="col-5 offset-3">
                            <p class=" mt-4 mb-4">Descripcion:${element.descripcion}</p>
                        </div>
                        <div class="col-5 offset-3">
                            <p class=" mt-4 mb-4" id="lloro">Fecha: ${convertidorFechas(element.fecha_registro)}</p>
                        </div>
                        
                    </div>
        </div>
    </div>
`
    });
    const formulario = document.querySelector('#formulario')

    formulario.addEventListener('keyup',(e)=>{
        template = `<div class="col-12 ps-4 scrollTbl" >`
        const formulario = document.querySelector('#formulario')
        const texto = formulario.value.toLowerCase()
        datos.forEach(registro =>{
            let nombre = registro.matricula.toLowerCase();
            if(nombre.indexOf(texto)!== -1){
                template+=`<div class="Select row" id="${registro.id_registro}">
                <div class="col-12 mrg" id="showReqRev">
                            <div class="row navSuccess">
                                <div class="col-2 borderR">
                                    <p class=" mt-4 mb-4 limitFech">${registro.matricula}</p>
                                </div>
                                <div class="col-2">
                                    <p class=" mt-4 mb-4">Mecanico:${registro.mecanico}</p>
                                </div>
                                <div class="col-5 offset-3">
                                    <p class=" mt-4 mb-4">Descripcion:${registro.descripcion}</p>
                                </div>
                                <div class="col-5 offset-3">
                                    <p class=" mt-4 mb-4">Fecha: ${convertidorFechas(registro.fecha_registro)}</p>
                                </div>
                            </div>
                </div>
            </div>`
            }
        });
        body.innerHTML = template
    })
    body.innerHTML=template
})

function convertidorFechas(gaa) {
    let pff = new Date(gaa) 
    let date = JSON.stringify(pff)
    date = date.slice(1,11)
    return date;
}
*/