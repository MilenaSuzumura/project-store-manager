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
  
  const promisesProductsInsert = products.map(async (product) => {
    const saleDate = await salesModel.salesData();
    const result = await salesModel
      .cadastrarVenda(saleDate.insertId, product.productId, product.quantity);
    return result;
  });

  await Promise.all(promisesProductsInsert);
  /*   const mensa = { saida: 201, message: result }; */
};

module.exports = insertSalesProducts;