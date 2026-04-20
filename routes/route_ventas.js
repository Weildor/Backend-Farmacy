const ventasController = require('../controllers/controller_ventas');

module.exports = (app) => {
    app.get('/api/ventas', ventasController.list);
    app.get('/api/venta/:id', ventasController.find);
    app.post('/api/ventas', ventasController.create);
    app.put('/api/venta/:id', ventasController.update);
    app.delete('/api/venta/:id', ventasController.delete);
};