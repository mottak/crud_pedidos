const findAllOrders = 'SELECT * FROM ordersDatabase.orders';

const InsertOrder = 'INSERT INTO ordersDatabase.orders (id, clientId, sellerId, date) VALUES (?, ?, ?, NOW())';

const findOrderById = 'SELECT * FROM ordersDatabase.orders WHERE id = ?';

const deleteOrder = 'DELETE FROM ordersDatabase.orders WHERE id = ?';

export default { findAllOrders, InsertOrder, deleteOrder, findOrderById }