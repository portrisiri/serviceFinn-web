import React from 'react'

const services = [
  {
    id: 1,
    name: "Alexander",
    category: "Laundry",
    rating: 4.7,
    reviews: 29,
    image: "/comment/1.jpg"
  },
  {
    id: 2,
    name: "Amelia ",
    category: "Pet-Care",
    rating: 4.7,
    reviews: 29,
    image: "/comment/3.jpg"
  },
  {
    id: 3,
    name: "Martinez",
    category: "Cleaning",
    rating: 4.7,
    reviews: 29,
    image: "/comment/5.jpg"
  },
  {
    id: 4,
    name: "Chloe",
    category: "Caring",
    rating: 4.7,
    reviews: 29,
    image: "/comment/8.jpg"
  }
];
function TopRateProvider() {
  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Rated Service Providers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="font-semibold mt-2">{service.name}</h3>
            <p className="text-gray-500 text-sm">{service.category}</p>
            <div className="flex items-center text-yellow-500 mt-1">
              {'\u2605'.repeat(Math.round(service.rating))}
              <span className="text-gray-600 ml-2">{service.rating} ({service.reviews} reviews)</span>
            </div>
            <a href="#" className="text-blue-500 text-sm mt-2 block">View Profile</a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default TopRateProvider;

