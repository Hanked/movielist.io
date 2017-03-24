'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieModel = new Schema({
  // movielist movie props
  userId: { type: String, required: true },
  username: { type: String, required: true },
  watched: { type: Boolean, default: false },
  recommended: { type: Boolean, default: false },
  disliked: { type: Boolean, default: false },
  position: { type: Number, default: 0 },
  // omdbapi movie props
  imdbID: {type: String},
  Title: {type: String},
  Year: {type: String},
  Rated: {type: String},
  Released: {type: String},
  Runtime: {type: String},
  Genre: {type: String},
  Director: {type: String},
  Writer: {type: String},
  Actors: {type: String},
  Plot: {type: String},
  Language: {type: String},
  Country: {type: String},
  Awards: {type: String},
  Poster: {type: String},
  Metascore: {type: String},
  imdbRating: {type: String},
  imdbVotes: {type: String},
  Type: {type: String},
  Response: {type: String}
},
{
  timestamps: true
});

module.exports = mongoose.model('Movie', movieModel);