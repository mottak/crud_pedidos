const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
  role: Joi.string('client' || 'seller' || 'admin')
    .required(),
});

const newUserAuth = (req, res, next) => {
  const { body } = req;
  const { error } = userSchema.validate(body);
  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
};

module.exports = { newUserAuth };
