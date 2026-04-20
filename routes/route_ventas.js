const ventasController = require('../controllers/controller_ventas');

module.exports = (app) => {
    app.get('/api/ventas', ventasController.list);
    app.get('/api/venta/:id', ventasController.find); // Para ver un carrito específico
    app.post('/api/ventas', ventasController.create);
    app.put('/api/venta/:id', ventasController.update); // Por si quieres cambiar el usuario asignado
    app.delete('/api/venta/:id', ventasController.delete); // Para vaciar/borrar el carrito
};