const express = require('express');

const salesRota = express.Router();

const models = require('../models/index');

const { salesModel } = models;
const validador = require('../middlewares/index');

const { validaQnt, validaId, salesValidation, validaProduto } = validador;

salesRota.get('/', async (_req, res) => {
  const [result] = await salesModel.sales();
  res.status(200).json(result);
});

salesRota.get('/:id', salesValidation, async (req, res) => {
  const { id } = req.body;
  const [result] = await salesModel.salesId(id);
  res.status(200).json(result);
});

salesRota.post('/', validaId, validaQnt, validaProduto, async (req, res) => {
  const [sales] = await salesModel.sales();
  const newProduct = {
    saleId: (sales.length + 1),
    itemsSold: [],
  };
  const produtNew = newProduct.itemsSold.push(req.body);
  await salesModel.insertSalesProducts(produtNew);

  res.status(201).json(newProduct);
});

module.exports = salesRota;
