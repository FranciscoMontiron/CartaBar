// controllers/clienteController.js
const Cliente = require('../models/cliente');

const getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCliente = async (req, res) => {
  const { id, razonSocial, telefono, mail, direccion } = req.body;
  try {
    const nuevoCliente = await Cliente.create({ id, razonSocial, telefono, mail, direccion });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCliente = async (req, res) => {
  const clientId = req.params.id;
  const { razonSocial, telefono, mail, direccion } = req.body;
  try {
    const cliente = await Cliente.findByPk(clientId);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    cliente.razonSocial = razonSocial;
    cliente.telefono = telefono;
    cliente.mail = mail;
    cliente.direccion = direccion;
    await cliente.save();
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCliente = async (req, res) => {
  const clientId = req.params.id;
  try {
    const cliente = await Cliente.findByPk(clientId);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    await cliente.destroy();
    res.json({ message: 'Cliente eliminado satisfactoriamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllClientes,
  createCliente,
  updateCliente,
  deleteCliente,
};
