import express from "express";
const router = express.Router();

import users from "../controllers/users";

router.use("/users", users);

module.exports = router;

export default router;
