import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    transports: [new winston.transports.Console()],
    format: winston.format.json()
});

export function logRequest(req, res, next) {
    logger.info({ path: req.path, method: req.method });
    next();
}
