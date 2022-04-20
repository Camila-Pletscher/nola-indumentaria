import { productos } from "./stock.js";

let carritoDePedido = [];

const productosDelStorage = JSON.parse(localStorage.getItem("productosAgregados"));
// console.log(productosDelStorage);
if (productosDelStorage != null) {
  carritoDePedido = productosDelStorage;
}

console.log(carritoDePedido);

carritoDePedido.forEach(producto => {

  agregarProductoAlModal(producto);
  const btnEliminar = document.getElementById(`eliminar-producto${producto.codigo}`);
  btnEliminar.addEventListener("click", () => {
    localStorage.removeItem(`${producto.codigo}`)
  });

});

export const agregarAlCarrito = (productoCodigo) => {
  const encontrarProductos = () => {
    let producto = productos.find(
      (producto) => producto.codigo == productoCodigo
    );

    carritoDePedido.push(producto);
    console.log(carritoDePedido);

    producto.cantidad = 1;

    agregarProductoAlModal(producto);



    // for (const productosStorage of carritoDePedido) {
    //   guardarLocal(productosStorage.codigo, JSON.stringify(productosStorage));
    // }
    guardarLocal('productosAgregados', JSON.stringify(carritoDePedido));

  };


  encontrarProductos();



};

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
}

function agregarProductoAlModal(producto) {
  let modalBody = document.querySelector('.modal-body');
  const div = document.createElement("div");
  div.innerHTML += `<p>${producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p>

                            <p id="cantidad${producto.codigo}">Cantidad: ${producto.cantidad}</p>
                            <button id="eliminar-producto${producto.codigo}">
                            <i class="small material-icons">delete</i>
                            </button>`
  modalBody.appendChild(div);

};




