import React, { useState } from 'react';
import { LuArrowBigRight } from "react-icons/lu";
import { LuArrowBigLeft } from "react-icons/lu";


const generateDates = () => {
  let dates = [];
  let currentDate = new Date();


  for (let i = 0; i < 31; i++) {
    dates.push(new Date(currentDate.setDate(currentDate.getDate() + 1)));
  }
  
  return dates;
};

const DateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dates = generateDates();

  
  const nextDate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dates.length);
  };

  
  const prevDate = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dates.length) % dates.length);
  };

  return (
    <div>
      <div className="carousel-container" style={{ textAlign: 'center', padding: '20px' }}>
        <button onClick={prevDate} style={{ padding: '10px', fontSize: '16px' }}><LuArrowBigLeft /></button>

        <div style={{ display: 'inline-block', padding: '20px' }}>
          <h2 className='text-md text-blue-900'>Selected Date</h2>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
            {dates[currentIndex].toLocaleDateString()}
          </p>
        </div>

        <button onClick={nextDate} style={{ padding: '10px', fontSize: '16px', width: '30px' }}><LuArrowBigRight /></button>
      </div>
    </div>
  );
};

export default DateCarousel;
