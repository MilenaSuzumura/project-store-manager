const models = require('../models/index');

const { productsModel } = models;

const productId = async (req, res, next) => {
  const { id } = req.params;
  const product = await productsModel.productId(id);

  if (product.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = { productId };