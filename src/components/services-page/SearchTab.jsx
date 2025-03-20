import { Search, MapPin, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const categories = {
  Caring: ["Child Care", "Elderly Care"],
  Cleaning: [
    "General Cleaning",
    "A/C Cleaning",
    "Car Cleaning",
    "Washing Machine Cleaning",
    "Water Tank Cleaning",
    "Niche Cleaning",
  ],
  Laundry: ["General Laundry", "Bedding Laundry"],
  Transport: ["General Transport"],
  Repair: [
    "Plumbing",
    "Electrician",
    "HVAC",
    "Construction",
    "Painting",
    "Woodwork",
    "Roofing",
  ],
  "Pet Care": ["Pet Boarding", "Pet Grooming"],
  Gardening: ["Tree service", "General Gardening"],
};

function SearchTab({ selectedCategory }) {
  // ตั้งค่าเวลาปัจจุบันในประเทศไทย (UTC+7)
  const getCurrentThaiTime = () => {
    const now = new Date();
    const thaiTime = new Date(now.getTime() + (7 * 60 - now.getTimezoneOffset()) * 60000);
    return thaiTime;
  };

  const [subCatName, setsubCatName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(getCurrentThaiTime());
  const [subCategories, setSubCategories] = useState([]);

  // ✅ เมื่อ selectedCategory เปลี่ยน ให้อัปเดตรายการ sub category
  useEffect(() => {
    if (selectedCategory) {
      setSubCategories(categories[selectedCategory] || []);
      setsubCatName(""); // Reset sub-category เมื่อเปลี่ยน Category
    }
  }, [selectedCategory]);
  
  // Handle subCatName change with console.log
  const handlesubCatNameChange = (e) => {
    console.log("subCatName value:", e.target.value);
    setsubCatName(e.target.value);
  };
  
  // Handle location change with console.log
  const handleLocationChange = (e) => {
    console.log("Location value:", e.target.value);
    setLocation(e.target.value);
  };
  
  // Handle date change with console.log
  const handleDateChange = (date) => {
    console.log("Date value:", date);
    setDate(date);
  };

  return (
    <div className="mx-auto bg-white shadow-gray-400 p-7 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4 max-w-lg md:max-w-6xl">
      {/* subCatName Selection */}
      <div className="w-full">
        <select
          className="w-full p-[10.5px] border rounded-md focus:ring focus:ring-blue-300 h-[50px]"
          value={subCatName}
          onChange={handlesubCatNameChange}
          disabled={subCategories.length === 0}
        >
          <option value="">{selectedCategory || "Select a service"}</option>
          {subCategories.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
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
          onChange={handleLocationChange}
        />
      </div>

      {/* Date Picker */}
      <div className="flex items-center gap-2 border rounded-md p-2 h-[50px] cursor-pointer">
        <Calendar className="text-gray-500 w-5 h-5" />
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          placeholderText="Select a date"
          className="w-full focus:outline-none border-0 bg-transparent"
          dateFormat="dd/MM/yyyy"
        />
      </div>

      {/* Buttons */}
      <div className="w-full flex gap-2 h-[50px]">
        <button 
          className="flex-2/4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          onClick={() => {
            console.log("Search data:", { 
              subCatName, 
              location, 
              date: date ? date.toLocaleString('th-TH', {timeZone: 'Asia/Bangkok'}) : null
            });
          }}
        >
          Find Service
        </button>
      </div>
    </div>
  );
}

export default SearchTab;