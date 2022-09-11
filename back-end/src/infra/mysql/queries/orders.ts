// orders
const findAllOrders = 'SELECT * FROM ordersDatabase.orders';

const InsertOrder = 'INSERT INTO ordersDatabase.orders (id, clientId, sellerId, date, status) VALUES (?, ?, ?, NOW(), "pendente")';

const findOrderById = 'SELECT * FROM ordersDatabase.orders WHERE id = ?';

const updateOrderStatus = 'UPDATE ordersDatabase.orders SET status = ?, WHERE id = ?'

const deleteOrder = 'DELETE FROM ordersDatabase.orders WHERE id = ?';

// orders_details

const insertOrderDetails = 'INSERT INTO ordersDatabase.order_details (orderId, productId, quantity) VALUES ?'

const deleteOrderDetails = 'DELETE FROM ordersDatabase.order_details WHERE orderId = ?'

export default { findAllOrders, InsertOrder, deleteOrder, findOrderById, updateOrderStatus, insertOrderDetails, deleteOrderDetails }