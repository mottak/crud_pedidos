const findAllProducts = 'SELECT * FROM ordersDatabase.products';
const InsertProduct = 'INSERT INTO ordersDatabase.products (id, name, quantity, price) VALUES (?, ?, ?, ?)';
const findProductsByName = 'SELECT * FROM ordersDatabase.products WHERE name = ?';

const findProductsById = 'SELECT * FROM ordersDatabase.products WHERE id = ?';

const updateProduct = 'UPDATE ordersDatabase.products SET name=?, quantity=?, price=? WHERE id = ?';

const deleteProduct = 'DELETE FROM ordersDatabase.products WHERE id = ?';

export default { findAllProducts, InsertProduct, findProductsByName, updateProduct, deleteProduct, findProductsById }