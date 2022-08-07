const InsertUser = 'INSERT INTO ordersDatabase.users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)';

const findUserByEmail = 'SELECT id from ordersDatabase.users WHERE email = ?';

export default {
  InsertUser,
  findUserByEmail
}