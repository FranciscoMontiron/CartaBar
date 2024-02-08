const fetch = require('node-fetch');

exports.seccion = async (req, res) => {
    const { categoria_id } = req.params;
  
    try {
      const response = await fetch(`http://localhost:3000/api/secciones/categoria/${categoria_id}`);
      const secciones = await response.json();
      
      //console.log(secciones);
      res.render('seccion', { secciones });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  };