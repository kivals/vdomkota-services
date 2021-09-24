const logger = require('../libs/logger');

module.exports = (req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
};
