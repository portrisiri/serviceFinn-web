import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import BookingModal from "./BookingModal";

const ServiceCard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex max-w-6xl border rounded-lg shadow-md p-4 gap-4 bg-white ">
      {/* Image Section */}
      <div className="relative w-1/3">
        <img
          src="/technician.jpg"
          alt="service"
          className="w-full h-full rounded-lg object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <FaRegHeart className="text-gray-600" />
        </button>
      </div>

      {/* Details Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-blue-700">Service Technician by Somchai</h2>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">⭐⭐⭐</div>
          <p className="text-sm text-gray-600">
            <span className="text-blue-500 cursor-pointer">Chatuchak, Bangkok</span> · <span className="text-blue-500 cursor-pointer">Show on map</span> · 10.3 km from downtown
          </p>
          <span className="inline-block mt-1 bg-green-200 text-green-700 text-xs font-semibold px-2 py-1 rounded">Limited-time Deal</span>
          <p className="mt-2 font-bold text-sm">Standard Double Room</p>
          <p className="text-sm text-gray-600">1 king bed</p>
          <p className="text-sm text-red-600 font-bold">Only 2 availability left at this price on our service</p>
        </div>

        {/* Price and CTA Section */}
        <div className="flex justify-between items-center mt-2">
          <div className="text-right">
            <p className="text-gray-500 line-through text-sm">THB 1,450</p>
            <p className="text-xl font-bold">THB 856</p>
            <p className="text-xs text-gray-500">Includes taxes and fees</p>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}>
            BOOK NOW
          </button>
      </div>
    </div>
    {isModalOpen && <BookingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default ServiceCard;