import "./mapcss.css";
import "leaflet/dist/leaflet.css";
import React, { Component, useState } from "react";
import { MapContainer, TileLayer, Polygon, Circle, Marker, Popup, Tooltip } from "react-leaflet";
import mapData from "./india_st.json";
import dataPoints from "./KBA.json"


function MyMap() {
  const [markers, setMarkers] = useState([])
  const handleCircleClick = (circle) => {
    const newMarker = {
      id: circle.id,
      position: [circle.Latitude, circle.Longitude],
      content: circle.KBA,
    };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  const getColor = (index) => {
    // Define your color mapping logic based on the index value here.
    // For example, you can use a switch statement or if-else conditions to map index values to colors.
    // This is just a simple example:
    if (index >= -3.0 && index < -2.0) return 'black';
    if (index >= -2.0 && index < -1.6) return 'brown';
    if (index >= -1.6 && index < -1.3) return 'red';
    if (index >= -1.3 && index < -0.8) return 'orange';
    if (index >= -0.8 && index < -0.5) return 'yellow';
    if (index >= -0.5 && index < 0.5) return 'gray';
    if (index >= 0.5 && index < 0.8) return 'rgb(185, 249, 110)';
    if (index >= 0.8 && index < 1.3) return 'rgb(179, 209, 110)';
    if (index >= 1.3 && index < 1.6) return 'rgb(60, 188, 61)';
    if (index >= 1.6 && index < 2.0) return 'rgb(0, 158, 30)';
    if (index >= 2.0 && index < 3.0) return 'green';
    if (index >= 3.0) return 'blue';
    // return 'red';
  };



  return (
    <div>

      <MapContainer zoom={8} center={[22.5390, 75.9114]}>
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
                fillColor: getColor(point.index),
                fillOpacity: 1,
                color: "none"

              }}

              radius={50000}
            // eventHandlers={{
            //   mouseover: () => handleCircleMouseOver(point, point.KBA),
            //   mouseout: handleCircleMouseOut,
            // }}
            />

          ))
        }

        {dataPoints.map((marker) => (
          <Marker key={marker.id} position={[marker.Latitude, marker.Longitude]} opacity={0} >
            <Popup>{marker.KBA}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};


export default MyMap;