const express = require('express');

const salesRota = express.Router();

const models = require('../models/index');

const { salesModel } = models;
const validador = require('../middlewares/index');
const controllers = require('../controllers/insertSalesProducts');

const { validaQnt, validaId, validaProduto, validaSaleId } = validador;

salesRota.post('/', validaId, validaQnt, validaProduto, async (req, res) => {
  const id = await controllers(req.body);
  const resultadoFinal = {
    id,
    itemsSold: [...req.body],
  };
  res.status(201).json(resultadoFinal);
});

salesRota.get('/', async (_req, res) => {
  const result = await salesModel.sales();
  res.status(200).json(result);
});

salesRota.get('/:id', validaSaleId, async (req, res) => {
  const { id } = req.params;
  const result = await salesModel.salesId(id);
  res.status(200).json(result);
});

salesRota.delete('/:id', async (req, res) => {
  const result = await salesModel.deleteSales(req.params.id);

  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Sale not found' });
  }
  res.status(204).end();
});

module.exports = salesRota;
