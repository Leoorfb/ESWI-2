// rotas para produto
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// api/produtos
router.post('/', produtoController.criarProduto);
router.get('/', produtoController.obterProtudos);
router.put('/:id', produtoController.atualizarProtudos);
router.get('/:id', produtoController.obterProtudo);
router.delete('/:id', produtoController.eliminarProtudos);

module.exports = router;