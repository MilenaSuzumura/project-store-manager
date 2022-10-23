const models = require('../models/index');

const { salesModel } = models;

const salesValidation = async (req, res, next) => {
  const [result] = await salesModel.sales();
  const id = parseInt(req.params.id, 10);
  const idSales = result.some((sale) => sale.id === id);
  if (!idSales) {
    res.status(404).json({ message: 'Sale not found' });
  }
  next();
};

module.exports = salesValidation;