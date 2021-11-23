/*
    validaciones.js
    scrip para validar formulario del examen
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'

window.onload=iniciar //cuando se cargue llama a la funcion enviar
function iniciar() 
{
    let formulario=document.forms[0]
    document.getElementById('iMatricula').onblur = comprobarMatricula
    document.getElementById('sCurso').onblur =comprobarCurso
    formulario.onsubmit=validar
}   

function validar(eventos) 
{
    
}
/**
     * Ver que curso esta seleccionado y sacar los modulos correspondientes
*/
function comprobarCurso() {
    if(document.getElementsByTagName("#modulos select"))
    {
        document.getElementsByTagName("#modulos select").remove
    }
    let select = document.createElement("select")
    let option1 = document.createElement("option")
    let option2 = document.createElement("option")
    let option3 = document.createElement("option");
    if(document.getElementById('sCurso').value=="1DAW")
    {
       
        option1.setAttribute("value", "value1")
        let option1Texto = document.createTextNode("Sistemas informaticos")
        option1.appendChild(option1Texto)

        
        option2.setAttribute("value", "value2")
        let option2Texto = document.createTextNode("BBDD")
        option2.appendChild(option2Texto)

       
        option3.setAttribute("value", "value3");
        let option3Texto = document.createTextNode("Programacion");
        option3.appendChild(option3Texto);
    
       
    
        
    }
    else
    {
        option1.setAttribute("value", "value1")
        let option1Texto = document.createTextNode("DIW")
        option1.appendChild(option1Texto)

        
        option2.setAttribute("value", "value2")
        let option2Texto = document.createTextNode("EIE")
        option2.appendChild(option2Texto)

       
        option3.setAttribute("value", "value3");
        let option3Texto = document.createTextNode("DWC");
        option3.appendChild(option3Texto);
    }
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    document.getElementById('modulos').appendChild(select);
}
/**
     * Comprobar si las matriculas estan en el formato correcto
*/
function comprobarMatricula() {
    console.log("comprobar...")
    let exp1 = new RegExp(/^([A-Z]{2})\-\d{4}\-[A-Z]{1,2}$/)
    let exp2 = new RegExp(/^(\d{4})\-([A-Z]{3})$/)
    if(! document.getElementById('iMatricula').value.match(exp1) )
    {
        
        if(!document.getElementById('iMatricula').value.match(exp2) )
        {
            console.log('MATRICULA INCORRECTA')
        }
    }
}
