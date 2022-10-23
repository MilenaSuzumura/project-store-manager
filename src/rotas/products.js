const express = require('express');
const models = require('../models/index');
const validador = require('../middlewares/index');

const productsRota = express.Router();

const { productsModel } = models;
const { validatorName, validaId } = validador;

productsRota.get('/', async (_req, res) => {
  const result = await productsModel.getAll();
  res.status(200).json(result);
});

productsRota.get('/:id', async (req, res) => {
  const result = await productsModel.productId(req.params.id);

  if (result.length === 0) {
    const frase = { message: 'Product not found' };
    res.status(404).json(frase);
  }

  res.status(200).json(result[0]);
});

productsRota.post('/', validatorName, async (req, res) => {
  const result = await productsModel.insertName(req.body.name);
  res.status(201).json(result);
});

productsRota.put('/:id', validatorName, validaId, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await productsModel.updateProduct(name, id);
  res.status(200).json({ id, name });
});

/* productsRota.delete('/:id', async (req, res) => {
  const result = await productsModel.deleteProduct(req.params.id);

  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(204).end();
}); */
const connection = require('../connection');

productsRota.delete('/products/:id', async (req, res) => {
  const id = Number(req.params.id);
  const [result] = await connection.execute(
    'DELETE FROM products WHERE id = ?', [id],
  );
  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(204).end();
});

module.exports = productsRota;