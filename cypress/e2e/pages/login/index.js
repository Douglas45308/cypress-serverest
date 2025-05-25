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
        cy.screenshot('deve cadastrar um novo usuário via interface');

    }

   



}

export default new Login();