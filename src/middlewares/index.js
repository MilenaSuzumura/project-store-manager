const validaId = require('./validaId');
const validaQnt = require('./validaQnt');
const validatorName = require('./validatorName');
const validaProduto = require('./validaProduto');
const validaSaleId = require('./validaSaleId');
const validaProdutoId = require('./validaProdutoId');
const productsValidation = require('./validation/products.validation');
const salesValidation = require('./validation/sales.validation');

module.exports = {
  validaId,
  validaQnt,
  validatorName,
  validaProduto,
  validaSaleId,
  validaProdutoId,
  productsValidation,
  salesValidation
};
