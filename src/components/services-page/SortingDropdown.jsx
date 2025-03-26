import React from 'react';

function SortingDropdown(props) {
  const { searchParams, setSearchParams } = props;
  const handleOrderByChange = (e) => {
    setSearchParams((prv) => ({ ...prv, orderBy: e.target.value }));
  };
  return (
    <div>
      <div className="divider my-0"></div>
      <select
        className="w-full p-[10.5px] border rounded-md focus:ring focus:ring-blue-300 h-[50px]"
        value={searchParams.orderBy}
        onChange={(e) => handleOrderByChange(e)}
      >
        <option value="" disabled>
          Order by?
        </option>
        <option value="distance">{'Distance from you'}</option>
        <option value="providerrating">{'Rating (high to low)'}</option>
        <option value="providerrating">{'Rating (low to high)'}</option>
        <option value="price">{'Price (high to low)'}</option>
        <option value="price">{'Price (low to high)'}</option>
      </select>
    </div>
  );
}

export default SortingDropdown;
