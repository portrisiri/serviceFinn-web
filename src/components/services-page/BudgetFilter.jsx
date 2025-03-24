import { Slider } from '@mui/material';
import React, { useEffect, useState } from 'react';

const marks = [
  {
    value: 500,
    label: 'Market Price',
  },
];

function BudgetFilter(props) {
<<<<<<< HEAD
  // const { searchParams, setSearchParams } = props;
  // useEffect(() => {
  //   if (!searchParams.maxPrice) {
  //     setSearchParams((prv) => ({ ...prv, maxPrice: 1000 }));
  //   }
  // }, []);
  // const handleBudgetChange = (event, newValue) => {
  //   setSearchParams((prv) => ({ ...prv, minPrice: newValue[0], maxPrice: newValue[1] }));
  // };
=======
  const { searchParams, setSearchParams } = props;
  useEffect(() => {
    if (!searchParams?.maxPrice) {
      setSearchParams((prv) => ({ ...prv, maxPrice: 1000 }));
    }
  }, []);
  const handleBudgetChange = (event, newValue) => {
    setSearchParams((prv) => ({ ...prv, minPrice: newValue[0], maxPrice: newValue[1] }));
  };
>>>>>>> dev
  return (
    <div className="w-full">
      {/* <div className="divider my-0"></div>
      <label className="block text-sm font-medium text-gray-700">Your budget (per service)</label>
      <p className="text-sm text-gray-500">
        THB {searchParams?.minPrice} - THB {searchParams?.maxPrice}
      </p>
      <Slider
        className="mt-2"
        min={100}
        max={1000}
        marks={marks}
        value={[searchParams?.minPrice, searchParams?.maxPrice]}
        onChange={(event, newValue) => handleBudgetChange(event, newValue)}
        step={100}
        valueLabelDisplay="auto"
        sx={{
          color: 'primary.main',
          '& .MuiSlider-mark': {
            backgroundColor: '#4CAF50',
            height: 20,
            width: 10,
            borderRadius: 10,
          },
          '& .MuiSlider-markLabel': {
            color: 'primary.dark',
          },
        }}
      /> */}
    </div>
  );
}

export default BudgetFilter;
