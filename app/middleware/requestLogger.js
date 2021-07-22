/**
 * Create by henry on 2021/07/22
 * 用于记录request的请求和返回日志
 */

const { nanoid } = require('nanoid');

module.exports = () => {
  return async function requestLogger(ctx, next) {
    const { logger, request, response } = ctx;
    ctx.traceId = request.get('x-transaction-id') || nanoid();
    logger.info('----> %j', request.body);
    await next();
    logger.info('<---- %sms : %j', Date.now() - ctx.starttime, response.body);
  };
};
