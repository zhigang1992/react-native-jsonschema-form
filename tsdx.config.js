/**
 * User: Niko
 * Date: 08.07.2020
 * Time: 09:15
 */
const images = require('@rollup/plugin-image');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      images({ include: [ '**/*.png', '**/*.jpg' ] }),
      ...config.plugins,
    ];

    return config;
  },
};
