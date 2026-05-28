const os = require("os");

// console.log("version de Node.js:", process.version);
// console.log(process.cwd(Node.js));
// console.log();

console.log("Sistema:", os.platform(), os.arch());
console.log("Node.js:", process.version);
console.log("");
const precios = [12, 18, 16, 10, 20, 8, 14, 22];
console.log(precios);
const mayores = precios.filter((p) => p > 14);
console.log(mayores);
const preciosConIva = precios.map((p) => p * 1.13);
console.log(preciosConIva);
const menor = precios.find((p) => p < 10);
console.log(menor);
