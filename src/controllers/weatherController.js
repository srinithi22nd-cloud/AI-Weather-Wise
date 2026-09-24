import {
    getCoordinates,
    getWeather
} from "../services/weatherService.js";

export const searchWeather = async (req, res) => {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({
                message: "City is required"
            });
        }

        const location = await getCoordinates(city);

        const weather = await getWeather(
            location.latitude,
            location.longitude
        );

        res.json({
            location,
            weather
        });
    } catch (error) {
        res.status(500).json({
            message: "Weather request failed",
            error: error.message
        });
    }
};

export const weatherByCoordinates = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({
                message: "Latitude and longitude are required"
            });
        }

        const weather = await getWeather(
            latitude,
            longitude
        );

        res.json({
            latitude,
            longitude,
            weather
        });
    } catch (error) {
        res.status(500).json({
            message: "Weather request failed",
            error: error.message
        });
    }
};