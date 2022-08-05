const connection = require('../database/connection');

const create = async (userData) => {
  const {
    name, email, password, role,
  } = userData;
  const queryNewUser = 'INSERT INTO ordersDatabase.users (name, email, password, role) VALUES (?, ?, ?, ?)';
  const [newUser] = await connection.execute(queryNewUser, [name, email, password, role]);
  return newUser;
};

module.exports = { create };
