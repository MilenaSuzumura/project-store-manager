const express = require('express');

const salesRota = express.Router();

const models = require('../models/index');

const { salesModel } = models;
const validador = require('../middlewares/index');
const controllers = require('../controllers/index');

const { validaQnt, validaId, validaProduto, validaSaleId } = validador;

salesRota.post('/', validaId, validaQnt, validaProduto, async (req, res) => {
  const id = await controllers.insertSalesProducts(req.body);
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

module.exports = salesRota;
