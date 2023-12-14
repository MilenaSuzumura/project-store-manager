const models = require('../models/index');

const { productsModel } = models;

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

const getId = async (id) => {
  const product = await productsModel.productId(id);
  return product;
};

module.exports = { getAll, getId };