'use strict';

module.exports = app => {
  const { router, controller, middleware } = app;
  const { authorization, validateParams } = middleware;
  const { userController } = controller;

  router.post('/user/checkAvailable', validateParams('checkAvailable'), userController.checkAvailable);
  router.post('/user/register', validateParams('register'), userController.register);
  router.post('/user/login/username', validateParams('loginByUsername'), userController.loginByUsername);
  router.get('/user/detail', authorization(), userController.detail);
  router.post('/user/update', userController.update);
  router.get('/user/logout', userController.logout);
};
