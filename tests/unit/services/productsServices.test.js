const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const modelsProduct = require('../../../src/models/products.models');
const service = require('../../../src/services/index');
const products = require('./mocks/products');

describe('Testa todos os Services', function () {
  describe('Testa o validaProductId', function () {
    it('Testa se enviar um id correto, ele retorna as informações do id', async function () {
      sinon.stub(modelsProduct, 'productId').resolves([products[0]]);
      const result = await service.validaProdutoId(1);

      expect(result.frase[0]).to.be.equal(products[0]);
    });
    
    it('Testa se enviar um id errado, ele retorna uma mensagem', async function () {
      sinon.stub(modelsProduct, 'productId').resolves([]);
      const result = await service.validaProdutoId(999);
  
      expect(result.frase[0].message).to.be.equal('Product not found');
    });
  })
/* 
  it('Testa se retorna um produto pelo id usando productId', async function () {
    sinon.stub(connection, 'execute').resolves([products[0]]);

    const result = await productsModel.productId('1');

    expect(result).to.be.equal(products[0]);
  });
  it('Testa se insere um produto novo com InsertName', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const result = await productsModel.insertName('Action Figure do Thor');

    expect(result.id).to.be.equal(4);
  }); */
  afterEach(sinon.restore);
});