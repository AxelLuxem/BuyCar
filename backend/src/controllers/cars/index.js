import express from "express";

import carModel from "./carModel";
import { checkAuth } from "../users/auth";

const router = express.Router();

router.post("/createCar", checkAuth, async (req, res) => {
  const {
    make,
    model,
    year,
    engineSize,
    bhp,
    doors,
    mileage,
    ownerAmount,
    price,
    imageBase64,
  } = req.body;

  const { email } = res.locals;

  const newCar = carModel({
    email,
    make,
    model,
    year,
    engineSize,
    bhp,
    doors,
    mileage,
    ownerAmount,
    price,
    imageBase64,
  });

  await newCar.save();
  res.status(200).send({ message: "OK" });
});

export default router;
