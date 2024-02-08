// app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');
// Importa sequelize desde db.js
const sequelize = require('./config/db');

const app = express();

// Archivos estáticos
app.use(express.static('public'));
app.use('/static', express.static('node_modules/bootstrap/dist'));


app.use(bodyParser.json());

// Iniciar Pug
app.set('view engine', 'pug');

// Carpeta view
app.set('views', path.join(__dirname, 'views'));

// Usa la instancia de sequelize en tus rutas o donde sea necesario
app.use((req, res, next) => {
  req.sequelize = sequelize;
  next();
});

// Sincroniza los modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Models synchronized successfully.');
  })
  .catch((error) => {
    console.error('Error synchronizing models:', error);
  });

app.use('/api', routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
