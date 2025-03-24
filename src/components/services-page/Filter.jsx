import React from 'react';
import BudgetFilter from './BudgetFilter';

import Test from './Test';
import RatingFilter from './RatingFilter';
import SortingDropdown from './SortingDropdown';
import DistanceFilter from './DistanceFilter';

function Filter(props) {
  const { handleSearchSubmit, searchParams, setSearchParams } = props;

  return (
    <div>
      <div>
        <DistanceFilter searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>
      <div>
        <SortingDropdown searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>
      <div>
        <BudgetFilter searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>

      <div>
        <RatingFilter searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>
      {/* Buttons */}
      <div className="w-full flex gap-2 h-[50px]">
        <button
          className="flex-2/4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          onClick={() => {
            handleSearchSubmit();
          }}
        >
          Find Service
        </button>
      </div>

      {/* <div>
      <Test/>
      </div> */}
    </div>
  );
}

export default Filter;
