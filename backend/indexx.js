// index.js — punto de entrada de Aroma backend
const os = require("os");
const productos = require("./modules/productos");
const pedidos = require("./modules/pedidos");
const utilidades = require("./modules/utilidades");
// Info del servidor
console.log("=== Servidor Aroma iniciando ===");
console.log("Sistema:", os.platform(), os.arch());
console.log("Node.js:", process.version);
console.log("");
// Probar modulo de productos
console.log("--- Productos disponibles ---");
const resultado = productos.listarDisponibles();
console.log(resultado.mensaje);
resultado.datos.forEach((p) => {
  console.log(` [${p.id}] ${p.nombre} - Bs. ${p.precio}`);
});
// Probar crear producto
console.log("");
console.log("--- Crear producto nuevo ---");
const nuevo = productos.crearProducto({
  nombre: "Frappe",
  precio: 22,
  emoji: "ice",
});
console.log(nuevo.mensaje, "->", nuevo.datos.id);
// Probar buscar por id
console.log("");
console.log("--- Buscar producto id=2 ---");
const encontrado = productos.buscarPorId(2);
console.log(encontrado.datos.nombre);
// Probar pedidos
console.log("");
console.log("--- Crear pedido ---");
const pedido = pedidos.crearPedido({
  items: [
    { id: 1, nombre: "Cafe Americano", precio: 12, cantidad: 2 },
    { id: 3, nombre: "Latte", precio: 16, cantidad: 1 },
  ],
});
console.log(
  "Pedido #" + pedido.datos.id + " | Total: Bs." + pedido.datos.total,
);
// index.js — importar el modulo
const matematica = require("./matematica");
// El './' indica que esta en la misma carpeta
console.log(matematica.sumar(5, 3)); // 8
console.log(matematica.multiplicar(4, 2)); // 8
// Desestructuracion: extraer solo lo que necesitas
const { sumar } = require("./matematica");
console.log(sumar(10, 5)); // 15
