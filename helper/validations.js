const Joi = require("@hapi/joi");
const UUID = Joi.string().guid({ version: ["uuidv4", "uuidv5"] });

exports.loginValidation = Joi.object({
  username: Joi.string().min(3).max(255).required(),
  password: Joi.string().min(3).required(),
});

exports.registrasiValidation = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  username: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(3).required(),
  gender: Joi.string().max(1).required(),
  phone_number: Joi.string().min(5).max(15).required(),
});

exports.jobs = Joi.object({
  location: Joi.string().allow(""),
  description: Joi.string().allow(""),
  fulltime: Joi.string().valid("true", "false").allow(""),
  page: Joi.number().allow(""),
});

exports.is_uuid = Joi.object({ id: UUID });

module.exports = exports;
