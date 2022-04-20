import { productos } from "./stock.js";

let carritoDePedido = [];

carritoDePedido = JSON.parse(localStorage.getItem("productosAgregados")) || [];

console.log(carritoDePedido);

carritoDePedido.forEach((producto) => {
  agregarProductoAlModal(producto);
  
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
  
    localStorage.setItem("productosAgregados", JSON.stringify(carritoDePedido));
  };

  

  encontrarProductos();
};

function agregarProductoAlModal(producto) {
  let modalBody = document.querySelector(".modal-body");
  const div = document.createElement("div");
  div.innerHTML += `<p>${producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p>

                            <p id="cantidad${producto.codigo}">Cantidad: ${producto.cantidad}</p>
                            <button id="eliminar-producto${producto.codigo}">
                            <i class="small material-icons">delete</i>
                            </button>`;
  modalBody.appendChild(div);
}


