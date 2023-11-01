import "./mapcss.css";
import "leaflet/dist/leaflet.css";
import React, { Component } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapData from "./India_Country_Boundary";
import statee from "./India_State_Boundary"


// import "./MyMap.css";

// class MyMap extends Component {
//   state = { color: "#ffff00" };

//   colors = ["green", "blue", "yellow", "orange", "grey"];

//   componentDidMount() {
//     console.log(mapData);
//   }

//   countryStyle = {
//     fillColor: "red",
//     fillOpacity: 1,
//     color: "black",
//     weight: 2,
//   };

//   printMesssageToConsole = (event) => {
//     console.log("Clicked");
//   };

//   changeCountryColor = (event) => {
//     event.target.setStyle({
//       color: "green",
//       fillColor: this.state.color,
//       fillOpacity: 1,
//     });
//   };

//   onEachCountry = (country, layer) => {
//     const countryName = country.properties.ADMIN;
//     console.log(countryName);
//     layer.bindPopup(countryName);

//     layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)
//     // const colorIndex = Math.floor(Math.random() * this.colors.length);
//     // layer.options.fillColor = this.colors[colorIndex]; //0

//     layer.on({
//       click: this.changeCountryColor,
//     });
//   };

//   colorChange = (event) => {
//     this.setState({ color: event.target.value });
//   };

//   render() {
  function MyMap(){
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My Map</h1>
        <MapContainer style={{ height: "80vh" }} zoom={9} center={[20, 100]}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <GeoJSON
  data={mapData}
  style={(feature) => ({
    color: 'blue',
    fillColor: 'yellow',
    weight: 2,
  })}
  onEachFeature={(feature, layer) => {
    layer.bindPopup(feature.properties.name);
  }}
/>
        </MapContainer>
        {/* <input
          type="color"
          value={this.state.color}
          onChange={this.colorChange}
        /> */}
      </div>
    );
  };


export default MyMap;