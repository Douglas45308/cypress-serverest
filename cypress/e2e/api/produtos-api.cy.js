/// <reference types="cypress" />

describe('Produtos API', () => {
    const listarProdutos = () => {
      return cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    };
  
    it('deve listar os produtos cadastrados', () => {
      listarProdutos().then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('produtos');
        expect(response.body.produtos).to.be.an('array');
  
        if (response.body.produtos.length > 0) {
          const produto = response.body.produtos[0];
          expect(produto).to.have.property('nome');
          expect(produto).to.have.property('preco');
          expect(produto).to.have.property('descricao');
        }
      });
    });
  });