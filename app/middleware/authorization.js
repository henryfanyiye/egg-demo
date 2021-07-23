/**
 * Create by henry on 2021/07/22
 * 用于校验用户登录态
 */

module.exports = () => {
  return async function authorization(ctx, next) {
    // 检查参数
    let token = ctx.request.get('Authorization');
    if (!token) return ctx.response.error(ctx, 'UNAUTHORIZED');

    // 检查token
    token = token.replace('Bearer ', '');
    const userId = await ctx.app.redis.get(token);
    ctx.userId = userId;
    if (!userId) return ctx.response.error(ctx, 'UNAUTHORIZED');

    await next();
  };
};
