import React from 'react';
import BudgetFilter from './BudgetFilter';
import RatingFilter from './RatingFilter';
import SortingDropdown from './SortingDropdown';
import DistanceFilter from './DistanceFilter';

function Filter({ handleSearchSubmit, searchParams, setSearchParams }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs">
      <h2 className="text-xl font-semibold text-[#2B293D] mb-4">Filter by:</h2>
      
      {/* Distance Filter */}
      <div className="mb-4">
        <DistanceFilter searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>

      {/* Sorting Dropdown */}
      <div className="mb-4">
        <SortingDropdown searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>

      {/* Budget Filter */}
      <div className="mb-4">
        <BudgetFilter searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <RatingFilter searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <button
          className="bg-[#0470EF] hover:bg-[#0356BF] text-white font-semibold py-2 rounded-md transition"
          onClick={handleSearchSubmit}
        >
          Find Service
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-md transition"
          onClick={() => setSearchParams({})} // รีเซ็ต filter
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
