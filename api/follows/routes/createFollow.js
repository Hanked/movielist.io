'use strict';

const Boom = require('boom');
const Follow = require('../model/Follow');

module.exports = {
  method: 'POST',
  path: '/api/follows',
  config: {
    handler: (req, res) => {
      let follow = new Follow();
      follow.follower_id = req.query.follower_id;
      follow.followee_id = req.payload.followee_id;

      follow.save((err, user) => {
        if (err) {
          res(Boom.unauthorized(err));
          return;
        }

        res({
          follower_id: follow.follower_id,
          followee_id: follow.followee_id
        })
        .code(201);
      });
    },
    auth: {
      scope: ['user-{query.follower_id}']
    }
  }
}
