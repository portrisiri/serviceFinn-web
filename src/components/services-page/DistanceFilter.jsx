import React from 'react';
import { Slider } from '@mui/material';

const marks = [
  {
    value: 1,
    label: '1km',
  },
  {
    value: 20,
    label: '20km',
  },
];

function DistanceFilter(props) {
  const { searchParams, setSearchParams } = props;
  const handleDistanceChange = (event, newValue) => {
    setSearchParams((prv) => ({ ...prv, radius: newValue }));
  };
  return (
    <div>
      <Slider
        aria-label="Always visible"
        defaultValue={5}
        min={1}
        max={20}
        // getAriaValueText={valuetext}
        step={0.5}
        marks={marks}
        valueLabelDisplay="auto"
        onChange={(event, newValue) => handleDistanceChange(event, newValue)}
      />
    </div>
  );
}

export default DistanceFilter;
