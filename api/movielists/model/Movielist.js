'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieListModel = new Schema({
  user_id: { type: String, required: true },
  movie_ids: { type: Array, required: true }
},
{
  timestamps: true
});

module.exports = mongoose.model('MovieList', movieListModel);