const models = require('../models/index');

const { productsModel } = models;

const validaProduto = async (req, res, next) => {
  const result = await productsModel.productId(req.params.id);
  if (result.length === 0) {
    res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = validaProduto;
