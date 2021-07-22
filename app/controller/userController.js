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
   * 用户注册
   */
  async register() {
    const { ctx, service } = this;
    const { request } = ctx;
    return await service.userService.register(request.body);
    this.success();
  }

  /**
   * 用户登录
   */
  async login() {
    const { ctx, app } = this;
    const { request } = ctx;
    this.success();
  }

  /**
   * 查询用户信息
   */
  async detail() {
    const { ctx, app } = this;
    const { request } = ctx;
    this.success();
  }

  /**
   * 更新用户信息
   */
  async update() {
    const { ctx, app } = this;
    const { request } = ctx;
    this.success();
  }

  /**
   * 用户登出
   */
  async logout() {
    const { ctx, app } = this;
    const { request } = ctx;
    this.success();
  }
}

module.exports = UserController;
