import React from 'react'
import Filter from '../../components/services-page/Filter'
import SearchTab from '../../components/services-page/SearchTab'
import MapView from '../../components/services-page/MapView'
import Pagination from '../../components/services-page/Pagination'
import SortOption from '../../components/services-page/SortOption'
import ServicesList from '../../components/services-page/ServicesList'

const services = [
  { name: "Caring", emoji: "🍼" },
  { name: "Cleaning", emoji: "🧽" },
  { name: "Laundry", emoji: "👕" }, 
  { name: "Transport", emoji: "🚕" }, 
  { name: "Fixing", emoji: "🔧" }, 
  { name: "Pet Care", emoji: "🐾" }, 
  { name: "Gardening", emoji: "🌿" }, 
];


function Services() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Category Selection */}
      <div className="container mx-auto p-4 flex gap-4 overflow-x-auto justify-center">
        {services.map((service) => (
          <button
            key={service.name}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border hover:shadow-md transition"
          >
            <span className="text-lg">{service.emoji}</span>
            <span className="text-sm font-medium">{service.name}</span>
          </button>
        ))}
      </div>
    {/* Search Bar */}
    <div className="bg-white shadow-md p-4">
      <SearchTab />
    </div>
    
    <div className="container mx-auto p-4 grid grid-cols-12 gap-6">
      {/* Sidebar - MapView & Filters */}
      <div className="col-span-3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md h-60">
          <MapView />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Filter by:</h2>
          <Filter />
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-9">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Bangkok: 4,387 services found</h1>
          <SortOption />
        </div>
        
        <div className=''>
        <ServicesList />
        </div>
        
        <div className="mt-6 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services