import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const generateWeatherAdvice = async (weatherData) => {
    const prompt = `
You are an AI weather assistant called AI Weatherwise.

Analyze the following weather information and provide useful advice.

Weather data:
${JSON.stringify(weatherData, null, 2)}

Provide:
1. A short weather summary
2. Clothing suggestions
3. Travel suggestions
4. Outdoor activity suggestions
5. Rain or extreme-weather precautions

Keep the answer simple and practical.
`;

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt
    });

    return response.text;
};