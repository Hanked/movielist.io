'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieListModel = new Schema({
  user_id: { type: String, required: true },
  movies: { type: Array, required: false }
},
{
  timestamps: true
});

module.exports = mongoose.model('MovieList', movieListModel);