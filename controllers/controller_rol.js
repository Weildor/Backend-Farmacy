const { rol } = require('../models'); 

module.exports = {
    create(req, res){
        return rol
            .create({
                nombre: req.body.nombre
            })
            .then(rol => res.status(201).send(rol)) 
            .catch(error => res.status(400).send(error));
    },
    
    list(_, res){
        return rol.findAll({})
            .then(rol => res.status(200).send(rol))
            .catch(error => res.status(400).send(error));
    },
    
    find(req, res){
        // Cambiado a findByPk y usando req.params.id
        return rol.findByPk(req.params.id)
            .then(rol => {
                if (!rol) {
                    return res.status(404).send({ message: "Rol no encontrado" });
                }
                return res.status(200).send(rol);
            })
            .catch(error => res.status(400).send(error));
    },
    
    delete(req, res){
        return rol.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).send({message: "Rol eliminado correctamente"}))
        .catch(error => res.status(400).send(error));
    },
    
    update(req, res){
        return rol.update(
            {
                nombre: req.body.nombre
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(() => res.status(200).send({message: "Rol actualizado correctamente"}))
        .catch(error => res.status(400).send(error));
    }
};