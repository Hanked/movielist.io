'use strict';

const Boom = require('boom');
const MovieList = require('../model/Movielist');

module.exports = {
  method: 'POST',
  path: '/api/movielist/{userId}',
  config: {
    handler: (req, res) => {
      console.log('boom!!!!', req.auth);

      let movieList = new MovieList();

      movieList.user_id = req.params.userId;
      movieList.movie_ids = [];

      movieList.save((err, list) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        res(list).code(201);
      });
    },
    // auth: false
    auth: {
      scope: ['user-{params.userId}']
    }
  }
}