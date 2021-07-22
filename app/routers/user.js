'use strict';

module.exports = app => {
  const { router, controller } = app;
  const { userController } = controller;

  router.get('/user/hello', userController.hello);

  router.post('/user/register', userController.register);
  router.post('/user/login', userController.login);
  router.get('/user/detail', userController.detail);
  router.post('/user/update', userController.update);
  router.get('/user/logout', userController.logout);
};
