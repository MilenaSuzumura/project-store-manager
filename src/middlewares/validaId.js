const models = require('../models/index');

const { salesModel } = models;

const validaId = (req, res, next) => {
  const products = req.body;
  products.map(async (product) => {
    const { productId } = product;
    if (productId === undefined) {
      res.status(400).json({ message: '"productId" is required' });
    }
    const [result] = await salesModel.salesProducts();
    const existe = result.some((item) => item.id === productId);
    if (!existe) {
      res.status(404).json({ message: 'Product not found' });
    }
  });
  next();
};

module.exports = validaId;