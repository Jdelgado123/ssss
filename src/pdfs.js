const {jsPDF} = require('jspdf');
const PdfPrinter = require('pdfmake')
const fs = require('fs');


function pdfexport(){
    var pdf = new jsPDF();
        pdf.setFontSize(40);
        pdf.text(35,40,'Does this work155?');
        pdf.save('GAAA15.pdf');
}