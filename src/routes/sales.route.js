const express = require('express');

const salesRoute = express.Router();

const { salesControllers } = require('../controllers/index');
const { getAll, getId, createSales, deleteSales } = salesControllers;

salesRoute.get('/', getAll);
salesRoute.get('/:id', getId);
salesRoute.post('/', createSales);
salesRoute.delete('/:id', deleteSales);

/*
const models = require('../models/index');

const { salesModel } = models;

salesRota.delete('/:id', async (req, res) => {
  const result = await salesModel.deleteSales(req.params.id);

  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Sale not found' });
  }
  res.status(204).end();
});
 */

module.exports = salesRoute;