// import React, { useState, useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Fix for Leaflet marker icon issue
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// function LocationMarker() {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvents({
//     click(e) {
//       setPosition(e.latlng);
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//     locationerror() {
//       console.error("Location access denied.");
//     }
//   });

//   useEffect(() => {
//     map.locate({ enableHighAccuracy: true });
//   }, [map]);

//   return position === null ? null : (
//     <Marker position={position} draggable={true} eventHandlers={{
//       dragend: (e) => {
//         setPosition(e.target.getLatLng());
//       }
//     }}>

//     </Marker>
//   );
// }

// function MapComponent() {
//   const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default center

//   return (
//     <MapContainer center={mapCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <LocationMarker />
//     </MapContainer>
//   );
// }

// export default MapComponent;