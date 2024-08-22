const Carro = require('../models/carroModel');

const carroController = {
    createCarro: (req, res) => {
        const newCarro = {
            carroname: req.body.carroname,
            password: req.body.password,
            role: req.body.role,
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
        Carro.getAll((err, carros) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('carros/index', { carros });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('carros/create');
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
            carroname: req.body.carroname,
            password: req.body.password,
            role: req.body.role,
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
