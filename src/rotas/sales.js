const express = require('express');

const salesRota = express.Router();

const models = require('../models/index');
// const controllers = require('../controllers/index');

const { salesModel } = models;
const validador = require('../middlewares/index');
// const insertSalesProducts = require('../controllers/insertSalesProducts');
const controllers = require('../controllers/index');

const { validaQnt, validaId, validaProduto /*  salesValidation */ } = validador;

salesRota.post('/', validaId, validaQnt, validaProduto, async (req, res) => {
  const id = await controllers.insertSalesProducts(req.body);
  const resultadoFinal = {
    id,
    itemsSold: req.body,
  };
  res.status(201).json(resultadoFinal);
});

salesRota.get('/', async (_req, res) => {
  const result = await salesModel.sales();
  res.status(200).json(result);
});

/* salesRota.get('/:id',salesValidation,  async (req, res) => {
  const { id } = req.body;
  const [result] = await salesModel.salesId(id);
  res.status(200).json(result);
}); */

/* salesRota.post('/', validaId, validaQnt, validaProduto, async (req, res) => {
  const [sales] = await salesModel.sales();
  const newProduct = {
    saleId: (sales.length + 1),
    itemsSold: [],
  };
  const produtNew = newProduct.itemsSold.push(req.body);
  await salesModel.insertSalesProducts(produtNew);

  res.status(201).json(newProduct);
}); */

module.exports = salesRota;
