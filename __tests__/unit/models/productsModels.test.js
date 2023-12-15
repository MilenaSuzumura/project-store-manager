const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/connection');

chai.use(sinonChai);

const { productsModel } = require('../../../src/models/index');
const mocksProducts = require('./mocks/productsModelMocks');
// const { getAll, productId, insertName, updateProduct, deleteProduct } = model.productsModel;
const { products, productInsert, productsUpdate, productsDelete } = mocksProducts;

describe('Testa os models de Products', function () {
  describe('Testa os SELECT de cada função', function () {

    it('Testa se retorna todos os produtos de getAll', async function () {
      sinon.stub(connection, 'execute').resolves([products]);

      const result = await productsModel.getAll();

      expect(result).to.be.equal(products);
    });
    
    it('Testa se retorna um produto pelo id usando productId', async function () {
      sinon.stub(connection, 'execute').resolves([products[0]]);

      const result = await productsModel.productId('1');

      expect(result).to.be.equal(products[0]);
    });
  });

  describe('Testa os INSERT de cada função', function () {
    it('Testa se insere um produto novo com InsertName', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

      const result = await productsModel.insertName('Action Figure do Thor');
      expect(result.id).to.be.equal(productInsert.id);
      expect(result.name).to.be.equal(productInsert.name);
    });
  });

  describe('Testa os UPDATE de cada função', function () {
    it('Testa se insere um produto novo com updateProduct', async function () {
      sinon.stub(connection, 'execute').resolves([productsUpdate[0]]);

      await productsModel.updateProduct('Machado do Thor');
      const result = await productsModel.getAll();

      expect(result).to.be.equal(productsUpdate[0]);
    });
  });

  describe('Testa o DELETE de cada função', function () {
    it('Testa se remove um produto com deleteProduct', async function () {
      sinon.stub(connection, 'execute').resolves([productsDelete]);

      const result = await productsModel.deleteProduct('1');

      expect(result).to.be.equal(productsDelete);
    });
  })
  afterEach(sinon.restore);
});