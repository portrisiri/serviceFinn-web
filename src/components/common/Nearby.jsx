import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

export default function ServiceNearby() {
  const [visibleServices, setVisibleServices] = useState([]);

  const services = [
    {
      id: 1,
      name: "Alexander Laundry",
      message: "Got a mountain of laundry? I'll turn chaos into crisp, clean comfort in no time! ✨🧺",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=1"
    },
    {
      id: 2,
      name: "Ava Caring",
      message: "Compassionate care that feels like family. Your loved ones are in safe, gentle hands. ❤️👵",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=2"
    },
    {
      id: 3,
      name: "Ethan Transport",
      message: "Reliable rides, punctual service. From point A to B with zero stress! 🚗💨",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=3"
    },
    {
      id: 4,
      name: "Martinez Cleaning",
      message: "Sparkling spaces, happy places! Let's transform your mess into pure magic. 🌟🧽",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=4"
    },
    {
      id: 5,
      name: "Isaac Gardening",
      message: "Turning green spaces into living masterpieces. Nature's beauty, crafted with precision! 🌿🌱",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=11"
    },
    {
      id: 6,
      name: "Chloe Caring",
      message: "Nurturing care that goes beyond service - we're here to support and comfort. 🤗💕",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=2"
    },
    {
      id: 7,
      name: "Benjamin Fixing",
      message: "No repair too big, no problem too small. Let's get things working perfectly! 🔧🛠️",
      date: "Dec, 8",
      avatar: "https://i.pravatar.cc/50?img=3"
    },
    {
      id: 8,
      name: "Amelia Pet-Care",
      message: "Tail-wagging happiness and expert care for your furry family members! 🐾❤️",
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
    <div className="bg-white p-8 rounded-lg shadow-md mx-auto w-full max-w-3xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Service nearby</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Map Section */}
        <div className="w-8/10 h-full rounded-4xl shadow mx-auto"
        style={{ backgroundImage: "url('/mapNearby.png')", backgroundPosition: "center" }}
        >
          {/* <img
            src="/mapNearby.png"
            alt="Map"
            className="w-full rounded-4xl shadow"
            /> */}
            <button className="flex mx-auto mt-52">
            <Link
                    to="/map-search"
                    className=" bg-white text-blue-600 px-4 py-2 text-lg font-medium rounded-lg shadow-md hover:bg-gray-100 w-fit"
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
