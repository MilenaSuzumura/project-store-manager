const connection = require('../connection');

const cadastrarVenda = async (saleId, productId, quantity) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return result;
};

const salesData = async () => {
  const [result] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');
  console.log(result);
  return result;
};

const salesId = async (idString) => {
  const id = Number(idString);
  const [result] = await connection.execute(
    `SELECT product_id AS productId, quantity,
date FROM StoreManager.sales_products AS products
INNER JOIN StoreManager.sales AS sales
ON products.sale_id = sales.id
WHERE sale_id = ${id}`,
  );
  return result;
};

const salesProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM sales_products');
  return result;
};

const sales = async () => {
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

const deleteSales = async (idString) => {
  const id = Number(idString);
  const [result] = await connection.execute(
    'DELETE FROM sales WHERE id = ?', [id],
  );
  return result;
};

module.exports = {
  cadastrarVenda,
sales,
salesProducts,
salesId,
salesData,
  deleteSales,
};