'use strict';

const Joi = require('joi');

const createUserSchema = Joi.object({
  username: Joi.string().alphanum().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  fullName: Joi.string().min(4).max(40).required()
});

module.exports = createUserSchema;
