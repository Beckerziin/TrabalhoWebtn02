# Projeto de Busca de Perfil do GitHub com React, Vite, Tailwind CSS e Styled Components

Este projeto React, construído com Vite, permite buscar e exibir informações de perfis do GitHub. Ele demonstra a utilização de duas bibliotecas de estilização diferentes: Tailwind CSS e Styled Components, em rotas separadas.

## Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

## Como rodar a aplicação

1.  Clone este repositório para sua máquina local.
    ```bash
    git clone https://github.com/Beckerziin/TrabalhoWebtn02
    cd github-profile-app
    ```

2.  Instale as dependências do projeto.
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  Inicie o servidor de desenvolvimento.
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta que o Vite indicar).

## Rotas

O projeto possui as seguintes rotas:

-   `/`: Página inicial com uma breve instrução.
-   `/styled`: Demonstra um componente (`ProfileCardStyled`) estilizado utilizando Styled Components.
-   `/tailwind`: Demonstra um componente (`ProfileCardTailwind`) estilizado utilizando Tailwind CSS.

## API do GitHub

Este projeto utiliza a API pública do GitHub para buscar informações de usuários. O endpoint utilizado é:

`https://api.github.com/users/{nome_usuario}`

## Observações

-   Este projeto foi desenvolvido para fins de demonstração da integração de Tailwind CSS e Styled Components em um projeto React com Vite.
-   Certifique-se de que sua conexão com a internet esteja ativa para buscar os dados da API do GitHub.

## Autor

João Vitor Montipó Becker - TN02