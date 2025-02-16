precio = 400000



precioSpan = document.querySelector(".precio-inicial");
cantidadSpam = document.querySelector(".cantidad");
valorTotal = document.querySelector(".valor-total");
cantidad = cantidadSpam.innerHTML;
precioSpan.innerHTML = precio;



function agregarProducto() {
    cantidad++;
    cantidadSpam.innerHTML = cantidad;
    PrecioTotal = precio * cantidad;
    valorTotal.innerHTML = PrecioTotal;
}

function quitarProducto() {
    if (cantidad > 0){
        cantidad--;
        cantidadSpam.innerHTML = cantidad;
        PrecioTotal = precio * cantidad;
        valorTotal.innerHTML = PrecioTotal;
    }
    else{
        PrecioTotal = 0;
        valorTotal.innerHTML = PrecioTotal;
    }
}
