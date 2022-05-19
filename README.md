<h1 align="center">DT Money</h1>

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
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .

Nela é abordada a utilização de React com Typescript onde criamos um controle de entrada e saída de custos. Não foi utilizado o backend nessa aplicação utilizando o MirageJS para simular a API e controlar os dados.

Foram utilizados também os conceitos de Context API e transição de dados por propriedades evitando "Prop drilling*", e layout com Styled Components.

<br>

Prop drilling* = Passar propriedades do componente pai, para um filho, para chegar a outro filho, para ir para o filho destino (estendendo essa passagem).

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [ReactModal](https://www.npmjs.com/package/react-modal)
- [MirageJS](https://miragejs.com/)
- [Styled-components](https://styled-components.com/)


## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/ignite-react-dtmoney-web.git

$ cd ignite-react-dtmoney-web
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run start
```
- O app estará disponível no seu browser pelo endereço http://localhost:3000.

- Lembrando que esse projeto não tem servidor, pois ele está utilizando o [MirageJS](https://miragejs.com/) como API auxiliar de desenvolvimento, ela executa automaticamente junto com os comandos acima.


## 🔖 Layout

Você pode visualizar o layout do projeto, provido pela Rocketseat, através do link abaixo:

 - [Layout Web](https://www.figma.com/file/0xmu9mj2TJYoIOubBFWsk5/dtmoney-Ignite-(Copy))

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

<br />

<p>Pois quando utilizamos o export default é forçado que a pessoa chame pelo nome correto e renomeie opcionalmente. Caso contrário daria para dar o nome que quisesse na chamada ( sem saber o nome original ) abrindo espaço para erros de organização de código.

Além disso auto import se da melhor com o export normal, sem o default.</p>

```javascript
  // Preferindo então:
  export function App() {}  // Chamando import { App } from '../App'

  // Ao invés de:
  function App() {}
  export default App; // Chamada import App from '../App'

```

---
<br />

Atenção com o script <strong>eject</strong>, esse script está localizado no package.json ( criado pelo create react-app )
```javascript
"eject": "react-scripts eject"

/* Perigoso, ao utilizar isso não tem volta (se n houver controle de versão)
é utilizado para exportar para raiz do projeto as configurações do webpack e babel, a desvantagem de fazer isso é que
dificulta a atualização do react-script, que se sair versão nova, tem que atualizar na mão depois disso. */
```

---
<br />

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

---
<br />


<h3>Boas práticas de estilização:</h3>
No arquivo global de css ( nesse caso utilizado no styled-components) devemos tomar cuidado com o tamanho fixo nos tamanhos de font, pois se um usuário utiliza uma ampliação de font isso vai atrapalhar ele.

<br />

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

---
<br />

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

---
<br />

<h3>Utilizando filter no css:<h3>

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

---
<br />


<h3>Vantagens de usar axios VS fetch</h3>
<pre>
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
</pre>


---
<br />

<h3>Tratamento de conversão para Int</h3>

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

---
<br />

<h3>Conceito antigo de como usar Context Api</h3>

```typescript
// App.tsx
    import { Dashboard } from './components/Dashboard';
    import { TransactionsContext } from './TransactionsContext';

    export function App() {

      return (
        <TransactionsContext.Provider value={[]}>
          <Dashboard />
        </TransactionsContext.Provider>
      );
    }

// Dashboard.tsx
      <TransactionsContext.Consumer>
        {data => {
          console.log(data);

          return <p>teste</p>;
        }}
      </TransactionsContext.Consumer>

// Agora só é preciso usar o "useContext"
  const data = useContext(TransactionsContext);
  console.log(data);
```



---
<br />

<h3>Manipulação de objeto/tipo:</h3>

```typescript

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

//Opção 1 mais simples, criação normal repetindo valores.
type TransactionInput = {
  title: string;
  amount: number;
  type: string;
  category: string;
};

//Opção 2 com o recurso Omit do react, removendo o que não quer.
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

//Opção 3 com o recurso Pick do react, oposto do Omit, colocando o que deseja.
type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

```

---
<br />

<h3>Exemplo bacana de reduce</h3>

```javascript

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );
  ```


---
<br />

<h3>Obs:</h3>

favicon devem ser exportados em png, pois svg parece n ter um suporte muito bacana.
CSS - outline // Antigamente, eles removiam, porém perceberam que importante para a acessibilidade esse elemento.

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
