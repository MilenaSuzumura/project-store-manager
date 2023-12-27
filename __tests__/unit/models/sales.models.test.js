const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/connection');

chai.use(sinonChai);

const { salesModel } = require('../../../src/models/index');

const { allSales, createSales, insertId } = require('../mocks/sales');

const { deleteProduct } = require('../mocks/products');
const { notDeleted } = require('../mocks/messageError');

describe('Testa a model Sales', function () {
  beforeEach(() => sinon.restore());

  it('Testa se retorna todas as vendas de getAll', async function () {
    sinon.stub(connection, 'execute').resolves([allSales]);

    const result = await salesModel.getAllSales();

    expect(result).to.be.equal(allSales);
  });

  it('Testa se retorna a venda com o id 2', async function () {
    sinon.stub(connection, 'execute').resolves([allSales[0]]);

    const result = await salesModel.getIdSales('2');

    expect(result).to.be.equal(allSales[0]);
  });

  it('Testa se retorna as informações para insertId da venda', async function () {
    sinon.stub(connection, 'execute').resolves([insertId]);

    const result = await salesModel.salesData();

    expect(result).to.deep.equal(insertId);
  }); 

  it('Testa se adiciona uma nova venda', async function () {
    sinon.stub(connection, 'execute').resolves([deleteProduct]);
    const { sale_id, product_id, quantity } = createSales;

    const result = await salesModel.createSale(sale_id, product_id, quantity);
  
    expect(result).to.deep.equal(deleteProduct);
  });

  it('Testa se remove uma compra com deleteSales', async function () {
    sinon.stub(connection, 'execute').resolves([deleteProduct]);

    const result = await salesModel.deleteSales('2');

    expect(result).to.deep.equal(deleteProduct);
  });

  it('Testa se não consegue remover uma compra com deleteSales', async function () {
    sinon.stub(connection, 'execute').resolves([notDeleted]);

    const result = await salesModel.deleteSales('2');

    expect(result).to.deep.equal(notDeleted);
  });
});