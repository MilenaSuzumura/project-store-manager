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

const notDeleted = {
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0
};

const saleNotFound = {
  message: { message: 'Sale not found' },
  status: 404
}; 

const productIdRequired =  { message: { message: '\"productId\" is required' }, status: 400 };

const quantityRequired =  { message: { message: '\"quantity\" is required' }, status: 400 };

const quantityLength =  {
  message: { message: '\"quantity\" must be greater than or equal to 1' },
  status: 422
};

module.exports = {
  productNotFound,
  nameLength,
  nameRequired,
  notDeleted,
  saleNotFound,
  productIdRequired,
  quantityRequired,
  quantityLength,
};