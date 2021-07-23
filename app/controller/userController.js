'use strict';

/**
 * Create by henry on 2021/07/22
 * 用户相关操作
 */

const BaseController = require('./baseController');

class UserController extends BaseController {
  async hello() {
    const { ctx, app } = this;
    const { request } = ctx;
    const rules = {
      name: {
        type: 'string',
        required: true
      }
    };
    const err = app.validator.validate(rules, request.query);
    if (err) {
      this.error('INVALID_PARAM');
      return;
    }
    this.success(`Hello，${request.query.name}`);
  }

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
      this.error(err.code, err.msg);
    }
  }

  /**
   * 用户登录
   */
  async login() {
    this.success();
  }

  /**
   * 查询用户信息
   */
  async detail() {
    this.success();
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
    this.success();
  }
}

module.exports = UserController;
