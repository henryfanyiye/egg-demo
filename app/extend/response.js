'use strict';

const errorCode = require('./errorCode');

module.exports = {
  result(ctx, status, code, message, data) {
    ctx.status = status;
    ctx.body = {
      code,
      message,
      data,
    };
    return;
  },

  success(ctx, data, msg = 'SUCCESS', code = 0) {
    ctx.status = 200;
    ctx.body = {
      code,
      msg,
      data
    };
    return;
  },

  error(ctx, code, msg, data = null) {
    const error = errorCode[code];
    ctx.status = error.status;
    ctx.body = {
      code: error.code,
      msg: msg || error.msg,
      data
    };
    return;
  }
};
