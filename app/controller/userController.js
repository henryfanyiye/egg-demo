'use strict';

/**
 * Create by henry on 2021/07/22
 * 用户相关操作
 */

const BaseController = require('./baseController');

class UserController extends BaseController {

  /**
   * 检查用户名或邮箱可用
   */
  async checkAvailable() {
    const { ctx, service } = this;
    const { username, email } = ctx.request.body;
    try {
      await service.userService.checkAvailable(username, email);
      this.success();
    } catch (err) {
      this.error(err.code);
    }
  }

  /**
   * 用户注册
   */
  async register() {
    const { ctx, service } = this;
    try {
      await service.userService.register(ctx.request.body);
      this.success();
    } catch (err) {
      this.error('REGISTER_ERROR', err.msg);
    }
  }

  /**
   * 用户登录
   */
  async loginByUsername() {
    const { ctx, service } = this;
    try {
      // 校验用户
      const { username, password } = ctx.request.body;
      const { user_id } = await service.userService.loginByUsername(username, password);

      // 生成token
      const token = await service.userService.generateToken(user_id);
      this.success({ token });
    } catch (err) {
      this.error(err.code, err.msg);
    }
  }

  /**
   * 查询用户信息
   */
  async detail() {
    try {
      const user = await this.ctx.service.userService.findByUserId(this.ctx.userId);
      this.success(user[0]);
    } catch (err) {
      this.error(err.code, err.msg);
    }
  }

  /**
   * 更新用户信息
   */
  async update() {
    this.success();
  }

  /**
   * 用户登出
   */
  async logout() {
    const { ctx, app } = this;
    let token = ctx.request.get('Authorization');
    if (!token) return this.success();

    token = token.replace('Bearer ', '');
    const userId = app.redis.get(token);
    await app.redis.expire(token, 0);
    await app.redis.expire(`u:${userId}`, 0);
    this.success();
  }
}

module.exports = UserController;
