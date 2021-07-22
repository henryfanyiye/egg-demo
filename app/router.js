'use strict';

const User = require('./routers/user');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.prefix('/api');

  // health check
  router.get('/ping', controller.baseController.ping);

  User(app);
};
