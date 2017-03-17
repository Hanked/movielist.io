'use strict';

const Boom = require('boom');
const Movie = require('../model/Movie');

module.exports = {
  method: 'POST',
  path: '/api/movies/{userId}',
  config: {
    handler: (req, res) => {
      let movie = new Movie();
      let movieData = req.payload.movie;

      // duplicate the movie data from the request to new Movie instance
      for (let prop in movieData) {
         movie[prop] = movieData[prop]
      }

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