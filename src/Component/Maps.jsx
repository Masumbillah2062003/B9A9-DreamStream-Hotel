import { MapContainer, TileLayer } from "react-leaflet";
import { useRef } from "react";
import 'leaflet/dist/leaflet.css';


const Maps = () => {
  const mapRef = useRef()
  return (
    <div className="w-full  mt-20 relative -z-10 lg:-z-0">
      <MapContainer center={[51.505, -0.09]} zoom={9} ref={mapRef} className="h-[445px] overflow-hidden">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=Dp1mPUZzB8iCBKjZtS5y"
        />
        
      </MapContainer>
    </div>
  );
};

export default Maps;
