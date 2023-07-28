import express from "express";
const router = express.Router();
import { signupUser, loginUser } from "../controllers/userController.js";

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

export default router;
