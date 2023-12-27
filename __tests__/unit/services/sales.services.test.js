const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { salesServices } = require('../../../src/services/index');
const { salesModel } = require('../../../src/models/index');

const { allSales, insertId, newSales } = require('../mocks/sales');
const { deleteProduct } = require('../mocks/products');
const { saleNotFound, productIdRequired, quantityRequired, quantityLength, productNotFound, notDeleted } = require('../mocks/messageError');

describe('Testa os Services de Sales', function () {
  
  describe('Testa a função getAll', function () {
    beforeEach(() => sinon.restore());

    it('Testa se a função retorna todas as vendas existentes', async function () {
      sinon.stub(salesModel, 'getAllSales').resolves(allSales);

      const result = await salesServices.getAll();

      expect(result).to.deep.equal(allSales);
    });
  });

  describe('Testa a função getId', function () {
    beforeEach(() => sinon.restore());
    it('Testa se retorna a venda com o id 2', async function () {
      sinon.stub(salesModel, 'getIdSales').resolves([allSales[0]]);

      const result = await salesServices.getId(2);

      expect(result).to.deep.equal({ status: 200, message: allSales[0] });
    });

    it('Testa se retorna mensagem de erro caso não tenha encontrado o produto', async function () {
      sinon.stub(salesModel, 'getIdSales').resolves([]);

      const result = await salesServices.getId(1);

      expect(result).to.deep.equal(saleNotFound);
    });
  });

  describe('Testa a função createSale', function () {
    beforeEach(() => sinon.restore());
    it('Testa se cria uma nova venda', async function () {
      sinon.stub(salesModel, 'salesData').resolves(insertId);
      sinon.stub(salesModel, 'createSale').resolves(newSales);

      const message = {
        id: insertId.insertId,
        itemsSold: newSales
      };

      const result = await salesServices.createSales(newSales);

      expect(result).to.deep.equal({ status: 201, message });
    });

    it('Testa se não cria uma nova compra se não tiver productId', async function () {
      const result = await salesServices.createSales([]);

      expect(result).to.deep.equal(productIdRequired);
    });

    it('Testa se não cria uma nova compra se algum dos objetos não tiver productId', async function () {
      const result = await salesServices.createSales([ { productId: 1 }, { quantity: 1 }]);

      expect(result).to.deep.equal(productIdRequired);
    });

    it('Testa se não cria uma nova compra se algum dos objetos não tiver quantity', async function () {
      const result = await salesServices.createSales([
        { productId: 1 }, { productId: 1, quantity: 1 }
      ]);

      expect(result).to.deep.equal(quantityRequired);
    });

    it('Testa se não cria uma nova compra se algum dos objetos quantity for menor que 1', async function () {
      const result = await salesServices.createSales([
        { productId: 1, quantity: 0 }, { productId: 1, quantity: 0 }
      ]);

      expect(result).to.deep.equal(quantityLength);
    });

    it('Testa se não cria uma nova compra se algum dos objetos não encontrar o id do produto', async function () {
      sinon.stub(salesModel, 'getIdSales').resolves([]);

      const result = await salesServices.createSales([
        { productId: 1, quantity: 1 }, { productId: 1, quantity: 1 }
      ]);

      expect(result).to.deep.equal(productNotFound);
    });
  });

  describe('Testa a função deleteSales', function () {
    beforeEach(() => sinon.restore());

    it('Testa se a função deleta uma compra', async function () {
      sinon.stub(salesModel, 'deleteSales').resolves(deleteProduct);

      const result = await salesServices.deleteSales(1);

      expect(result).to.deep.equal({ status: 204 });
    });

    it('Testa se a função não encontra a compra', async function () {
      sinon.stub(salesModel, 'deleteSales').resolves(notDeleted);

      const result = await salesServices.deleteSales(100);

      expect(result.status).to.deep.equal(saleNotFound.status);
      expect(result.message).to.deep.equal(saleNotFound.message);
    });
  });
});