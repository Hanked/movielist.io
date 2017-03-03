'use strict';

const Boom = require('boom');
const Follow = require('../model/Follow');

module.exports = {
  method: 'GET',
  path: '/api/followers/{followee_id}',
  config: {
    handler: (req, res) => {
      Follow
        .find({ followee_id: req.params.followee_id })
        .select('follower_id')
        .exec((err, follows) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          // filter all irrelevant data from response
          var followerIdArr = follows.map(function(a) {
            return a.follower_id;
          });
          res(followerIdArr).code(201);
        })
    },
    auth: false
    // auth: {
    //   scope: ['user-{params.follower_id}']
    // }
  }
}
