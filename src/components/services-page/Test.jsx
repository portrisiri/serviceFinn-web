import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const propertyTypes = [
  { name: "Hotels", count: 1049 },
  { name: "Entire homes & apartments", count: 340 },
  { name: "Hostels", count: 323 },
  { name: "Apartments", count: 310 },
  { name: "Guesthouses", count: 101 },
  { name: "Homestays", count: 29 },
  { name: "Bed and Breakfasts", count: 27 },
  { name: "Vacation Homes", count: 6 },
  { name: "Motels", count: 5 },
  { name: "Resorts", count: 5 },
  { name: "Capsule Hotels", count: 4 },
  { name: "Lodges", count: 3 },
  { name: "Resort Villages", count: 1 },
  { name: "Villas", count: 1 },
  { name: "Boats", count: 1 },
  { name: "Love Hotels", count: 1 },
];

const meals = [
  { name: "Kitchen facilities", count: 281 },
  { name: "Breakfast included", count: 453 },
  { name: "Breakfast & dinner included", count: 1 },
];

export default function FilterComponent() {
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  return (
    <div className="w-full p-4 rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">Property Type</h3>
      <div className="space-y-2 my-2">
        {propertyTypes.map((item) => (
          <label key={item.name} className="flex items-center space-x-2">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span>{item.name} ({item.count})</span>
          </label>
        ))}
      </div>
      
      <h3 className="text-lg font-semibold mt-4">Bedrooms and bathrooms</h3>
      <div className="flex items-center justify-between mt-2">
        <span>Bedrooms</span>
        <div className="flex items-center space-x-2">
          <button className="btn btn-sm" onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}><Minus size={16} /></button>
          <span>{bedrooms}</span>
          <button className="btn btn-sm" onClick={() => setBedrooms(bedrooms + 1)}><Plus size={16} /></button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span>Bathrooms</span>
        <div className="flex items-center space-x-2">
          <button className="btn btn-sm" onClick={() => setBathrooms(Math.max(0, bathrooms - 1))}><Minus size={16} /></button>
          <span>{bathrooms}</span>
          <button className="btn btn-sm" onClick={() => setBathrooms(bathrooms + 1)}><Plus size={16} /></button>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-4">Meals</h3>
      <div className="space-y-2 my-2">
        {meals.map((item) => (
          <label key={item.name} className="flex items-center space-x-2">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span>{item.name} ({item.count})</span>
          </label>
        ))}
      </div>
    </div>
  );
}