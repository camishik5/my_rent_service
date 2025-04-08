import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FullOffer } from "../../types/offer";
import { useAppSelector } from "../../hooks";

const defaultIcon = L.icon({
  iconUrl: "img/pin.svg",
  iconSize: [30, 30]
});

const activeIcon = L.icon({
  iconUrl: "img/pin-active.svg",
  iconSize: [30, 30]
});

type MapProps = {
  offers: FullOffer[];
};

function Map({ offers }: MapProps) {
  const activeOfferId = useAppSelector((state) => state.activeOfferId);
  if (!offers.length) return null;

  const cityLocation = offers[0].city.location;

  return (
    <MapContainer
      center={[cityLocation.latitude, cityLocation.longitude]}
      zoom={cityLocation.zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {offers.map((offer) => (
        <Marker
          key={offer.id}
          position={[offer.location.latitude, offer.location.longitude]}
          icon={offer.id === activeOfferId ? activeIcon : defaultIcon}
        />
      ))}
    </MapContainer>
  );
}

export default Map;
