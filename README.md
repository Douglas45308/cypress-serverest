# Cypress Serverest

Este projeto utiliza o framework [Cypress](https://www.cypress.io/) para realizar testes automatizados na aplicação Serverest, incluindo a integração com o [Allure Report](https://docs.qameta.io/allure/) para geração de relatórios de testes.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Java](https://www.java.com/) (necessário para o Allure Report)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cypress-serverest.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd cypress-serverest
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Scripts Disponíveis

Os seguintes scripts estão configurados no arquivo `package.json`:

- **Executar os testes no modo headless:**
  ```bash
  npm run cy:run
  ```

- **Abrir o Cypress no modo interativo:**
  ```bash
  npm run cy:open
  ```

- **Executar os testes e gerar os resultados para o Allure:**
  ```bash
  npm run cy:run:allure
  ```

- **Gerar o relatório Allure:**
  ```bash
  npm run cy:gererate:allure
  ```

- **Abrir o relatório Allure:**
  ```bash
  npm run cy:open:allure
  ```

## Relatórios de Testes

Este projeto utiliza o [Allure Report](https://docs.qameta.io/allure/) para gerar relatórios detalhados dos testes. Certifique-se de ter o Allure CLI instalado globalmente:

```bash
npm install -g allure-commandline
```

Para gerar e abrir o relatório, execute:

```bash
npm run cy:gererate:allure
npm run cy:open:allure
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).