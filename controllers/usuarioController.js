const Usuario = require('../models/usuarioModel');

const usuarioController = {
    createUsuario: (req, res) => {
        const newUsuario = {
            nome: req.body.nome,
            senha: req.body.senha,
            papel: req.body.papel,
        };

        Usuario.create(newUsuario, (err, usuarioId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/usuarios');
        });
    },

    getUsuarioById: (req, res) => {
        const usuarioId = req.params.id;

        Usuario.findById(usuarioId, (err, usuario) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario not found' });
            }
            res.render('usuarios/show', { usuario });
        });
    },

    getAllUsuarios: (req, res) => {
        Usuario.getAll((err, usuarios) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('usuarios/index', { usuarios });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('usuarios/create');
    },

    renderEditForm: (req, res) => {
        const usuarioId = req.params.id;

        Usuario.findById(usuarioId, (err, usuario) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario not found' });
            }
            res.render('usuarios/edit', { usuario });
        });
    },

    updateUsuario: (req, res) => {
        const usuarioId = req.params.id;
        const updatedUsuario = {
            nome: req.body.nome,
            senha: req.body.senha,
            papel: req.body.papel,
        };

        Usuario.update(usuarioId, updatedUsuario, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/usuarios');
        });
    },

    deleteUsuario: (req, res) => {
        const usuarioId = req.params.id;

        Usuario.delete(usuarioId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/usuarios');
        });
    },
};

module.exports = usuarioController;
