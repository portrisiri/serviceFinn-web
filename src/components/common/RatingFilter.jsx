import React, { useState } from 'react'

function RatingFilter() {
    const [rating, setRating] = useState("");
  return (
    <div>
    <select
      className="w-full p-[10.5px] rounded-md focus:ring focus:ring-blue-300 h-[50px]"
      value={rating}
      onChange={(e) => setRating(e.target.value)}
    >
      <option value="">Ratings</option>
      <option value="5">5 Stars</option>
      <option value="4">4 Stars</option>
      <option value="3">3 Stars</option>
    </select>
    </div>
  )
}

export default RatingFilter