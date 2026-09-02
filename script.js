        // ==============================
// CARRITO DE COMPRAS
// ==============================

let carrito = [];


// AGREGAR PRODUCTO
function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();

    alert("🍦 " + nombre + " fue agregado al carrito.");
}


// ACTUALIZAR CARRITO
function actualizarCarrito() {

    const lista = document.getElementById("listaCarrito");
    const contador = document.getElementById("contador");
    const totalHTML = document.getElementById("total");

    contador.textContent = carrito.length;

    lista.innerHTML = "";

    if (carrito.length === 0) {

        lista.innerHTML = `
            <p>Tu carrito está vacío.</p>
        `;

        totalHTML.textContent = "$0.00";

        return;
    }


    let total = 0;


    carrito.forEach((producto, index) => {

        total += producto.precio;

        const item = document.createElement("div");

        item.classList.add("item-carrito");

        item.innerHTML = `
            <div>
                <strong>${producto.nombre}</strong>
                <br>
                $${producto.precio.toFixed(2)}
            </div>

            <button onclick="eliminarProducto(${index})">
                X
            </button>
        `;

        lista.appendChild(item);

    });


    totalHTML.textContent = "$" + total.toFixed(2);
}


// ELIMINAR PRODUCTO
function eliminarProducto(index) {

    carrito.splice(index, 1);

    actualizarCarrito();
}


// MOSTRAR CARRITO
function mostrarCarrito() {

    document.getElementById("carrito").style.display = "block";

    actualizarCarrito();
}


// CERRAR CARRITO
function cerrarCarrito() {

    document.getElementById("carrito").style.display = "none";
}


// FINALIZAR COMPRA
function finalizarCompra() {

    if (carrito.length === 0) {

        alert("🛒 Tu carrito está vacío.");

        return;
    }

    let total = carrito.reduce(
        (suma, producto) => suma + producto.precio,
        0
    );

    alert(
        "🍦 ¡Gracias por comprar en FROST!\n\n" +
        "Total de tu pedido: $" +
        total.toFixed(2)
    );

    carrito = [];

    actualizarCarrito();

    cerrarCarrito();
}