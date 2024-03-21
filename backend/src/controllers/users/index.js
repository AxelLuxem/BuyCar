import express from "express";

import { generateToken, checkAuth } from "./auth";
import userModel from "./userModel";

const router = express.Router();

router.post("/sign-up", async (req, res) => {
  const { email, userName, password } = req.body;

  const newUser = new userModel({
    email,
    userName,
    password,
  });

  try {
    await newUser.save();

    const token = generateToken(email);
    res.send({ token });
  } catch (error) {
    console.log(error);
    if (error?.code === 11000) {
      res
        .status(403)
        .send({ message: "This user already exists." });
      return;
    } else {
      res
        .status(500)
        .send({ message: "Internal server error." });
      return;
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    res
      .status(401)
      .send({ message: "Email or password is incorrect" });
    return;
  }
  try {
    await user.comparePassword(password);
  } catch (error) {
    res
      .status(403)
      .send({ message: "Email or password is incorrect" });
    return;
  }
  const token = generateToken(email);
  res.send({ token, userName: user.userName });
});

export default router;
