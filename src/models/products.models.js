const connection = require('../connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

const productId = async (idString) => {
  const id = Number(idString);
  const [result] = await connection.execute(`SELECT * FROM products WHERE id = ${id}`);
  return result;
};

module.exports = { getAll, productId };
