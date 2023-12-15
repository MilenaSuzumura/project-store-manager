const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const controllers = require('../../../src/controllers/index');
const { productsModel } = require('../../../src/models/index');
const productService = require('../../../src/services/index');
// const { allProducts, idProduct } = controllers;
const products = require('./mocks/products');

describe('Testa os Controllers de Products', function () {
  beforeEach(() => sinon.restore());

  it('Testa se a função getAll de retorna todos os produtos existentes', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();
    sinon.stub(productsModel, 'getAll').resolves(products);

    await controllers.allProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  /*   describe('Testa a função idProduct', function () {
      it('Testa se retorna o produto com o id 1', async function () {
        const res = {};
        const req = { params: { id: 1 } };
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        sinon.stub(productService, 'validaProdutoId').resolves(products[0]);
  
        await controllers.idProduct(req, res);
  
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(products[0]);
      });
    }); */
});