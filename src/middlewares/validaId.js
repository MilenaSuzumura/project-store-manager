const validaId = async (req, res, next) => {
  const products = req.body;
  const productsData = products.map((product) =>
    product);
  const promiseProductsData = await Promise.all(productsData);

  const arrayProductsData = promiseProductsData.some((product) => !product.productId);
  if (arrayProductsData) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
};

module.exports = validaId;