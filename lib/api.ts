// api/axiosClient.js
import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    params: {
        appid: process.env.NEXT_PUBLIC_OPENWEATHER_KEY,
        units: "metric",
    },
});

export default api;
