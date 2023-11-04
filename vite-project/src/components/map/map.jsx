import "./mapcss.css";
import "leaflet/dist/leaflet.css";
import React, { Component } from "react";
import { MapContainer,TileLayer,Polygon } from "react-leaflet";
import mapData from "./india_st.json";


  function MyMap(){
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My Map</h1>
        <MapContainer style={{ height: "80vh" }} zoom={9} center={[22.5390, 75.9114]}>
        <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=1UvW0tGrts7pl8q8PmRX"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

        {
        mapData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
          console.log(coordinates);

          return (
          <Polygon
            pathOptions={{
              fillColor: '#696462',
              fillOpacity: 0.8,
              weight: 1,
              color: 'black'
            }}
            positions={coordinates}
          />)
        })
      }
        </MapContainer>
      </div>
    );
  };


export default MyMap;