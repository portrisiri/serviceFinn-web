import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import BookingModal from './BookingModal';
import { Link } from 'react-router';

const ServiceCard = ({ serviceData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle potential missing data
  if (!serviceData) {
    return null;
  }

  const {
    title,
    firstName,
    lastName,
    address,
    email,
    phoneNumber,
    companyName,
    providerRating,
    latitude,
    longitude,
    categoryName,
    subCatName,
    distance,
    price,
    isLimitedTimeDeal,
    service,
  } = serviceData;

  // Format the full name
  const providerName = `${firstName} ${lastName}`;

  // Format price - handle potential missing price
  const displayPrice = price || 0;
  const discountedPrice = Math.round(displayPrice * 0.85); // Example: 15% discount for limited time deals

  return (
    <div className="flex max-w-6xl max-h-50 border rounded-lg shadow-md p-4 gap-4 bg-white">
      {/* Image Section */}
      <div className="relative w-1/3">
        <img
          src={serviceData.profilePicture || '/nanny5.jpg'}
          alt={`${categoryName} service by ${providerName}`}
          className="w-full h-full rounded-lg object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <FaRegHeart className="text-gray-600" />
        </button>
      </div>

      {/* Details Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0470EF] hover:text-[#0356BF] cursor-pointer">
            {title || `${categoryName || ''} ${subCatName ? `- ${subCatName}` : ''} by ${providerName}`}
          </h2>
          <div className="flex items-center gap-2 text-yellow-500 text-md">
            {/* Display stars based on rating value */}
            <div>
              {' '}
              {Array(Math.round(providerRating || 0))
                .fill('⭐')
                .join('')}
            </div>
            <div>{providerRating}</div>
          </div>
          <p className="text-sm text-gray-600">
            {/* <span className="text-blue-500 cursor-pointer">{address || 'Chatuchak, Bangkok'}</span> ·{' '}
            <Link to="/map-search" className="text-blue-500 cursor-pointer">
              Show on map
            </Link> */}
            <a href={`https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`} target="_blank">
              {address || 'See Directions'}
            </a>{' '}
            · {distance ? `${distance.toFixed(1)} km from you` : ''}
          </p>

          {isLimitedTimeDeal && (
            <span className="inline-block mt-1 bg-green-200 text-green-700 text-xs font-semibold px-2 py-1 rounded">
              Limited-time Deal
            </span>
          )}

          <p className="mt-2 font-bold text-sm">{subCatName || 'Standard Service'}</p>

          <p className="text-sm text-gray-600">{serviceData.description || 'Professional service'}</p>

          {isLimitedTimeDeal && (
            <p className="text-sm text-red-600 font-bold">
              Only {serviceData.availability || 2} availability left at this price on our service
            </p>
          )}
        </div>

        {/* Price and CTA Section */}
        <div className="flex justify-between items-center mt-2">
          <div className="text-right">
            {isLimitedTimeDeal && <p className="text-gray-500 line-through text-sm">THB {displayPrice}</p>}
            <p className="text-xl font-bold">THB {isLimitedTimeDeal ? discountedPrice : displayPrice}</p>
            <p className="text-xs text-gray-500">Includes taxes and fees</p>
          </div>

          <div>
            <button
              className="bg-[#0470EF] hover:bg-[#0356BF] text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => setIsModalOpen(true)}
            >
              BOOK NOW
            </button>
            <br />
            {/* <Link
              to={`/service-details/${serviceData.providerId}`}
              className="text-red-500 text-sm flex justify-center mt-2 hover:decoration-2"
            >
              more details
            </Link> */}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <BookingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} serviceData={serviceData} />
      )}
    </div>
  );
};

export default ServiceCard;
