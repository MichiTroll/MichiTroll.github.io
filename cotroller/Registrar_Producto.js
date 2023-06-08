import { addcollection1,getcollections1 } from "./global.js";

const formulario1 = document.getElementById('procesar-pago') 
const datos = document.getElementById('verproductos')

async function getall(){
    datos.innerHTML=''
    const docref=getcollections1()
    const querySnapshot = await docref
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} `);
        datos.innerHTML+=`
        <div class="item">
        <div class="card" style="width: 18rem;">
        <img src="${doc.data().imgpago}" class="img-item" alt="...">
        <div id="producto">
            <span class="titulo-item">${doc.data().Referencia}</span>
            <br>
            <span class="card-text">${doc.data().Nombre}</span>
            <br>
            <span class=" precio-item">${doc.data().telefono}</span>
            <br>
            
        </div>
    </div>
    </div>
        `
      });
}


window.addEventListener('DOMContentLoaded',async()=>{
    getall();
})

formulario1.addEventListener('submit',(e)=>{
    e.preventDefault()

    const Referencia = formulario1['from_id']
    const imgpago = formulario1['response']
    const Nombre = formulario1['name']
    const telefono = formulario1['telefono']
    const email = formulario1['email.id']

    addcollection1(
        imgpago.value,
        Referencia.value,
        Nombre.value,
        telefono.value,
        email.value)

        alert('Pedido '+Referencia.value+' registrado')

        localStorage.clear()
})





