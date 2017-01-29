'use strict';

const Boom = require('boom');
const User = require('../model/User');
const bcrypt = require('bcryptjs');

function verifyUniqueUser(req, res) {
  // Find an entry from the database that
  // matches either the email or username
  User.findOne({
    $or: [
      { email: req.payload.email },
      { username: req.payload.username }
    ]
  }, (err, user) => {
    // Check whether the username or email
    // is already taken and error out if so
    if (user) {
      if (user.username === req.payload.username) {
        res(Boom.unauthorized('That username is taken, please choose another'));
        return;
      }
      if (user.email === req.payload.email) {
        res(Boom.unauthorized('That email address is taken, please choose another'));
        return;
      }
    }
    // If everything checks out, send the payload through
    // to the route handler
    res(req.payload);
  });
}

function verifyCredentials(req, res) {
  const password = req.payload.password;

  // Find an entry from the database that
  // matches either the email or username
  User.findOne({
    $or: [
      { email: req.payload.email },
      { username: req.payload.username }
    ]
  }, (err, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (isValid) {
          res(user);
        }
        else {
          res(Boom.unauthorized('Incorrect password'));
        }
      });
    } else {
      res(Boom.unauthorized('Incorrect email address'));
    }
  });
}

module.exports = {
  verifyUniqueUser: verifyUniqueUser,
  verifyCredentials: verifyCredentials
}
