'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
  email:            { type: String, required: true, index: { unique: true } },
  username:         { type: String, required: true, index: { unique: true } },
  password:         { type: String, required: true },
  fullName:         { type: String, required: true },
  heroImageUrl:     { type: String, default: '' },
  profileImageUrl:  { type: String, default: '' },
  admin:            { type: Boolean, required: true }
},
{
  timestamps: true
});

module.exports = mongoose.model('User', userModel);
