'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async register(data) {
    return await this.app.mysql.insert('users', data);
  }
}

module.exports = UserService;
