export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-400 to-blue-700 text-white">
      <h1 className="text-4xl font-extrabold mb-4">About ClimaHorizon</h1>
      <p className="text-lg max-w-xl text-center">
        ClimaHorizon is a web app that lets you quickly check the current weather 
        for any city in the world. Simply type a city name and get live weather 
        data including temperature, humidity, and a weather icon.
      </p>
    </div>
  );
}
