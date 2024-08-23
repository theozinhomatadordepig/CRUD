const db = require('../config/db');

const Carro = {
    create: (carro, callback) => {
        const query = 'INSERT INTO carros (marca, modelo, placa) VALUES (?, ?, ?)';
        db.query(query, [carro.marca, carro.modelo, carro.placa], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM carros WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    findByCarroname: (marca, callback) => {
        const query = 'SELECT * FROM carros WHERE marca = ?';
        db.query(query, [marca], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, carro, callback) => {
        const query = 'UPDATE carros SET marca = ?, password = ?, role = ? WHERE id = ?';
        db.query(query, [carro.marca, carro.password, carro.role, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM carros WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM carros';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};


module.exports = Carro;
