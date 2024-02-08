// routes/routes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const menuController = require('../controllers/menuController');
const categoriaController = require('../controllers/categoriaController');
const productoController = require('../controllers/productoController');
const seccionController = require('../controllers/seccionController');
const homeController = require('../controllers/homeController');
const usuarioController = require('../controllers/usuarioController');
const loginController = require('../controllers/loginController');
const adminController = require('../controllers/adminController');
const seccionesController = require('../controllers/seccionesController');


const jwt = require('jsonwebtoken');

// JWT Middleware

// Middleware para verificar el token JWT
/*
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Acceso no autorizado' });
  
    jwt.verify(token, 'claveSecreta', (err, usuario) => {
      if (err) return res.status(403).json({ error: 'Token inválido' });
  
      req.usuario = usuario;
      next();
    });
  };

// Aplicar middleware a las rutas protegidas
router.get('/usuarios', authenticateToken, usuarioController.getUsuarios);
router.get('/usuarios/:id', authenticateToken, usuarioController.getUsuarioById);
*/

//manejo de vistas
router.get('/categorias/traer/menu/:menu_id', homeController.home);
router.get('/secciones/traer/categoria/:categoria_id', seccionesController.seccion);

// Ruta para renderizar la vista de login
router.get('/login', loginController.renderLogin);

// Ruta para manejar la lógica de inicio de sesión
router.post('/login', loginController.login);

// ADMIN

router.get('/admin', adminController.showAdminPage);
/*
router.post('/admin/secciones', adminController.createSeccion);
router.put('/admin/secciones/:id', adminController.updateSeccion);
router.delete('/admin/secciones/:id', adminController.deleteSeccion);
router.post('/admin/productos', adminController.createProducto);
router.put('/admin/productos/:id', adminController.updateProducto);
router.delete('/admin/productos/:id', adminController.deleteProducto);*/


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
router.get('/productos/seccion/:seccion_id', productoController.obtenerProductosPorSeccion);

// Rutas para Seccion
router.get('/secciones', seccionController.getSecciones);
router.get('/secciones/:id', seccionController.getSeccionById);
router.post('/secciones', seccionController.createSeccion);
router.put('/secciones/:id', seccionController.updateSeccion);
router.delete('/secciones/:id', seccionController.deleteSeccion);
router.get('/secciones/categoria/:categoria_id', seccionController.getSeccionesByCategoriaId);

// Rutas para Usuario
router.get('/usuarios', usuarioController.getUsuarios);
router.get('/usuarios/:id', usuarioController.getUsuarioById);
router.post('/usuarios', usuarioController.createUsuario);
router.put('/usuarios/:id', usuarioController.updateUsuario);
router.delete('/usuarios/:id', usuarioController.deleteUsuario);



module.exports = router;
