const express = require('express');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

app.use(express.json());
const models = require('./models/index');

const { productsModel, salesModel } = models;
const validador = require('./middlewares/index');

const { validatorName, validaQnt, validaId } = validador;

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

app.post('/products', validatorName, async (req, res) => {
  const result = await productsModel.insertName(req.body.name);
  res.status(201).json(result);
});

app.post('/sales', validaId, validaQnt, async (req, res) => {
  const [sales] = await salesModel.sales();
  const newProduct = {
    saleId: (sales.length + 1),
    itemsSold: [],
  };
  const produtNew = newProduct.itemsSold.push(req.body);
  const result = await salesModel.insertSalesProducts(produtNew);
  
  res.status(201).json(result);
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