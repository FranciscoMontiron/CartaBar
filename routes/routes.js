// routes/routes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const menuController = require('../controllers/menuController');
// Importa otros controladores necesarios

// Rutas para Cliente
router.get('/clientes', clienteController.getAllClientes);
router.post('/clientes', clienteController.createCliente);
router.put('/clientes/:id', clienteController.updateCliente);
router.delete('/clientes/:id', clienteController.deleteCliente);

//TODO completa con las rutas necesarias para Menu

module.exports = router;
