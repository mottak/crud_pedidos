export const insertUser = 'INSERT INTO ordersDatabase.users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)'

export const findUserByEmail = 'SELECT id from ordersDatabase.users WHERE email = ?'

export const login = 'SELECT * from ordersDatabase.users WHERE email = ? AND password = ?'

