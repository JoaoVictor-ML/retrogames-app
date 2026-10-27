# RetroGames

Catálogo de jogos digitais desenvolvido para organizar e apresentar informações sobre jogos de diferentes plataformas, com uma interface simples e intuitiva.

## Sobre o projeto

O RetroGames é um sistema de catálogo de jogos que permite cadastrar e visualizar informações como título, plataforma, desenvolvedora, imagem de capa, preço e data de cadastro.

O projeto foi desenvolvido como prática de desenvolvimento web, aplicando conceitos de estruturação HTML, estilização CSS e manipulação do DOM com JavaScript.

## Funcionalidades

- Exibição dos jogos cadastrados em cards.
- Cadastro de novos jogos por meio de um formulário modal.
- Apresentação da capa e das informações de cada jogo.
- Formatação dos preços no padrão monetário brasileiro.
- Validação dos campos obrigatórios do formulário.
- Interface organizada para facilitar a visualização do catálogo.

## Tecnologias utilizadas

- **HTML5:** estruturação da página e do formulário de cadastro.
- **CSS3:** estilização e organização visual da interface.
- **JavaScript:** manipulação do DOM, eventos e criação dinâmica dos cards.
- **SQL:** definição da estrutura relacional do banco de dados e inserção de dados iniciais.

## Estrutura do projeto

```text
retrogames/
├── index.html
├── style.css
├── script.js
└── schema.sql
```

## Como executar

1. Clone o repositório:

   ```bash
   git clone <https://github.com/JoaoVictor-ML/retrogames-app.git>
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd retrogames
   ```

3. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server no Visual Studio Code.

## Banco de dados

O arquivo `schema.sql` contém a estrutura inicial do banco de dados `db_retrogames`, incluindo a tabela `jogos` e comandos para inserir registros de teste.

A tabela armazena os seguintes dados:

| Campo | Descrição |
|---|---|
| `id` | Identificador do jogo |
| `titulo` | Nome do jogo |
| `plataforma` | Plataforma ou console |
| `desenvolvedora` | Empresa responsável pelo jogo |
| `imagem_url` | Endereço da imagem de capa |
| `preco` | Preço do jogo |
| `data_cadastro` | Data e hora do cadastro |


