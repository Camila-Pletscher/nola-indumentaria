import { productos } from "./stock.js";

// let carritoDePedido = [];

export const agregarAlCarrito = (productoCodigo) => {
  const encontrarProductos = () => {
    let producto = productos.find(
      (producto) => producto.codigo == productoCodigo
    );
    console.log(producto);
    let carritoDePedido = JSON.parse(localStorage.getItem("productosAgregados"));
    carritoDePedido.push(producto);
    let carritoDePedidoJSON = JSON.stringify(carritoDePedido);
    localStorage.setItem("productosAgregados", carritoDePedidoJSON);
    
    
    

    producto.cantidad = 1;
    
    let modalBody = document.querySelector('.modal-body');

    modalBody.innerHTML += `<p>${producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p>
                            <p id="cantidad${producto.codigo}">Cantidad: ${producto.cantidad}</p>
                            `
    
    
    
  };
  

  encontrarProductos();



};



