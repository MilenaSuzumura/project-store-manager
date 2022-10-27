const models = require('../models/index');

const { productsModel } = models;

const allProducts = async (_req, res) => {
  const result = await productsModel.getAll();
  res.status(200).json(result);
};

module.exports = allProducts;