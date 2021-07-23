'use strict';

const { Service } = require('egg');
const { nanoid } = require('nanoid');

class UserService extends Service {

  async checkAvailable(username, email) {
    let res;
    // 校验用户名
    if (username) res = await this.app.mysql.get('user', { username });
    if (res) throw { code: 'USERNAME_EXIST' };

    // 校验邮箱
    if (email) res = await this.app.mysql.get('user', { email });
    if (res) throw { code: 'EMAIL_EXIST' };
  }

  async register(data) {
    try {
      data.user_id = nanoid();
      data.nick_name = data.nickName;
      delete data.nickName;
      return await this.app.mysql.insert('user', data);
    } catch (err) {
      this.ctx.logger.error(err.message);
      throw { code: 'REGISTER_ERROR', msg: err.message };
    }
  }

  async loginByUsername() {
  }

  async findByUserId() {
  }

  async updateInfo() {
  }

}

module.exports = UserService;
