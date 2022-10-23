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

const insertName = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)', [name],
  );
  const newProduct = {
    id: result.insertId,
    name,
  };
  return newProduct;
};

module.exports = { getAll, productId, insertName };
