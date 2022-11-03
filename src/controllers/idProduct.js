const services = require('../services/index');

const { validaProdutoId } = services;

const idProduct = async (req, res) => {
  const result = await validaProdutoId(req.params.id);

  res.status(result.rota).json(result.frase[0]);
};

module.exports = idProduct;