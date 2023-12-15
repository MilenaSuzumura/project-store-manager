const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { productsControllers } = require('../../../src/controllers/index');
const { getAll, getId } = productsControllers;

// const { productsModel } = require('../../../src/models/index');
 
const { productsService } = require('../../../src/services/index');
const { allProducts, productNotFound } = require('./mocks/products');

describe('Testa os Controllers de Products', function () {
  describe('Testa a função getAll', function () {
    beforeEach(() => sinon.restore());
    it('Testa se a função retorna todos os produtos existentes', async function () {
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAll').resolves(allProducts);
  
      await getAll(req, res);
  
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProducts);
    });
  });

  describe('Testa a função getId', function () {
    beforeEach(() => sinon.restore());

    it('Testa se a função retorna o produto com o id correspondente', async function () {
      const res = {};
      const req = { params: { id: 1 } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getId').resolves({ status: 200, message: allProducts[0] });
    
      await getId(req, res);
    
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProducts[0]);
    });

    it('Testa se a função retorna uma mensagem de erro caso o produto não exista', async function () {
      const res = {};
      const req = { params: { id: 20 } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getId').resolves(productNotFound);
    
      await getId(req, res);
    
      expect(res.status).to.have.been.calledWith(productNotFound.status);
      expect(res.json).to.have.been.calledWith(productNotFound.message);
    });
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