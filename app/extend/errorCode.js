'use strict';

module.exports = {
  INVALID_PARAM: {
    status: 422,
    code: 422,
    msg: 'invalid_param'
  },
  UNAUTHORIZED: {
    status: 401,
    code: 401,
    msg: 'Unauthorized'
  },
  REGISTER_ERROR: {
    status: 400,
    code: 101,
    msg: 'Register error.'
  },
  USERNAME_EXIST: {
    status: 400,
    code: 102,
    msg: 'username is exist.'
  },
  EMAIL_EXIST: {
    status: 400,
    code: 103,
    msg: 'email is exist.'
  },
  LOGIN_ERROR: {
    status: 400,
    code: 201,
    msg: 'Login error.'
  },
  INVALID_USERNAME: {
    status: 400,
    code: 202,
    msg: 'Invalid username or password.'
  }
};
