const express = require('express');

const salesRoute = express.Router();

const { salesControllers } = require('../controllers/index');
const { getAll, getId } = salesControllers;

salesRoute.get('/', getAll);
salesRoute.get('/:id', getId)

/*

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

salesRota.delete('/:id', async (req, res) => {
  const result = await salesModel.deleteSales(req.params.id);

  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Sale not found' });
  }
  res.status(204).end();
});
 */

module.exports = salesRoute;