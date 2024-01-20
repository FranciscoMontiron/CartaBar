// controllers/categoriaController.js
const Categoria = require('../models/categoria');

// Obtener todas las categorías
exports.getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};

// Obtener una categoría por su ID
exports.getCategoriaById = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ error: 'Categoría no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

exports.getCategoriasByMenuId = async (req, res) => {
  const { menu_id } = req.params;
  try {
    const categorias = await Categoria.findAll({
      where: {
        menu_id: menu_id,
      },
    });
    res.json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las categorías por ID de menú' });
  }
};

// Crear una nueva categoría
exports.createCategoria = async (req, res) => {
  const { nombre, menu_id, menu_cleinte_id } = req.body;
  try {
    const nuevaCategoria = await Categoria.create({ nombre, menu_id, menu_cleinte_id });
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la categoría' });
  }
};

// Actualizar una categoría por su ID
exports.updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre, menu_id, menu_cleinte_id } = req.body;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      await categoria.update({ nombre, menu_id, menu_cleinte_id });
      res.json(categoria);
    } else {
      res.status(404).json({ error: 'Categoría no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la categoría' });
  }
};

// Eliminar una categoría por su ID
exports.deleteCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      await categoria.destroy();
      res.json({ mensaje: 'Categoría eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Categoría no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la categoría' });
  }
};
