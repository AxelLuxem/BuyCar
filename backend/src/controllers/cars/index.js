import express from "express";

import carModel from "./carModel";
import { checkAuth } from "../users/auth";

const router = express.Router();

router.post("/imageUpload", checkAuth, async (req, res) => {
  const { image } = req.body;
  const { email } = res.locals;

  const newCar = carModel({
    email,
    image,
  });

  await newCar.save();
  res.status(200).send({ message: "OK" });
});

export default router;
