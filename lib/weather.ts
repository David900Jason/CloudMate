import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        appid: API_KEY,
        units: "metric",
    },
});

export default api;