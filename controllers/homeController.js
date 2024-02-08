const fetch = require('node-fetch');

exports.home = async (req, res) => {
    const { menu_id } = req.params;
  
    try {
      const response = await fetch(`http://localhost:3000/api/categorias/menu/${menu_id}`);
      const categorias = await response.json();
  
      res.render('home', { categorias });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  };