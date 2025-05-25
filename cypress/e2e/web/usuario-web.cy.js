/// <reference types="cypress" />
import Login from "../pages/login";

describe('Usuário Web', () => {

    beforeEach(() => {
       Login.acessarPagina();
    })

    it('deve cadastrar um novo usuário via interface', () => {
        Login.cadastrarNovoUsuario();
        
        
    });
  
    it('deve cadastrar um novo usuário administrador via interface', () => {
        Login.cadastrarNovoUsuarioAdministrador();
        
    });
  
    it('deve validar mensagens de erro para campos obrigatórios', () => {
        Login.validarMensagemCampoObrigatorio();
     
    });
  });