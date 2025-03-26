import React, { useState, useMemo } from 'react';
import { LuArrowBigRight } from 'react-icons/lu';
import { LuArrowBigLeft } from 'react-icons/lu';

const generateDates = () => {
  let dates = [];
  let currentDate = new Date();
  dates.push(new Date(currentDate));

  for (let i = 0; i < 30; i++) {
    currentDate.setDate(currentDate.getDate() + 1);
    dates.push(new Date(currentDate));
  }
  return dates;
};

const generateTimesWithAvailability = () => {
  const allTimes = [];
  for (let hour = 9; hour <= 17; hour++) {
    allTimes.push(`${hour}:00`);
    if (hour !== 17) {
      allTimes.push(`${hour}:30`);
    }
  }

  // Consistently select 4-5 time slots per day with booking status
  const selectTimeSlots = (seed) => {
    const selectedSlots = [];
    const availableSlots = [...allTimes];
    const numSlots = Math.floor(seed % 2) + 4; // Always 4 or 5 slots

    // Use the seed for consistent randomness
    const seededRandom = (x) => {
      const sin = Math.sin(x);
      return sin - Math.floor(sin);
    };

    for (let i = 0; i < numSlots; i++) {
      if (availableSlots.length === 0) break;
      
      const randomIndex = Math.floor(seededRandom(seed + i) * availableSlots.length);
      const selectedSlot = availableSlots.splice(randomIndex, 1)[0];
      
      // Use seed for consistent booking status
      const isBooked = seededRandom(seed + i + 100) < 0.3; // 30% chance of being booked
      
      selectedSlots.push({
        time: selectedSlot,
        isAvailable: !isBooked
      });
    }

    return selectedSlots.sort((a, b) => {
      const [aHour, aMin] = a.time.split(':').map(Number);
      const [bHour, bMin] = b.time.split(':').map(Number);
      return aHour - bHour || aMin - bMin;
    });
  };

  // Generate consistent time slots
  return Array.from({length: 31}, (_, i) => selectTimeSlots(i));
};

const DateCarousel = ({ setSelectedTime, setSelectedDate }) => {
  const dates = generateDates();
  const timeSlotsByDay = useMemo(() => generateTimesWithAvailability(), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);

  const nextDate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dates.length);
  };

  const prevDate = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dates.length) % dates.length);
  };

  const handleTimeSelect = (index) => {
    const selectedTime = timeSlotsByDay[currentIndex][index];
    if (selectedTime.isAvailable) {
      setSelectedTimeIndex(index);

      setSelectedTime(selectedTime.time);
      setSelectedDate(dates[currentIndex]);
    }
    console.log(selectedTime);
  };

  const currentTimeSlots = timeSlotsByDay[currentIndex];

  return (
    <>
      <div>
        <div className="carousel-container" style={{ textAlign: 'center', padding: '20px' }}>
          <button onClick={prevDate} style={{ padding: '10px', fontSize: '16px' }}>
            <LuArrowBigLeft />
          </button>

          <div style={{ display: 'inline-block', padding: '20px' }}>
            <h2 className="text-md text-blue-900">Selected Date</h2>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {dates[currentIndex].toLocaleDateString()}
            </p>
          </div>

          <button onClick={nextDate} style={{ padding: '10px', fontSize: '16px', width: '30px' }}>
            <LuArrowBigRight />
          </button>
        </div>
      </div>
      {/* Available Times */}
      <p className="text-center text-sm text-blue-900 font-semibold">Available Time:</p>
      <div className="flex justify-center gap-2 my-2">
        {currentTimeSlots.map((slot, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md text-sm ${
              !slot.isAvailable
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' // Booked/disabled slot
                : selectedTimeIndex === index 
                  ? 'bg-green-500 text-white' 
                  : 'bg-blue-500 text-white hover:bg-blue-600' // Available slot
            }`}
            onClick={() => handleTimeSelect(index)}
            disabled={!slot.isAvailable}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </>
  );
};

export default DateCarousel;