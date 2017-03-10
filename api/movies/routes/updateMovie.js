'use strict';

const Boom = require('boom');
const Movie = require('../model/Movie');

module.exports = {
  method: 'PATCH',
  path: '/api/movies/{userId}',
  config: {
    handler: (req, res) => {
      Movie.findOneAndUpdate({
        userId: req.params.userId,
        movieId: req.payload.movieId
      },
      req.payload,

      (err, movie) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        else if (!movie) {
          throw Boom.notFound('Movie not found');
        }
        res(movie).code(200);
      });
    },
    auth: {
      scope: ['user-{params.userId}']
    }
  }
}