import { Search, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router";
import "react-datepicker/dist/react-datepicker.css";

function SearchTab() {

  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);



  return (
    <div className="mx-auto  bg-white shadow-gray-400 p-7 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4  max-w-lg md:max-w-6xl">

      {/* Service Selection */}
      <div className="w-full">
        
       <select
        className="w-full p-[10.5px] border rounded-md focus:ring focus:ring-blue-300 h-[50px]"
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
      
      {/* Date Picker */}
      <div className="flex items-center gap-2 border rounded-md p-2 h-[50px] cursor-pointer">
        <Calendar className="text-gray-500 w-5 h-5" />
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          placeholderText="Select a date"
          className="w-full focus:outline-none border-0 bg-transparent"
        />
      </div>
      
      
      
      
      {/* Buttons */}
      <div className="w-full flex gap-2 h-[50px]">
        <button className="flex-2/4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
          Find Services
        </button>
        
      </div>

    </div>
  )
}

export default SearchTab