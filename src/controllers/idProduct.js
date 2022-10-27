const services = require('../services/index');

const { validaProdutoId } = services;

const idProduct = async (req, res) => {
  const result = await validaProdutoId(req.params.id);
  
  res.status(result.rota).json(result.frase[0]);
};

/* const idProduct = async (req, res) => {
  const result = await productsModel.productId(req.params.id);
  
  if (result.length === 0) {
    const frase = { message: 'Product not found' };
    res.status(404).json(frase);
  }
  
  res.status(200).json(result[0]);
}; */

module.exports = idProduct;