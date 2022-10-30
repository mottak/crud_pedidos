# Projeto

Esse projeto simula uma plataforma que interliga compradores e lojas.
Aqui existem rotas que atendem tanto a um front-end do cliente, quanto das lojas.

### Como usar?

Para rodar o projeto em sua máquina, você precisará apenas, clonar o repositório e rodar o comando:

se estiver usando npm:

    `npm install`

se tiver usando yarn:

    `yarn install`

## Rotas de um cliente

### Cadastro de um novo cliente

  Para um novo cliente se cadastrar ele precisará informar suas informações pessoais e pode ou não cadastrar um endereço.
  A rota utilizada deve ser: **POST /pedidos/register**
  O Back-end recebe as informações no formato:

```json
{
  "user": {
    "name": "Ana Maria",
    "email": "anamaria@email.com",
    "password": "123456",
    "role": "client"
  },
  
  "address": {
    "street": "Rua da Independencia",
    "number":"30",
    "complement": "apt 102",
    "neighborhood": "bairro do brasil",
    "city": "Juiz de Fora",
    "defaultAddress": true
  }
}
```

Ou no seguinte formato quando o cliente não for cadastrar um endereço ao se registrar:

```json
{
  "user": {
    "name": "Ana Maria",
    "email": "anamaria@email.com",
    "password": "123456",
    "role": "client"
  }
}
```

O cliente após o registro já estará logado se tudo estiver certo.
Essa requisição retorna um token.

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiYmRjYjRkNDItNDQ0OS00NzBlLWJhODgtNGEzYjZjMjkwMzgzIiwibmFtZSI6IlrDqSBkYSBTaWx2YSIsImVtYWlsIjoiemVzaWx2YUBlbWFpbC5jb20iLCJyb2xlIjoiY2xpZW50In0sImlhdCI6MTY2NzE1MTAxNH0.-6nyo3UYqhUyH5dPfCaop6dCs8TvcoUq1BbCWmEPp-Y",
  "expiresIn": 60
}
```

### Login de um cliente

Para um cliente conseguir fazer o login, primeiro ele dever ter sido registrado.
A rota utilizada deve ser: **POST /pedidos/login**
O Back-end recebe as informações no formato:

```json
{
  "email": "zesilva@email.com",
  "password": "123456"
}
```

Caso contrário ou a senha estiver errada, a mensagem de erro será retornada:

```json
{
  "message": "Invalid email or password"
}
```

### Busca por produtos

O cliente tem acesso a todos os produtos que estão na plataforma, mesmo que de diferentes lojas.

A rota utilizada deve ser: **GET /pedidos/products**

Não é necessário passar nenhuma informação.
O retorno será:

```json
[
  {
    "id": "53ee23dc-d502-456c-a93f-1e4b6646bd41",
    "name": "caderno",
    "quantity": 50,
    "price": "18.80",
    "photo": "http://localhost:3001/img/caderno.jpg"
  },
  {
    "id": "5a9df949-3e28-4865-bd19-260b9cef4754",
    "name": "lápis",
    "quantity": 20,
    "price": "0.50",
    "photo": "http://localhost:3001/img/lapis-preto.webp"
  },
  {
    "id": "ba18fc37-c7b2-48ac-82f1-9bf161d396f2",
    "name": "borracha",
    "quantity": 10,
    "price": "1.20",
    "photo": "http://localhost:3001/img/borracha.webp"
  }
]
```
