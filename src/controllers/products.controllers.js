const productsService = require('../services/products.services');

const getAll = async (_req, res) => {
  const result = await productsService.allProducts();
  return res.status(200).json(result);
};

const getId = async (req, res) => {
  const result = await validaProdutoId(req.params.id);

  res.status(result.rota).json(result);
};

module.exports = { getAll, getId };