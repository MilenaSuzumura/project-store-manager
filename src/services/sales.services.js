const { validationAllSales } = require('../middlewares/validation/sales.validation');
const { salesModel } = require('../models/index');

const getAll = async () => await salesModel.getAllSales();

const getId = async (id) => {
  const sale = await salesModel.getIdSales(id);

  if (sale.length === 0) {
    return { status: 404, message: { message: 'Sale not found' } };
  }

  return { status: 200, message: sale[0] };
};

const createSales = async (products) => {
  const validation = await validationAllSales(products);

  if (validation) {
    return validation;
  }

  const saleDate = await salesModel.salesData();
  await Promise.all(products.map(async (product) => {
    const result = await salesModel
      .createSale(saleDate.insertId, product.productId, product.quantity);
    return result;
  }));

  const result = {
    id: saleDate.insertId,
    itemsSold: [...products],
  };

  return { status: 201, message: result };
};

const deleteSales = async (id) => {
  const result = await salesModel.deleteSales(id);

  if (result.affectedRows === 0) {
    return { status: 404, message: { message: 'Sale not found' } };
  }

  return { status: 204 };
}

module.exports = { getAll, getId, createSales, deleteSales };