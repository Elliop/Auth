import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const router = express.Router();

router.post(
  "/signup",
  body("username").isLength({ min: 3 }).withMessage("The username is invald"),
  body("email").isEmail().withMessage("The email is invald"),
  body("password").isLength({ min: 5 }).withMessage("The password is invald"),
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });
      return res.json({ errors, data: null });
    }

    const { username, email, password } = req.body;

    const userName = await User.findOne({ username });
    if (userName) {
      return res.json({
        errors: [
          {
            msg: "Username already in use",
          },
        ],
        data: null,
      });
    }
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.json({
        errors: [
          {
            msg: "Email already in use",
          },
        ],
        data: null,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = JWT.sign(
      { username: newUser.username },
      process.env.JWT_SECRET as string,
      {
        expiresIn: 360000,
      }
    );

    res.json({
      errors: [],
      data: {
        token,
        user: {
          id: newUser._id,
          username: newUser.username,
        },
      },
    });
  }
);

export default router;
