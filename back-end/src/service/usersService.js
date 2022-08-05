const userModel = require('../models/usersModel');

const create = async (userData) => {
  const newUser = await userModel.create(userData);
  if (newUser) return newUser;
  return false;
};

module.exports = { create };
