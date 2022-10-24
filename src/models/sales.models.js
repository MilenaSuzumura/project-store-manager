const connection = require('../connection');

const cadastrarVenda = async (saleId, productId, quantity) => {
  console.log(saleId, productId, quantity);
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return result;
};

/* const cadastrarVenda = async (saleId, productId, quantity) => {
  const [result] = await connection.execute(
    'INSERT INTO sales (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return result;
}; */

const salesData = async () => {
  const [result] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');
  return result;
};

const salesId = async (idString) => {
  const id = Number(idString);
  const [[result]] = await connection.execute(
    `SELECT * FROM sales_products WHERE id = ${id}`,
  );
  return result;
};

/* const insertProducts = async (body) => {
  const [[result]] = await connection.execute(
    `SELECT * FROM sales WHERE id = ${id}`,
  );
  return result;
}; */

const salesProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM sales_products');
  return result;
};

const sales = async () => {
  const [result] = await connection.execute('SELECT * FROM sales');
  return result;
};

/* const salesProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM sales_products');
  return result;
};

const sales = async () => {
  const [result] = await connection.execute('SELECT * FROM sales');
  return result;
};

const salesId = async (idString) => {
  const id = Number(idString);
  const [result] = await connection.execute(
    `SELECT * FROM sales_products WHERE id = ${id}`,
  );
  return result;
};

const insertSalesProducts = async (sale) => {
  const [result] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [sale.id, sale.productId, sale.quantity],
  );
  return result;
};

module.exports = { salesProducts, sales, insertSalesProducts, salesId };
 */
module.exports = { cadastrarVenda, sales, salesProducts, salesId, salesData };