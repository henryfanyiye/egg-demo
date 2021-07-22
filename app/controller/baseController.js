'use strict';

/**
 * Create by henry on 2021/07/22
 * response封装
 * 健康检查
 */

const { Controller } = require('egg');
const errorCode = require('../extend/errorCode');

class BaseController extends Controller {
  success(data, msg = 'SUCCESS', code = 100) {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = {
      code,
      msg,
      data
    };
    return;
  }

  error(code, msg, data = null) {
    const error = errorCode[code];
    const { ctx } = this;
    ctx.status = error.status;
    ctx.body = {
      code: error.code,
      msg: msg || error.msg,
      data
    };
    return;
  }

  async ping() {
    this.success('pong');
  }
}

module.exports = BaseController;
