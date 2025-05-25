import { elements as el } from "./elements";


class Login{


    acessarPagina(){
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
    }


    cadastrarNovoUsuario(){
        cy.get(el.nome).type('Usuário Teste');
        cy.get(el.email).type(`usuario${Date.now()}@teste.com`);
        cy.get(el.password).type('senha123');
        cy.get(el.cadastrarButton).click();
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
        cy.log('Usuário cadastrado com SUCESSO !');
        cy.screenshot('Usuário cadastrado com sucesso');
        

    }

    cadastrarNovoUsuarioAdministrador(){
        cy.get(el.nome).type('Administrador Teste');
        cy.get(el.email).type(`admin${Date.now()}@teste.com`);
        cy.get(el.password).type('senha123');
        cy.get(el.administrador).check();
        cy.get(el.cadastrarButton).click();
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
        cy.log('Usuário administrador cadastrado com SUCESSO ! ');
        cy.screenshot('Usuário administrador cadastrado com sucesso');
        
    }

    validarMensagemCampoObrigatorio(){
        cy.get(el.cadastrarButton).click();
        cy.contains('Nome é obrigatório').should('be.visible');
        cy.contains('Email é obrigatório').should('be.visible');
        cy.contains('Password é obrigatório').should('be.visible');
        cy.log('Validação de campos obrigatórios realizada com SUCESSO !');
        cy.screenshot('Validação de campos obrigatórios realizada com sucesso');
        
    }

   



}

export default new Login();