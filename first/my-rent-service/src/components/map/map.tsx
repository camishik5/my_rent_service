import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Типы координат и предложений
type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type Offer = {
  id: string;
  title: string;
  location: Location;
};

type MapProps = {
  offers: Offer[];
};

function MapComponent({ offers }: MapProps): React.JSX.Element {
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize();
      console.log('Карта успешно обновлена');
    }
  }, [offers]);

  return (
    <div className="cities__map" style={{ height: '100%', width: '100%' }}>
      <MapContainer
        center={[52.374, 4.889]}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
        whenReady={() => {
          if (mapRef.current) {
            console.log('Карта успешно инициализирована');
          }
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {offers.map((offer) => (
          <Marker
            key={offer.id}
            position={[offer.location.latitude, offer.location.longitude]}
            icon={L.icon({
              iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })}
          >
            <Popup>{offer.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
