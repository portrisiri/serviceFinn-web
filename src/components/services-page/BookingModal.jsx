import React from 'react';
import DateCarousel from './DateCarousel';
import axios from 'axios';

const BookingModal = ({ isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) return null;

  const handlepayment = async()=>{
    const resp = await axios.post('http://localhost:4289/payment/create-payment')
    // Redirect user to Stripe checkout
    window.location.href = resp.data.checkoutUrl;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full ">
         {/* Image */}
        <div className="flex justify-center my-4">
          <img src="maidcleaning.jpg" alt="Shop" className="w- rounded-md" />
        </div>
        
        {/* Header */}
        <h2 className="text-left mx-10 text-lg text-blue-900 font-bold">AAA Shop</h2>
        <p className="text-left mx-10 text-sm text-blue-900">Address: 56 Sukhumvit Road, Pathumwan, Bangkok</p>
        
        <DateCarousel/>

        {/* Available Times */}
        <p className="text-center text-sm text-blue-900 font-semibold">Available Time:</p>
        <div className="flex mx-25 gap-2 my-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">9:00</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">13:00</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">16:00</button>
        </div>

        {/* Job Detail */}
        <p className="text-sm text-gray-600 font-semibold">Job Detail:</p>
        <textarea
          className="w-full px-3 py-2 border rounded-md text-sm"
          placeholder="Enter job details..."
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-md text-sm"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
          <button onClick={handlepayment} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
