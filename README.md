# Exercícios de lógica de programação

Este projeto reúne exercícios de lógica implementados em JavaScript.

## Tecnologias utilizadas

- **Node.js:** ambiente para executar JavaScript fora do navegador.
- **JavaScript com módulos ES:** permite exportar e importar funções. O projeto usa `"type": "module"` no `package.json`.
- **Mocha:** framework para organizar e executar os testes automatizados.
- **`node:assert`:** módulo nativo do Node.js usado para conferir os resultados esperados nos testes.

## Requisitos

Instale o [Node.js](https://nodejs.org/), que inclui o npm. Confira se os comandos estão disponíveis:

```bash
node --version
npm --version
```

## Instalação

Clone o repositório pelo GitHub e acesse a pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd exercicios-aulas-prog
```

Instale as dependências:

```bash
npm install
```

## Executar os testes

Com as dependências instaladas, execute a suíte Mocha:

```bash
npx mocha
```


## Estrutura do projeto

```text
source/   Código-fonte dos exercícios
test/     Testes automatizados
docs/     Enunciados dos exercícios
```

## Exemplo de uso

Em um arquivo JavaScript na raiz do projeto, importe a função, forneça uma lista de filmes e imprima o resultado:

```js
import { verificarNotasFilmes } from './source/verificarNotasFilmes.js';

const filmes = [
    { nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] },
];

console.log(verificarNotasFilmes(filmes));
```
