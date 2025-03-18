import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

export default function ServiceNearby() {
  const [visibleServices, setVisibleServices] = useState([]);

  const services = [
    {
      id: 1,
      name: "Evelyn Cleaner",
      message: "I'm waiting for your response!",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=1"
    },
    {
      id: 2,
      name: "Keng Plumber",
      message: "I'm waiting for your response!",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=2"
    },
    {
      id: 3,
      name: "Por Gerdener",
      message: "I'm waiting for your response!",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=3"
    },
    {
      id: 4,
      name: "Lina Electrician",
      message: "I'm waiting for your response!",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=4"
    },
    {
      id: 5,
      name: "Evelyn Cleaner",
      message: "I'm waiting for your response!",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=1"
    },
    {
      id: 6,
      name: "Keng Plumber",
      message: "I'm waiting for your response!",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=2"
    },
    {
      id: 7,
      name: "Por Gerdener",
      message: "I'm waiting for your response!",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=3"
    },
    {
      id: 8,
      name: "Lina Electrician",
      message: "I'm waiting for your response!",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=4"
    }
  ];

  useEffect(() => {
    setVisibleServices(services.slice(0, 3));
    const interval = setInterval(() => {
      setVisibleServices((prev) => {
        const nextIndex = (services.indexOf(prev[0]) + 1) % services.length;
        return services.slice(nextIndex, nextIndex + 3);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Service nearby</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Map Section */}
        <div className="w-8/10 h-full rounded-4xl shadow mx-auto"
        style={{ backgroundImage: "url('/mapNearby.png')" }}
        >
          {/* <img
            src="/mapNearby.png"
            alt="Map"
            className="w-full rounded-4xl shadow"
            /> */}
            <button className="btn btn-info flex mx-auto mt-52 ">
            <Link
                    to="/map-search"
                    className=" bg-white text-blue-600 px-4 py-2 text-lg font-medium rounded-lg shadow-md hover:bg-gray-100 w-full"
                  >
                    Show on map
                  </Link>
              </button>
          
        </div>

        {/* Service List Section */}
        <div className="space-y-4 overflow-hidden h-80">
          <AnimatePresence mode="sync">
            {visibleServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <img
                  src={service.avatar}
                  alt={service.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.message}</p>
                </div>
                <div className="text-right text-gray-500 text-sm">{service.date}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
