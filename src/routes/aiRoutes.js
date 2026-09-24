import express from "express";

import { weatherAdvice } from "../controllers/aiController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/weather-advice", protect, weatherAdvice);

export default router;