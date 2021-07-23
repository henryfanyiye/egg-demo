'use strict';

/**
 * Create by henry on 2021/07/23
 * 404
 */

module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      ctx.status = 404;
      ctx.body = { error: 'Not Found' };
    }
  };
};
