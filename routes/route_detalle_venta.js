const detalle_venta_Controller = require('../controllers/controller_detalle_venta');

module.exports = (app) => {
    app.get('/api/detalle_ventas', detalle_venta_Controller.list);
    app.get('/api/detalle_venta/:id', detalle_venta_Controller.find);
    app.post('/api/detalle_ventas', detalle_venta_Controller.create);
    app.put('/api/detalle_venta/:id', detalle_venta_Controller.update);
    app.delete('/api/detalle_venta/:id', detalle_venta_Controller.delete);
};