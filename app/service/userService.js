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
    data.user_id = nanoid();
    return await this.app.mysql.insert('user', data);
  }

  async generateToken(user_id) {
    const key = `u:${user_id}`;
    let token = await this.app.redis.get(key);
    if (token) await this.app.redis.expire(token, 0);
    token = nanoid();
    const expireTime = 60 * 60 * 24;
    await this.app.redis.set(token, user_id, 'EX', expireTime);
    await this.app.redis.set(key, token, 'EX', expireTime);
    return token;
  }

  async loginByUsername(username, password) {
    const user = await this.app.mysql.get('user', { username, password });
    if (!user) {
      throw { code: 'INVALID_USERNAME' };
    }
    return user;
  }

  async findByUserId(user_id) {
    return await this.app.mysql.select('user', {
      where: { user_id },
      columns: [ 'nickname', 'username', 'password', 'email', 'mobile' ]
    });
  }

  async updateInfo() {
  }

}

module.exports = UserService;
