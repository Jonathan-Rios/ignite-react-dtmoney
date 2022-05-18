<h1 align="center">DTMoney - [WIP]</h1>

<h2 align="center">Rocketseat Ignite - React</h2>

---

<br>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-%5E18.1.0-blue" 
    alt="React Ver. ^18.1.0"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-%5E4.6.4-blue"
    alt="Typescript Ver. 4.6.4" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2022-green" 
    alt="Ignite-2022"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<br>

<h3 align="center">Imagem prévia da aplicação</h3>

![cover](.github/project-preview.png?style=flat)

<br>

## 💻 Projeto
Descrição do projeto:
- Intro da aplicação
- Origem da aplicação?
- Por que fez e sua utilidade?

### Exemplo
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .

Nele aborda a criação de um projeto do zero em <strong>JavaScript</strong>  e depois refatorado para <strong>TypeScript</strong>, também contém a configuração <strong>Webpack</strong> e <strong>Babel</strong> do zero.

Contendo anotações e comentários particulares servindo de consulta para novos projetos.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)


## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/nome-do-repo.git

$ cd nome-do-repo
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run start
```
- O app estará disponível no seu browser pelo endereço http://localhost:3000.

- Lembrando que será necessário configurar e rodar o [Servidor](https://github.com/Jonathan-Rios/repo-server.git) para ver o funcionamento completo.

- Não necessário para rodar, mas caso queira ver o projeto [Mobile](https://github.com/Jonathan-Rios/repo-mobile.git)

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

 - [Layout Web](https://www.figma.com/community/file/1102912516166573468) 

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/).

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />

---

## 📝 Anotações pessoais


<br />

```bash
# Criando o projeto
➜ yarn create react-app dtmoney --template typescript
➜ yarn add styled-components
➜ yarn add -D @types/styled-components
➜ yarn add miragejs
➜ yarn add axios 
➜ yarn add react-modal
➜ yarn add -D @types/react-modal 
➜ yarn add polished
```

<br />

<h3>Por que utilizar o export, ao invés de usar o export default?</h3>

Pois quando utilizamos o export default é forçado que a pessoa chame pelo nome correto e renomeie opcionalmente, <br>
caso contrário daria para dar o nome que quisesse na chamada ( sem saber o nome original ) abrindo espaço para erros  <br>
de organização de código, além disso auto import se da melhor com o export normal, sem o default. 

```javascript
  // Preferindo então:
  export function App() {}  // Chamando import { App } from '../App'

  // Ao invés de:
  function App() {}
  export default App; // Chamada import App from '../App'
```

Atenção com o script <strong>eject</strong>, esse script está localizado no package.json ( criado pelo create react-app )
```javascript
"eject": "react-scripts eject" 

/* Perigoso, ao utilizar isso não tem volta (se n houver controle de versão)
é utilizado para exportar para raiz do projeto as configurações do webpack e babel, a desvantagem de fazer isso é que 
dificulta a atualização do react-script, que se sair versão nova, tem que atualizar na mão depois disso. */
```
Após a criação via create react-app, foi alterado no package.json, algumas dependeências que iriam para produção porém não queremos (pelo menos n nesse projeto) elas em produção, colocando elas para desenvolvimento somente.

Antes:
```javascript
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.13",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.4.2",
    "web-vitals": "^2.1.0"
  },
```

Depois
```javascript
  "dependencies": {
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.13",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^4.4.2"
  },
```


Boas práticas de estilização:
No arquivo global de css ( nesse caso utilizado no styled-components)
Devemos tomar cuidado com o tamanho fixo nos tamanhos de font, pois se um usuário utiliza uma ampliação de font isso vai atrapalhar ele.
Sabendo que o valor default de font é 16px, conseguimos escalar com % o tamanho dessa font, assim se o usuário aumentar, vai respeitar esse aumento.
```typescript
  html { 
    @media (max-width: 1080px) {
      // Por padrão o font-size é 16px
      font-size: 93.75% //93.75% de 16 é 15px, não usamos 15px direto pois se um usuário estiver utilizando aumento de font, o 15px vai ficar fixo.
    }

    @media (max-width: 720px) {
      // Por padrão o font-size é 16px
      font-size: 87.5% // 87.5% de 16 é 14px
    }
  }
```

Importação de fonts da google:
Adicione os preconnect mais ao topo possível, isso aumenta em uns 25% o pre-carregamento de fonts.
```html

  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" /> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="favicon.png" type="image/png" />
    <title>dtmoney</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />
  </head>

```
Utilizando filter no css:

```javascript
  button {
    color: #fff;
    background-color: #f99000;
 
    transition: filter 0.2s; // Transição do evento

    &:hover {
      filter: brightness(0.9); // filter tem várias opções bacanas, aqui usamos para dar destaque no botão escurecendo.
    }
  }
```
Vantagens de usar axios VS fetch
fetch pros: 
  Nativo e não depende de instalar nada.
contras: 
  tem que informar a url inteira para fazer a requisição.
  tem que tratar a primeira resposta ( response.json() ).

Axios pros
  Ele trata da url, e só passamos a rota desejada.
  Podemos usar interceptadores de responses e requests entre aplicação e Api.
    Ex. Request
    Para cada requisição que enviemos para api, ela intercepte e adicione algo nessa requisição, enviar um token de autenticação ou algo similar.
    
    Ex. Response
    Da mesma forma interceptar respostas e verificar se nelas existem algo relacionado a token expirado/inválido e nem chegar a executar nada e já dar um logout no usuário.
  contras:
    Tem que instalar.

Tratamento de conversão para Int

```typescript

<input type="number" value={value} onChange={(event) => setValue( Number(event.target.value) )} />

/* 
  O event.target.value sempre retorna uma string, mesmo que o tipo do input seja number
  uma forma de alterarmos para number seria adicionando um + antes do valor assim: */ 
  setValue(+event.target.value)
/*
  porém fica muito explicito, é mais legível usar o Number().
*/
  setValue( Number(event.target.value) )
```

Obs:
favicon devem ser exportados em png, pois svg parece n ter um suporte muito bacana.
outline // Antigamente, eles removiam, porém perceberam que importante para a acessibilidade esse elemento.


<br />

---
<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/tgmarinho/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)