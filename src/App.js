import { productos } from "./stock.js";

let tarjeta = document.getElementById("tarjeta");

const crearListaDeProductos = (productos) => {
  productos.forEach((producto) => {
    tarjeta.innerHTML += `<div class="producto col-4 p-3">
                               <img src="${producto.img}" class="card-img-top" alt="" />
                                <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                 <p class="card-text">Some</p>    
                                 <a href="#" class="btn btn-primary" id="btnAgregar${producto.codigo}">Agregar al carrito</a>
                              </div>
                           </div>`;

    const btnAgregar = document.getElementById(`btnAgregar${producto.codigo}`);
    btnAgregar.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  });
};

crearListaDeProductos(productos);
