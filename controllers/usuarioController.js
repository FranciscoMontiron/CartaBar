const Usuario = require('../models/usuario');

// Obtener todos los usuarios
exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Obtener un usuario por su ID
exports.getUsuarioById = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const usuario = await Usuario.findByPk(usuarioId);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Crear un nuevo usuario
exports.createUsuario = async (req, res) => {
  const { user, password } = req.body;

  try {
    const nuevoUsuario = await Usuario.create({ user, password });
    res.json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Actualizar un usuario existente
exports.updateUsuario = async (req, res) => {
  const usuarioId = req.params.id;
  const { user, password } = req.body;

  try {
    const usuario = await Usuario.findByPk(usuarioId);
    if (usuario) {
      // Actualizar el usuario
      usuario.user = user;
      usuario.password = password;
      await usuario.save();

      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario por su ID
exports.deleteUsuario = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const usuario = await Usuario.findByPk(usuarioId);
    if (usuario) {
      await usuario.destroy();
      res.json({ message: 'Usuario eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};
