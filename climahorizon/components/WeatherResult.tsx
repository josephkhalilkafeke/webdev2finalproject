interface WeatherResultProps {
  weather: any;
}

export default function WeatherResult({ weather }: WeatherResultProps) {
  return (
    <div className="bg-black bg-opacity-70 text-white p-6 rounded-xl shadow-lg mt-6 w-full max-w-md text-center">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <p className="text-lg capitalize mb-2">{weather.weather[0].description}</p>
      <p className="text-xl mb-1">Temperature: {weather.main.temp.toFixed(1)}°C</p>
      <p className="text-lg mb-2">Humidity: {weather.main.humidity}%</p>
      {weather.weather[0].icon && (
        <img
          className="mx-auto mt-2"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
      )}
    </div>
  );
}
