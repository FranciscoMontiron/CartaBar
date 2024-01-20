// routes/routes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const menuController = require('../controllers/menuController');
const categoriaController = require('../controllers/categoriaController');
const productoController = require('../controllers/productoController');
const seccionController = require('../controllers/seccionController');
const homeController = require('../controllers/homeController');


//manejo de vistas

router.get('/categorias/traer/menu/:menu_id', homeController.home);

router.get('/login',);


//API

// Rutas para Cliente
router.get('/clientes', clienteController.getClientes);
router.get('/clientes/:id', clienteController.getClienteById);
router.post('/clientes', clienteController.createCliente);
router.put('/clientes/:id', clienteController.updateCliente);
router.patch('/clientes/:id/toggleEstado', clienteController.toggleEstado);
router.delete('/clientes/:id', clienteController.deleteCliente);

// Rutas para Menu
router.get('/menus', menuController.getAllMenus);
router.get('/menus/:id', menuController.getMenuById);
router.get('/menus/cliente/:clienteId', menuController.getMenusByClienteId);
router.post('/menus', menuController.createMenu);
router.put('/menus/:id', menuController.updateMenu);
router.delete('/menus/:id', menuController.deleteMenu);

// Rutas para Categoria
router.get('/categorias', categoriaController.getCategorias);
router.get('/categorias/:id', categoriaController.getCategoriaById);
router.get('/categorias/menu/:menu_id', categoriaController.getCategoriasByMenuId);
router.post('/categorias', categoriaController.createCategoria);
router.put('/categorias/:id', categoriaController.updateCategoria);
router.delete('/categorias/:id', categoriaController.deleteCategoria);

// Rutas para Producto
router.get('/productos', productoController.getProductos);
router.get('/productos/:id', productoController.getProductoById);
router.post('/productos', productoController.createProducto);
router.put('/productos/:id', productoController.updateProducto);
router.delete('/productos/:id', productoController.deleteProducto);

// Rutas para Seccion
router.get('/secciones', seccionController.getSecciones);
router.get('/secciones/:id', seccionController.getSeccionById);
router.post('/secciones', seccionController.createSeccion);
router.put('/secciones/:id', seccionController.updateSeccion);
router.delete('/secciones/:id', seccionController.deleteSeccion);

module.exports = router;
