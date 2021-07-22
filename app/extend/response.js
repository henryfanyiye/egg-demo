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
};
