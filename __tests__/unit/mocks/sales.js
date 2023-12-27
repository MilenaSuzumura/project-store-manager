const allSales = [
  {
    "id": 2,
    "saleId": 2,
    "productId": 3,
    "quantity": 15,
    "date": "2023-12-22T21:54:48.000Z"
  },
  {
    "id": 3,
    "saleId": 3,
    "productId": 2,
    "quantity": 1,
    "date": "2023-12-26T20:16:28.000Z"
  }
];

const createSales = {
  sale_id: 1,
  product_id: 1,
  quantity: 5
}

const insertId = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 9,
  info: '',
  serverStatus: 2,
  warningStatus: 0
};

const newSales = [{
  saleId: 2,
  productId: 2,
  quantity: 5
}]

module.exports = { allSales, createSales, insertId, newSales };