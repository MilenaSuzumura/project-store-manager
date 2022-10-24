const validaQnt = async (req, res, next) => {
  const products = req.body;
  const undefinedProduct = products.some((product) => product.quantity === undefined);
  if (undefinedProduct) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  const productQuantity = products.some((product) => (
    parseInt(product.quantity, 10) > 0
  ));
  if (!productQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

/* const validaQnt = async (req, res, next) => {
  const products = req.body;
  const productsData = products.map((product) => product);
  const promiseProductsData = await Promise.all(productsData);

  const arrayProductsData = promiseProductsData.some((product) => !product.quantity);
  if (arrayProductsData) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  
  const productQuantity = promiseProductsData.some((product) => (
    Number(product.quantity) <= 0
  ));

  if (productQuantity) {
    res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};
 */
module.exports = validaQnt;