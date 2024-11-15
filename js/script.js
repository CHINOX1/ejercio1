import { agregarDatos } from "./promessas.js";
window.addEventListener("load",()=>{
    console.log("cargue");
    document.getElementById("btnagregar").addEventListener("click",()=>{
        console.log("le distre al boton");
        //Recupero los elementos del formulario
        let enombre = document.getElementById("nombre");
        let eapodo = document.getElementById("apodo");
        let emasculino =document.getElementById("masculino");
        let efemenino =document.getElementById("femenino");
        let erol =document.getElementById("rol");
        //Recupero el contenido de lso elementos del formulario
        let vnombre = enombre.value;
        let vapodo = eapodo.value;
        let vgenero =''
        if (emasculino.checked){
           vgenero = 'masculino'
        }
        else if (efemenino.checked){
            vgenero='femenino'
        }
        else {
            vgenero ='gato'
        }
        let vrol = erol.value;

        console.log(vnombre);
        console.log(vapodo);
        console.log(vgenero);
        console.log(vrol);
        let datos = {
            'nombre':vnombre,
            'apodo' :vapodo,
            'genero':vgenero,
            'rol':vrol
        };
        agregarDatos(datos);
        console.log.apply(datos);
    })
})