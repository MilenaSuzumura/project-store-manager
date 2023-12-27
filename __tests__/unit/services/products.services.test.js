const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { productsServices } = require('../../../src/services/index');
const { productsModel } = require('../../../src/models/index');
const { allProducts, newProduct, deleteProduct } = require('../mocks/products');
const { productNotFound, nameLength, nameRequired, notDeleted } = require('../mocks/messageError');

describe('Testa os Services de Products', function () {
  describe('Testa a função getAll', function () {
    beforeEach(() => sinon.restore());
    it('Testa se a função retorna todos os produtos existentes', async function () {
      sinon.stub(productsModel, 'getAll').resolves(allProducts);

      const result = await productsServices.getAll();

      expect(result).to.deep.equal(allProducts);
    });
  });

  describe('Testa a função getId', function () {
    beforeEach(() => sinon.restore());
    it('Testa se retorna o produto com o id 1', async function () {
      sinon.stub(productsModel, 'productId').resolves(allProducts[0]);

      const result = await productsServices.getId(1);

      expect(result).to.deep.equal({ status: 200, message: allProducts[0] });
    });

    it('Testa se retorna mensagem de erro caso não tenha encontrado o produto', async function () {
      sinon.stub(productsModel, 'productId').resolves([]);

      const result = await productsServices.getId(1);

      expect(result).to.deep.equal(productNotFound);
    });
  });

  describe('Testa a função createProduct', function () {
    beforeEach(() => sinon.restore());
    it('Testa se cria um novo produto', async function () {
      sinon.stub(productsModel, 'insertName').resolves(newProduct);

      const result = await productsServices.createProduct(newProduct.name);

      expect(result).to.deep.equal({ status: 201, message: newProduct });
    });

    it('Testa se não cria um novo produto se não tiver um nome maior que 5 caracters', async function () {
      sinon.stub(productsModel, 'insertName').resolves(newProduct);

      const result = await productsServices.createProduct('A');

      expect(result.status).to.deep.equal(nameLength.status);
      expect(result.message).to.deep.equal(nameLength.message);
    });

    it('Testa se não cria um novo produto se não tiver um nome', async function () {
      sinon.stub(productsModel, 'insertName').resolves(newProduct);

      const result = await productsServices.createProduct();

      expect(result.status).to.deep.equal(nameRequired.status);
      expect(result.message).to.deep.equal(nameRequired.message);
    });
  });

  describe('Testa a função updateProduct', function () {
    beforeEach(() => sinon.restore());
    it('Testa se atualiza o nome do produto com id 1', async function () {
      sinon.stub(productsModel, 'productId').resolves(allProducts[0]);
      sinon.stub(productsModel, 'updateProduct');

      const result = await productsServices.updateProduct(newProduct.id, newProduct.name);

      expect(result.status).to.deep.equal(200);
      expect(result.message).to.deep.equal(newProduct);
    });

    it('Testa se não atualiza o nome do produto se não encontrar o produto', async function () {
      sinon.stub(productsModel, 'productId').resolves([]);

      const result = await productsServices.updateProduct(100, newProduct.name);

      expect(result.status).to.deep.equal(productNotFound.status);
      expect(result.message).to.deep.equal(productNotFound.message);
    });

    it('Testa se não atualiza o nome do produto se não tiver o novo nome', async function () {
      sinon.stub(productsModel, 'productId').resolves(1);

      const result = await productsServices.updateProduct(1);

      expect(result.status).to.deep.equal(nameRequired.status);
      expect(result.message).to.deep.equal(nameRequired.message);
    });

    it('Testa se não atualiza o nome do produto se o novo nome não tiver mais de 5 caracters', async function () {
      sinon.stub(productsModel, 'productId').resolves(allProducts[0]);

      const result = await productsServices.updateProduct(1, 'A');

      expect(result.status).to.deep.equal(nameLength.status);
      expect(result.message).to.deep.equal(nameLength.message);
    });
  });
 
  describe('Testa a função deleteProduct', function () {
    beforeEach(() => sinon.restore());
    it('Testa se a função deleta um produto', async function () {
      sinon.stub(productsModel, 'deleteProduct').resolves(deleteProduct);

      const result = await productsServices.deleteProduct(1);

      expect(result).to.deep.equal();
    });

    it('Testa se a função não encontra o produto', async function () {
      sinon.stub(productsModel, 'deleteProduct').resolves(notDeleted);

      const result = await productsServices.deleteProduct(100);

      expect(result.status).to.deep.equal(productNotFound.status);
      expect(result.message).to.deep.equal(productNotFound.message);
    });
  });
});