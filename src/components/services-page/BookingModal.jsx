import React from 'react';

const BookingModal = ({ isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full ">
        {/* Header */}
        <h2 className="text-lg font-bold">AAA Shop</h2>
        <p className="text-sm text-gray-600">Address: 56 Sukhumvit Road, Pathumwan, Bangkok</p>

        {/* Image */}
        <div className="flex justify-center my-4">
          <img src="https://i.pravatar.cc/50?img=6" alt="Shop" className="w-24 h-24 rounded-full" />
        </div>

        {/* Job Detail */}
        <p className="text-sm text-gray-600 font-semibold">Job Detail:</p>
        <textarea
          className="w-full px-3 py-2 border rounded-md text-sm"
          placeholder="Enter job details..."
        ></textarea>

        {/* Available Times */}
        <p className="text-sm text-gray-600 font-semibold">Available Time:</p>
        <div className="flex gap-2 my-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">9:00</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">13:00</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">16:00</button>
        </div>



        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-md text-sm"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
