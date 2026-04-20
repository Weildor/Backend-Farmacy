const categoriaController = require('../controllers/controller_categoria');

module.exports = (app) => {
    
    app.get('/api/categoria', categoriaController.list);
    app.get('/api/categoria/:id', categoriaController.find);
    app.post('/api/categoria', categoriaController.create);
    app.put('/api/categoria/:id', categoriaController.update);
    app.delete('/api/categoria/:id', categoriaController.delete);
}