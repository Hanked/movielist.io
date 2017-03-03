'use strict';

const Boom = require('boom');
const Follow = require('../model/Follow');

module.exports = {
  method: 'GET',
  path: '/api/follows',
  config: {
    handler: (req, res) => {
      Follow
        .find()
        .exec((err, follows) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          res(follows).code(201);
        })
    },
    auth: false
  }
}
