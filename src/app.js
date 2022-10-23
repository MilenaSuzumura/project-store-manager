const express = require('express');
const productsRota = require('./rotas/products');
const salesRota = require('./rotas/sales');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

app.use(express.json());

app.use('/products', productsRota);

app.use('/sales', salesRota);
 
module.exports = app;