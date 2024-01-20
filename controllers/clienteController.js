// controllers/clienteController.js
const Cliente = require('../models/cliente');

// Obtener todos los clientes
exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
};

// Obtener un cliente por su ID
exports.getClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
};

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
  const { razonSocial, telefono, email, direccion, estado } = req.body;
  try {
    const nuevoCliente = await Cliente.create({
      razonSocial,
      telefono,
      email,
      direccion,
      estado,
    });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
};

// Actualizar un cliente por su ID
exports.updateCliente = async (req, res) => {
  const { id } = req.params;
  const { razonSocial, telefono, email, direccion, estado } = req.body;
  try {
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      await cliente.update({
        razonSocial,
        telefono,
        email,
        direccion,
        estado,
      });
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el cliente' });
  }
};

exports.toggleEstado = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await Cliente.findByPk(id);

    if (cliente) {
      // Alternar el valor del campo 'estado'
      const nuevoEstado = cliente.estado === 1 ? 0 : 1;

      await cliente.update({
        estado: nuevoEstado,
      });

      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el estado del cliente' });
  }
};

// Eliminar un cliente por su ID
exports.deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      await cliente.destroy();
      res.json({ mensaje: 'Cliente eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el cliente' });
  }
};
