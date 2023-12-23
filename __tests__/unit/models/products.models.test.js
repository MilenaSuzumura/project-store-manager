const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/connection');

chai.use(sinonChai);

const { productsModel } = require('../../../src/models/index');
const { allProducts, newProduct, deleteProduct } = require('../mocks/products');

describe('Testa os models de Products', function () {
  beforeEach(() => sinon.restore());
  it('Testa se retorna todos os produtos de getAll', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);

    const result = await productsModel.getAll();

    expect(result).to.be.equal(allProducts);
  });

  it('Testa se retorna um produto pelo id usando productId', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts[0]]);

    const result = await productsModel.productId('1');

    expect(result).to.be.equal(allProducts[0]);
  });

  it('Testa se insere um produto novo com InsertName', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const result = await productsModel.insertName(newProduct.name);
  
    expect(result).to.deep.equal(newProduct);
  });

  it('Testa se insere um produto novo com updateProduct', async function () {
    sinon.stub(connection, 'execute').resolves();

    const result = await productsModel.updateProduct('Machado do Thor');

    expect(result).to.be.equal();
  });

  it('Testa se remove um produto com deleteProduct', async function () {
    sinon.stub(connection, 'execute').resolves([deleteProduct]);

    const result = await productsModel.deleteProduct('1');

    expect(result).to.be.equal(deleteProduct);
  });
});
