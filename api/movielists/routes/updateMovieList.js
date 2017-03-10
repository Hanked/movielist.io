'use strict';

const Boom = require('boom');
const MovieList = require('../model/Movielist');

module.exports = {
  method: 'PATCH',
  path: '/api/movielist/{userId}',
  config: {
    handler: (req, res) => {
      const userId = req.params.userId;
      const imdbID = req.body.imdbID;
      const movieList = req.body.movieList;

      const movie = {
        imdbID: imdbID,
        watched: false,
        recommended: false,
        disliked: false,
        sortPosition: 0
      }

      movieList.push(movie);


      // find the movie in the movielist
      // if it doesn't exist, add it
      // if it does exist, update it

      MovieList
        .findOneAndUpdate({ user_id: userId }, movieList, (err, list) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!list) {
            throw Boom.notFound('List not found!');
          }
          res(list).code(200);
        });
    },
    auth: false
    // auth: {
    //   scope: ['user-{params.userId}']
    // }
  }
}