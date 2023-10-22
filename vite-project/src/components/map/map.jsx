
import { useRef, useState } from 'react';
import {MapContainer,TileLayer} from 'react-leaflet';
import osm from './osm_provider';
// import { useRef } from 'react';


function map(){
   

      const [center,setCenter]=useState({lat:51.505,lng: -0.09});
      const ZOOM_CENTER=9;
   const mapRef=useRef();

    return(<>
          <div className='map'>
           <MapContainer
           center={center}
           zoom={ZOOM_CENTER}
           ref={mapRef}>
<TileLayer url={osm.maptiler.url}
attribution={osm.maptiler.attribution}>
</TileLayer>
           </MapContainer>



          </div>
      
    </>);


}

export default map;