const models = require('../models/index');

const { productsModel } = models;

const validaProduto = async (req, res, next) => {
  const products = req.body;
  const allProducts = await productsModel.getAll();
  products.forEach((product) => {
    const { productId } = product;
    const promises = allProducts.some((item) => productId === item.id);
    if (!promises) {
      res.status(404).json({ message: 'Product not found' });
    }
  });
  next();
};

module.exports = validaProduto;
