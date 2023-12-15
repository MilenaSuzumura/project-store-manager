// const models = require('../../models/index');

// const { productsModel } = models;

const validationProductId = (product) => {
  if (product.length === 0) {
    return {
      status: 404,
      message: { message: 'Product not found' },
    };
  }

  return { status: 200, message: product };
};

const validationProductName = (name) => {
  if (name === undefined) {
    return { status: 400, message: { message: '"name" is required' } };
  }
  if (name.length < 5) {
    return {
      status: 422,
      message: { message: '"name" length must be at least 5 characters long' },
    };
  }
};

module.exports = { validationProductId, validationProductName };