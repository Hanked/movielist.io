'use strict';

const Hapi = require('hapi');
const Boom = require('boom');
const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');
const hapiAuthJwt = require('hapi-auth-jwt');
const inert = require('inert');
const secret = require('./config');

const server = new Hapi.Server({ debug: { request: ['error'] } });

server.connection({
  port: 3000,
  routes: { cors: true }
});

const dbUrl = 'mongodb://localhost:27017/movielist';

server.register([hapiAuthJwt, inert], (err) => {
  server.auth.strategy('jwt', 'jwt', 'required', {
    key: secret,
    verifyOptions: {
      algorithms: ['HS256'],
      maxAge: '24h'
    }
  });

  // static assets
  server.route({
    path: "/assets/{path*}",
    method: "GET",
    config: {
      handler: {
        directory: {
          path: "./assets",
          listing: false,
          index: false
        }
      },
      auth: false
    }
  });

  // Look through the routes in
  // all the subdirectories of API
  // and create a new route for each
  glob.sync('**/routes/*.js', {
    root: __dirname
  }).forEach(file => {
    const route = require(path.join(__dirname, file));
    server.route(route);
  });
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }

  // output available routes to console
  // var table = server.table()
  // console.log(table);

  // Once started, connect to Mongo through Mongoose
  mongoose.connect(dbUrl, {}, (err) => {
    if (err) {
      throw err;
    }
  });
});
