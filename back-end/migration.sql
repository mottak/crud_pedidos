DROP DATABASE IF EXISTS ordersDatabase;

CREATE DATABASE ordersDatabase;

USE ordersDatabase;

CREATE TABLE
    users (
        id CHAR(36) NOT NULL,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(30) NOT NULL,
        password VARCHAR(30) NOT NULL,
        role VARCHAR(15) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    products (
        id CHAR(36) NOT NULL,
        name VARCHAR(30) NOT NULL,
        quantity INTEGER NOT NULL,
        price DECIMAL(5, 2) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    orders (
        id CHAR(36) NOT NULL,
        clientId CHAR(36) NOT NULL,
        sellerId CHAR(36) NOT NULL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;