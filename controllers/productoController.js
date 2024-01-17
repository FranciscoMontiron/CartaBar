// controllers/productoController.js
const Producto = require('../models/producto');

// Obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Obtener un producto por su ID
exports.getProductoById = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  const {
    nombre,
    precio,
    descripcion,
    ibu,
    abv,
    smr,
    estado,
    observacion,
    menu_id,
    menu_cleinte_id,
  } = req.body;
  try {
    const nuevoProducto = await Producto.create({
      nombre,
      precio,
      descripcion,
      ibu,
      abv,
      smr,
      estado,
      observacion,
      menu_id,
      menu_cleinte_id,
    });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Actualizar un producto por su ID
exports.updateProducto = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    precio,
    descripcion,
    ibu,
    abv,
    smr,
    estado,
    observacion,
    menu_id,
    menu_cleinte_id,
  } = req.body;
  try {
    const producto = await Producto.findByPk(id);
    if (producto) {
      await producto.update({
        nombre,
        precio,
        descripcion,
        ibu,
        abv,
        smr,
        estado,
        observacion,
        menu_id,
        menu_cleinte_id,
      });
      res.json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto por su ID
exports.deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id);
    if (producto) {
      await producto.destroy();
      res.json({ mensaje: 'Producto eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};
