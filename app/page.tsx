import { getWeather } from "@/lib/utils";

export default async function Home() {
    const weather = await getWeather("Cairo,EG");

    console.log(weather);

    return (
        <div>
            <h1 className="text-3xl font-bold text-primary">Home</h1>
        </div>
    );
}
