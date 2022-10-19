const express = require('express');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
const connection = require('./connection');

app.use(express.json());
const models = require('./models/index');

const { productsModel } = models;

app.get('/products', async (_req, res) => {
  const result = await productsModel.getAll();
  res.status(200).json(result);
});

app.get('/products/:id', async (req, res) => {
  const result = await productsModel.productId(req.params.id);

  if (result.length === 0) {
    const frase = { message: 'Product not found' };
    res.status(404).json(frase);
  }

  res.status(200).json(result[0]);
});

const validatorName = require('./middlewares/validatorName');

app.post('/products', validatorName, async (req, res) => {
  const { name } = req.body;
  const [result] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)', [name],
  );
  const newProduct = {
    id: result.insertId,
    name,
  };

  res.status(201).json(newProduct);
});

const validaId = require('./middlewares/validaId');
// const validaQnt = require('./middlewares/validaQnt');

app.get('/sales', validaId, async (_req, res) => {
  const [result] = await connection.execute('SELECT * FROM sales');
  res.status(200).json(result);
});

/* app.delete('/products/:id', async (req, res) => {
  const id = Number(req.params.id);
  const [result] = await connection.execute(
    'DELETE FROM products WHERE id = ?', [id],
  );

  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(204).end();
});
 */
module.exports = app;