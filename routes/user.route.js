import express from "express";
import passport from "passport";
import passportLocal from "passport-local";
import passportGoogle from 'passport-google-oauth'
import passportJWT from "passport-jwt";
import Auth from "../controller/auth.controller";
import validationMiddleware from "../middlewares/validation.middleware";
import {
  registerValidationSchema,
  loginValidationSchema,
} from "../validators/user.validator";

const GoogleStrategy =  passportGoogle.OAuth2Strategy;
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

passport.use(
  new GoogleStrategy(
    {
      clientID: "",
      clientSecret: "",
      callbackURL: "/api/auth/google/callback",
      scope: [ 'profile' ],
      state: true
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      console.log(accessToken);
      console.log(refreshToken);
      return cb(null, profile);

      // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  )
);

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


router.post(
  "/register",
  validationMiddleware(registerValidationSchema),
  Auth.register
);

router.post("/login", validationMiddleware(loginValidationSchema), Auth.login);

router.get("/google", passport.authenticate("google"));

router.get("/google/callback", passport.authenticate('google'), (req, res) => {
  res.send("success")
});

module.exports = router;
