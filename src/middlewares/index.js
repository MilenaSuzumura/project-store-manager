const validaId = require('./validaId');
const validaQnt = require('./validaQnt');
const validatorName = require('./validatorName');
const validaProduto = require('./validaProduto');
const validaProdutoId = require('./validaProdutoId');
const productsValidation = require('./validation/products.validation');
const salesValidation = require('./validation/sales.validation');

module.exports = {
  validaId,
  validaQnt,
  validatorName,
  validaProduto,
  validaProdutoId,
  productsValidation,
  salesValidation
};
