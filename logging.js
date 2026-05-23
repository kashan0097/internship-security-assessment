const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'security.log' })
  ]
});

logger.info('Application started');
logger.warn('Suspicious login attempt detected');
logger.error('Invalid input received');
