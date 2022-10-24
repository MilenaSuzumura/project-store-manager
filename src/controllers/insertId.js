const models = require('../models/index');

const { salesModel } = models;

const insertSalesProducts = async (products) => {
  /*   const productsData = products.map((product) => salesModel.salesId(product.productId));
    const promiseProductsData = Promise.all(productsData);
  
    const arrayProductsData = promiseProductsData.some((product) => !product);
    if (arrayProductsData) {
      const mensagem = { saida: 404, message: 'Product not found' };
      return mensagem;
    } */

  const promisesProductsInsert = products.map((product) =>
    salesModel.cadastrarVenda(product.productId, product.quantity));

  const result = Promise.all(promisesProductsInsert);
  /*   const mensa = { saida: 201, message: result }; */
  return result;
};

module.exports = insertSalesProducts;