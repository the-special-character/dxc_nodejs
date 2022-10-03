import bcrypt from 'bcrypt'
import UserModel from "../models/user.model";

class Auth {
  static register = async (req, res) => {
    try {
      const user = new UserModel(req.body);
      const newUser = await user.save();
      res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
  };

  static login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });

      if(!user) {
        return res.status(400).send("email address is not available")
      }
      const isMatch = await bcrypt.compare(password,user.password)
      
      if(!isMatch) {
        return res.status(400).send("password is not valid")
      }

      return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send(error.message)
    }
  };


}

export default Auth;
