const { salesServices } = require('../services/index');

const getAll = async (_req, res) => {
  const result = await salesServices.getAll();
  return res.status(200).json(result);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const result = await salesServices.getId(id);
  return res.status(result.status).json(result.message);
};

const createSales = async (req, res) => {
  const products = req.body;
  const result = await salesServices.createSales(products);

  return res.status(result.status).json(result.message);
};

const deleteSales = async (req, res) => {
  const id = req.params.id;
  const result = await salesServices.deleteSales(id);

  if (result.status === 404) {
    return res.status(result.status).json(result.message);
  }

  return res.status(result.status).end();
};

module.exports = { getAll, getId, createSales, deleteSales };