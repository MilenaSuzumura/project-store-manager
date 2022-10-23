const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const productsModel = require('../../../src/models/products.models');
const mocksProducts = require('./mocks/products');
const { getAll, productId, insertName, updateProduct, deleteProduct } = productsModel;
const { products } = mocksProducts;

const {} = require('./mocks/products');

describe('Testa os models de Products', function () {
  it('Testa os SELECT de cada função', async function () {

    it('Testa se retorna todos os produtos de getAll', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsModel, 'getAll')
        .resolves({ status: 200, message: products });

      await getAll({}, res);

      expect(res.status).to.have.been.calledOnceWith(200);
      expect(res.json).to.have.been.calledOnceWith(products);
    });
  });
});