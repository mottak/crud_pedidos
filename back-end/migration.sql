DROP DATABASE IF EXISTS ordersDatabase;

CREATE DATABASE ordersDatabase;

USE ordersDatabase;

CREATE TABLE
    users (
        id INT NOT NULL,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(30) NOT NULL,
        password VARCHAR(30) NOT NULL,
        role VARCHAR(15) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    products (
        id INT NOT NULL,
        name VARCHAR(30) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    orders (
        id INT NOT NULL,
        clientId INT NOT NULL,
        sellerId INT NOT NULL,
        productsId INT NOT NULL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;