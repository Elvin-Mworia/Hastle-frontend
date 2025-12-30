'use client';
import MapWithGeocoder from "./components/MapWithGeocoder";


export default function GeoPage() {
  return (
    <div>
      <h1>Location Search</h1>
      {/* This will now only render in the browser */}
      <MapWithGeocoder/>
    </div>
  );
}

