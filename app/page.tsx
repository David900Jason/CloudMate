import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import {
    getWeatherByCity,
    getWeatherIcon,
    getWeatherForecast,
} from "@/lib/weather";
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
    const weatherIcon = getWeatherIcon(weatherData.weather[0].icon);
    const weatherForecast = await getWeatherForecast("Cairo");

    const otherCitiesData = await Promise.all([
        getWeatherByCity("New York"),
        getWeatherByCity("London"),
        getWeatherByCity("Tokyo"),
        getWeatherByCity("Sydney"),
    ]);

    console.log(otherCitiesData);

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
        <div className="flex gap-6">
            <Sidebar />
            <div className="p-4 grid gap-4 flex-1">
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
                                    src={weatherIcon}
                                    alt="Weather Icon"
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </div>

                        {/* Today Hightlight */}
                        <div className="bg-surface-light rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold mb-6">
                                Today Highlight
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="p-4 min-h-[100px] rounded-xl bg-surface">
                                    <h3 className="mb-4 text-xl font-bold">
                                        Chance of Rain
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={"/rain.png"}
                                            alt="Weather Icon"
                                            width={64}
                                            height={64}
                                        />
                                        <p className="text-2xl">
                                            {Number(
                                                weatherForecast.list[0].pop *
                                                    100
                                            ).toFixed(0)}
                                            %
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 min-h-[100px] rounded-xl bg-surface">
                                    <h3 className="mb-4 text-xl font-bold">
                                        Cloudiness
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={"/cloud.png"}
                                            alt="Weather Icon"
                                            width={64}
                                            height={64}
                                        />
                                        <p className="text-2xl">
                                            {weatherData.clouds.all}%
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 min-h-[100px] rounded-xl bg-surface">
                                    <h3 className="mb-4 text-xl font-bold">
                                        Wind Speed
                                    </h3>
                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        <Image
                                            src={"/wind.png"}
                                            alt="Weather Icon"
                                            width={64}
                                            height={64}
                                        />
                                        <p className="text-2xl">
                                            {weatherData.wind.speed} m/s
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 min-h-[100px] rounded-xl bg-surface">
                                    <h3 className="mb-4 text-xl font-bold">
                                        Humidity
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={"/humidity.png"}
                                            alt="Weather Icon"
                                            width={64}
                                            height={64}
                                        />
                                        <p className="text-2xl">
                                            {weatherData.main.humidity}%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-6">
                        {/* Other Cities */}
                        <div className="bg-surface-light flex flex-col rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold mb-6">
                                Other Cities
                            </h2>
                            <div className="grid grid-cols-2 flex-1 items-stretch gap-6">
                                {otherCitiesData.map((city, index) => (
                                    <div
                                        key={index}
                                        className="p-4 min-h-[100px] flex items-center justify-between gap-y-6 rounded-xl bg-surface"
                                    >
                                        <div>
                                            <h5 className="text-3xl lg:text-5xl mb-4 font-semibold">
                                                {city.main.temp}
                                                <span className="text-2xl">
                                                    {" "}
                                                    °C
                                                </span>
                                            </h5>
                                            <p className="text-lg font-bold">
                                                {city.name}
                                            </p>
                                        </div>
                                        <Image
                                            src={getWeatherIcon(
                                                city.weather[0].icon
                                            )}
                                            alt="Weather Icon"
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
