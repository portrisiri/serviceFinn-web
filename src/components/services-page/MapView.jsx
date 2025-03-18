import React from 'react';
import { Link } from 'react-router-dom';

function MapView() {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/mapNearby.png')" }}
      ></div>

      <Link
        to="/map-search"
        className="absolute top-3/5  bg-white text-blue-600 px-4 py-2 text-lg font-medium rounded-lg shadow-md hover:bg-gray-100"
      >
        Show on map
      </Link>
    </div>
  );
}

export default MapView;
