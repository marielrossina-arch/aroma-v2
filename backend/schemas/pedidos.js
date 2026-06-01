// schemas/pedidos.js
const Joi = require("joi");
// Schema de cada item del carrito
const itemSchema = Joi.object({
  product_id: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({ "any.required": "product_id es obligatorio en cada item" }),
  cantidad: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({ "number.min": "La cantidad debe ser al menos 1" }),
  // precio_unit se calcula en el servidor, no lo envia el cliente
});
// Schema del pedido completo
const crearPedido = Joi.object({
  items: Joi.array().items(itemSchema).min(1).required().messages({
    "array.min": "El pedido debe tener al menos un item",
    "any.required": "Los items son obligatorios",
  }),
  nota: Joi.string().max(200).optional().allow(""),
});
const actualizarEstado = Joi.object({
  estado: Joi.string()
    .valid("pending", "preparing", "ready", "delivered")
    .required()
    .messages({ "any.only": "Estado no valido" }),
});
module.exports = { crearPedido, actualizarEstado };
