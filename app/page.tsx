import WeatherSearch from "../components/WeatherSearch";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white p-4">
      
      {/* Navbar with About link */}
      <nav className="flex justify-end p-4 bg-blue-600 text-white rounded-lg mb-6">
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>

      {/* Main content */}
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md w-full backdrop-blur-md">
          <h1 className="text-5xl font-extrabold text-black mb-4 drop-shadow-lg">
            ClimaHorizon
          </h1>

          <p className="text-black mb-6 text-lg">
            Check the current weather for any city in the world.
          </p>

          <WeatherSearch />
        </div>
      </div>
    </div>
  );
}
