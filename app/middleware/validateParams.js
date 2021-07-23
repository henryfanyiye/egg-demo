/**
 * Create by henry on 2021/07/22
 * 用于记录request的请求参数必要性
 */

const rules = require('../lib/validateRules');

module.exports = (ruleName) => {
  return async function validateParams(ctx, next) {
    const { params, request, response } = ctx;
    try {
      const { params, header, query, body } = rules[ruleName];
      if (params) ctx.validate(header, request.params);
      if (header) ctx.validate(header, request.headers);
      if (query) ctx.validate(query, request.query);
      if (query) ctx.validate(body, request.body);
      await next();
    } catch (err) {
      response.error(ctx, 'INVALID_PARAM', null, err.errors);
    }
  };
};
