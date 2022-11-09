import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import {useSelector,useDispatch} from "react-redux";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
const ACCESS_TOKEN='pk.eyJ1IjoibmVidWxhLTEiLCJhIjoiY2w5M3gzZDhhMXh3bjN1bWY1YmV2N2N2bCJ9.-Lo2VNwH1FRUBl6ssh0fTg';
const Geocoder = () => {
  const dispatch = useDispatch();
  const {lat,lng}=useSelector((state)=>state.map);
  const ctrl = new MapBoxGeocoder({
    accessToken: ACCESS_TOKEN,
    marker: false,
    collapsed: true,
  });
  useControl(() => ctrl);
  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates;
    dispatch(updatemap({ lng: coords[0], lat: coords[1] }));
     
    });

  return null;
};

export default Geocoder;