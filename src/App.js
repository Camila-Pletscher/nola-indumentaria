import { productos } from "./stock.js";

let tarjeta = document.getElementById("tarjeta");

const crearListaDeProductos = (productos) => {
  productos.forEach((productos) => {
    tarjeta.innerHTML += `<div class="producto col-4 p-3">
                            <img src="${productos.img}" class="card-img-top" alt="" />
                            <div class="card-body">
                              <h5 class="card-title">${productos.nombre}</h5>
                              <p class="card-text">Some</p>    
                              <a href="#" class="btn btn-primary id="btnAgregar${productos.codigo}">Agregar al carrito</a>
                            </div>
                          </div>`;
  });
  const btnAgregar = document.getElementById(`btnAgregar${productos.codigo}`);
  btnAgregar.addEventListener("click", () => {
    agregarAlCarrito(productos.codigo);
  });
};

crearListaDeProductos(productos);
