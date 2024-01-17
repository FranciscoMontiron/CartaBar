// controllers/menuController.js
const Menu = require('../models/menu');

// Obtener todos los menús
exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.findAll();
    res.json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los menús' });
  }
};

// Obtener un menú por su ID
exports.getMenuById = async (req, res) => {
  const { id } = req.params;
  try {
    const menu = await Menu.findByPk(id);
    if (menu) {
      res.json(menu);
    } else {
      res.status(404).json({ error: 'Menú no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el menú' });
  }
};

// Crear un nuevo menú
exports.createMenu = async (req, res) => {
  const { nombre, descripcion, contaco, cleinte_id, logo, direccion } = req.body;
  try {
    const nuevoMenu = await Menu.create({ nombre, descripcion, contaco, cleinte_id, logo, direccion });
    res.status(201).json(nuevoMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el menú' });
  }
};

// Actualizar un menú por su ID
exports.updateMenu = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, contaco, cleinte_id, logo, direccion } = req.body;
  try {
    const menu = await Menu.findByPk(id);
    if (menu) {
      await menu.update({ nombre, descripcion, contaco, cleinte_id, logo, direccion });
      res.json(menu);
    } else {
      res.status(404).json({ error: 'Menú no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el menú' });
  }
};

// Eliminar un menú por su ID
exports.deleteMenu = async (req, res) => {
  const { id } = req.params;
  try {
    const menu = await Menu.findByPk(id);
    if (menu) {
      await menu.destroy();
      res.json({ mensaje: 'Menú eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Menú no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el menú' });
  }
};
