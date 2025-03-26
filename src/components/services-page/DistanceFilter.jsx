import React from 'react';
import { Slider } from '@mui/material';

const marks = [
  {
    value: 1,
    label: '1km',
  },
  {
    value: 10,
    label: '10km',
  },
];

function DistanceFilter(props) {
  const { searchParams, setSearchParams } = props;
  const handleDistanceChange = (event, newValue) => {
    setSearchParams((prv) => ({ ...prv, radius: newValue }));
  };
  return (
    <div>
      Distance from you
      <Slider
        aria-label="Always visible"
        defaultValue={searchParams.radius}
        min={1}
        max={10}
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
