class Producto {
    constructor(codigo, nombre, precio, stock) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = parseFloat(precio);
      this.stock = stock;
    }
  }
  
  const listaDeProductos = [];
  
  
  listaDeProductos.push(new Producto(1, "Buzo del REY LEON", 4500, 10));
  listaDeProductos.push(new Producto(2, "Buzo de MULAN", 4200, 10));
  listaDeProductos.push(new Producto(3, "Buzo de TOY STORY", 4300, 10));
  listaDeProductos.push(new Producto(4, "Buzo de ALADIN", 4250, 10));
  listaDeProductos.push(new Producto(5, "Buzo de SAILOR MOON", 4100, 10));
  listaDeProductos.push(new Producto(6, "Remera de FRIENDS", 2100, 10));
  listaDeProductos.push(new Producto(7, "Remera de JUEGO DE GEMELAS", 2200, 10));
  listaDeProductos.push(new Producto(8, "Remera de CHANDLER MOOD", 2350, 10));
  listaDeProductos.push(new Producto(9, "Remera de PANTONE MUSHU", 2500, 10));
  listaDeProductos.push(new Producto(10, "Remera de HAKUNA MATATA", 2400, 10));