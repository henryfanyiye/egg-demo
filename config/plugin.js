'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: false,
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  security: {
    enable: false,
  }
};
