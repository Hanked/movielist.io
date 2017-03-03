'use strict';

const Boom = require('boom');
const Follow = require('../model/Follow');

module.exports = {
  method: 'GET',
  path: '/api/follows/{follower_id?}',
  config: {
    handler: (req, res) => {
      // foller_id param is optional
      // only execute a query if param is present
      let query = Follow.find({});

      if (req.params.follower_id) {
        query = Follow.find({ follower_id: req.params.follower_id });
        query.select('followee_id -_id');
      }

      query.exec((err, follows) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        // if (!follows.length) {
        //   res([]).code(201);
        // }

        let returnDataType = 'followee_id';

        if (req.query.$follower) {
          returnDataType = 'follower_id';
        }

        var returnData = follows.map(function(a) {
          return a[returnDataType];
        });

        res(returnData).code(201);
      })
    },
    auth: false
    // auth: {
    //   scope: ['user-{params.follower_id}']
    // }
  }
}
