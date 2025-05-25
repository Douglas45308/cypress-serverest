/// <reference types="cypress" />

describe('Usuário Web', () => {
    const urlCadastroUsuarios = 'https://front.serverest.dev/cadastrarusuarios';
  
    it('deve cadastrar um novo usuário via interface', () => {
      cy.visit(urlCadastroUsuarios);
      cy.get('input[name="nome"]').type('Usuário Teste');
      cy.get('input[name="email"]').type(`usuario${Date.now()}@teste.com`);
      cy.get('input[name="password"]').type('senha123');
      cy.get('input[name="administrador"]').check();
      cy.get('button[type="submit"]').click();
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
  
      // Captura uma screenshot após o sucesso do cadastro
      cy.screenshot('deve cadastrar um novo usuário via interface');
    });
  
    it('deve cadastrar um novo usuário administrador via interface', () => {
      cy.visit(urlCadastroUsuarios);
      cy.get('input[name="nome"]').type('Administrador Teste');
      cy.get('input[name="email"]').type(`admin${Date.now()}@teste.com`);
      cy.get('input[name="password"]').type('senha123');
      cy.get('input[name="administrador"]').check();
      cy.get('button[type="submit"]').click();
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
      cy.screenshot('deve cadastrar um novo usuário administrador via interface');
    });
  
    it('deve validar mensagens de erro para campos obrigatórios', () => {
      cy.visit(urlCadastroUsuarios);
      cy.get('button[type="submit"]').click();
      cy.contains('Nome é obrigatório').should('be.visible');
      cy.contains('Email é obrigatório').should('be.visible');
      cy.contains('Password é obrigatório').should('be.visible');
      cy.screenshot('deve validar mensagens de erro para campos obrigatórios');
    });
  });