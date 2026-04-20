const usuariosController = require('../controllers/controller_usuarios');

module.exports = (app) => {
    app.get('/api/usuarios', usuariosController.list);
    app.get('/api/usuario/:id', usuariosController.find); // Para ver un carrito específico
    app.post('/api/usuarios', usuariosController.create);
    app.put('/api/usuario/:id', usuariosController.update); // Por si quieres cambiar el usuario asignado
    app.delete('/api/usuario/:id', usuariosController.delete); // Para vaciar/borrar el carrito
};