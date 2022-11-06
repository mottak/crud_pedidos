# Projeto

Esse projeto simula uma plataforma que interliga compradores e lojas.
Aqui existem rotas que atendem tanto a um front-end do cliente, quanto das lojas.

### Como usar?

Para rodar o projeto em sua máquina, você precisará apenas, clonar o repositório e rodar o comando:

se estiver usando npm:

```bash
  npm install
```

se tiver usando yarn:

```bash
  yarn install
```

Depois de instalar as dependências, crie o banco de dados com o comando:

```bash
  CRIAR SCRIPT
```

Depois se você quiser basta popular esse banco com:

```bash
  CRIAR SCRIPT
```

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
    "street": "Rua da Independência",
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

Também é possível a busca de um produto pelo seu _id_:

A rota utilizada deve ser: **GET /pedidos/products/:id**

O retorno dessa requisição será semelhante a:

```json
{
  "id": "ba18fc37-c7b2-48ac-82f1-9bf161d396f2",
  "name": "borracha",
  "quantity": 10,
  "price": "1.20",
  "photo": "http://localhost:3001/img/borracha.webp"
}
```

### Criando um novo pedido

Para realizar um pedido o usuário precisa estar logado.
Os pedidos apenas podem ser feitos pelos usuários com _role client_. Cada cliente pode ter quantos pedidos desejar.

A rota utilizada deve ser: **POST /pedidos/order**

Se um vendedor tentar criar uma nova venda, é gerado o seguinte erro:

```json
{
  "message": "Only users who has the role client, can add new orders"
}
```

Se o cliente não possuir um endereço cadastrado, o ideal é que  Front-end deixe que o usuário faça a requisição sem o cadastro de um endereço. Mas se mesmo assim nenhum endereço for informado, o seguinte erro deve ser gerado:

```json
{
  "message": "There is no user address register with the given userId"
}

```

O Back-end recebe as informações no formato, onde cada posição do array _productsInfos_ é referente ao id de um produto e a quantidade desse produto no pedido.
Se o usuário já possuir um endereço cadastrado, a chave _address_ não precisa ser informada.

```json
{
  "order": {
    "sellerId": "8ab2043b-fbca-45c0-9521-4687e9a7513f",
    "productsInfos": [
        {
          "productId": "53ee23dc-d502-456c-a93f-1e4b6646bd41",
          "quantity": 5
        },
        {
          "productId": "5a9df949-3e28-4865-bd19-260b9cef4754",
          "quantity": 2
        }
      ]
  },
   "address": {
    "street": "Rua da Independência",
    "number":"30",
    "complement": "apt 102",
    "neighborhood": "bairro do brasil",
    "city": "Juiz de Fora",
    "defaultAddress": true
  }
}
```

Se tudo estiver correto, o retorno dessa requisição será semelhante a:

```json
{
  "id": "b376edd3-eef5-4e1e-b952-6f6a86b4f0c4",
  "clientId": "bdcb4d42-4449-470e-ba88-4a3b6c290383",
  "sellerId": "8ab2043b-fbca-45c0-9521-4687e9a7513f",
  "productsInfos": [
    {
      "productId": "53ee23dc-d502-456c-a93f-1e4b6646bd41",
      "quantity": 5
    },
    {
      "productId": "5a9df949-3e28-4865-bd19-260b9cef4754",
      "quantity": 2
    }
  ]
}
```

### Buscando todos os pedidos

Cada usuário consegue buscar todos os seus pedidos independente do status que o pedido se encontra.

A rota utilizada deve ser: **GET /pedidos/order**

O retorno será semelhante a:

```json
[
  {
    "id": "be8336c8-92fc-45ea-ae66-a90c2525fdc0",
    "client_id": "079fc49e-3196-4c2d-ac70-5945bd2ede69",
    "seller_id": "8ab2043b-fbca-45c0-9521-4687e9a7513f",
    "date": "2022-11-05T23:55:54.000Z",
    "status": "pendente"
  },
  {
    "id": "e4d491c7-e8e1-471d-9798-cb96bb1ed841",
    "client_id": "079fc49e-3196-4c2d-ac70-5945bd2ede69",
    "seller_id": "8ab2043b-fbca-45c0-9521-4687e9a7513f",
    "date": "2022-11-05T23:56:21.000Z",
    "status": "pendente"
  }
]
```

