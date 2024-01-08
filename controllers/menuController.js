// controllers/menuController.js
const Menu = require('../models/menu');

const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.findAll();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMenu = async (req, res) => {
  const { id, nombre, descripcion, contacto, cliente_id, logo, direccion } = req.body;
  try {
    const nuevoMenu = await Menu.create({ id, nombre, descripcion, contacto, cliente_id, logo, direccion });
    res.status(201).json(nuevoMenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateMenu = async (req, res) => {
  const menuId = req.params.id;
  const { nombre, descripcion, contacto, cliente_id, logo, direccion } = req.body;
  try {
    const menu = await Menu.findByPk(menuId);
    if (!menu) {
      return res.status(404).json({ message: 'Menú no encontrado' });
    }
    menu.nombre = nombre;
    menu.descripcion = descripcion;
    menu.contacto = contacto;
    menu.cliente_id = cliente_id;
    menu.logo = logo;
    menu.direccion = direccion;
    await menu.save();
    res.json(menu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMenu = async (req, res) => {
  const menuId = req.params.id;
  try {
    const menu = await Menu.findByPk(menuId);
    if (!menu) {
      return res.status(404).json({ message: 'Menú no encontrado' });
    }
    await menu.destroy();
    res.json({ message: 'Menú eliminado satisfactoriamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMenus,
  createMenu,
  updateMenu,
  deleteMenu,
};
