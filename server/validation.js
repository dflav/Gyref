const Joi = require('@hapi/joi');

const validRegister = data => {
  const schema = Joi.object({
    name: Joi.string()
      .alphanum()
      .min(4)
      .max(20)
      .required(),
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]'))
      .min(6)
      .required()
  });

  return schema.validate(data);
};
const validLogin = data => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]'))
      .min(6)
      .required()
  });

  return schema.validate(data);
};

module.exports.validRegister = validRegister;
module.exports.validLogin = validLogin;
