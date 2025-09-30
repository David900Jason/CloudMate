// helpers/weather.js
import api from "./api";

export const getWeatherByCity = async (city: string) => {
    try {
        const response = await api.get("/weather", {
            params: { q: city },
        });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Weather fetch failed:", error);
        throw error;
    }
};

export const getWeatherForecast = async (city: string) => {
    try {
        const response = await api.get("/forecast", {
            params: { q: city },
        });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Weather fetch failed:", error);
        throw error;
    }
};

export const getWeatherIcon = (iconCode: string): string => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
