'use strict';

module.exports = {
  INVALID_PARAM: {
    status: 422,
    code: 422,
    msg: 'invalid_param'
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
  }
};
