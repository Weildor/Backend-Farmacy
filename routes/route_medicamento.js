const medicamentoController = require('../controllers/controller_medicamento');

module.exports = (app) => {
    app.get('/api/medicamentos', medicamentoController.list);
    app.get('/api/medicamento/:id', medicamentoController.find);
    app.post('/api/medicamentos', medicamentoController.create);
    app.put('/api/medicamento/:id', medicamentoController.update); 
    app.delete('/api/medicamento/:id', medicamentoController.delete);
};