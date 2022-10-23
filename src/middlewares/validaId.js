const validaId = async (req, res, next) => {
  const products = req.body;
  products.map(async (product) => {
    const { productId } = product;
    if (productId === undefined) {
      res.status(400).json({ message: '"productId" is required' });
    }
  });
  next();
};

module.exports = validaId;