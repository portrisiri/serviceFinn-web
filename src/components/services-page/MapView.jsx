import React from 'react';
import { Link } from 'react-router-dom';

function MapView(props) {
  const { handleOpenModal } = props;
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-accent bg-center rounded-2xl border-white" style={{ backgroundImage: "url('/mapNearby.png')" }}></div>

      <Link
        // to="/map-search"
        onClick={handleOpenModal}
        className="relative top-3/5 text-white bg-[#0470EF] hover:bg-[#0356BF] px-4 py-2 mx-18 text-lg font-medium rounded-lg shadow-md"
      >
        Show on map
      </Link>
    </div>
  );
}

export default MapView;
