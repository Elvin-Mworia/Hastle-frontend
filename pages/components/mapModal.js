import * as React from 'react';
import svg from "../../public/location.svg";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { isAbsoluteUrl } from 'next/dist/shared/lib/utils';
import ReactMapGL, { GeolocateControl, Marker, NavigationControl} from 'react-map-gl';
import {  useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import {useSelector,useDispatch} from "react-redux";
import Geocoder from './Geocoder';
import {updatemap} from "../../store/mapReducer";



const ACCESS_TOKEN='pk.eyJ1IjoibmVidWxhLTEiLCJhIjoiY2w5M3gzZDhhMXh3bjN1bWY1YmV2N2N2bCJ9.-Lo2VNwH1FRUBl6ssh0fTg';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95vw',
  height:'95vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const cancel={
  position:"absolute",
  top:"0",
  right:'0',
}


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [viewport,setViewport]=React.useState({
    lat:-1.286389,
    long:36.817223
  });
  const dispatch=useDispatch();
  const mapRef = useRef();
const {lat,lng}=useSelector((state)=>state.map);


// const Map = ReactMapboxGl({
//   accessToken:ACCESS_TOKEN,
//    zoom:8,
//   center:[viewport.long,viewport.lat]
// });
 console.log(lat);
  return (
    <div>
      <Button onClick={handleOpen}>Open Map</Button> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    
        <Box sx={style}>
          <CloseIcon sx={cancel} onClick={handleClose}/>
        {/* <ReactMapGl mapboxApiAccessToken={ACCESS_TOKEN}
        {...viewport} onViewportChange={(newView)=>setViewport(newView)}></ReactMapGl> */}
   <ReactMapGL
        ref={mapRef}
        mapboxAccessToken={ACCESS_TOKEN}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 8,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport} onViewportChange={(nextViewport)=>setViewport(nextViewport)}
      >
        <Marker
          latitude={lat}
          longitude={lng}
          draggable
          onDragEnd={(e) =>
            dispatch(updatemap(
              { lng: e.lngLat.lng, lat: e.lngLat.lat }
            )
              
            )}
          
        />
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          trackUserLocation
          onGeolocate={(e) =>
            dispatch(updatemap( { lng: e.coords.longitude, lat: e.coords.latitude })
            )
          }
        />
        <Geocoder />
      </ReactMapGL>
        </Box>
      </Modal>
    </div>
  );
}
