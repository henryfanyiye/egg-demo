'use strict';

module.exports = app => {
  const { router, controller, middleware } = app;
  const { userController } = controller;

  router.post('/user/checkAvailable', middleware.validateParams('checkAvailable'), userController.checkAvailable);
  router.post('/user/register', middleware.validateParams('register'), userController.register);
  router.post('/user/login', userController.login);
  router.get('/user/detail', userController.detail);
  router.post('/user/update', userController.update);
  router.get('/user/logout', userController.logout);
};
