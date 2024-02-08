const Usuario = require('../models/usuario');

// Función para renderizar la vista de login
exports.renderLogin = (req, res) => {
  res.render('login');  // 'login' es el nombre de tu archivo Pug (sin la extensión .pug)
};

// Función para autenticar y generar un token JWT
exports.login = async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    const usuarioEncontrado = await Usuario.findOne({ where: { user: usuario } });

    if (!usuarioEncontrado) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const esContrasenaValida = await usuarioEncontrado.comparePassword(contrasena);

    if (!esContrasenaValida) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = usuarioEncontrado.generateAuthToken();

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};
