const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/connection');

chai.use(sinonChai);

const { productsModel } = require('../../../src/models/index');
const mocksProducts = require('./mocks/products');
// const { getAll, productId, insertName, updateProduct, deleteProduct } = model.productsModel;
const { products, productIdMock, productInsert, productsUpdate, productsDelete } = mocksProducts;

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

        expect(result.id).to.be.equal(4);
      });
    });

/*     describe('Testa os UPDATE de cada função', function () {
      it('Testa se dá para atualizar um produto com updateProduct',
        async function () {
          const res = {};
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns();
          const update = { name: 'Machado do Thor' }

          sinon.stub(productsModel, 'updateProduct')
            .resolves({ status: 200, message: productsUpdate });

          await updateProduct({ params: update }, res);

          expect(res.status).to.have.been.calledOnceWith(200);
          expect(res.json).to.have.been.calledOnceWith(productsUpdate);
        });
    }); */

    describe('Testa o DELETE de cada função', function () {
      it('Testa se remove um produto com deleteProduct', async function () {
        const res = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(productsModel, 'deleteProduct')
          .resolves({ status: 204 });

        await deleteProduct({ params: { id: 1 } }, res);

        expect(res.status).to.have.been.calledOnceWith(204);
        expect(res.json).to.have.been.calledOnceWith(productsDelete);
      });
    })
    afterEach(sinon.restore);
  });