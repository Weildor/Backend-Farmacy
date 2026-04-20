const { usuarios } = require('../models');

module.exports = {
    create(req, res) {
        return usuarios.create(req.body)
            .then(usuarios => res.status(201).send(usuarios))
            .catch(error => res.status(400).send(error));
    },
    list(_, res) {
        return usuarios.findAll()
            .then(usuarios => res.status(200).send(usuarios))
            .catch(error => res.status(400).send(error));
    },
    find(req, res) {
        return usuarios.findByPk(req.params.id)
            .then(c => c ? res.status(200).send(c) : res.status(404).send({message: 'Usuario no encontrado'}))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return usuarios.findByPk(req.params.id)
            .then(c => {
                if (!c) return res.status(404).send({message: 'No encontrado'});
                return c.update(req.body).then(u => res.status(200).send(u));
            })
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return usuarios.findByPk(req.params.id)
            .then(c => {
                if (!c) return res.status(404).send({message: 'No encontrado'});
                return c.destroy().then(() => res.status(204).send());
            })
            .catch(error => res.status(400).send(error));
    }
};