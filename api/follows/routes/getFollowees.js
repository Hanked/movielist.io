'use strict';

const Boom = require('boom');
const Follow = require('../model/Follow');

module.exports = {
  method: 'GET',
  path: '/api/followees/{follower_id}',
  config: {
    handler: (req, res) => {
      Follow
        .find({ follower_id: req.params.follower_id })
        .select('followee_id')
        .exec((err, follows) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          // filter all irrelevant data from response
          var followeeIdArr = follows.map(function(a) {
            return a.followee_id;
          });
          res(followeeIdArr).code(201);
        })
    },
    auth: false
    // auth: {
    //   scope: ['user-{params.follower_id}']
    // }
  }
}
