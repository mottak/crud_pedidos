// orders
export const findAllOrders = 'SELECT * FROM ordersDatabase.orders'

export const InsertOrder = 'INSERT INTO ordersDatabase.orders (id, client_id, seller_id, date, status) VALUES (?, ?, ?, NOW(), "pendente")'

export const findOrderById = 'SELECT * FROM ordersDatabase.orders WHERE id = ?'

export const verifyOrderById = 'SELECT id FROM ordersDatabase.orders WHERE id = ?'

export const updateOrderStatus = 'UPDATE ordersDatabase.orders SET status = ? WHERE id = ?'

export const deleteOrder = 'DELETE FROM ordersDatabase.orders WHERE id = ?'

// orders_details

export const insertOrderDetails = 'INSERT INTO ordersDatabase.order_details (order_id, product_id, quantity) VALUES ?'

export const deleteOrderDetails = 'DELETE FROM ordersDatabase.order_details WHERE order_id = ?'
