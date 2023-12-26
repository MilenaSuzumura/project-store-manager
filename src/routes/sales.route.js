const express = require('express');

const salesRoute = express.Router();

const { salesControllers } = require('../controllers/index');
const { getAll, getId, createSales, deleteSales } = salesControllers;

salesRoute.get('/', getAll);
salesRoute.get('/:id', getId);
salesRoute.post('/', createSales);
salesRoute.delete('/:id', deleteSales);

module.exports = salesRoute;