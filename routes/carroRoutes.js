const express = require('express');
const carroController = require('../controllers/carroController');
const router = express.Router();

router.get('/', carroController.getAllCarros);
router.get('/new', carroController.renderCreateForm);
router.post('/', carroController.createCarro);
router.get('/:id', carroController.getCarroById);
router.get('/:id/edit', carroController.renderEditForm);
router.put('/:id', carroController.updateCarro);
router.delete('/:id', carroController.deleteCarro);

module.exports = router;
