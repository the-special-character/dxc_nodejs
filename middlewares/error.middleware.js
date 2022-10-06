import { error } from 'winston'

const errorMiddleware = (logger) => (err, req, res, next) => {
    logger.error(err.message, err);
    res.status(500).send(err.message);
}

export default errorMiddleware;