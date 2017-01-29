'use strict';

const Boom = require('boom');
const Follow = require('../model/Follow');

module.exports = {
  method: 'DELETE',
  path: '/api/follows',
  config: {
    handler: (req, res) => {
      Follow
        .find({
          follower_id: req.query.follower_id,
          followee_id: req.query.followee_id
        })
        .remove()
        .exec((err, result) => {
          if (err) {
            throw Boom.badRequest(err);
          }

          res({
            message: `stopped following user ${req.query.followee_id}`
          })
          .code(201);
        });
    },
    auth: {
      scope: ['user-{query.follower_id}']
    }
  }
}
