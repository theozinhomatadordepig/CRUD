const db = require('../config/db');

const Carro = {
    create: (carro, callback) => {
        const query = 'INSERT INTO carros (carroname, password, role) VALUES (?, ?, ?)';
        db.query(query, [carro.carroname, carro.password, carro.role], (err, results) => {
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

    findByCarroname: (carroname, callback) => {
        const query = 'SELECT * FROM carros WHERE carroname = ?';
        db.query(query, [carroname], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, carro, callback) => {
        const query = 'UPDATE carros SET carroname = ?, password = ?, role = ? WHERE id = ?';
        db.query(query, [carro.carroname, carro.password, carro.role, id], (err, results) => {
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
