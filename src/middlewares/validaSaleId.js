const models = require('../models/index');

const { salesModel } = models;

const validaSaleId = async (req, res, next) => {
  const { id } = req.params;
  const allProducts = await salesModel.salesId(id);
  if (allProducts.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  next();
};

module.exports = validaSaleId;