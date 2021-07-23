/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1626141215597_3578';

  // add your middleware config here
  config.middleware = [
    'requestLogger',
    'notFoundHandler'
  ];

  config.cluster = {
    listen: {
      port: Number.parseInt(process.env.PORT || '4000')
    }
  };

  const logfile = 'egg-demo.log';
  config.logger = {
    appLogName: logfile,
    coreLogName: logfile,
    agentLogName: logfile,
    errorLogName: logfile,
    scheduleLogger: logfile,
    level: 'DEBUG',  // 输出到文件的日志级别
    consoleLevel: 'DEBUG',  // 输出到终端的日志级别
    formatter: meta => {
      const { hostname, level, date, message } = meta;
      return JSON.stringify({ hostname, level, date, message });
    },
    contextFormatter: meta => {
      const { hostname, level, date, message, ctx } = meta;
      return JSON.stringify({ traceId: ctx.traceId, hostname, level, date, method: ctx.method, url: ctx.originalUrl, message });
    }
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      host: '119.29.168.159',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: null,
      db: 0,
    },
  };

  config.validate = {
    convert: true,
    widelyUndefined: true
  };

  // 全局error拦截
  config.onerror = {
    accepts: ctx => 'json',
    json(err, ctx) {
      const { response } = ctx;
      response.result(ctx, 500, 500, 'Internal Server Error');
    }
  };

  return config;
};
