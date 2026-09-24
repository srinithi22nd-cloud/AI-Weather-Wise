import { generateWeatherAdvice } from "../services/aiService.js";

export const weatherAdvice = async (req, res) => {
    try {
        const { weather } = req.body;

        if (!weather) {
            return res.status(400).json({
                message: "Weather data is required"
            });
        }

        const advice = await generateWeatherAdvice(weather);

        res.json({
            advice
        });
    } catch (error) {
        res.status(500).json({
            message: "AI request failed",
            error: error.message
        });
    }
};