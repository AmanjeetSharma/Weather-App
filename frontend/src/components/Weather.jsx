import { useState } from "react";
import axios from "axios";
import weatherImage from "../assets/weather.png";

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [error, setError] = useState("");

    const getWeather = async () => {
        if (!city.trim()) return;

        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/weather?city=${city}`
            );
            setWeather(res.data);
            setShowMore(false);
            setError("");
        } catch (err) {
            setError("City not found.");
            setWeather(null);
            setTimeout(() => setError(""), 3000);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            getWeather();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-300 to-indigo-600 flex flex-col items-center justify-center p-4 relative">
            {error && (
                <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-800 border border-blue-700 text-white text-2xl px-6 py-8 rounded-xl shadow-lg animate-bounce z-20">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" />
                    </svg>
                    <span className="font-semibold">{error}</span>
                </div>
            )}

            <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg tracking-wide flex items-center gap-3">
                <span>
                    <img
                        src={weatherImage}
                        alt="Weather"
                        className="w-10 h-10 inline-block animate-spin-slow"
                    />
                </span>
                Weather App
            </h1>

            
            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Enter city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="p-2 rounded-lg border border-gray-300 outline-none w-64 shadow-sm"
                />
                <button
                    onClick={getWeather}
                    className="bg-white text-indigo-600 font-bold px-4 py-2 rounded-lg shadow hover:bg-indigo-100 transition"
                >
                    Get Weather
                </button>
            </div>

            {/* Weather Card */}
            {weather && (
                <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md text-center border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-2">{weather.name}, {weather.sys.country}</h2>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="weather icon"
                        className="mx-auto"
                    />
                    <p className="text-lg font-medium capitalize">{weather.weather[0].description}</p>
                    <p className="text-4xl font-bold text-indigo-700">{weather.main.temp}°C</p>

                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="mt-4 text-sm text-indigo-600 underline hover:text-indigo-800 transition"
                    >
                        {showMore ? "Hide Info" : "More Info"}
                    </button>

                    {/* More Info */}
                    {showMore && (
                        <div className="mt-4 text-left space-y-2 text-sm text-gray-700 border-t pt-4 border-gray-300">
                            <p><strong>Feels Like:</strong> {weather.main.feels_like}°C</p>
                            <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
                            <p><strong>Wind:</strong> {weather.wind.speed} m/s</p>
                            <p><strong>Pressure:</strong> {weather.main.pressure} hPa</p>
                            <p><strong>Visibility:</strong> {weather.visibility / 1000} km</p>
                            <p><strong>Clouds:</strong> {weather.clouds.all}%</p>
                            <p><strong>Coordinates:</strong> {weather.coord.lat}, {weather.coord.lon}</p>
                            <p><strong>Sunrise:</strong> {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
                            <p><strong>Sunset:</strong> {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Weather;
