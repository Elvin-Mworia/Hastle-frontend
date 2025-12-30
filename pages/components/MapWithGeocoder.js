import { useRef, useEffect, useState } from "react";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {updatemap} from "../../store/mapReducer";
import {useSelector,useDispatch} from "react-redux";
import * as React from "react";

export default function MapWithGeocoder() {
  const [MapboxComponents, setMapboxComponents] = useState(null);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const accessToken=process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const {lat,lng}=useSelector((state)=>state.map);
  useEffect(() => {
    // This code ONLY runs in the browser
    const loadMapbox = async () => {
      const SearchJS = await import('@mapbox/search-js-react');
      setMapboxComponents(SearchJS);
    };
    loadMapbox();
   // if(mapInstanceRef.current) return; // initialize map only once
  

    if (mapContainerRef.current) {
      mapboxgl.accessToken = accessToken;
      
      mapInstanceRef.current = new mapboxgl.Map({
        container: mapContainerRef.current, // This is now guaranteed to be an HTMLElement
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [36.817223,-1.286389],
        zoom: 9,
      });
    }
     //return () => mapInstanceRef.current.remove();
  }, []);

  if (!MapboxComponents) return <div>Loading Map...</div>;

  const { SearchBox,Geocoder } = MapboxComponents;

  return (
    <div>
      <Geocoder accessToken={accessToken}
       map={mapInstanceRef.current}
        mapboxgl={mapboxgl}
        value={inputValue}
        onChange={(d) => {
          setInputValue(d);
        }}
        marker />
       <div id="map-container" ref={mapContainerRef} style={{ height:'400px' }} />
    </div>
  );
}