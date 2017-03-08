'use strict';

const User = require('../model/User');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/users/{username?}',
  config: {
    handler: (req, res) => {
      let query = User.find({})

      if (req.params.username) {
        query = User.find({ username: req.params.username });
        query.select('-password -__v');
      }

      query.exec((err, users) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        else if (!users.length) {
          throw Boom.notFound('No users found!');
        }
        else if (users.length == 1) {
          // return the single object rather than an array containing a single object
          users = users[0];
        }
        res(users);
      })
    },
    auth: false
  }
}
