const models = require('../models/index');

const { productsModel } = models;

const allProducts = async () => {
  const result = await productsModel.getAll();
  return result;
};

module.exports = { allProducts };