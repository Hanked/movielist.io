'use strict';

const Boom = require('boom');
const MovieList = require('../model/Movielist');

module.exports = {
  method: 'POST',
  path: '/api/movielist/{userId}',
  config: {
    handler: (req, res) => {
      let movieList = new MovieList();

      movieList.user_id = req.params.userId;
      movieList.movie_ids = req.payload.movie_ids;

      movieList.save((err, list) => {
        if (err) {
          res(err);
          return;
        }
        res(list).code(201);
      });
    },
    auth: {
      scope: ['user-{params.userId}']
    }
  }
}