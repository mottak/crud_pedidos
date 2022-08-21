const findAllProducts = 'SELECT * from ordersDatabase.products';
const InsertProduct = 'INSERT INTO ordersDatabase.products id, name, quantity) VALUES (?, ?, ?)';
const findProductsByName = 'SELECT * from ordersDatabase.products WHERE name = ?';

export default { findAllProducts, InsertProduct, findProductsByName }