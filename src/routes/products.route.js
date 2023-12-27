const express = require('express');

const productsRoute = express.Router();

const { productsControllers } = require('../controllers/index');

const { getAll, getId, createProduct, updateProduct, deleteProduct } = productsControllers;

productsRoute.get('/', getAll);
productsRoute.get('/:id', getId);
productsRoute.post('/', createProduct);
productsRoute.put('/:id', updateProduct);
productsRoute.delete('/:id', deleteProduct);

module.exports = productsRoute;