const userModel = require('../models/usersModel');

const create = async (userData) => {
  const {
    name, email, password, role,
  } = userData;
  const newUser = await userModel.create(name, email, password, role);
  if (newUser) {
    const { insertId } = newUser;
    return {
      id: insertId,
      name,
      email,
      role,
    };
  }
  return false;
};

module.exports = { create };
