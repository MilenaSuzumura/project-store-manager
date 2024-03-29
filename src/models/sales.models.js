const connection = require('../connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT id, sale_id AS saleId,
product_id AS productId, quantity,
date FROM StoreManager.sales AS sales
INNER JOIN StoreManager.sales_products AS products
ON products.sale_id = sales.id
ORDER BY sale_id ASC, product_id ASC`,
  );
  return result;
};

const getIdSales = async (idString) => {
  const id = Number(idString);
  const [result] = await connection.execute(
    `SELECT product_id AS productId, quantity,
date FROM StoreManager.sales_products AS products
INNER JOIN StoreManager.sales AS sales
ON products.sale_id = sales.id
WHERE sale_id = ${id}`);
  return result;
};

const salesData = async () => {
  const [result] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');
  return result;
};

const createSale = async (saleId, productId, quantity) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return result;
};

const deleteSales = async (idString) => {
  const id = Number(idString);
  const [result] = await connection.execute(
    'DELETE FROM sales WHERE id = ?', [id],
  );
  return result;
};

module.exports = {
  getAllSales,
  getIdSales,
  createSale,
  salesData,
  deleteSales,
};