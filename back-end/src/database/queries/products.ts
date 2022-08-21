const findAllProducts = 'SELECT * FROM ordersDatabase.products';
const InsertProduct = 'INSERT INTO ordersDatabase.products (id, name, quantity) VALUES (?, ?, ?)';
const findProductsByName = 'SELECT * FROM ordersDatabase.products WHERE name = ?';

const updateProduct = 'UPDATE ordersDatabase.products SET name=?, quantity=? WHERE id = ?';

const deleteProduct = 'DELETE FROM ordersDatabase.products WHERE id = ?';

export default { findAllProducts, InsertProduct, findProductsByName, updateProduct, deleteProduct }