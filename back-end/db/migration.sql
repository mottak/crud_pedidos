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
    products (
        id CHAR(36) NOT NULL,
        name VARCHAR(30) NOT NULL,
        quantity INTEGER NOT NULL,
        -- quantidade total do produto em estoque
        price DECIMAL(5, 2) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    orders (
        id CHAR(36) NOT NULL,
        clientId CHAR(36) NOT NULL,
        sellerId CHAR(36) NOT NULL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP,
        status CHAR(36) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    order_details (
        orderId CHAR(36) NOT NULL,
        productId CHAR(36) NOT NULL,
        quantity int NOT NULL,
        -- quantidade do produto no pedido
        PRIMARY KEY(orderId, productId)
    ) ENGINE = INNODB;