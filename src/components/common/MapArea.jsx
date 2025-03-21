import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Random marker
function getRandomNearbyPositions(center, radiusInKm, count) {
  const positions = [];
  const earthRadius = 6371; // km

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * radiusInKm;

    const deltaLat = (distance / earthRadius) * (180 / Math.PI);
    const deltaLng =
      ((distance / earthRadius) * (180 / Math.PI)) /
      Math.cos((center[0] * Math.PI) / 180);

    const newLat = center[0] + deltaLat * Math.sin(angle);
    const newLng = center[1] + deltaLng * Math.cos(angle);

    positions.push({
      id: i,
      name: `ช่างแอร์ ${i + 1}`,
      lat: newLat,
      lng: newLng,
    });
  }

  return positions;
}

function MapArea() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userPos = [latitude, longitude];
        setCurrentPosition(userPos);

        // Generate 10 random employees nearby (within 10 km)
        const employeeData = getRandomNearbyPositions(userPos, 10, 10);
        setEmployees(employeeData);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  // Market Icon Color
  var redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Animation

  return (
    <div className=" p-4 flex gap-4 ">
      <div className="w-[98%] mx-auto">
        {currentPosition ? (
          <MapContainer
            center={currentPosition}
            zoom={12}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            {/* Current Location */}
            <Marker position={currentPosition} icon={redIcon}>
              <Popup>You are here!</Popup>
            </Marker>

            {/* 10km radius */}
            <Circle center={currentPosition} radius={10000} />

            {/* Employee Markers */}
            {employees.map((emp) => (
              <Marker key={emp.id} position={[emp.lat, emp.lng]}>
                <Popup>{emp.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default MapArea;
