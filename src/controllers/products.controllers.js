const productsService = require('../services/products.services');

const allProducts = async (_req, res) => {
  const result = await productsService.allProducts();
  return res.status(200).json(result);
};

module.exports = { allProducts };