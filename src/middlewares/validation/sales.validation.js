const { productsModel } = require('../../models/index');

const validationProductId = (products) => { 
  if (!products.length) {
    return {
      status: 400,
      message: { message: '"productId" is required' }
    };
  }

  const productsId = products.some((product) => product.productId);

  if (!productsId) {
    return {
      status: 400,
      message: { message: '"productId" is required' }
    };
  }
};

const validationQuantity = (products) => {
  const undefinedProduct = products.some((product) => product.quantity !== undefined);

  if (!undefinedProduct) {
    return {
      status: 400,
      message: { message: '"quantity" is required' }
    };
  }

  const productQuantity = products.some((product) => (parseInt(product.quantity, 10) > 0));

  if (!productQuantity) {
    return {
      status: 422,
      message: { message: '"quantity" must be greater than or equal to 1' }
    };
  }
};

const validationProduct = async (products) => {
  const allProducts = await Promise.all(products.map(async (product) => productsModel.productId(
    `${product.productId}`)));

  const validation = allProducts.every((product) => product);

  if (!validation) return { status: 404, message: { message: 'Product not found' } };
};

const validationAllSales = async (products) => {
  const productsId = validationProductId(products);
  if (productsId) return productsId;
  
  const productQuantity = validationQuantity(products);
  if (productQuantity) return productQuantity;

  const product = await validationProduct(products);
  if (product) return product;
};

module.exports = { validationAllSales, validationProduct, validationProductId, validationQuantity };