import { db } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc,getDoc,updateDoc} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 
export let agregarDatos =async(datos)=>{
    const docref =await addDoc(collection(db,"datos"),datos);
}

export let obtenerdatos =async()=> {
    const querySnapshot =await getDocs(collection(db,"datos"));
    var datoss =[]
    querySnapshot.forEach((doc)=>{
        let datos = {
            'id':doc.id,
            'nombre':doc.data().nombre,
            'apodo':doc.data().apodo,
            'genero':doc.data().genero,
            'rol':doc.data().rol
        }
        datoss.push(datos)
        console.log(doc.id," =>",doc.data());
    });
        return datoss;

}
export let eliminardatos =async(iddatos)=>{
    await deleteDoc(doc(db,"datos",iddatos));
}
export let obtenerdato =async(iddatos)=>{
    const docref =doc(db,"dato",iddatos);
    const docSnap =await getDoc(docref);

    let dato ={
        'id':docSnap.id,
        'nombre':docSnap.data().nombre,
        'apodo':docSnap.data().apodo,
        'genero':docSnap.data().genero,
        'rol':docSnap.data().rol
    }
    return dato
}
export let actualizardatos =async (id,d)=>{
    const docRef = await doc (db,"peliculas",id);
    updateDoc(docRef,d);
}