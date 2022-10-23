const express = require('express');
const productsRota = require('./rotas/products');

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

const { salesModel } = models;
const validador = require('./middlewares/index');

const { validaQnt, validaId, salesValidation, validaProduto } = validador;

app.use('/products', productsRota);

app.get('/sales', async (_req, res) => {
  const [result] = await salesModel.sales();
  res.status(200).json(result);
});

app.get('/sales/:id', salesValidation, async (req, res) => {
  const { id } = req.body;
  const [result] = await salesModel.salesId(id);
  res.status(200).json(result);
});

app.post('/sales', validaId, validaQnt, validaProduto, async (req, res) => {
  const [sales] = await salesModel.sales();
  const newProduct = {
    saleId: (sales.length + 1),
    itemsSold: [],
  };
  const produtNew = newProduct.itemsSold.push(req.body);
  await salesModel.insertSalesProducts(produtNew);
  
  res.status(201).json(newProduct);
});
 
module.exports = app;