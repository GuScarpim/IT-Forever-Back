const express = require('express');
const router = express.Router();
const verifyJWT = require('../Token/jwt');
const controller = require('../Controller/ProdutosController');

router.get('/', controller.get);
router.get('/:id', verifyJWT, controller.getId);
router.post('/', verifyJWT, controller.post);
router.put('/:id', verifyJWT, controller.put);
router.delete('/:id', verifyJWT, controller.delete);

module.exports = router;