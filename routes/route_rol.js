const rolController = require('../controllers/controller_rol');

module.exports = (app) => {
    
    app.get('/api/rol', rolController.list);
    app.get('/api/rol/:id', rolController.find);
    app.post('/api/rol', rolController.create);
    app.put('/api/rol/:id', rolController.update);
    app.delete('/api/rol/:id', rolController.delete);
}