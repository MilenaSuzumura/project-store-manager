const connection = require('../connection');

const salesProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM sales_products');
  return result;
};

const sales = async () => {
  const [result] = await connection.execute('SELECT * FROM sales');
  return result;
};

const insertSalesProducts = async (sale) => {
  const [result] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [sale.id, sale.productId, sale.quantity],
  );
  return result;
};

module.exports = { salesProducts, sales, insertSalesProducts };
