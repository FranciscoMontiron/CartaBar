// controllers/productoController.js
const Producto = require('../models/producto');

const getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProducto = async (req, res) => {
  const { id, nombre, precio, descripcion, ibu, porcentajeAlc, cuerpo, seccion_id, menu_id, estado } = req.body;
  try {
    const nuevoProducto = await Producto.create({ id, nombre, precio, descripcion, ibu, porcentajeAlc, cuerpo, seccion_id, menu_id, estado });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProducto = async (req, res) => {
    // TODO: terminar de implementar
};

const deleteProducto = async (req, res) => {
    // TODO: terminar de implementar
};

module.exports = {
  getAllProductos,
  createProducto,
  updateProducto,
  deleteProducto,
};
