"use client";
import { MapContainer, TileLayer, Popup, Rectangle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

export default function Map() {
  return (
    <MapContainer
      center={[34.1875415, 35.7571342]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Rectangle
        bounds={[
          [34.1865415, 35.7571342], // Southwest corner
          [34.1905415, 35.7611342], // Northeast corner
        ]}
        pathOptions={{
          color: "#808E79",
        }}
      >
        <Popup>
          Mar Mama, Lebanon <br />
          Your perfect getaway destination <br />
          <Link
            href="https://www.google.com/maps/place/Mar+Mama,+Lebanon/@34.2070829,35.6685982,12.29z/data=!4m6!3m5!1s0x151f577227723905:0x5e5337b66e15e1da!8m2!3d34.1875415!4d35.7571342!16s%2Fg%2F11b6y9k2h6?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </Link>
        </Popup>
      </Rectangle>
    </MapContainer>
  );
}
