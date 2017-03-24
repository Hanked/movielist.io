'use strict';

const Boom = require('boom');
const Movie = require('../model/Movie');

module.exports = {
  method: 'GET',
  path: '/api/movies/{username}',
  config: {
    handler: (req, res) => {
      console.log(req.params.username);

      Movie.find({ username: req.params.username })
      .exec((err, movies) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        console.log(movies);
        res(movies).code(200);
      })
    },
    auth: false
  }
}