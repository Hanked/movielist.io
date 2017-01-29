'use strict';

module.exports = {
  method: 'GET',
  path: '/api/users/current',
  config: {
    handler: (req, res) => {
      res({
        id: req.auth.credentials.id,
        username: req.auth.credentials.username,
        scope: req.auth.credentials.scope
      })
      .code(201);
    }
  }
}
