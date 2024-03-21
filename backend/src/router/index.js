import express from "express";
const router = express.Router();

import users from "../controllers/users";
import cars from "../controllers/cars";

router.use("/users", users);
router.use("/cars", cars);

module.exports = router;

export default router;
