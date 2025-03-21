import React, { useState } from "react";

function MapDistance() {
  const [distance, setDistance] = useState(40); // single value

  return (
    <div className="w-full">
      <div className="divider my-0"></div>
      <label className="block text-sm font-medium text-gray-700 my-2">
        Distance : <span className="text-sm text-gray-500">{distance} km</span>
      </label>
      
      <input
        type="range"
        min={10}
        max={50}
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        className="range range-accent"
      />
    </div>
  );
}

export default MapDistance;
