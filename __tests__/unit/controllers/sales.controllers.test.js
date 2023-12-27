const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { salesControllers } = require('../../../src/controllers/index');
const { salesServices } = require('../../../src/services/index');

const { allSales, newSales } = require('../mocks/sales');
const { saleNotFound } = require('../mocks/messageError');

describe('Testa os Controllers de Sales', function () {
  describe('Testa a função getAll', function () {
    beforeEach(() => sinon.restore());
    it('Testa se a função retorna todos os produtos existentes', async function () {
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
  
      sinon.stub(salesServices, 'getAll').resolves(allSales);

      await salesControllers.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allSales);
    });
  });

  describe('Testa a função getId', function () {
    beforeEach(() => sinon.restore());
    it('Testa se retorna a venda com o id 2', async function () {
      const res = {};
      const req = { params: { id: 2 } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    
      sinon.stub(salesServices, 'getId').resolves({ status: 200, message: allSales[0] });

      await salesControllers.getId(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allSales[0]);
    });

    it('Testa se não encontra a venda com o id 1', async function () {
      const res = {};
      const req = { params: { id: 1 } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    
      sinon.stub(salesServices, 'getId').resolves(saleNotFound);

      await salesControllers.getId(req, res);

      expect(res.status).to.have.been.calledWith(saleNotFound.status);
      expect(res.json).to.have.been.calledWith(saleNotFound.message);
    });
  });

  describe('Testa a função createSales', function () {
    beforeEach(() => sinon.restore());
    it('Testa se cria uma nova compra', async function () {
      const res = {};
      const req = { body: newSales };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(salesServices, 'createSales').resolves({ status: 201, message: newSales });

      await salesControllers.createSales(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newSales);
    });
  });

  describe('Testa a função deleteProduct', function () {
    beforeEach(() => sinon.restore());
    it('Testa se a função deleta uma compra', async function () {
      const res = {};
      const req = { params: { id: 1 } };
      res.status = sinon.stub().returns(res);
      res.end = sinon.stub();

      sinon.stub(salesServices, 'deleteSales').resolves({ status: 204 });

      await salesControllers.deleteSales(req, res);

      expect(res.status).to.have.been.calledWith(204);
      expect(res.end).to.have.been.calledWith();
    });

    it('Testa se a função não deleta a compra', async function () {
      const res = {};
      const req = { params: { id: 100 } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      sinon.stub(salesServices, 'deleteSales').resolves(saleNotFound);

      await salesControllers.deleteSales(req, res);

      expect(res.status).to.have.been.calledWith(saleNotFound.status);
      expect(res.json).to.have.been.calledWith(saleNotFound.message);
    });
  });
});