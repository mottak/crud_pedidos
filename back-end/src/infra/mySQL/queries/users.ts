export const insertUser = 'INSERT INTO ordersDatabase.users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)'

export const findUserByEmail = 'SELECT id from ordersDatabase.users WHERE email = ?'

export const findUserById = 'SELECT id, name, email, role from ordersDatabase.users WHERE id = ?'

export const login = 'SELECT * from ordersDatabase.users WHERE email = ? AND password = ?'

