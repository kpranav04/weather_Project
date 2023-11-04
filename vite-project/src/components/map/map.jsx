import "./mapcss.css";
import "leaflet/dist/leaflet.css";
import React, { Component, useState } from "react";
import { MapContainer,TileLayer,Polygon,Circle,Marker ,Popup,Tooltip} from "react-leaflet";
import mapData from "./india_st.json";
import dataPoints from "./KBA.json"


  function MyMap(){
    const [markers, setMarkers] = useState([])
    const handleCircleClick = (circle) => {
      const newMarker = {
        id: circle.id,
        position: [circle.Latitude, circle.Longitude],
        content: circle.KBA,
      };
      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    };
  

  
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My Map</h1>
        <MapContainer style={{ height: "100vh" }} zoom={5} center={[22.5390, 75.9114]}>
        {/* <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=1UvW0tGrts7pl8q8PmRX"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      /> */}

        {
        mapData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
          console.log(coordinates);

          return (
          <Polygon
            pathOptions={{
              fillColor: '#696462',
              fillOpacity: 0.1,
              weight: 1,
              color: 'black'
            }}
            positions={coordinates}
          />
          )
        })
      }
       {
       dataPoints.map((point) => (
          <Circle
            key={point.id}
            center={[point.Latitude, point.Longitude]}
            pathOptions={{
              fillColor: 'blue',
              fillOpacity: 0.7,
              color: 'black',
            }}
           
            radius={10000}
            // eventHandlers={{
            //   mouseover: () => handleCircleMouseOver(point, point.KBA),
            //   mouseout: handleCircleMouseOut,
            // }}
          />

        ))
      }
      
      {dataPoints.map((marker) => (
          <Marker key={marker.id} position={[marker.Latitude,marker.Longitude]} opacity={0} >
            <Popup>{marker.KBA}</Popup>
          </Marker>
        ))}
        </MapContainer>
      </div>
    );
  };


export default MyMap;