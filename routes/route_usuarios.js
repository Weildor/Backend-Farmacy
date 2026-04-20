const usuariosController = require('../controllers/controller_usuarios');

module.exports = (app) => {
    app.get('/api/usuarios', usuariosController.list);
    app.get('/api/usuario/:id', usuariosController.find);
    app.post('/api/usuarios', usuariosController.create);
    app.post('/api/login', usuariosController.login);
    app.put('/api/usuario/:id', usuariosController.update);
    app.delete('/api/usuario/:id', usuariosController.delete);
};