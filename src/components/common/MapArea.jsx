import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Skeleton } from '@mui/material';

// Random marker
// function getRandomNearbyPositions(center, radiusInKm, count) {
//   const positions = [];
//   const earthRadius = 6371; // km

//   for (let i = 0; i < count; i++) {
//     const angle = Math.random() * Math.PI * 2;
//     const distance = Math.random() * radiusInKm;

//     const deltaLat = (distance / earthRadius) * (180 / Math.PI);
//     const deltaLng = ((distance / earthRadius) * (180 / Math.PI)) / Math.cos((center[0] * Math.PI) / 180);

//     const newLat = center[0] + deltaLat * Math.sin(angle);
//     const newLng = center[1] + deltaLng * Math.cos(angle);

//     positions.push({
//       id: i,
//       name: `ช่างแอร์ ${i + 1}`,
//       lat: newLat,
//       lng: newLng,
//     });
//   }

//   return positions;
// }

const ChangeView = ({ center, zoom }) => {
  const map = useMap(); // This hook can only be used inside a MapContainer context

  // This will change the map view whenever the props change
  map.flyTo(center, zoom);

  return null; // This component doesn't render anything, just modifies the map view
};

function MapArea(props) {
  const { searchParams, results } = props;
  const [currentPosition, setCurrentPosition] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [center, setCenter] = useState();
  const [zoom, setZoom] = useState();
  const map = useMap;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userPos = [latitude, longitude];
        setCurrentPosition(userPos);
        setIsLoading(false);

        // Generate 10 random employees nearby (within 10 km)
        // const employeeData = getRandomNearbyPositions(userPos, 10, 10);
        // setEmployees(employeeData);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );

    if (!center) {
      setCenter([searchParams.location.latitude, searchParams.location.longitude] || currentPosition);
    }
  }, []);

  useEffect(() => {
    setCenter([searchParams.location.latitude, searchParams.location.longitude]);
    setZoom(13);
  }, [searchParams]);

  // Market Icon Color
  var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className=" p-4 flex gap-4 min-h-full">
      <div className="w-[98%] mx-auto min-h-full bg-blue-200">
        {!isLoading ? (
          <MapContainer center={center || currentPosition} zoom={16} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            {/* Current Location */}
            <Marker position={currentPosition} icon={greenIcon}>
              <Popup>You are here!</Popup>
            </Marker>

            {/* Search Location */}
            <Marker position={[searchParams.location?.latitude, searchParams.location?.longitude]} icon={redIcon}>
              <Popup>Showing Results within {searchParams.radius}!</Popup>
            </Marker>

            {/* Search radius */}
            <Circle
              center={[searchParams.location.latitude, searchParams.location.longitude]}
              radius={searchParams.radius * 1000 || 5000}
            />

            {/* Employee Markers */}
            {results.map((provider) => (
              <Marker key={provider.providerId} position={[provider.latitude, provider.longitude]}>
                <Popup>
                  {/* Decorate here ---------------------------------------------------------------------------- */}
                  <div className="flex gap-4">
                    <div className="w-[80px] rounded-full bg-blue-50">
                      <img
                        src={provider.profilePicture || '/technician.jpg'}
                        className="aspect-square rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-lg">
                        {provider.firstName} {provider.lastName}
                      </div>
                      <div>{provider.providerRating ? `${provider.providerRating}⭐` : 'No Rating'}</div>
                      <div>{`${provider?.distance?.toFixed(2)}km from you`}</div>
                      <div>See Details</div>
                    </div>
                  </div>
                  {/* ---------------------------------------------------------------------------------------- */}
                </Popup>
              </Marker>
            ))}

            <ChangeView center={center} zoom={zoom} />
          </MapContainer>
        ) : (
          <Skeleton variant="rectangular" width={210} height={118} />
        )}
      </div>
    </div>
  );
}

export default MapArea;
