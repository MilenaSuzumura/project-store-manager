/* const models = require('../models/index');

const { productsModel } = models;
 */
const validaProduto = async (req, res, next) => {
  // const promises = products.map((item) => )
  next();
  /*   const promises = products.map((item) => productsModel.productId(item.productId));
    const result = await Promise.all(promises);
    const notFound = result.some(([[item]]) => !item);
  
    if (notFound) {
      return res.status(404).json({
        message: 'Product not found',
      });
    } */
  /*   const [result] = await salesModel.salesProducts();
    const existe = result.some((item) => item.id === productId);
    if (existe === false) {
      res.status(404).json({ message: 'Product not found' });
    } */
  next();
};

module.exports = validaProduto;
