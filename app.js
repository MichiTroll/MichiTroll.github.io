const stockProductos = [
  {
    id: 1,
    nombre: "Canasta de Toamates",
    cantidad: 1,
    desc: "Canasta de tomates 100% cultivados con productos organicos",
    precio: 12000,
    img: "https://img.freepik.com/fotos-premium/tomates-canasta-aislado_106006-3520.jpg",
  },
  {
    id: 2,
    nombre: "Cubeta de Huevos",
    cantidad: 1,
    desc: "Huevos criollos por cubeta de 30 unidades",
    precio: 20000,
    img: "https://http2.mlstatic.com/D_NQ_NP_926869-MCO45154250710_032021-O.webp",
  },
  {
    id: 3,
    nombre: "Quesos",
    cantidad: 1,
    desc: "quesos de 4 libras",
    precio: 18000,
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    nombre: "Botellas de leche",
    cantidad: 1,
    desc: "Botella de 1 litro de leche de nuestras vacas alimentadas por productos organicos",
    precio: 5000,
    img: "https://files.rcnradio.com/2019-08/leche_botella_1_0.jpg",
  },
  {
    id: 5,
    nombre: "Tofu",
    cantidad: 1,
    desc: "1 libra de Tofu",
    precio: 5000,
    img: "https://t1.uc.ltmcdn.com/es/posts/7/2/1/tofu_que_es_propiedades_y_recetas_52127_orig.jpg",
  },
  {
    id: 6,
    nombre: "Bocadillos Por Paquete",
    cantidad: 1,
    desc: "Paquete de 12 unidades",
    precio: 1200,
    img: "https://www.elespectador.com/resizer/0pSVZHGi70v_8cFMSmBd_SjVz3s=/arc-anglerfish-arc2-prod-elespectador/public/MJMN5R4HK5DXVL4TOSMFD7OSUU.jpg",
  },
  {
    id: 7,
    nombre: "Gallinas Criollas",
    cantidad: 1,
    desc: "Cada gallina pesa un promedio de 3 kilos",
    precio: 30000,
    img: "https://www.lacasademigallina.com/modules/ph_simpleblog/covers/7.jpg",
  },
  {
    id: 8,
    nombre: "Chiles Morados",
    cantidad: 1,
    desc: "Chiles Extremadamente Picantes bolsa de 12 unidades",
    precio: 15000,
    img: "https://elholandespicante.com/wp-content/uploads/2015/07/chiles-marconi-violeta.jpg",
  },
  {
    id: 9,
    nombre: "Queso de Cabra",
    cantidad: 1,
    desc: "1 libra de queso de cabra",
    precio: 7000,
    img: "https://www.sportlife.es/uploads/s1/75/54/05/6/5c135db00ee694970a34984a-por-que-el-queso-de-cabra-es-tan-bueno-nzm.jpeg",
  },
  {
    id: 10,
    nombre: "Sandas",
    cantidad: 1,
    desc: "Deliciosas y jugosas sandias de 3 kilos",
    precio: 1200,
    img: " https://elpoderdelconsumidor.org/wp-content/uploads/2021/08/sandia.jpg ",
  },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_fnkaa19';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Correo Enviado Al comprador!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }