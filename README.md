# Store Manager

Store Manager é um projeto focado em arquitetar e desenvolver uma API de gerenciamento de vendas com um banco de dados MySQL, utilizando a arquitetura em camadas(MSC/Model, Service, Controller).

<strong>OBS:</strong> ESSE PROJETO FOI DESENVOLVIDO NA TRYBE.

## Técnologias usadas
* JavaScript;
* Node.js;
* Express.js;
* Sequelize.js;
* Docker;
* MySQL;
* DotEnv;
* Jest;
* Mock;
* Sinon;
* Chai;
* Chai-http.

## Rotas, entradas e saídas

<details>
<summary>Endpoint GET /products</summary><br />
Utilizado para retornar as informações de todos os produtos que contém no banco de dados.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-products" src="/images-readme/get-products-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-products" src="/images-readme/get-products-exemplo-saida.png">

</details>

<details>
<summary>Endpoint GET /products/:id</summary><br />
Utilizado para retornar as informações do produto com o id correspondente que contém no banco de dados.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-products-id" src="/images-readme/get-products-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-products-id" src="/images-readme/get-products-id-exemplo-saida.png">

#### Mensagens de erro
Existe apenas uma mensagem de erro que seria quando o id não corresponde a nenhum produto.

##### Caso não exista produto com aquele id no banco de dados, o retorno será:
```
{
  "message": "Product not found"
}
```

</details>

<details>
<summary>Endpoint POST /products</summary><br />
Utilizado para criar e adicionar um novo produto no banco de dados. O banco de dados exige que o usuário insira somente um nome com, no mínimo, 5 caracters.

##### Informações necessárias:

* <strong>name:</strong> É o nome do produto. Deve ser enviado como string e o mínimo de caracters é 5. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-products" src="/images-readme/post-products-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-products" src="/images-readme/post-products-exemplo-saida.png">

#### Mensagens de erro
Existem dois cenários onde a saída acima pode não ser retornada: caso não seja enviado um nome e caso o nome não tenha, pelo menos, 5 caracters.

##### Retorno para caso falte o nome:
```
{
  "message": "\"name\" is required"
}
```

##### Retorno para caso name tenha menos de 5 caracters:
```
{
  "message": "\"name\" length must be at least 5 characters long"
}
```

</details>

<details>
<summary>Endpoint PUT /products/:id</summary><br />
Utilizado para atualizar o nome do produto com o id correspondente. Para isso, é necessário que o usuário insira somente um nome com, no mínimo, 5 caracters.

##### Informações necessárias:

* <strong>name:</strong> É o nome do produto. Deve ser enviado como string e o mínimo de caracters é 5. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-put-products-id" src="/images-readme/put-products-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-put-products-id" src="/images-readme/put-products-id-exemplo-saida.png">

#### Mensagens de erro
Existem dois cenários onde a saída acima pode não ser retornada: caso não seja enviado um nome e caso o nome não tenha, pelo menos, 5 caracters.

##### Retorno para caso falte o nome:
```
{
  "message": "\"name\" is required"
}
```

##### Retorno para caso name tenha menos de 5 caracters:
```
{
  "message": "\"name\" length must be at least 5 characters long"
}
```

</details>

<details>
<summary>Endpoint DELETE /products/:id</summary><br />
Utilizado para deletar o produto com o id correspondente.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-delete-products-id" src="/images-readme/delete-products-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-delete-products-id" src="/images-readme/delete-products-id-exemplo-saida.png">

#### Mensagens de erro
Existe apenas uma mensagem de erro que seria quando o id não corresponde a nenhum produto.

##### Caso não exista produto com aquele id no banco de dados, o retorno será:
```
{
  "message": "Product not found"
}
```

</details>

<details>
<summary>Endpoint GET /sales</summary><br />
Utilizado para retornar as informações de todas as compras.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-sales" src="/images-readme/get-sales-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-sales" src="/images-readme/get-sales-exemplo-saida.png">

</details>

<!--
<details>
<summary>Endpoint POST /categories</summary><br />
Utilizado para criar uma nova categoria. Para isso, necessita de um nome e de um token valido. Caso as informações estejam corretas, retornara as informações da nova categoria.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-post-categories" src="/images-readme/post-categories-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-post-categories" src="/images-readme/post-categories-exemplo-saida.png">

#### Inserindo informações incorretas
Existem quatro cenários onde a saída acima pode não ser retornada: não conter o nome da categoria, a string name estar vazia, caso não tenha o token e um token invalido.

<strong>Exemplo caso não contenha o name:</strong>
```
{
  "message": "\"name\" is required"
}
```

<strong>Exemplo caso name seja uma string vazia:</strong>
```
{
  "message": "\"name\" is not allowed to be empty"
}
```

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<details>
<summary>Endpoint GET /categories</summary><br />
Utilizado para retornar as informações de todas as categorias que contém no banco de dados, porém é necessário ter um token para isso.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-get-categories" src="/images-readme/get-categories-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-get-categories" src="/images-readme/get-categories-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não tenha o token e um token invalido.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<details>
<summary>Endpoint POST /post</summary><br />
Utilizado para criar um novo post. Para isso, necessita de um nome, email, senha e uma imagem. Assim como o login, retornará um token caso todas as informações enviadas foram validadas corretamente.

##### Informações necessárias:
* <strong>title:</strong> É o título do post e deve ser enviado como string. É obrigatório.
* <strong>content:</strong> É o conteúdo do post e deve ser enviado como string. É obrigatório.
* <strong>categoryIds:</strong> É um array de números com as categorias ao qual o post pertence e precisa ter pelo menos 1 id de categoria. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-post-post" src="/images-readme/post-post-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-post-post" src="/images-readme/post-post-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplo caso não preencha os requisitos necessários:</strong>
```
{
  "message": "Some required fields are missing"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "\"content\" is required"
}
```

##### Além disso, pode ter os erros do token.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

</details>

<details>
<summary>Endpoint GET /post</summary><br />
Utilizado para retornar as informações de todas as postagens que contém no banco de dados, porém é necessário ter um token para isso.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-get-post" src="/images-readme/get-post-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-get-post" src="/images-readme/get-post-exemplo-saida.png">


#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não tenha o token e um token invalido.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<details>
<summary>Endpoint GET /post/:id</summary><br />
Utilizado para retornar as informações das postagens com o id que está no url que contém no banco de dados, porém é necessário ter um token para isso.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-get-post-id" src="/images-readme/get-post-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-get-post-id" src="/images-readme/get-post-id-exemplo-saida.png">


#### Inserindo informações incorretas
Existem três cenários onde a saída acima pode não ser retornada: caso não exista post com aquele id, não tenha o token e um token invalido.

<strong>Caso não exista post com aquele no banco de dados, o retorno será:</strong>
```
{
  "message": "Post does not exist"
}
```

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<strong>OBS:</strong> Existe o Endpoint GET /search, porém não funciona.

## Utilizando o docker
Para criar os containers, execute: `docker-compose up -d`

Para abrir o terminar do container, execute: `docker exec -it blogs_api bash`

## Instalando Dependências
  `npm install`

## Banco de dados
Para criar o banco de dados, execute: `npm run prestart`

Para popular o banco de dados: `npm run seed`

## Aplicação Node:
Para executar a aplicação e acessar as rotas, execute: `npm run debug`


## Executando Testes
Para rodar todos os testes:

  `npm test`

<!-- 
Para rodar um teste específico:

  `npm test nomeDoArquivo`

exemplo:
`npm test post`



<strong>OBS:</strong> Os testes irão rodar com os testes de cobertura -->