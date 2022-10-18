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

app.get('/products', async (_req, res) => {
  const [result] = await connection.execute('SELECT * FROM products');
  res.status(200).json(result);
});

app.get('/products/:id', async (req, res) => {
  const id = Number(req.params.id);
  const [result] = await connection.execute(`SELECT * FROM products WHERE id = ${id}`);

  if (result.length === 0) {
    const frase = { message: 'Product not found' };
    res.status(404).json(frase);
  }

  res.status(200).json(result[0]);
});
module.exports = app;