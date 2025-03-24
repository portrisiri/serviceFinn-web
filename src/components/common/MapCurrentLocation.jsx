import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";

function MapCurrentLocation({ onAddressChange }) {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [currentAddress, setCurrentAddress] = useState(null);
  const isInitialLocationFetched = useRef(false);

  useEffect(() => {
    if (!isInitialLocationFetched.current) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userPos = [latitude, longitude];
          setCurrentPosition(userPos);
          fetchAddress(latitude, longitude);
          isInitialLocationFetched.current = true;
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const fetchAddress = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
      const address = response.data.display_name;
      setCurrentAddress(address);
      onAddressChange({ address, lat, lng }); // Send object with address, lat, lng
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleMarkerDragEnd = (event) => {
    const { lat, lng } = event.target.getLatLng();
    setCurrentPosition([lat, lng]);
    fetchAddress(lat, lng);
  };

  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="">
      <div className="w-[100%]">
        {currentPosition ? (
          <MapContainer
            center={currentPosition}
            zoom={30}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker
              position={currentPosition}
              icon={redIcon}
              draggable={true}
              eventHandlers={{ dragend: handleMarkerDragEnd }}
            >
              <Popup>
                You are here!
                {currentAddress && <p>{currentAddress}</p>}
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default MapCurrentLocation;