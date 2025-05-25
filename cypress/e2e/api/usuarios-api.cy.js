/// <reference types="cypress" />

const getUsuarios = () => {
  return cy.request({
    method: 'GET',
    url: 'https://serverest.dev/usuarios',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// Função para criar um novo usuário
const criarUsuario = (nome, email, password, administrador) => {
  return cy.request({
    method: 'POST',
    url: 'https://serverest.dev/usuarios',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      nome,
      email,
      password,
      administrador
    }
  });
};


// Função para buscar um usuário por ID
const buscarUsuarioPorId = (userId) => {
  return cy.request({
    method: 'GET',
    url: `https://serverest.dev/usuarios/${userId}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// Função para excluir um usuário por ID
const excluirUsuarioPorId = (userId) => {
  return cy.request({
    method: 'DELETE',
    url: `https://serverest.dev/usuarios/${userId}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

describe('usuarios API', () => {
  it('deve validar lista de usuarios', () => {
    getUsuarios().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('usuarios');
      expect(response.body.usuarios).to.be.an('array');
    });
  });

  it('deve cadastrar um novo usuário', () => {
    const emailUnico = `usuario${Date.now()}@teste.com`;
    criarUsuario('Usuário Teste', emailUnico, 'senha123', 'true').then((response) => {
      

      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal('Cadastro realizado com sucesso');
      expect(response.body).to.have.property('_id');
    });
    });
  });

  it('deve buscar um usuário por ID', () => {
    const emailUnico = `usuario${Date.now()}@teste.com`;
    criarUsuario('Usuário Teste', emailUnico, 'senha123', 'true').then((postResponse) => {
      expect(postResponse.status).to.equal(201);
      const userId = postResponse.body._id;

      buscarUsuarioPorId(userId).then((getResponse) => {
        expect(getResponse.status).to.equal(200);
        expect(getResponse.body).to.have.property('_id', userId);
        expect(getResponse.body).to.have.property('nome', 'Usuário Teste');
        
      });
        
      });
    });
  

  it('deve excluir um usuário por ID', () => {
    const emailUnico = `usuario${Date.now()}@teste.com`;
    criarUsuario('Usuário Teste', emailUnico, 'senha123', 'true').then((postResponse) => {
      expect(postResponse.status).to.equal(201);
      const userId = postResponse.body._id;

      excluirUsuarioPorId(userId).then((deleteResponse) => {
        expect(deleteResponse.status).to.equal(200);
        expect(deleteResponse.body.message).to.equal('Registro excluído com sucesso');

        cy.request({
          method: 'GET',
          url: `https://serverest.dev/usuarios/${userId}`,
          failOnStatusCode: false
        }).then((getResponse) => {
          expect(getResponse.body.message).to.equal('Usuário não encontrado');
        });
      });
    });
  });