const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { productsServices } = require('../../../src/services/index');
const { productsModel } = require('../../../src/models/index');
const { allProducts, newProduct } = require('../mocks/products');
const { productNotFound, nameLength, nameRequired } = require('../mocks/messageError');

describe('Testa os Services de Products', function () {
  describe('Testa a função getAll', function () {
    beforeEach(() => sinon.restore());
    it('Testa se a função retorna todos os produtos existentes', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      sinon.stub(productsModel, 'getAll').resolves(allProducts);

      const result = await productsServices.getAll();

      expect(result).to.deep.equal(allProducts);
    });
  });

  describe('Testa a função getId', function () {
    beforeEach(() => sinon.restore());
    it('Testa se retorna o produto com o id 1', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      sinon.stub(productsModel, 'productId').resolves(allProducts[0]);

      const result = await productsServices.getId(1);

      expect(result).to.deep.equal({ status: 200, message: allProducts[0] });
    });

    it('Testa se retorna mensagem de erro caso não tenha encontrado o produto', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      sinon.stub(productsModel, 'productId').resolves([]);

      const result = await productsServices.getId(1);

      expect(result).to.deep.equal(productNotFound);
    });
  });

  describe('Testa a função createProduct', function () {
    beforeEach(() => sinon.restore());
    it('Testa se cria um novo produto', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      sinon.stub(productsModel, 'insertName').resolves(newProduct);

      const result = await productsServices.createProduct(newProduct.name);

      expect(result).to.deep.equal({ status: 201, message: newProduct });
    });

    it('Testa se não cria um novo produto se não tiver um nome maior que 5 caracters', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      sinon.stub(productsModel, 'insertName').resolves(newProduct);

      const result = await productsServices.createProduct('A');

      expect(result.status).to.deep.equal(nameLength.status);
      expect(result.message).to.deep.equal(nameLength.message);
    });

    it('Testa se não cria um novo produto se não tiver um nome', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      sinon.stub(productsModel, 'insertName').resolves(newProduct);

      const result = await productsServices.createProduct();

      expect(result.status).to.deep.equal(nameRequired.status);
      expect(result.message).to.deep.equal(nameRequired.message);
    });
  });


 /*  
 

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
  }); */
});