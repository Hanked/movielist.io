'use strict';

const Boom = require('boom');
const Movie = require('../model/Movie');

module.exports = {
  method: 'GET',
  path: '/api/movies/{userId}',
  config: {
    handler: (req, res) => {
      Movie
        .find({ userId: req.params.userId })
        .exec((err, movies) => {
          if (err) {
            throw Boom.badRequest(err);
          }

          res(movies).code(200);
        })

    },
    auth: {
      scope: ['user-{params.userId}']
    }
  }
}