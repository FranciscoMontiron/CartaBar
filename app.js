// app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');

const app = express();

// Sincroniza el modelo con la base de datos
sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
});

// Archivos estáticos
app.use(express.static('public'));

app.use(bodyParser.json());

// Iniciar Pug
app.set('view engine', 'pug');

// Carpeta view
app.set('views', path.join(__dirname, 'views'));

app.use('/api', routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
