import express from "express";
import passport from "passport";
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";
import Auth from "../controller/auth.controller";
import validationMiddleware from "../middlewares/validation.middleware";
import {
  registerValidationSchema,
  loginValidationSchema,
} from "../validators/user.validator";

const router = express.Router();
const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    Auth.loginStrategy
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "secret-token",
    },
    Auth.JWTStrategy
  )
);

router.post(
  "/register",
  validationMiddleware(registerValidationSchema),
  Auth.register
);

router.post("/login", validationMiddleware(loginValidationSchema), Auth.login);

module.exports = router;
