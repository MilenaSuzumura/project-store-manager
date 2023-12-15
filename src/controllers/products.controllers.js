const productsService = require('../services/products.services');

const getAll = async (_req, res) => {
  const result = await productsService.allProducts();
  return res.status(200).json(result);
};

const getId = async (req, res) => {
  const result = await productsService.getId(req.params.id);

  return res.status(result.status).json(result.message);
};

const createProduct = async (req, res) => {
  const result = await productsService.createProduct(req.body.name);

  return res.status(result.status).json(result.message);
};

const updateProduct = async (req, res) => {
  const result = await productsService.updateProduct(req.params.id, req.body.name);
  return res.status(result.status).json(result.message);
};

const deleteProduct = async (req, res) => {
  const result = await productsService.deleteProduct(req.params.id);

  if (result) {
    return res.status(result.status).json(result.message);
  }

  res.status(204).end();
};

module.exports = { getAll, getId, createProduct, updateProduct, deleteProduct };