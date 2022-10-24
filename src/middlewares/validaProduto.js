const models = require('../models/index');

const { productsModel } = models;

const validaProduto = async (req, res, next) => {
  const products = req.body;
  const allProducts = await productsModel.getAll();
  const promisesProductsInsert = products.every((product) => (
    allProducts.some((item) => product.productId === item.id)
  ));
  // const promise = await Promise.all(promisesProductsInsert);
  if (!promisesProductsInsert) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = validaProduto;
