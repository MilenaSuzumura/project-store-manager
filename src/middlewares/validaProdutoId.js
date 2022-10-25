const models = require('../models/index');

const { productsModel } = models;

const validaProdutoId = async (req, res, next) => {
  const { id } = req.params;
  const allProducts = await productsModel.productId(id);
  if (allProducts.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = validaProdutoId;