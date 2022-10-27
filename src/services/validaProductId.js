const models = require('../models/index');

const { productsModel } = models;

const validaProdutoId = async (id) => {
  const product = await productsModel.productId(id);
  const result = {
    rota: 0,
    frase: {},
  };
  if (product.length === 0) {
    result.frase = [{ message: 'Product not found' }];
    result.rota = 404;
    return result;
  }
  result.rota = 200;
  result.frase = product;
  return result;
};

module.exports = validaProdutoId;