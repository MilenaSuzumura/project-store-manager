const { validationSaleId } = require('../middlewares/validation/sales.validation');
const { salesModel } = require('../models/index');

const getAll = async () => await salesModel.getAllSales();

const getId = async (id) => {
  const sale = await salesModel.getIdSales(id);

  if (sale.length === 0) {
    return { status: 404, message: { message: 'Sale not found' } };
  }

  return { status: 200, message: sale[0] };
}

module.exports = { getAll, getId };