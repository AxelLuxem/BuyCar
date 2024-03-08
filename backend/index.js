import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import router from "./src/router";

mongoose.connect(process.env.CONNECTION_STRING);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () =>
  console.log(`Running on port: ${port}`)
);
