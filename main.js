// Evento al hacer clic en un botón "Agregar al Carrito"
document.querySelectorAll('.agregar-al-carrito').forEach(button => {
    button.addEventListener('click', function () {
        // Agregar la lógica para agregar el producto al carrito aquí
        const producto = this.parentElement;
        const nombreProducto = producto.querySelector('h2').textContent;
        alert(`Producto ${nombreProducto} agregado al carrito.`);
    });
});

// Otros eventos que puedes agregar según tus necesidades:
// - Evento para filtrar productos por categoría.
// - Evento para ordenar productos por precio o relevancia.
// - Evento para mostrar más detalles del producto al hacer clic en su nombre o imagen.

// Ejemplo: Evento para mostrar detalles del producto
document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('click', function () {
        const nombreProducto = this.querySelector('h2').textContent;
        const descripcionProducto = this.querySelector('p').textContent;
        alert(`Detalles del Producto:\nNombre: ${nombreProducto}\nDescripción: ${descripcionProducto}`);
    });
});

document.querySelectorAll('.agregar-al-carrito').forEach(button => {
    button.addEventListener('click', function() {
        // Agregar lógica para agregar el producto al carrito aquí
    });
});

// También puedes agregar más funcionalidad según tus necesidades, como filtrar productos, ordenarlos, etc.