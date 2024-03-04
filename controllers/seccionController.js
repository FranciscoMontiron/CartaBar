// controllers/seccionController.js
const Categoria = require('../models/categoria');
const Seccion = require('../models/seccion');
const Producto = require('../models/producto');

// Obtener todas las secciones
exports.getSecciones = async (req, res) => {
  try {
    const secciones = await Seccion.findAll();
    res.json(secciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las secciones' });
  }
};

// Obtener una sección por su ID con sus productos asociados
exports.getSeccionById = async (req, res) => {
  const id = req.params.id;

  try {
    const seccion = await Seccion.findByPk(id, {
      include: [{
        model: Producto,
        as: 'productos'
      }]
    });
    if (seccion) {
      res.json(seccion);
    } else {
      res.status(404).json({ error: 'Sección no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la sección' });
  }
};

// Obtener todas las secciones por categoria_id
exports.getSeccionesByCategoriaId = async (req, res) => {
  const categoriaId = req.params.categoria_id;

  try {
    const secciones = await Seccion.findAll({
      where: { categoria_id: categoriaId },
    });
    res.json(secciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las secciones por categoría_id' });
  }
};


// Crear una nueva sección
exports.createSeccion = async (req, res) => {
  const { nombre, categoria_id } = req.body;

  try {
    // Verificar si la categoría asociada existe
    const categoria = await Categoria.findByPk(categoria_id);
    if (!categoria) {
      return res.status(400).json({ error: 'Categoría no encontrada' });
    }

    const nuevaSeccion = await Seccion.create({ nombre, categoria_id });
    res.json(nuevaSeccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la sección' });
  }
};

// Actualizar una sección existente
exports.updateSeccion = async (req, res) => {
  const id = req.params.id;
  const { nombre, categoria_id } = req.body;

  try {
    const seccion = await Seccion.findByPk(id);
    if (seccion) {
      // Verificar si la nueva categoría asociada existe
      const categoria = await Categoria.findByPk(categoria_id);
      if (!categoria) {
        return res.status(400).json({ error: 'Nueva categoría no encontrada' });
      }

      // Actualizar la sección
      seccion.nombre = nombre;
      seccion.categoria_id = categoria_id;
      await seccion.save();

      res.json(seccion);
    } else {
      res.status(404).json({ error: 'Sección no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la sección' });
  }
};

// Eliminar una sección por su ID
exports.deleteSeccion = async (req, res) => {
  const id = req.params.id;

  try {
    const seccion = await Seccion.findByPk(id);
    if (seccion) {
      await seccion.destroy();
      res.json({ message: 'Sección eliminada con éxito' });
    } else {
      res.status(404).json({ error: 'Sección no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la sección' });
  }
};
