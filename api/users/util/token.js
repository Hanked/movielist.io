'use strict';

const jwt = require('jsonwebtoken');
const secret = require('../../config');

function createToken(user) {
  // create authenticated user scope
  let scopes = 'user-' + user._id;
  // Sign the JWT
  return jwt.sign({
    id: user._id,
    username: user.username,
    scope: scopes
  },
  secret,
  {
    algorithm: 'HS256',
    expiresIn: "1h"
  });
}

module.exports = createToken;
