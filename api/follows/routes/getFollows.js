'use strict';

const Boom = require('boom');
const Follow = require('../model/Follow');

module.exports = {
  method: 'GET',
  path: '/api/follows/{follower_id}',
  config: {
    handler: (req, res) => {
      Follow
        .find({ follower_id: req.params.follower_id })
        .select('followee_id -_id')
        .exec((err, follows) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!follows.length) {
            res([]).code(201);
          }

          var followeeIdArr = follows.map(function(a) {
            return a.followee_id;
          });
          res(followeeIdArr).code(201);
        })
    },
    auth: {
      scope: ['user-{params.follower_id}']
    }
  }
}
