import express from "express";
import { register, login, getMe } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Define protocols
router.post("/register", register);
router.post("/login", login);


router.get("/me", protect, getMe); // Protected route to get user profile

// THIS IS THE MISSING LINE:
export default router;