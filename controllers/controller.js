const { User } = require("../models");
const { comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jws");

class Controller {
  static async register(req, res, next) {
    try {
      let { name, email, password, gender } = req.body;
      let newUser = await User.create({
        name,
        email,
        password,
        gender,
      });
      let data = {
        id: newUser.id,
        email: newUser.email,
      };
      res.status(201).json({
        message: "Succeeded registering a new user",
        data,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      if (!req.body.email || !req.body.password) {
        throw { name: "EmailPasswordisRequired" };
      }

      const checkUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!checkUser) {
        throw { name: "UserNotFound" };
      }

      const isAuthenticated = comparePassword(
        req.body.password,
        checkUser.password
      );
      if (!isAuthenticated) {
        throw { name: "EmailPasswordInvalid" };
      }

      let payload = {
        id: checkUser.id,
      };

      const token = signToken(payload);

      res.status(200).json({
        message: "Login successful",
        access_token: token,
        email: checkUser.email,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getProfile(req, res, next) {
    try {
      const user = await User.findByPk(req.user.id);

      res.status(200).json({
        profile: {
          name: user.name,
          email: user.email,
          gender: user.gender
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
