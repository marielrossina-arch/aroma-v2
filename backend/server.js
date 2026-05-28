// server.js — servidor minimo de Express
const express = require("express");
const app = express();
// Middleware para leer JSON del body
app.use(express.json());
// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ mensaje: "Servidor Aroma funcionando" });
});
// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
