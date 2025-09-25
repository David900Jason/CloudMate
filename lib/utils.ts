import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import api from "./weather";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function getWeather(city: string) {
    try {
        const weather = await api.get("weather", {
            params: {
                q: city,
            },
        });
        return weather.data;
    } catch (error) {
        console.log(error);
    }
}