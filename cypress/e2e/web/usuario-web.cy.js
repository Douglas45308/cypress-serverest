/// <reference types="cypress" />
import Login from "../pages/login";

describe('Usuário Web', () => {

    beforeEach(() => {
       Login.acessarPagina();
    })

    it.only('deve cadastrar um novo usuário via interface', () => {
        Login.cadastrarNovoUsuario();
     
    });
  
    it('deve cadastrar um novo usuário administrador via interface', () => {
      cy.get('input[name="nome"]').type('Administrador Teste');
      cy.get('input[name="email"]').type(`admin${Date.now()}@teste.com`);
      cy.get('input[name="password"]').type('senha123');
      cy.get('input[name="administrador"]').check();
      cy.get('button[type="submit"]').click();
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
      cy.screenshot('deve cadastrar um novo usuário administrador via interface');
    });
  
    it('deve validar mensagens de erro para campos obrigatórios', () => {
      cy.get('button[type="submit"]').click();
      cy.contains('Nome é obrigatório').should('be.visible');
      cy.contains('Email é obrigatório').should('be.visible');
      cy.contains('Password é obrigatório').should('be.visible');
      cy.screenshot('deve validar mensagens de erro para campos obrigatórios');
    });
  });