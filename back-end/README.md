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

  Para um novo cliente se cadastrar ele precisará informar suas informações pessoais e um endereço.
  A rota utilizada deve ser: **/pedidos/register**
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

### Login de um cliente

Para um cliente conseguir fazer o login, primeiro ele dever ter sido registrado.  O Back-end recebe as informações no formato:

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
