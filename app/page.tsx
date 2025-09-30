import Navbar from "@/components/layout/Navbar";
import { getWeatherByCity } from "@/lib/weather";
import { MapPin } from "lucide-react";
import Image from "next/image";

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export default async function Home() {
    const weatherData = await getWeatherByCity("Cairo");
    // const weatherIcon = getWeatherIcon(weatherData.weather[0].icon);
    // const weatherForecast = await getWeatherForecast("Cairo");

    // console.log(weatherForecast);

    const day = days[new Date(weatherData.dt * 1000).getDay()];

    function formatDate(date: Date): string {
        return new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
            .format(date)
            .replace(" ", " ");
    }

    return (
        <div className="p-4 grid gap-4">
            {/* Search Bar */}
            <header className="bg-background">
                <Navbar />
            </header>

            <main className="grid grid-rows-2 gap-6">
                <section className="grid grid-cols-2 gap-6">
                    {/* Main Widget */}
                    <div className="bg-surface rounded-2xl p-6 flex justify-between">
                        <div className="space-y-6">
                            <div>
                                <span className="flex items-center gap-2 bg-accent-purple w-fit p-2 rounded-full">
                                    <MapPin size={24} /> {weatherData.name}
                                </span>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <span className="text-4xl block font-semibold">
                                        {day}
                                    </span>
                                    <p className="text-lg">
                                        {formatDate(
                                            new Date(weatherData.dt * 1000)
                                        )}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-6xl block mb-4 font-semibold">
                                        {weatherData.main.temp.toFixed(0)}°C
                                    </span>
                                    <p className="text-xl capitalize">
                                        {weatherData.weather[0].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={"/logo.png"}
                                alt="Weather Icon"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>

                    {/* Today Hightlight */}
                    <div className="bg-surface-light rounded-2xl p-6">
                        <h2>Today Highlight</h2>
                        <p>{weatherData.weather[0].description}</p>
                        <p>{weatherData.main.temp}°C</p>
                    </div>
                </section>

                <section className="grid grid-cols-2 gap-6">
                    {/* Today / Week */}
                    <div className="bg-surface rounded-2xl p-6">
                        <h2>Today / Week</h2>
                        <p>Cloudy</p>
                        <p>25°C</p>
                    </div>

                    {/* Other Cities */}
                    <div className="bg-surface-light rounded-2xl p-6">
                        <h2>Other Cities</h2>
                        <p>Cloudy</p>
                        <p>25°C</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
