import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import BannerImages from "./BannerImages";


function Searchbar() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");


  return (
    <div className="relative w-full h-full md:h-[500px] flex items-center justify-center text-center bg-cover bg-center isolation-auto rounded-4xl">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <BannerImages />
      </div>
      {/* Content */}
      <div className="relative z-10 px-6 w-full flex flex-col">
        <h1 className="text-2xl md:text-4xl font-semibold text-white text-center">
          <br /><br /><br />
        </h1>

        {/* Search Bar */}
        <div className="mt-6  bg-white shadow-blue-900 p-7 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg md:max-w-6xl">

          {/* Service Selection */}
          <div className="w-full">
            <label className="block text-lg font-medium text-gray-700">
              What service do you need?
            </label>
            <select
              className="w-full p-[10.5px] border rounded-md focus:ring focus:ring-blue-300 h-[50px] "
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select a service</option>
              <option value="caring">Caring</option>
              <option value="cleaning">Cleaning</option>
              <option value="laundry">Laundry</option>
              <option value="transport">Transport</option>
              <option value="fixing">Fixing</option>
              <option value="pet-care">Pet Care</option>
              <option value="gardening">Gardening</option>
            </select>
          </div>

          {/* Location Input */}
          <div className="w-full">
            <label className="block text-lg font-medium text-gray-700">
              Where do you need it?
            </label>
            <div className="flex items-center gap-2 border rounded-md p-2 h-[50px]">
              <MapPin className="text-gray-500 w-5 h-5" />
              <input
                type="text"
                value={location}
                placeholder="Enter your location"
                className="w-full focus:outline-none border-0 bg-transparent"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full flex gap-2 h-[50px] mt-7">
            <button className="flex-2/4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Find Services
            </button>
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
              <Link to='/map-search'>Map</Link>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Searchbar;
