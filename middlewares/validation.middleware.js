const validationMiddleware = (validationSchema) => {
  return async (req, res, next) => {
    try {
      await validationSchema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
};

export default validationMiddleware;
