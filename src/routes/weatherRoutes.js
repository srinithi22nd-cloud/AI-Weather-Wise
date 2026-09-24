import express from "express";

import {
    searchWeather,
    weatherByCoordinates
} from "../controllers/weatherController.js";

const router = express.Router();

router.get("/search", searchWeather);

router.get("/coordinates", weatherByCoordinates);

export default router;