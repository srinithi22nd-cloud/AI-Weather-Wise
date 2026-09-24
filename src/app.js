import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        message: "AI Weatherwise API is running"
    });
});

app.use("/api/auth", authRoutes);

app.use("/api/weather", weatherRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/locations", locationRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

export default app;