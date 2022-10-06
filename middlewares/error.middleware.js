const errorMiddleware = (err, req, res, next) => {
    res.status(500).send(err.message);
}

export default errorMiddleware;