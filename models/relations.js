const Usuario = require('./usuario');
const Menu = require('./menu');
const Categoria = require('./categoria');
const Seccion = require('./seccion');
const Producto = require('./producto');
const Cliente = require('./cliente');

// cliente y menu
Cliente.hasMany(Menu, { as: 'menus', foreignKey: 'cliente_id' });
Menu.belongsTo(Cliente, { as: 'cliente', foreignKey: 'cliente_id' });

// menu y categoria
Menu.hasMany(Categoria, { as: 'categorias', foreignKey: 'menu_id' });
Categoria.belongsTo(Menu, { as: 'menu', foreignKey: 'menu_id' });

// categoria y seccion
Categoria.hasMany(Seccion, { as: 'secciones', foreignKey: 'categoria_id' });
Seccion.belongsTo(Categoria, { as: 'categoria', foreignKey: 'categoria_id' });

// seccion y producto
Seccion.hasMany(Producto, { as: 'productos', foreignKey: 'seccionId' });
Producto.belongsTo(Seccion, { as: 'seccion', foreignKey: 'seccionId' });

// cliente y producto
Cliente.hasMany(Producto, { as: 'productos', foreignKey: 'clienteId' });
Producto.belongsTo(Cliente, { as: 'cliente', foreignKey: 'clienteId' });
