 let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
 
const totalCarrito = () => {
   return (carrito.reduce((acc, prod) => acc + prod.precio, 0))
 }
 
const body = document.getElementById('carrito')

const texto = document.getElementById('carrito');
if(carrito.length == 0){
        const carro = `
        <div style="background-color: #838383;">
        <div class='cartContainer m-3'
        <h1 class='txtCarrito'>No hay productos seleccionados</h1>
        <hr>
        <h3>Vuelva y seleccione el producto que desea comprar</h3>
        <hr>
        <a class="btnVolver" href="./tienda.html">
        <button class="btn btn-danger m-2">Volver</button>
        </a>
        </div>
        </div>
        `
         body.innerHTML += carro;
        } 
     else {
         const titulo = `
         <div style="background-color: #838383;">
         <div class="cartContainer m-2">
            <h1 class="card" style="background-color: #a5a5a5">Carrito de compras</h1>
         </div>
         </div>
         `; 
        body.innerHTML += titulo;
        const table = `
        <div style="background-color: #cacacab6;">
       <div class="tableContainer m-2">
          <table>
              <thead>
                <tr>
                      <th></th>
                      <th class="txtTabla">Productos</th>
                      <th class="txtTabla">Precio</th>
                </tr>
              </thead>
              <tbody id="tbody">
              </tbody>
              <tfooter>
                  <tr>
                        <th></th>
                        <th class="txtTotal">Total:</th>
                        <th id="total">$${totalCarrito().toLocaleString()}</th>
                  </tr>
              </tfooter>
          </table>
       </div>
       <div class="btn-container">
           <a href="/Paginas/tienda.html"><Button class="btn btn-danger btnEliminar"style="margin-left: 190px;">Seguir comprando</Button></a>
          </div>
          </div>
        ` ;
        body.innerHTML += table;
        const tbody = document.getElementById('tbody')
        for (let i = 0; i < carrito.length; i++) {
            const element = carrito[i];
            const {id, nombre, img, precio} = element;
            const cart = `
              <tr class="card m-3">
                <th></th>
                <th><img class="card-img-top" alt="producto" style="height: 200px; width: 200px;" src=${img} <span class="nombreProd">${nombre}</span></th>
                <th><Button class="btn btn-danger btnEliminar" id=${id} style="margin-left: 190px;">Eliminar producto</Button></th>
                <th>$${precio.toLocaleString()}</th>
              </tr>
            `;
            tbody.innerHTML += cart
        
     }
     const btnEliminar = document.getElementsByClassName("btnEliminar")
     for (let i = 0; i < btnEliminar.length; i++) {
      const element = btnEliminar[i];
      element.addEventListener('click', eliminarProducto)
     }
     const vaciarCarro = document.getElementsByName("botonVaciar")
     for (let i = 0; i < vaciarCarro.length; i++) {
      const element = vaciarCarro[i];
      element.addEventListener('click', )
    }
    }
    
    function eliminarProducto(e){
      const boton = e.target
      const id = boton.getAttribute("id")
      const carritoFiltrado = carrito.filter(item => item.id != id) 
      localStorage.setItem('carrito', JSON.stringify(carritoFiltrado))
      location.reload()
    }

   

 


// <div class="container">
// <div class="row">
       
// <main id="items" class="col-sm-8 row"></main>

// <aside class="col-sm-4">
//   <h2>Carrito</h2>
  
//   <ul id="carrito" class="list-group"></ul>
//   <hr>
  
//   <p class="text-right">Total: <span id="total"></span>&euro;</p>
//   <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
// </aside>
// </div>
// <a href="./tienda.html">
// <button>Volver</button>
// </a>
// </div>

/* <div class="modal-content">
        <div class="modal-carrito">
          <h3>Carrito</h3>
          <button id="carritoCerrar"><i class="fas fa-times.circle"></i></button>
          <div id="carrito-contenedor">
             <div id="productosEnCarrito">
              <p>Arroz</p>
              <p>Precio: 1200</p>
              <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
          <p class="precioProducto">Precio total: $<span id="precioTotal">0</span></p>
          <div id="terminar" style="display: flex; justify-content: flex-end;"></div>
        </div>
      </div> */

//       carritoConProductos = `  <div class="container">
//       <div class="row">
          
//           <main id="items" class="col-sm-8 row"></main>
          
//           <aside class="col-sm-4">
//               <h2>Carrito</h2>
              
//               <ul id="carrito" class="list-group"></ul>
//               <hr>
              
//               <p class="text-right">Total: <span id="total"></span>&euro;</p>
//               <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
//           </aside>
//       </div>
//   </div>`;
//   carritoCompras.innerHTML += carritoConProductos;