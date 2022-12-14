DROP DATABASE IF EXISTS ordersDatabase;

CREATE DATABASE ordersDatabase;

USE ordersDatabase;

CREATE TABLE
    users (
        id CHAR(36) NOT NULL,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(30) NOT NULL,
        password TEXT NOT NULL,
        role VARCHAR(15) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    address (
        id CHAR(36) NOT NULL,
        user_id CHAR(36) NOT NULL,
        street VARCHAR(30) NOT NULL,
        number VARCHAR(30) NOT NULL,
        complement VARCHAR(30),
        neighborhood VARCHAR(50) NOT NULL,
        city VARCHAR(50) NOT NULL,
        default_address BOOLEAN NOT NULL,
        CONSTRAINT FK_USERS_ADDRESS FOREIGN KEY(user_id) REFERENCES users (id),
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    products (
        id CHAR(36) NOT NULL,
        seller_id CHAR(36) NOT NULL,
        name VARCHAR(30) NOT NULL,
        quantity INTEGER NOT NULL,
        -- quantidade total do produto em estoque
        price DECIMAL(5, 2) NOT NULL,
        photo VARCHAR(150),
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    orders (
        id CHAR(36) NOT NULL,
        client_id CHAR(36) NOT NULL,
        seller_id CHAR(36) NOT NULL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP,
        status CHAR(36) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    order_details (
        order_id CHAR(36) NOT NULL,
        product_id CHAR(36) NOT NULL,
        quantity int NOT NULL,
        -- quantidade do produto no pedido
        PRIMARY KEY(order_id, product_id)
    ) ENGINE = INNODB;

USE ordersDatabase;

INSERT INTO
    users (id, name, email, password, role)
VALUES (
        'bdcb4d42-4449-470e-ba88-4a3b6c290383',
        'Zé da Silva',
        'zesilva@email.com',
        '123456',
        'client'
    ), (
        'bdcb4d42-4449-470e-ba88-4a3b6c290353',
        "João dono da loja",
        "joao@email.com",
        "123456",
        "seller"
    );

INSERT INTO
    address (
        id,
        user_id,
        street,
        number,
        complement,
        neighborhood,
        city,
        default_address
    )
VALUES (
        'bdcb4d42-5559-470e-ba88-4a3b6c290383',
        'bdcb4d42-4449-470e-ba88-4a3b6c290383',
        'Rua dos bobos',
        'zero',
        '',
        'Bairro das laranjeiras',
        'Serra da Saudade',
        true
    ), (
        'bdcb4d42-5559-470e-ba88-4a3b6c255583',
        'bdcb4d42-4449-470e-ba88-4a3b6c290353',
        'Rua da Serra',
        '5537',
        'apt 101',
        'centro',
        'Serra da Saudade',
        false
    );

INSERT INTO
    products (
        id,
        seller_id,
        name,
        quantity,
        price,
        photo
    )
VALUES (
        "5a9df949-3e28-4865-bd19-260b9cef4754",
        '8ab2043b-fbca-45c0-9521-4687e9a7513f',
        "lápis",
        20,
        0.5,
        'http://localhost:3001/img/lapis-preto.webp'
    ), (
        "ba18fc37-c7b2-48ac-82f1-9bf161d396f2",
        'bdcb4d42-4449-470e-ba88-4a3b6c290353',
        "borracha",
        10,
        1.2,
        'http://localhost:3001/img/borracha.webp'
    ), (
        "53ee23dc-d502-456c-a93f-1e4b6646bd41",
        'bdcb4d42-4449-470e-ba88-4a3b6c290353',
        "caderno",
        50,
        18.8,
        'http://localhost:3001/img/caderno.jpg'
    );

INSERT INTO
    orders (
        id,
        client_id,
        seller_id,
        date,
        status
    )
VALUES (
        'b376edd3-eef5-4e1e-b952-6f6a86b4f0c4',
        'bdcb4d42-4449-470e-ba88-4a3b6c290383',
        'bdcb4d42-4449-470e-ba88-4a3b6c290353',
        '2022-11-05 19:07:51',
        'pendente'
    );

INSERT INTO
    order_details (order_id, product_id, quantity)
VALUES (
        'b376edd3-eef5-4e1e-b952-6f6a86b4f0c4',
        '53ee23dc-d502-456c-a93f-1e4b6646bd41',
        5
    ), (
        'b376edd3-eef5-4e1e-b952-6f6a86b4f0c4',
        '5a9df949-3e28-4865-bd19-260b9cef4754',
        2
    )