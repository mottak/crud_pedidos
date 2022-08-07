const InsertUser = 'INSERT INTO ordersDatabase.users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)';

const findUserByEmail = 'SELECT id from ordersDatabase.users WHERE email = ?';

const login = 'SELECT id, name, email, role from ordersDatabase.users WHERE email = ? AND password = ?';

export default {
  InsertUser,
  findUserByEmail,
  login
}