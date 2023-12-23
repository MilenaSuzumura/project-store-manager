const models = require('../models/index');
const { productsValidation } = require('../middlewares/index');

const { productsModel } = models;
const { validationProductId, validationProductName } = productsValidation;

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

const getId = async (id) => {
  const product = await productsModel.productId(id);
  const result = validationProductId(product);
  return result;
};

const createProduct = async (name) => {
  const validation = validationProductName(name);
  
  if (validation) {
    return validation;
  }

  const result = await productsModel.insertName(name);
  return {
    status: 201,
    message: result,
  };
};

const updateProduct = async (id, name) => {
  const productId = await productsModel.productId(id);
  const validationId = validationProductId(productId);

  if (validationId.status === 404) {
    return validationId;
  }

  const validationName = validationProductName(name);

  if (validationName) {
    return validationName;
  }

  await productsModel.updateProduct(name, id);
  const product = {
    id,
    name,
  };

  return {
    status: 200,
    message: product,
  };
};

const deleteProduct = async (id) => {
  const result = await productsModel.deleteProduct(id);

  if (result.affectedRows === 0) {
    return {
      status: 404,
      message: { message: 'Product not found' },
    };
  }
};

module.exports = { getAll, getId, createProduct, updateProduct, deleteProduct };