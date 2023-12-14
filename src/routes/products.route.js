const express = require('express');

const { getAll, getId } = require('../controllers/products.controllers');

const models = require('../models/index');
const validador = require('../middlewares/index');

const productsRota = express.Router();

const { productsModel } = models;
const { validatorName, validaProdutoId, productsValidation } = validador;
const { productId } = productsValidation;

productsRota.get('/', getAll);
productsRota.get('/:id', productId, getId);

productsRota.post('/', validatorName, async (req, res) => {
  const result = await productsModel.insertName(req.body.name);
  res.status(201).json(result);
});

productsRota.put('/:id', validatorName, validaProdutoId, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await productsModel.updateProduct(name, id);
  const product = {
    id,
    name,
  };
  res.status(200).json(product);
});

productsRota.delete('/:id', async (req, res) => {
  const result = await productsModel.deleteProduct(req.params.id);

  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(204).end();
});

module.exports = productsRota;