const validaQnt = (req, res, next) => {
  const products = req.body;
  const undefinedProduct = products.some((product) => product.quantity === undefined);
  if (undefinedProduct) {
    res.status(400).json({ message: '"quantity" is required' });
  }

  const productQuantity = products.some((product) => (
    parseInt(product.quantity, 10) > 0
  ));
  if (!productQuantity) {
    res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = validaQnt;