'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieModel = new Schema({
  userId: { type: String, required: true, unique: true },
  movieId: { type: String, required: true },
  watched: { type: Boolean, default: false },
  recommended: { type: Boolean, default: false },
  disliked: { type: Boolean, default: false },
  sortPosition: { type: Number, default: 0 }
},
{
  timestamps: true
});

module.exports = mongoose.model('Movie', movieModel);