const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { productsControllers } = require('../../../src/controllers/index');
const { productsServices } = require('../../../src/services/index');
const { allProducts, newProduct } = require('../mocks/products');
const { productNotFound } = require('../mocks/messageError');

describe('Testa os Controllers de Products', function () {
  describe('Testa a função getAll', function () {
    beforeEach(() => sinon.restore());
    it('Testa se a função retorna todos os produtos existentes', async function () {
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      sinon.stub(productsServices, 'getAll').resolves(allProducts);

      await productsControllers.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProducts);
    });
  });

  describe('Testa a função getId', function () {
    beforeEach(() => sinon.restore());
    it('Testa se retorna o produto com o id 1', async function () {
      const res = {};
      const req = { params: { id: 1 } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      sinon.stub(productsServices, 'getId').resolves({ status: 200, message: allProducts[0] });

      await productsControllers.getId(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProducts[0]);
    });
  });

  describe('Testa a função createProduct', function () {
    beforeEach(() => sinon.restore());
    it('Testa se cria um novo produto', async function () {
      const res = {};
      const req = { body: { name: 'Albedo' } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      sinon.stub(productsServices, 'createProduct').resolves({ status: 201, message: newProduct });

      await productsControllers.createProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newProduct);
    });
  });

  describe('Testa a função updateProduct', function () {
    beforeEach(() => sinon.restore());
    it('Testa se atualiza o nome do produto com id 1', async function () {
      const res = {};
      const req = { body: { name: 'Albedo' }, params: { id: 1 } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      sinon.stub(productsServices, 'updateProduct').resolves({ status: 201, message: newProduct });

      await productsControllers.updateProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newProduct);
    });
  });

  describe('Testa a função deleteProduct', function () {
    beforeEach(() => sinon.restore());
    it('Testa se a função deleta um produto', async function () {
      const res = {};
      const req = { params: { id: 1 } };
      res.status = sinon.stub().returns(res);
      res.end = sinon.stub();
      sinon.stub(productsServices, 'deleteProduct').resolves();

      await productsControllers.deleteProduct(req, res);

      expect(res.status).to.have.been.calledWith(204);
      expect(res.end).to.have.been.calledWith();
    });

    it('Testa se a função não encontra o produto', async function () {
      const res = {};
      const req = { params: { id: 100 } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      sinon.stub(productsServices, 'deleteProduct').resolves(productNotFound);

      await productsControllers.deleteProduct(req, res);

      expect(res.status).to.have.been.calledWith(productNotFound.status);
      expect(res.json).to.have.been.calledWith(productNotFound.message);
    });
  });
});