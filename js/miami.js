import { actualizardatos,obtenerdato } from "./promessas.js";

window.addEventListener("load",()=>{
    alert("llegue")
    let valores =window.location.search;
    console.log(valores)
    // CREAMOS LA INSTANCIA
    const urlParams =new URLSearchParams(valores);
    //ACCEDER A LOS VALORES
    var id =urlParams.get("id");
    console.log(id);
    //ir a la base de datos a recuperar el objeto asociado ala id
    obtenerPelicula(id).then((d)=>{
        console.log(d)
         // cargar los datos en el formulario
        // recuperar elementos 
        let nombre = document.getElementById("nombre");
        let apodo = document.getElementById("apodo");
        let genero = document.getElementById("genero");
        let rol= document.getElementById("rol");
       

        // cargar valor actual 
        nombre.value = d.nombre;
        apodo.value = d.apodo;
        genero.value = d.genero;
        rol.value = d.rol;
       
    })
    //botn actualizar 
    let btnactualizar = document.getElementById("btnactualizar");
    btnactualizar.addEventListener("click",()=>{
           //Recupero los elementos del formulario
           let eNombre = document.getElementById("nombre");
           let eapodo = document.getElementById("apodo");
           let eGenero = document.getElementById("genero");
           let erol = document.getElementById("rol");
           
           //Recupero el contenido de los elementos del formulario
           let vNombre = eNombre.value;
           let vapodo = eapodo.value;
           let vgenero = eGenero.value;
           let vrol = erol.value;
           
           //Radios y checkbox no se recupera valor, se recupera si esta chequeado
           let vMayorEdad = eMayorEdad.checked; 
           console.log(vNombre);
           console.log(vDirector);
           console.log(vAnio);
           console.log(vValoracion);
           console.log(vGenero);
           console.log(vMayorEdad);
           let pelicula = {
               'nombre':vNombre,
               'director':vDirector,
               'anio':vAnio,
               'valoracion':vValoracion,
               'genero':vGenero,
               'mayorEdad':vMayorEdad
           };
            actualizarPelicula(id,pelicula).then(()=>{
            alert("Se actualiza con exito");
            }).catch((e)=>{
                console.log(e)
            }).finally(()=>{
            //Detener el tiempo unos 5 segundo y luego redireccionar  
                //window.location.href = "/peliculas.html";
            })
    })

   


})