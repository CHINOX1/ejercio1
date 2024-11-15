import { eliminardatos, obtenerdatos } from "./promessas.js";

window.addEventListener("load",()=>{
    var datos =obtenerdatos()
    console.log(datos)
    var altodato =document.getElementById("cuerpotabla");
    
    datos.then((listado)=>{

        let filas =""
        listado.forEach((d)=>{
            filas += "<tr>"
            filas += "<td>"+d.nombre+"</td>"
            filas += "<td>"+d.apodo+"</td>"
            filas += "<td>"+d.genero+"</td>"
            filas += "<td>"+d.rol+"</td>"
            filas += "<td><button id='mod"+ d.id +"'>Modificar</button></td>"
            filas += "<td><button id='eli"+ d.id +"'>Eliminar</button></td>"
            filas += "</tr>"
        })
        
        console.log(filas)
        altodato.innerHTML=filas;


        listado.forEach((d)=>{
            let botonEliminar =document.getElementById("eli"+d.id);
            botonEliminar.addEventListener("click",()=>{
                if(confirm("desea realemnte eliminar la pelicula "+d.nombre+"?")){
                    console.log("eliminaste")
                    eliminardatos(d.id).then(()=>{
                        console.log("se logro eliminar")
                        location.reload()
                    }).catch((e)=>{
                        console.log("no se elimino na weoncito"+e)
                    })
                }else{
                    console.log("tai puro weando")
                }
            })
            let botonactualizar =document.getElementById("mod"+d.id);
            botonactualizar.addEventListener("click",()=>{
                alert ("vamos pa maiami el id "+d.id);
                window.location.href="/miami.html?id="+d.id;
            })
        })
    })
});