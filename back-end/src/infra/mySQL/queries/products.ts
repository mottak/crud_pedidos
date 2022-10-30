export const findAllProducts = 'SELECT * FROM ordersDatabase.products'
export const InsertProduct = 'INSERT INTO ordersDatabase.products (id, seller_id, name, quantity, price) VALUES (?, ?, ?, ?, ?)'
export const findProductsByName = 'SELECT * FROM ordersDatabase.products WHERE name = ?'

export const findProductsById = 'SELECT * FROM ordersDatabase.products WHERE id = ?'

export const findProductsByIdAndSeller = 'SELECT * FROM ordersDatabase.products WHERE id = ? AND seller_id = ?'

export const updateProduct = 'UPDATE ordersDatabase.products SET name=?, quantity=?, price=? WHERE id = ?'

export const deleteProduct = 'DELETE FROM ordersDatabase.products WHERE id = ?'

