'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followModel = new Schema({
  follower_id: { type: String, required: true },
  followee_id: { type: String, required: true }
},
{
  timestamps: true
});

module.exports = mongoose.model('Follow', followModel);
