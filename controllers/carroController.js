const Carro = require('../models/carroModel');
const Usuario = require('../models/usuarioModel');

const carroController = {
    createCarro: (req, res) => {
        const newCarro = {
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa,
            usuario: req.body.usuario
        };

        Carro.create(newCarro, (err, carroId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/carros');
        });
    },

    getCarroById: (req, res) => {
        const carroId = req.params.id;

        Carro.findById(carroId, (err, carro) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!carro) {
                return res.status(404).json({ message: 'Carro not found' });
            }
            res.render('carros/show', { carro });
        });
    },

    getAllCarros: (req, res) => {
        const usuario = req.query.usuario || null;
        
        Carro.getAll(usuario, (err, carros) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            Usuario.getAll((err, usuarios) => {
                if (err) {
                    return res.status(500).json({ error: err });
                }
                res.render('carro/index', { carros, usuarios, usuarioSelecionado: usuario });
            });
        });
    },

    getAllCarros: (req, res) => {
        Carro.getAll((err, carros) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('carros/index', { carros });
        });
    },

    renderCreateForm: (req, res) => {
        Usuario.getAll((err, usuarios) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('carros/create', { usuarios });
        });
    },

    renderEditForm: (req, res) => {
        const carroId = req.params.id;

        Carro.findById(carroId, (err, carro) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!carro) {
                return res.status(404).json({ message: 'Carro not found' });
            }
            res.render('carros/edit', { carro });
        });
    },

    updateCarro: (req, res) => {
        const carroId = req.params.id;
        const updatedCarro = {
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa,
        };

        Carro.update(carroId, updatedCarro, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/carros');
        });
    },

    deleteCarro: (req, res) => {
        const carroId = req.params.id;

        Carro.delete(carroId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/carros');
        });
    },
};

module.exports = carroController;
