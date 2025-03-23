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
        <option value="distance">Distance</option>
        <option value="rating">Rating</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
}

export default SortingDropdown;
