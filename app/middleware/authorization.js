/**
 * Create by henry on 2021/07/22
 * 用于校验用户登录态
 */

module.exports = () => {
  return async function authorization(ctx, next) {
    const auth = ctx.request.get('Authorization');
    await next();
  };
};
