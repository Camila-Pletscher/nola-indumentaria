import { productos } from "./stock.js";

let carritoDePedido = [];

export const agregarAlCarrito = (productoCodigo) => {
  const encontrarProductos = () => {
    let producto = productos.find(
      (producto) => producto.codigo == productoCodigo
    );
    console.log(producto);
    carritoDePedido.push(producto);

    producto.cantidad = 1;
    
    let modalBody = document.querySelector('.modal-body');

    modalBody.innerHTML += `<p>${producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p>
                            <p id="cantidad${producto.codigo}">Cantidad: ${producto.cantidad}</p>
                            `
  };
  

  encontrarProductos();
//   guardarCarrito(productos, JSON.stringify(carritoDePedido));
// //   const mostrarCarrito = JSON.parse(localStorage.getItem(carritoDePedido));

// const carrito = JSON.parse(localStorage.getItem(productos));
// console.log(carrito);


};

// const guardarCarrito = (clave, valor) => {
//     localStorage.setItem(clave, valor)
// };



