'use strict';

const Boom = require('boom');
const Movie = require('../model/Movie');

module.exports = {
  method: 'DELETE',
  path: '/api/movies/{userId}',
  config: {
    handler: (req, res) => {
      Movie.find({
        userId: req.params.userId,
        movieId: req.payload.movieId
      })
      .remove()
      .exec((err, movie) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        else if (!movie) {
          throw Boom.badRequest('Movie not found');
        }
        res(movie).code(200);
      })
    },
    auth: {
      scope: ['user-{params.userId}']
    }
  }
}