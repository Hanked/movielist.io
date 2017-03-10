'use strict';

const Boom = require('boom');
const Movie = require('../model/Movie');

module.exports = {
  method: 'POST',
  path: '/api/movies/{userId}',
  config: {
    handler: (req, res) => {
      let movie = new Movie();

      movie.userId = req.params.userId;
      movie.movieId = req.payload.movieId;

      movie.save((err, movie) => {
        if (err) {
          throw Boom.badRequest(err);
        }

        res(movie).code(201);
      });

    },
    auth: {
      scope: ['user-{params.userId}']
    }
  }
}