import Location from "../models/Location.js";

export const addLocation = async (req, res) => {
    try {
        const {
            name,
            latitude,
            longitude
        } = req.body;

        if (!name || latitude === undefined || longitude === undefined) {
            return res.status(400).json({
                message: "Name, latitude and longitude are required"
            });
        }

        const location = await Location.create({
            user: req.user._id,
            name,
            latitude,
            longitude
        });

        res.status(201).json({
            message: "Location saved successfully",
            location
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to save location",
            error: error.message
        });
    }
};

export const getLocations = async (req, res) => {
    try {
        const locations = await Location.find({
            user: req.user._id
        }).sort({
            createdAt: -1
        });

        res.json({
            locations
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to get locations",
            error: error.message
        });
    }
};

export const deleteLocation = async (req, res) => {
    try {
        const location = await Location.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id
        });

        if (!location) {
            return res.status(404).json({
                message: "Location not found"
            });
        }

        res.json({
            message: "Location deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete location",
            error: error.message
        });
    }
};