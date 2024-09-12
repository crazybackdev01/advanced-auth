import express from "express";
import {
  signInController,
  signOutController,
  signUpController,
} from "../controllers/auth.contoller.js";

const router = express.Router();

router.post("/sign-up", signUpController);
router.post("/sign-in", signInController);
router.post("/sign-out", signOutController);

export default router;
