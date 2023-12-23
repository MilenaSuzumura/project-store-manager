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

module.exports = { getAll, getId };