### Buscando pedido pelo id

Cada usuário consegue buscar qualquer um dos seus pedidos independente do status que o pedido se encontra.

A rota utilizada deve ser: **GET /pedidos/order/:id**

O retorno será semelhante a:

 ```json
 [
  {
    "id": "b376edd3-eef5-4e1e-b952-6f6a86b4f0c4",
    "client_id": "bdcb4d42-4449-470e-ba88-4a3b6c290383",
    "seller_id": "bdcb4d42-4449-470e-ba88-4a3b6c290353",
    "date": "2022-11-05T22:07:51.000Z",
    "status": "pendente"
  }
]
```

Um cliente só consegue buscar pedidos que ele tenha feito. Se ele buscar pelo _id_ de um pedido que não foi ele quem fez, é gerado o seguinte erro:

 ```json
 { "message": "You has no order with this id" }
 ```

### Atualizando um pedido

Os pedidos apenas podem ser atualizados o status.
Os clientes apenas podem atualizar o status de  para _Entregue_, independente de qual seja o status anterior.

A rota utilizada deve ser: **POST /pedidos/order/:id**

O back-end espera os dados assim:

```json
{ 
  "status": "Entregue"
}
```

A saída da requisição será semelhante a:

```json
{
  "message": "Order status b376edd3-eef5-4e1e-b952-6f6a86b4f0c4 has been updated successfully"
}
```

Se o cliente tentar mudar o status de um pedido para _Em andamento_, ele irá receber a seguinte mensagem de erro:

```json
{
  "message": "Only user who the role is 'seller' can to 'Em andamento'"
}
```

## Rotas de um vendedor

Para um novo vendedor se cadastrar ele precisará informar suas informações pessoais, e pode ou não cadastrar um endereço.
Importante: Se um vendedor ja tiver um cadastro como cliente, ele não poderá se cadastrar com o mesmo email.
A rota utilizada deve ser: **POST /pedidos/register**
O Back-end recebe as informações no formato:

```json
{
  "user": {
    "name": "Maria do bairro",
    "email": "mariadobairro@email.com",
    "password": "123456",
    "role": "seller"
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
    "name": "Maria do bairro",
    "email": "mariadobairro@email.com",
    "password": "123456",
    "role": "seller"
  }
}
```

