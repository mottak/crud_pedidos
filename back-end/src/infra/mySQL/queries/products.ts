export const findAllProducts = 'SELECT * FROM ordersDatabase.products'
export const InsertProduct = 'INSERT INTO ordersDatabase.products (id, name, quantity, price) VALUES (?, ?, ?, ?)'
export const findProductsByName = 'SELECT * FROM ordersDatabase.products WHERE name = ?'

export const findProductsById = 'SELECT * FROM ordersDatabase.products WHERE id = ?'

export const updateProduct = 'UPDATE ordersDatabase.products SET name=?, quantity=?, price=? WHERE id = ?'

export const deleteProduct = 'DELETE FROM ordersDatabase.products WHERE id = ?'

