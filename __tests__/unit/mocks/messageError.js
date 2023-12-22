const productNotFound = {
  status: 404,
  message: { message: 'Product not found' },
};

const nameLength = {
  status: 422,
  message: { message: "\"name\" length must be at least 5 characters long" },
}

const nameRequired = {
  status: 400,
  message: { message: "\"name\" is required" },
}

module.exports = { productNotFound, nameLength, nameRequired };