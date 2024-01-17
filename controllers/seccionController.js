// controllers/seccionController.js
const Seccion = require('../models/seccion');
const Categoria = require('../models/categoria');

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

// Obtener una sección por su ID
exports.getSeccionById = async (req, res) => {
  const seccionId = req.params.id;

  try {
    const seccion = await Seccion.findByPk(seccionId);
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

// Crear una nueva sección
exports.createSeccion = async (req, res) => {
  const { nombre, categoriaId } = req.body;

  try {
    // Verificar si la categoría asociada existe
    const categoria = await Categoria.findByPk(categoriaId);
    if (!categoria) {
      return res.status(400).json({ error: 'Categoría no encontrada' });
    }

    const nuevaSeccion = await Seccion.create({ nombre, categoriaId });
    res.json(nuevaSeccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la sección' });
  }
};

// Actualizar una sección existente
exports.updateSeccion = async (req, res) => {
  const seccionId = req.params.id;
  const { nombre, categoriaId } = req.body;

  try {
    const seccion = await Seccion.findByPk(seccionId);
    if (seccion) {
      // Verificar si la nueva categoría asociada existe
      const categoria = await Categoria.findByPk(categoriaId);
      if (!categoria) {
        return res.status(400).json({ error: 'Nueva categoría no encontrada' });
      }

      // Actualizar la sección
      seccion.nombre = nombre;
      seccion.categoriaId = categoriaId;
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
  const seccionId = req.params.id;

  try {
    const seccion = await Seccion.findByPk(seccionId);
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
