window.addEventListener("load",()=>{
    console.log("cargue");
    document.getElementById("btnagregar").addEventListener("click",()=>{
        console.log("le distre al boton");
        //Recupero los elementos del formulario
        let enombre = document.getElementById("nombre");
        let eapodo = document.getElementById("apodo");
        let egenero =document.getElementById("genero");
        let erol =document.getElementById("rol");
        //Recupero el contenido de lso elementos del formulario
        let vnombre = enombre.value;
        let vapodo = eapodo.value;
        let radio = document.querySelectorAll(".radio")
        let campo_checkButton = document.querySelector(".campo_checkButton")

            for(let i = 0; i < radio.length; i++){
                radio[i].addEventListener("click",function(){
                    campo_checkButton.value = radio[i].value
                })
            }
        let vrol = erol.value;
        console.log(vnombre)
        console.log(vapodo)
        console.log(vgenero)
        console.log(vrol)
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