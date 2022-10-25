/* const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/connection');

chai.use(sinonChai);
const { productsModel } = require('../../../src/models/index');
const mocksProducts = require('./mocks/products');
// const { getAll, productId, insertName, updateProduct, deleteProduct } = model.productsModel;
const { products, productIdMock, productInsert, productsUpdate, productsDelete } = mocksProducts;
const validation = require('../../../src/middlewares/index');

describe('Testa os middlewares', function () {
  it('Testa a validação do nome', async function (_req, res) {
/*     const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(); 
    const result = await validation.validatorName('name');

    expect(res.status).to.be.equal(422);
    expect(res.message).to.be.equal('"name" length must be at least 5 characters long');
  });

  it('Testa se retorna um produto pelo id usando productId', async function () {
    sinon.stub(connection, 'execute').resolves([products[0]]);

    const result = await productsModel.productId('1');

    expect(result).to.be.equal(products[0]);
  });
  it('Testa se insere um produto novo com InsertName', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const result = await productsModel.insertName('Action Figure do Thor');

    expect(result.id).to.be.equal(4);
  });
}); */