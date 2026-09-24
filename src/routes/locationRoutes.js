import express from "express";

import {
    addLocation,
    getLocations,
    deleteLocation
} from "../controllers/locationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addLocation);

router.get("/", protect, getLocations);

router.delete("/:id", protect, deleteLocation);

export default router;