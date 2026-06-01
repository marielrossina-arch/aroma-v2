// schemas/productos.js
const Joi = require("joi");
// Schema para CREAR un producto (POST)
const crearProducto = Joi.object({
  nombre: Joi.string().min(2).max(100).trim().required().messages({
    "string.empty": "El nombre no puede estar vacio",
    "string.min": "El nombre debe tener al menos 2 caracteres",
    "any.required": "El nombre es obligatorio",
  }),
  precio: Joi.number().positive().required().messages({
    "number.base": "El precio debe ser un numero",
    "number.positive": "El precio debe ser mayor a 0",
    "any.required": "El precio es obligatorio",
  }),
  emoji: Joi.string().default("coffee"),
  disponible: Joi.boolean().default(true),
  descripcion: Joi.string().max(200).optional().allow(""),
});
// Schema para ACTUALIZAR (PUT) — todos los campos opcionales
const actualizarProducto = Joi.object({
  nombre: Joi.string().min(2).max(100).trim(),
  precio: Joi.number().positive(),
  emoji: Joi.string(),
  disponible: Joi.boolean(),
  descripcion: Joi.string().max(200).allow(""),
}).min(1); // al menos un campo requerido
module.exports = { crearProducto, actualizarProducto };
