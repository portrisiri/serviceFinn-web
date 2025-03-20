
import { Slider } from '@mui/material';
import React, { useState } from 'react'

function BudgetFilter() {
    const [budget, setBudget] = useState([100, 6000]);
  return (
    <div className="w-full">
       <div className="divider my-0"></div>
    <label className="block text-sm font-medium text-gray-700">Your budget (per service)</label>
    <p className="text-sm text-gray-500">THB {budget[0]} - THB {budget[1]}</p>
    <Slider
      className="mt-2"
      min={100}
      max={6000}
      value={budget}
      onChange={(event, newValue) => setBudget(newValue)}
      step={100}
      valueLabelDisplay="auto"
    />
  </div>
  )
}

export default BudgetFilter