O vendedor após o registro já estará logado se tudo estiver certo.
Essa requisição retorna um token.

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3YjFjYTY5LTllZGUtNGViNi1iMWE5LWQ4ODQxMDJlODUyZCIsIm5hbWUiOiJNYXJpYSBkbyBiYWlycm8iLCJlbWFpbCI6Im1hcmlhZG9iYWlycm9AZW1haWwuY29tIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY2NzE2NDQwMH0.J1jlqdN62eDewT0y_u1lAT9h7ZY20im-GXSFoE4Hk6Y",
  "expiresIn": 60
}
```

### Adicionando um novo produto

Apenas vendedores podem adicionar produtos. O vendedor precisará estar logado para adicionar um novo produto.
Será necessario informar: nome do produto, quantidade em estoque e preço da unidade, e uma imagem do protuto (opcional).

A rota utilizada deverá ser: **POST pedidos/products**

O Back-end recebe as informações no formato:

 ```json
 {
  "name":"Lápis de cor",
  "quantity": "20",
  "price": "40.50"
}
```

O retornor serão as informações passadas com o id desse produto:

 ```json
{
  "id": "aa38228e-fb29-4dfc-809d-6c172535294c",
  "sellerId": "bdcb4d42-4449-470e-ba88-4a3b6c290353",
  "name": "Lápis de cor",
  "quantity": 20,
  "price": 40.5
}
```

### Busca de um determinado produto

É possível a busca de um produto pelo seu _id_:

A rota utilizada deve ser: **GET /pedidos/products/:id**

O retorno dessa requisição será semelhante a:

```json
{
  "id": "aa38228e-fb29-4dfc-809d-6c172535294c",
  "seller_id": "bdcb4d42-4449-470e-ba88-4a3b6c290353",
  "name": "Lápis de cor",
  "quantity": 20,
  "price": "40.50",
  "photo": null
}
```

### Atualizando produto

Apenas vendedores podem atualizar produtos. O vendedor precisará estar logado para atualizar um novo produto.
Será necessario informar: nome do produto, quantidade em estoque e preço da unidade, e uma imagem do protuto (opcional).

A rota utilizada deverá ser: **PUT pedidos/products/:id**

Todos os campos podem ser atualizados exceto o sellerId.
O back-end espera os dados assim:

```json
{
  "name":"Lápis de cor faber castel",
  "quantity": "35",
  "price": "50.50"
}
```

O retorno irão conter os dados atualizados e o _id_ do vendedor:

```json
{
  "id": "aa38228e-fb29-4dfc-809d-6c172535294c",
  "sellerId": "bdcb4d42-4449-470e-ba88-4a3b6c290353",
  "name": "Lápis de cor faber castel",
  "quantity": 35,
  "price": 50.5
}
```

### Deletando um produto

Apenas vendedores podem deletar produtos. E cada vendedor só pode deletar produtos que foram criados por ele mesmo.

A rota utilizada deverá ser: **DELETE pedidos/products/:id**

A resposta dessa rota quando a deleção acontece com sucesso é apenas o status **204**, sem nenhum corpo.

Se um vendedor tentar deletar um produto que não é dele, será enviada a seguinte mensagem de erro:

```json
{
  "message": "You aren't the owner of this product. You can't delete this product"
}

```

### Buscando todos os pedidos

Cada usuário consegue buscar todos os seus pedidos independente do status que o pedido se encontra.

A rota utilizada deve ser: **GET /pedidos/order**

O retorno será semelhante a:

 ```json
 [
  {
    "id": "b376edd3-eef5-4e1e-b952-6f6a86b4f0c4",
    "client_id": "bdcb4d42-4449-470e-ba88-4a3b6c290383",
    "seller_id": "bdcb4d42-4449-470e-ba88-4a3b6c290353",
    "date": "2022-11-05T22:07:51.000Z",
    "status": "pendente"
  }
]
```

### Buscando pedido pelo id

Cada usuário consegue buscar qualquer um dos seus pedidos independente do status que o pedido se encontra.

A rota utilizada deve ser: **GET /pedidos/order/:id**

O retorno será semelhante a:

 ```json
 [
  {
    "id": "b376edd3-eef5-4e1e-b952-6f6a86b4f0c4",
    "client_id": "bdcb4d42-4449-470e-ba88-4a3b6c290383",
    "seller_id": "bdcb4d42-4449-470e-ba88-4a3b6c290353",
    "date": "2022-11-05T22:07:51.000Z",
    "status": "pendente"
  }
]
```

O vendedor não consegue buscar pedidos de outros vendedores. É gerado o seguinte erro:

 ```json
 { "message": "You has no order with this id" }
 ```

### Atualizando um pedido

Os pedidos apenas podem ser atualizados o status.
Os vendedores apenas podem atualizar o status de _Pendente_ para _Em andamento_.

A rota utilizada deve ser: **POST /pedidos/order/:id**

O back-end espera os dados assim:

```json
{ 
  "status": "Em andamento"
}
```

A saída da requisição será semelhante a:

```json
{
  "message": "Order status b376edd3-eef5-4e1e-b952-6f6a86b4f0c4 has been updated successfully"
}
```

Se um vendedor tentar mudar o status de um pedido para _Entregue_, ele irá receber a seguinte mensagem de erro:

```json
{
  "message": "Only user who the role is 'client' can to 'Entregue'"
}
```
