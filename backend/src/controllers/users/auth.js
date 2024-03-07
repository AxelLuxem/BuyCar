import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import userModel from "./userModel";

export const generateToken = (email) => {
  return jwt.sign({ data: email }, process.env.SECRET_KEY, {
    expiresIn: "10m",
  });
};

export const checkAuth = () => {};
