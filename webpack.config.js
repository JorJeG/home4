const DEV = require('./config/webpack.config.dev.js');
const PROD = require('./config/webpack.config.prod.js');

const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'dev') {
  module.exports = DEV;
}

if (TARGET === 'prod') {
  module.exports = PROD;
}
