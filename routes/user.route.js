import express from "express";
import Auth from "../controller/auth.controller";
import validationMiddleware from "../middlewares/validation.middleware";
import { registerValidationSchema, loginValidationSchema } from "../validators/user.validator";
const router = express.Router();

router.post(
  "/register",
  validationMiddleware(registerValidationSchema),
  Auth.register
);

router.post(
    "/login",
    validationMiddleware(loginValidationSchema),
    Auth.login
  );

module.exports = router;
