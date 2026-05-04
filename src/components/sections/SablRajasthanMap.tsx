import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default icon issue in many bundlers
// (optional but recommended)
delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type Location = {
  name: string;
  district: string;
  lat: number;
  lng: number;
  description: string;
};

const sablLocations: Location[] = [
  {
    name: "SABL – Barmer",
    district: "Barmer district, Rajasthan",
    lat: 25.753155,
    lng: 71.41806,
    description: "SABL is actively working in Barmer district.",
  },
  {
    name: "SABL – Jaisalmer",
    district: "Jaisalmer district, Rajasthan",
    lat: 26.911661,
    lng: 70.922928,
    description: "SABL is actively working in Jaisalmer district.",
  },
  {
    name: "SABL – Pali",
    district: "Pali district, Rajasthan",
    lat: 25.7725,
    lng: 73.3233,
    description: "SABL is actively working in Pali district.",
  },
  {
    name: "SABL – Phalodi",
    district: "Phalodi area, Rajasthan",
    lat: 27.131,
    lng: 72.3683,
    description: "SABL is actively working in Phalodi region.",
  },
];

const SablRajasthanMap: React.FC = () => {
  // Rough center between the four locations
  const mapCenter: [number, number] = [26.4, 72.0];

  return (
    <div 
      style={{
        width: "100%",
        height: "400px", // adjust as needed
        borderRadius: "8px",
      
      }}
    >
      <MapContainer
        center={mapCenter}
        zoom={7}
        style={{ width: "100%", height: "100%", borderRadius: "8px", }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {sablLocations.map((loc) => (
          <Marker key={loc.name} position={[loc.lat, loc.lng]}>
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.district}
              <br />
              {loc.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SablRajasthanMap;
