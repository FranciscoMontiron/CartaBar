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
    precio_1,
    descripcion,
    ibu,
    abv,
    smr,
    estado,
    observacion,
    categoria_precio_1,
    categoria_precio_2,
    precio_2,
    clienteId,
    seccionId
  } = req.body;
  try {
    const nuevoProducto = await Producto.create({
      nombre,
      precio_1,
      descripcion,
      ibu,
      abv,
      smr,
      estado,
      observacion,
      categoria_precio_1,
      categoria_precio_2,
      precio_2,
      clienteId,
      seccionId
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
    precio_1,
    descripcion,
    ibu,
    abv,
    smr,
    estado,
    observacion,
    categoria_precio_1,
    categoria_precio_2,
    precio_2,
    clienteId,
    seccionId
  } = req.body;
  try {
    const producto = await Producto.findByPk(id);
    if (producto) {
      await producto.update({
        nombre,
        precio_1,
        descripcion,
        ibu,
        abv,
        smr,
        estado,
        observacion,
        categoria_precio_1,
        categoria_precio_2,
        precio_2,
        clienteId,
        seccionId
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

exports.obtenerProductosPorSeccion = async (req, res) => {
  const { seccion_id } = req.params;

  try {
    // Busca la sección por ID y obtiene todos los productos asociados a esa sección
    const seccion = await Seccion.findByPk(seccion_id, {
      include: [{
        model: Producto,
        through: 'seccion_has_producto' // Nombre de la tabla intermedia
      }]
    });

    if (!seccion) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Extrae solo los productos de la sección
    const productos = seccion.productos;

    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
