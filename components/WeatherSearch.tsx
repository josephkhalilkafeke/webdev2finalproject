"use client";

import { useState } from "react";
import WeatherResult from "./WeatherResult";
import ErrorMessage from "./ErrorMessage";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setWeather(null);

    if (!city.trim()) {
      setError(true);
      return;
    }

    setLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${apiKey}`;

      console.log("Fetching:", url);

      const res = await fetch(url);

      if (!res.ok) {
        const text = await res.text();
        console.error("OpenWeatherMap error response:", text);
        throw new Error("City not found");
      }

      const data = await res.json();
      console.log("Weather data:", data);
      setWeather(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <form onSubmit={handleSubmit} className="flex gap-2 justify-center w-full">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border-2 border-gray-300 rounded w-64
                     text-gray-800 placeholder-gray-400
                     focus:outline-none focus:border-blue-600"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          {loading ? "Loading..." : "Check Weather"}
        </button>
      </form>

      {error && <ErrorMessage />}
      {weather && <WeatherResult weather={weather} />}
    </div>
  );
  
}
