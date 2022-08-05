const userService = require('../service/usersService');

const create = async (req, res) => {
  const userData = req.body;
  const newUser = await userService.create(userData);
  if (newUser) return res.status(201).json(newUser);
  return res.status(101).json({ message: 'Não conseguimos criar esse usuario' });
};

module.exports = { create };
