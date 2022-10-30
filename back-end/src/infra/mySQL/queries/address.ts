export const insertAddress = 'INSERT INTO ordersDatabase.address (id, user_id, street, number, complement, neighborhood, city, default_address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'

export const findAddressByUserId = 'SELECT * from ordersDatabase.address WHERE user_id = ?'