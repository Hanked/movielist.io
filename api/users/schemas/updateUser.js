'use strict';

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const payloadSchema = Joi.object({
  username: Joi.string().alphanum().min(2).max(30),
  email: Joi.string().email(),
  admin: Joi.boolean(),
  fullName: Joi.string().min(4).max(40),
  heroImageUrl: Joi.string(),
  profileImageUrl: Joi.string()
});

const paramsSchema = Joi.object({
  id: Joi.string().required()
});

module.exports = {
  payloadSchema: payloadSchema,
  paramsSchema: paramsSchema
}
