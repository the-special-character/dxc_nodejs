import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "passport";
import UserModel from "../models/user.model";

class Auth {
  static register = async (req, res) => {
    try {
      const user = new UserModel(req.body);
      const newUser = await user.save();
      res.status(201).send(newUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  static login = async (req, res) => {
    return passport.authenticate("local", function (error, user, info) {
      if (error) {
        return res.status(401).send(error.message);
      }
      if(!user) {
        return res.status(401).send(info.message);
      }
      const accessToken = jwt.sign(
        {
          id: user._id,
          email: user.email,
          role: user.role,
        },
        "secret-token",
        { expiresIn: "1d" }
      );
      return res.status(200).send({ accessToken, user });
    })(req, res);
  };

  static connectFacebook = async (req, res) => {
    return passport.authenticate("faceboo")
  }

  static authenticate = async (req, res, next) => {
    return passport.authenticate("jwt", function (error, user, info) {
      if (error) {
        return res.status(401).send(error.message);
      }
      if(!user) {
        return res.status(401).send(info.message);
      }
      next();
    })(req, res, next);
  };

  static authorize = (role) => {
    return (req, res, next) => {
      return passport.authenticate("jwt", function (error, user, info) {
        if (error) {
          return res.status(401).send(error.message);
        }
        if(!user) {
          return res.status(401).send(info.message);
        }
        console.log(user.role);
        if(user.role !==  role) {
          return res.status(401).send("you dont have permission to add record");
        }
        next();
      })(req, res, next);
    }
  }

  static loginStrategy = async (email, password, done) => {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return done(null, false, {
          message: "user nor available",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: "password is not valid" });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  };

  static JWTStrategy = async (jwt, done) => {
    try {
      const user = await UserModel.findById(jwt.id);
      if (!user) {
        return done(null, false, {
          message: "user nor available",
        });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  };
}

export default Auth;
