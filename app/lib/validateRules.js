'use strict';

module.exports = {
  /**
   * 规则配置参考 https://github.com/node-modules/parameter
   */

  /**
   * params
   * headers
   * query
   * body
   */
  // demo: {
  //   params: {},
  //   headers: {},
  //   query: {},
  //   body: {}
  // },

  checkAvailable: {
    body: {
      username: { type: 'string?' },
      email: { type: 'email?' },
    }
  },

  register: {
    body: {
      nickname: { type: 'string' },
      username: { type: 'string' },
      password: { type: 'password?', min: 8 },
      email: { type: 'email?' },
      mobile: { type: 'string?', max: 11, min: 11 }
    }
  },

  loginByUsername: {
    body: {
      username: { type: 'string' },
      password: { type: 'password' },
    }
  }
};
