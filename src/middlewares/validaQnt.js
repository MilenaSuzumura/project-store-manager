const validaQnt = (req, res, next) => {
  const { productId } = req.body;
  if (productId === undefined) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
};

module.exports = validaQnt;